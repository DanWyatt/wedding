"use client"

import type React from "react"

import { useState } from "react"
import { FloatingNavbar } from "@/components/floating-navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { LargeButton } from "@/components/ui/rsvp/large-button"

interface MealChoice {
  name: string,
  description: string,
  notSuitableFor: string[],
}

interface MealChoices {
  [key: string]: MealChoice;
};

const Starters = {
  GoatsCheeseTartlet: {
    name: 'Goat’s cheese tartlet',
    description: 'Goat’s cheese and sundried tomato tartlet, rocket salad and basil mayo (v)',
    notSuitableFor: ['vegan'],
  },
  PrawnCocktail: {
    name: 'Prawn cocktail',
    description: 'Prawn cocktail, smoked salmon shavings',
    notSuitableFor: ['vegetarian', 'vegan', 'fish', 'crustaceans'],
  },
} as MealChoices

const Mains = {
  PorkPlatter: {
    name: 'Roast Pork Sharing Platter',
    description: 'Joints of slow roasted Somerset pork with thyme & apricots',
    notSuitableFor: ['vegetarian', 'vegan'],
  },
  MushroomWellington: {
    name: 'Mushroom Wellington',
    description: 'A meat-free twist on the classic',
    notSuitableFor: [],
  },
} as MealChoices

const Desserts = {
  Profiteroles: {
    name: 'Profiteroles',
    description: 'Cream filled profiteroles served with warm chocolate sauce (v)',
    notSuitableFor: ['dairy', 'vegan'],
  },
  Pavlova: {
    name: 'Berry pavlova',
    description: 'Served with raspberry coulis (v)',
    notSuitableFor: ['vegan'],
  },
  LemonTart: {
    name: 'Lemon tart',
    description: 'Served with raspberry coulis and lemon sorbet (v)',
    notSuitableFor: ['vegan'],
  },
} as MealChoices

const DietaryRestrictions: {
  readonly [key: string]: {
    readonly label: string;
    readonly description?: string;
  };
} = {
  vegetarian: {label: "Vegetarian"},
  vegan: {label: "Vegan"},
  gluten: {label: "No Gluten"},
  peanut: {label: "No Peanut"},
  nuts: {label: "No Nuts"},
  sesame: {label: "No sesasme"},
  soya: {label: "No soya"},
  egg: {label: "No egg"},
  dairy: {label: "No dairy"},
  fish: {label: "No fish"},
  celery: {label: "No celery"},
  lupin: {label: "No lupin"},
  mustard: {label: "No mustard"},
  crustaceans: {label: "No crustaceans", description: "(i.e. prawn, crab etc)"},
  molluscs: {label: "No molluscs", description: "(i.e. mussels, oyster etc)"},
  sulphurDioxide: {label: "No sulphites", description: "(sulphur dioxide)"},
  other: {label: "Other", description: "(Please describe in the box below)"},
} as const;

type DietaryRestriction = keyof typeof DietaryRestrictions;

type Attendee = {
  key: number,
  complete: boolean,
  name: string,
  hasDietaryRequirements: boolean | null,
  dietary: (keyof typeof DietaryRestrictions)[],
  dietaryNotes: string,
  starter: (keyof typeof Starters) | "None" | "UnsuitableForDietary" | undefined,
  main: (keyof typeof Mains) | "None" | "UnsuitableForDietary" | undefined,
  dessert: (keyof typeof Desserts) | "None" | "UnsuitableForDietary" | undefined,
}

interface FormData {
    groupName: "",
    attendance: "all" | "evening" | "ceremony" | "no" | undefined,
    message: string,
    attendees: Attendee[],
}

export default function RSVPPage() {
  const [formData, setFormData] = useState<FormData>({
    groupName: "",
    attendance: undefined,
    message: "",
    attendees: [],
  })

  const [modalType, setModalType] = useState<string | null>(null)
  const [attendeeIndex, setAttendeeIndex] = useState<number | null>(null)
  const [attendeeData, setAttendeeData] = useState<Attendee | null>();

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null
    message: string
  }>({ type: null, message: "" })

  const openAddModal = () => {
    setAttendeeForm({
      name: "",
      email: "",
      dietaryRestrictions: "",
      plusOne: false,
      ceremony: false,
      reception: false,
      dancing: false,
    })
    setModalType("add")
  }

  const openEditModal = (attendee: Attendee) => {
    setEditingAttendee(attendee)
    setAttendeeForm({
      name: attendee.name,
      email: attendee.email,
      dietaryRestrictions: attendee.dietaryRestrictions,
      plusOne: attendee.plusOne,
      ceremony: attendee.ceremony,
      reception: attendee.reception,
      dancing: attendee.dancing,
    })
    setModalType("edit")
  }

  const openDeleteModal = (attendee: Attendee) => {
    setEditingAttendee(attendee)
    setModalType("delete")
  }

  const closeModal = () => {
    setModalType(null)
    setEditingAttendee(null)
  }

  const handleAttendeeFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked

    setAttendeeForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const saveAttendee = () => {
    if (modalType === "add") {
      const newAttendee: Attendee = {
        id: Date.now().toString(),
        ...attendeeForm,
      }
      setAttendees((prev) => [...prev, newAttendee])
    } else if (modalType === "edit" && editingAttendee) {
      setAttendees((prev) =>
        prev.map((a) => (a.id === editingAttendee.id ? { ...editingAttendee, ...attendeeForm } : a)),
      )
    }
    closeModal()
  }

  const deleteAttendee = () => {
    if (editingAttendee) {
      setAttendees((prev) => prev.filter((a) => a.id !== editingAttendee.id))
    }
    closeModal()
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }
  
  const handleAttendanceChange = (value: FormData["attendance"]) => {
    setFormData((prev) => ({ ...prev, attendance: value }))
  }

  const handleAttendeeDataChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const name = e.target.name
    const value: Attendee[keyof Attendee] = e.target.value
    setAttendeeData(() => ({ ...attendeeData as Attendee, [name]: value }))
  }

  const openAddModal = () => {
    setAttendeeData({
      key: Date.now(),
      complete: false,
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
      setModalType("delete")
    }
  }

  const closeModal = () => {
    setModalType(null)
    setAttendeeIndex(null)
  }

  const saveAttendee = () => {
    let newFormData = {...formData},
        newAttendee: Attendee = {...attendeeData, complete: true};
    if (modalType === "add") {
      newFormData.attendees.push(newAttendee)
    } else if (modalType === "edit" && attendeeIndex !== null) {
      newFormData.attendees.splice(attendeeIndex, 1, newAttendee)
    }
    setFormData(newFormData)
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
      const submissionData = {
        ...formData,
        attendees,
      }

      const response = await fetch("/api/rsvp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submissionData),
      })

      const result = await response.json()

      if (response.ok) {
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

          {submitStatus.type && (
            <div
              className={`mb-8 p-4 rounded-lg text-center ${
                submitStatus.type === "success"
                  ? "bg-green-100 text-green-800 border border-green-200"
                  : "bg-red-100 text-red-800 border border-red-200"
              }`}
            >
              {submitStatus.message}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">Your Information</h2>

              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-wedding-text font-medium mb-2">
                    Name of your group / party / entourage
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="e.g. The Berry's"
                    required
                    value={formData.groupName}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-wedding-text/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-wedding-accent bg-white"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">Attendees</h2>

              {attendees.length === 0 ? (
                <p className="text-wedding-text/70 text-center py-8">No attendees added yet</p>
              ) : (
                <div className="space-y-3 mb-6">
                  {attendees.map((attendee) => (
                    <div
                      key={attendee.id}
                      className="group flex items-center justify-between p-4 bg-white rounded-lg border border-wedding-text/20 hover:border-wedding-accent/50 transition-all"
                    >
                      <div className="flex-1">
                        <h3 className="font-medium text-wedding-text">{attendee.name}</h3>
                        <p className="text-sm text-wedding-text/70">{attendee.email}</p>
                        {attendee.dietaryRestrictions && (
                          <p className="text-sm text-wedding-text/60">Dietary: {attendee.dietaryRestrictions}</p>
                        )}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
                        <button
                          type="button"
                          onClick={() => openEditModal(attendee)}
                          className="px-3 py-1 text-sm bg-wedding-accent/10 text-wedding-accent rounded hover:bg-wedding-accent/20 transition-colors"
                        >
                          Edit
                        </button>
                        <button
                          type="button"
                          onClick={() => openDeleteModal(attendee)}
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
                + Add Attendee
              </button>
            </div>

            {/* Attendance */}
            <div className="bg-white/50 p-8 rounded-lg">
              <h2 className="font-serif text-2xl text-wedding-text mb-6">Will you be attending?</h2>

              <div className="grid md:grid-cols-2 gap-4">
                <LargeButton
                  active={formData.attendance === 'all'}
                  onClick={() => handleAttendanceChange("all")}
                  buttonTitle="Ceremony and Evening"
                  buttonText="The whole shebang!"
                />
                <LargeButton
                  active={formData.attendance === 'evening'}
                  onClick={() => handleAttendanceChange("evening")}
                  buttonTitle="Evening only"
                  buttonText="Cake, pizza, first dance, and a night of dancing!"
                />
                <LargeButton
                  active={formData.attendance === 'ceremony'}
                  onClick={() => handleAttendanceChange("ceremony")}
                  buttonTitle="Ceremony only"
                  buttonText="Church service and wedding breakfast"
                />
                <LargeButton
                  active={formData.attendance === 'no'}
                  onClick={() => handleAttendanceChange("no")}
                  buttonTitle="Regretfully decline"
                  buttonText="We're sorry you're unable to join us"
                />
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
                        <div className="flex-1">
                          <h3 className="font-medium text-wedding-text">{attendee.name}</h3>
                          {!attendee.complete && <div className="px-3 py-1 text-sm bg-red-100 text-red-600 rounded hover:bg-red-200 transition-colors">Incomplete!</div>}
                        </div>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
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
            </div>

            {/* Message */}
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

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                disabled={isSubmitting}
                className="bg-wedding-accent hover:bg-wedding-accent/90 text-white px-12 py-4 rounded-full text-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : "Submit RSVP"}
              </Button>
            </div>
          </form>
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
                  <div className="grid md:grid-cols-2 gap-4">
                    <button
                      type="button"
                      
                      className={`p-3 text-center rounded-lg border-2 transition-all ${
                      attendeeData.hasDietaryRequirements === false
                          ? "border-wedding-accent bg-wedding-accent/10"
                          : "border-wedding-text/20 bg-white hover:border-wedding-accent/50"
                      }`}
                      onClick={() => setAttendeeData({...attendeeData, hasDietaryRequirements: false})}
                    >
                      <h3 className="font-semibold text-wedding-text text-lg mb-2">I don't have any dietary requirements</h3>
                      <p className="text-wedding-text/70"></p>
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
                      <h3 className="font-semibold text-wedding-text text-lg mb-0">I have dietary requirements</h3>
                      <p className="text-wedding-text/70">Vegetarian, vegan, allergies etc</p>
                    </button>
                  </div>
                </div>

                {attendeeData.hasDietaryRequirements && <>
                  <div className="my-6">
                    <div className="block text-wedding-text font-medium mb-2">Please select all that apply &hellip;</div>
                    <div className="grid md:grid-cols-3 gap-1 mb-2">
                      {(Object.keys(DietaryRestrictions) as DietaryRestriction[]).map(function (restriction) {return (
                        <label
                          key={restriction}
                          className={`flex items-center py-2 cursor-pointer`}
                        >
                          <input
                            type="checkbox"
                            className="sr-only"
                            checked={attendeeData.dietary.includes(restriction)}
                            onChange={(e) => {
                              const newData = e.target.checked ? [...attendeeData.dietary, restriction] : attendeeData.dietary.filter((i) => i !== restriction)
                              setAttendeeData(() => ({ ...attendeeData as Attendee, dietary: newData }))
                            }}
                          />
                          <div
                            className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
                              attendeeData.dietary.includes(restriction)
                                ? "border-wedding-accent bg-wedding-accent"
                                : "border-wedding-text/30"
                            }`}
                          >
                            {attendeeData.dietary.includes(restriction) && (
                              <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path
                                  fillRule="evenodd"
                                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                />
                              </svg>
                            )}
                          </div>
                          <div className="flex-1 ml-2">
                            <div className="font-semibold text-wedding-text">{DietaryRestrictions[restriction].label}</div>
                            {
                              typeof DietaryRestrictions[restriction].description === "string"
                              && <div className="text-xs text-wedding-text/70">{DietaryRestrictions[restriction].description}</div>
                            }
                          </div>
                        </label>
                      )})}
                    </div>
                  </div>

                  <div className="my-6">
                    <label className="block text-wedding-text font-medium mb-2" htmlFor="dietaryRestrictions">Additional info for dietary restrictions</label>
                    <textarea
                      id="dietaryRestrictions"
                      name="dietaryRestrictions"
                      value={attendeeData.dietaryNotes}
                      onChange={handleAttendeeDataChange}
                      rows={2}
                      className="w-full px-3 py-2 border border-wedding-text/20 rounded focus:outline-none focus:ring-2 focus:ring-wedding-accent resize-none"
                    />
                  </div>

                  <div className="my-6 p-4 bg-wedding-accent/30 text-wedding-text rounded border-2 border-wedding-accent bg-wedding-accent">
                    Depending on your requirements, we may need to contact you before the day in order to discuss arrangements with our vendor.
                    Whilst our vendors will endeavour to cater for all needs, there may be situations where this is not possible.
                    If this does arise, we will discuss this with you beforehand.
                    The ability to select a meal option does not guarantee its suitablity for your dietary requirements.
                  </div>
                </>}

                <hr className="my-6" />

                
              </>}

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
                  className="flex-1 px-4 py-2 bg-wedding-accent text-white rounded hover:bg-wedding-accent/90 transition-colors"
                >
                  {modalType === "add" ? "Add" : "Save"}
                </button>
              </div>
            </div>
          )}

          {modalType === "delete" && editingAttendee && (
            <div className="bg-white rounded-lg p-6 w-full max-w-sm">
              <h3 className="font-serif text-xl text-wedding-text mb-4">Confirm Delete</h3>
              <p className="text-wedding-text/70 mb-6">
                Are you sure you want to remove {editingAttendee.name} from the attendee list?
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
                  className="flex-1 px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition-colors"
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
