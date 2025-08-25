import { ChangeEvent } from "react"

function Checkbox({
    label = "",
    description = "",
    checked = false,
    disabled = false,
    onChange = (e: ChangeEvent<HTMLInputElement>) => {e.preventDefault()},
  ...props
}) {
  checked = checked && !disabled

  return (
  <label
    className={`flex items-center py-2 cursor-pointer`}
  >
    <input
      type="checkbox"
      className="sr-only"
      checked={checked}
      disabled={disabled}
      onChange={onChange}
    />
    <div
      className={`w-5 h-5 rounded border-2 flex items-center justify-center ${
        disabled
          ? 'border-wedding-text/10 bg-wedding-text/10'
          : (checked
            ? "border-wedding-accent bg-wedding-accent"
            : "border-wedding-text/30"
          )
      }`}
    >
      {checked && (
        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path
            fillRule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clipRule="evenodd"
          />
        </svg>
      )}
    </div>
    <div className="flex-1 ml-2.5">
      <div className={`font-semibold ${disabled ? "text-wedding-text/60" : "text-wedding-text"}`}>{label}</div>
      {
        typeof description === "string" && description.length > 0
        && <div className={`text-sm -mt-0.5 ${disabled ? "text-wedding-text/40" : "text-wedding-text/70"}`}>{description}</div>
      }
    </div>
  </label>
  )
}

export { Checkbox }