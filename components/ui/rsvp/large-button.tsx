import { Slot } from "@radix-ui/react-slot"

function LargeButton({
    active = false,
    buttonTitle = '',
    buttonText = '',
  ...props
}) {

  return (
    <button
        type="button"
        data-slot="button"
        className={`p-6 text-center rounded-lg border-2 transition-all ${
        active
            ? "border-wedding-accent bg-wedding-accent/10"
            : "border-wedding-text/20 bg-white hover:border-wedding-accent/50"
        }`}
        {...props}
    >
        <h3 className="font-semibold text-wedding-text text-lg mb-2">{buttonTitle}</h3>
        {buttonText ? <p className="text-wedding-text/70">{buttonText}</p> : ''}
    </button>
  )
}

export { LargeButton }