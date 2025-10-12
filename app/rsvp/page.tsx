"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { DietaryRestrictions, DietaryRestriction, MealChoice, Starters, Mains, Desserts } from "@/app/rsvp/const"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { LargeButton } from "@/components/ui/rsvp/large-button"
import { Checkbox } from "@/components/ui/rsvp/checkbox"
import { CircleAlert } from "lucide-react"

type Attendee = {
  key: number,
  name: string,
  hasDietaryRequirements: boolean | null,
  dietary: (keyof typeof DietaryRestrictions)[],
  dietaryNotes: string,
  starter: typeof Starters[number]["key"] | "None" | "UnsuitableForDietary" | undefined,
  main: typeof Mains[number]["key"] | "None" | "UnsuitableForDietary" | undefined,
  dessert: typeof Desserts[number]["key"] | "None" | "UnsuitableForDietary" | undefined,
}

interface FormData {
    groupName: string,
    attendance: "all" | "evening" | "ceremony" | "no" | undefined,
    message: string,
    attendees: Attendee[],
    agreeTerms: boolean,
}

export default function RSVPPage() {
  const [formData, setFormData] = useState<FormData>({
    groupName: "",
    attendance: undefined,
    message: "",
    attendees: [],
    agreeTerms: false,
  })

  const [modalType, setModalType] = useState<string | null>(null)
  const [attendeeIndex, setAttendeeIndex] = useState<number | null>(null)
  const [attendeeData, setAttendeeData] = useState<Attendee | null>()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  useEffect(() => {
    if (process.env.NEXT_PUBLIC_VERCEL_ENV === "production" && submitStatus.type !== "success" && window.localStorage.getItem("rsvpSubmitted") === "yes") {
      setSubmitStatus({type: "success", message: "You have already submitted your RSVP. Please get in touch with us if you need to change anything."})
    }
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleAgreeTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, agreeTerms: !!e.target.checked }))
  }
  
  const handleAttendanceChange = (value: FormData["attendance"]) => {
    setFormData((prev) => ({ ...prev, attendance: value }))
  }

  const handleAttendeeDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name
    const value: Attendee[keyof Attendee] = e.target.value
    setAttendeeData(() => ({ ...attendeeData as Attendee, [name]: value }))
  }

  const mealChoiceNotSuitableForDietaryRequirement = (notSuitableFor: DietaryRestriction[]) => (
    !!attendeeData
    && notSuitableFor.length > 0
    && attendeeData.hasDietaryRequirements === true
    && attendeeData.dietary.filter((d: DietaryRestriction) => notSuitableFor.includes(d)).length > 0
  )

  const mealChoicesOptions = (course: "starter" | "main" | "dessert") => {
    let mealList = {starter: Starters, main: Mains, dessert: Desserts}[course];
    return attendeeData && (
      <div className="my-6 pb-6 border-b-1 border-solid">
        <div className="block text-wedding-text font-medium mb-2">Choose your {course}</div>
        <div>
          {
            mealList.map((choice: MealChoice) => (
              <Checkbox
                key={choice.key}
                checked={attendeeData[course] === choice.key}
                onChange={() => setAttendeeData({...attendeeData, [course]: choice.key})}
                disabled={mealChoiceNotSuitableForDietaryRequirement(choice.notSuitableFor)}
                label={choice.title}
                description={choice.description}
              />
            ))
          }
          <Checkbox
            checked={attendeeData[course] === "None"}
            onChange={() => setAttendeeData({...attendeeData, [course]: "None"})}
            label={"No " + course}
            description=""
          />
          {attendeeData.hasDietaryRequirements && <Checkbox
            checked={attendeeData[course] === "UnsuitableForDietary"}
            onChange={() => setAttendeeData({...attendeeData, [course]: "UnsuitableForDietary"})}
            label="No suitable choice with diet requirements"
            description=""
          />}
        </div>
      </div>
    )
  }

  const attendeeSubmitButtonDisabled = () => (
    typeof attendeeData === "undefined"
    || attendeeData === null
    || attendeeSubmitWarnings().length > 0
  )

  const attendeeSubmitWarnings = () => {
    if (typeof attendeeData === "undefined" || attendeeData === null) {
      return []
    }
    let warnings = []
    if (!attendeeData.name) {
      warnings.push(<li key="missingName">Please enter a name.</li>)
    }
    if (formData.attendance !== "no" && attendeeData.hasDietaryRequirements === null) {
      warnings.push(<li key="dietarySelectionNotMade">Please select if there are any dietary requirements.</li>)
    }
    if (attendeeData.hasDietaryRequirements) {
      if (!attendeeData.dietary.length) {
        warnings.push(<li key="missingDietarySelection">Has dietary requirements is selected, but no requirement is&nbsp;selected.</li>)
      }
      if (attendeeData.dietary.includes("other") && !attendeeData.dietaryNotes.length) {
        warnings.push(<li key="missingDietaryOtherInfo"><em>Other</em> is selected as a dietary requirement, but no additional information has been&nbsp;entered.</li>)
      }
    }
    if (formData.attendance === "all" || formData.attendance === "ceremony") {
      if (!attendeeData.starter) warnings.push(<li key="missingStarterSelection">Please select an option for the starter</li>)
      if (!attendeeData.main) warnings.push(<li key="missingMainSelection">Please select an option for the main</li>)
      if (!attendeeData.dessert) warnings.push(<li key="missingDessertSelection">Please select an option for the dessert</li>)
    }
    return warnings
  }

  const openAddModal = () => {
    setAttendeeData({
      key: Date.now(),
      name: "",
      hasDietaryRequirements: null,
      dietary: [],
      dietaryNotes: "",
      starter: undefined,
      main: undefined,
      dessert: undefined,
    })
    setModalType("add")
  }

  const openEditModal = (index: number) => {
    if (typeof formData.attendees[index] !== 'undefined'){
      setAttendeeIndex(index)
      setAttendeeData(formData.attendees[index]);
      setModalType("edit")
    }
  }

  const openDeleteModal = (index: number) => {
    if (typeof formData.attendees[index] !== 'undefined'){
      setAttendeeIndex(index)
      setAttendeeData(formData.attendees[index]);
      setModalType("delete")
    }
  }

  const closeModal = () => {
    setModalType(null)
    setAttendeeIndex(null)
    setAttendeeData(null)
  }

  const saveAttendee = () => {
    if (typeof attendeeData !== "undefined" && attendeeData !== null) {
      let newFormData = {...formData},
          newAttendee: Attendee = {...attendeeData};
      if (newAttendee.hasDietaryRequirements === false) {
        newAttendee.dietary = []
        newAttendee.dietaryNotes = ""
      }
      if (modalType === "add") {
        newFormData.attendees.push(newAttendee)
      } else if (modalType === "edit" && attendeeIndex !== null) {
        newFormData.attendees.splice(attendeeIndex, 1, newAttendee)
      }
      if (!newFormData.groupName) {
        newFormData.groupName = newFormData.attendees[0].name + "'s group"
      }
      setFormData(newFormData)
    }
    closeModal()
  }

  const deleteAttendee = () => {
    if (attendeeIndex !== null) {
      let newFormData = {...formData};
      newFormData.attendees.splice(attendeeIndex, 1)
      setFormData(newFormData)
    }
    closeModal()
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: "" })

    try {
      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        localStorage.setItem("rsvpSubmitted", 'yes')
        setSubmitStatus({
          type: "success",
          message: "Thank you for your RSVP! We'll be in touch soon.",
        })
      } else {
        setSubmitStatus({
          type: "error",
          message: result.error || "Failed to submit RSVP. Please try again.",
        })
      }
    } catch (error) {
      console.error("Submit error:", error)
      setSubmitStatus({
        type: "error",
        message: "Network error. Please check your connection and try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="bg-wedding-cream min-h-screen">
      <FloatingNavbar />

      <div className="pt-32 pb-16">
        <div className="max-w-2xl mx-auto px-4">
          <h1 className="font-serif text-4xl md:text-6xl text-wedding-text text-center mb-8">RSVP</h1>
          <p className="text-lg text-wedding-text/80 text-center mb-12">
            Please let us know if you'll be joining us for our special day. We can't wait to celebrate with you!
          </p>

          {submitStatus.type === 'success' && <div className="bg-wedding-accent/20 p-8 rounded-lg">{submitStatus.message}</div>}

          {submitStatus.type !== 'success' && <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">Your Information</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="groupName" className="block text-wedding-text font-medium mb-2">
                    Name of your group / party / entourage
                  </label>
                  <input
                    type="text"
                    id="groupName"
                    name="groupName"
                    placeholder="e.g. The Berry's"
                    required
                    value={formData.groupName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-wedding-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-accent bg-white"
                  />
                </div>
              </div>
            </div>

            {/* Attendance */}
            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">Will you be attending?</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <LargeButton
                  active={formData.attendance === 'all'}
                  disabled={formData.attendees.length > 0}
                  onClick={() => handleAttendanceChange("all")}
                  buttonTitle="Ceremony and Evening"
                  buttonText="The whole shebang!"
                />
                <LargeButton
                  active={formData.attendance === 'evening'}
                  disabled={formData.attendees.length > 0}
                  onClick={() => handleAttendanceChange("evening")}
                  buttonTitle="Evening only"
                  buttonText="Cake, pizza, first dance, and a night of dancing!"
                />
                <LargeButton
                  active={formData.attendance === 'ceremony'}
                  disabled={formData.attendees.length > 0}
                  onClick={() => handleAttendanceChange("ceremony")}
                  buttonTitle="Ceremony only"
                  buttonText="Church service and wedding breakfast"
                />
                <LargeButton
                  active={formData.attendance === 'no'}
                  disabled={formData.attendees.length > 0}
                  onClick={() => handleAttendanceChange("no")}
                  buttonTitle="Regretfully decline"
                  buttonText="We're sorry you're unable to join us"
                />
              </div>
              {formData.attendees.length > 0 && <div className="mt-6 p-4 bg-wedding-accent/30 text-wedding-text rounded border-2 border-wedding-accent bg-wedding-accent">
                <p>You must remove any {formData.attendance !== "no" ? "attendees" : "non-attendees"} before you can change your RSVP.</p>
              </div>}
            </div>

            {typeof formData.attendance !== "undefined" && <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">{formData.attendance !== "no" ? "Attendees" : "Non-attendees"}</h2>

              {formData.attendees.length === 0 ? (
                <p className="text-wedding-text/70 text-center py-8">No {formData.attendance !== "no" ? "attendees" : "non-attendees"} added yet</p>
              ) : (
                <div className="space-y-3 mb-6">
                  {formData.attendees.map((attendee, index) => (
                    <div
                      key={attendee.key}
                      className="group flex items-center justify-between p-4 bg-white rounded-lg border border-wedding-text/20 hover:border-wedding-accent/50 transition-all"
                    >
                      <h3 className="flex-1 font-medium text-wedding-text">{attendee.name}</h3>
                      <div className="opacity-0 group-hover:opacity-100 pointer-coarse:opacity-100 motion-reduce:opacity-100 transition-opacity flex gap-2">
                        <button
                          type="button"
                          onClick={() => openEditModal(index)}
                          className="px-3 py-1 text-sm bg-wedding-accent/10 text-wedding-accent rounded hover:bg-wedding-accent/20 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => openDeleteModal(index)}
                          className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <button
                type="button"
                onClick={openAddModal}
                className="w-full py-3 border-2 border-dashed border-wedding-accent/50 text-wedding-accent rounded-lg hover:border-wedding-accent hover:bg-wedding-accent/5 transition-all"
              >
                + Add {formData.attendance !== "no" ? "Attendee" : "Non-attendee"}
              </button>
            </div>}

            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">Message for the Couple</h2>

              <textarea
                id="message"
                name="message"
                rows={4}
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Share your well wishes, memories, or anything you'd like us to know..."
                className="w-full px-4 py-3 border border-wedding-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-accent bg-white resize-none"
              />
            </div>

            {formData.attendance !== 'no' && <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">Let's keep it fun</h2>
              <p>We want everyone to enjoy the day as much as we do, however we do have a few ground rules to keep the day enjoyable for everyone. We respectfully ask for you to adhere to the following:</p>
              <ul className="list-disc pl-4 my-4">
                <li>We want you to let your hair down and enjoy the night, this isn't a dry wedding but please don't get too wasted. This is a day to remember, not one to not-remember!</li>
                <li>Unless indicated on your invitation, unfortunatly we cannot allow children.</li>
                <li>Please do not take photos during the wedding ceremony, we have a photographer that will be taking photos during this.</li>
                <li>For any photos or videos taken during the day and evening, please wait until the following day before posting them to social media (Facebook, Instagram etc.)</li>
              </ul>

              <Checkbox
                name="agreeTerms"
                checked={formData.agreeTerms}
                onChange={handleAgreeTermsChange}
                label="I agree to the above"
              />
            </div>}

            {(!formData.groupName || !formData.attendees.length || (formData.attendance !== 'no' && !formData.agreeTerms)) && <div className="bg-wedding-accent/20 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">
                <CircleAlert className="inline-block mr-1 -mt-1.5" /> Please resolve the following&hellip;
              </h2>
              <ul className="list-disc pl-4">
                {!formData.groupName && <li>Please enter a group name</li>}
                {!formData.attendees.length && <li>Please add some {formData.attendance !== "no" ? "attendees" : "non-attendees"}</li>}
                {!formData.agreeTerms && formData.attendance !== 'no' && <li>Please agree to the rules above</li>}
              </ul>
            </div>}

            {submitStatus.type === 'error' && <div className="bg-wedding-accent/20 p-8 rounded-lg">
              <p><CircleAlert className="inline-block mr-1 -mt-1.5" /> {submitStatus.message}</p>
            </div>}

            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting || !formData.groupName || !formData.attendees.length || (formData.attendance !== 'no' && !formData.agreeTerms)}
                className={`bg-wedding-accent hover:bg-wedding-accent/90 text-white px-12 py-4 rounded-full text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed`}
              >
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </Button>
            </div>
          </form>}
        </div>
      </div>

      {modalType && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          {(modalType === "add" || modalType === "edit") && attendeeData && (
            <div className="bg-white rounded-lg p-6 w-full max-w-2xl max-h-[90vh] overflow-y-auto">
              <h3 className="font-serif text-xl text-wedding-text mb-4">
                {modalType === "add" ? "Add" : "Edit"} {formData.attendance !== "no" ? "attendee" : "non-attendee"}
              </h3>

              <div className="my-6">
                <div>
                  <label className="block text-wedding-text font-medium mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={attendeeData.name}
                    onChange={handleAttendeeDataChange}
                    className="w-full px-3 py-2 border border-wedding-text/20 rounded focus:outline-none focus:ring-2 focus:ring-wedding-accent"
                  />
                </div>
              </div>

              {formData.attendance !== "no" && <>
                <hr />
                <div className="my-6">
                  <div className="block text-wedding-text font-medium mb-2">Dietary Requirements</div>
                  <div className="md:grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      
                      className={`p-3 text-center rounded-lg border-2 transition-all ${
                      attendeeData.hasDietaryRequirements === false
                          ? "border-wedding-accent bg-wedding-accent/10"
                          : "border-wedding-text/20 bg-white hover:border-wedding-accent/50"
                      }`}
                      onClick={() => setAttendeeData({...attendeeData, hasDietaryRequirements: false})}
                    >
                      <h3 className="font-semibold text-wedding-text text-lg">No, I don't have any dietary&nbsp;requirements</h3>
                    </button>
                    <button
                      type="button"
                      className={`p-3 text-center rounded-lg border-2 transition-all ${
                      attendeeData.hasDietaryRequirements === true
                          ? "border-wedding-accent bg-wedding-accent/10"
                          : "border-wedding-text/20 bg-white hover:border-wedding-accent/50"
                      }`}
                      onClick={() => setAttendeeData({...attendeeData, hasDietaryRequirements: true})}
                    >
                      <h3 className="font-semibold text-wedding-text text-lg mb-0">Yes, I have dietary requirements</h3>
                      <p className="text-wedding-text/70">Vegetarian, vegan, allergies etc</p>
                    </button>
                  </div>
                </div>

                {attendeeData.hasDietaryRequirements && <>
                  <div className="my-6">
                    <div className="block text-wedding-text font-medium mb-2">Please select all that apply &hellip;</div>
                    <div className="grid md:grid-cols-3 gap-1 mb-2">
                      {(Object.keys(DietaryRestrictions) as DietaryRestriction[]).map(function (restriction) {return (
                        <Checkbox
                          key={restriction}
                          checked={attendeeData.dietary.includes(restriction)}
                          onChange={(e) => {
                            const newData = e.target.checked ? [...attendeeData.dietary, restriction] : attendeeData.dietary.filter((i) => i !== restriction)
                            setAttendeeData(() => ({ ...attendeeData as Attendee, dietary: newData }))
                          }}
                          label={DietaryRestrictions[restriction].label}
                          description={DietaryRestrictions[restriction].description}
                        />
                      )})}
                    </div>
                  </div>

                  <div className="my-6">
                    <label className="block text-wedding-text font-medium mb-2" htmlFor="dietaryNotes">Additional info for dietary restrictions</label>
                    <textarea
                      id="dietaryNotes"
                      name="dietaryNotes"
                      defaultValue={attendeeData.dietaryNotes}
                      onChange={handleAttendeeDataChange}
                      rows={2}
                      className="w-full px-3 py-2 border border-wedding-text/20 rounded focus:outline-none focus:ring-2 focus:ring-wedding-accent resize-none"
                    />
                  </div>

                  <div className="my-6 p-4 bg-wedding-accent/30 text-wedding-text rounded border-2 border-wedding-accent bg-wedding-accent">
                    <p className="mb-1">Depending on your requirements, we may need to contact you before the day in order to discuss arrangements with our venue.
                    Whilst the venue will endeavour to cater for all needs, there may be situations where this is not possible.
                    If this does arise, we will discuss this with you beforehand.</p>
                    {(formData.attendance === 'all' || formData.attendance === 'ceremony') &&
                      <p><strong>The ability to select a meal option does not guarantee its suitablity for your dietary&nbsp;requirements.</strong></p>
                    }
                  </div>
                </>}

                <hr className="my-6" />

                {(formData.attendance === 'all' || formData.attendance === 'ceremony') && attendeeData.hasDietaryRequirements !== null && <>
                  {mealChoicesOptions("starter")}
                  {mealChoicesOptions("main")}
                  {mealChoicesOptions("dessert")}
                </>}
                  
              </>}

              {(attendeeSubmitWarnings().length > 0) && <div className="my-6 pb-6 border-b-1 border-solid">
                  <div className="p-4 bg-wedding-accent/30 text-wedding-text rounded border-2 border-wedding-accent bg-wedding-accent">
                    <div className="block font-medium mb-2"><CircleAlert className="inline-block mr-1" /> Please resolve the following&hellip;</div>
                    <ul className="list-disc pl-4">
                      {attendeeSubmitWarnings().map((w) => w)}
                    </ul>
                  </div>
              </div>}

              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-wedding-text/20 text-wedding-text rounded hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={saveAttendee}
                  disabled={attendeeSubmitButtonDisabled()}
                  className="flex-1 px-4 py-2 text-white rounded transition-colors bg-wedding-accent hover:bg-wedding-accent/90 disabled:bg-wedding-text/20"
                >
                  {modalType === "add" ? "Add" : "Save"}
                </button>
              </div>
            </div>
          )}

          {modalType === "delete" && attendeeData && (
            <div className="bg-white rounded-lg p-6 w-full max-w-sm">
              <h3 className="font-serif text-xl text-wedding-text mb-4">Confirm Delete</h3>
              <p className="text-wedding-text/70 mb-6">
                Are you sure you want to remove <strong>{attendeeData.name}</strong> from the attendee list?
              </p>

              <div className="flex gap-3">
                <button
                  type="button"
                  onClick={closeModal}
                  className="flex-1 px-4 py-2 border border-wedding-text/20 text-wedding-text rounded hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="button"
                  onClick={deleteAttendee}
                  className="flex-1 px-4 py-2 text-white rounded transition-colors bg-wedding-accent hover:bg-wedding-accent/90"
                >
                  Delete
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <Footer />
    </main>
  )
}
