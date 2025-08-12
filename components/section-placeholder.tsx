interface SectionPlaceholderProps {
  id: string
  title: string
  description: string
}

export function SectionPlaceholder({ id, title, description }: SectionPlaceholderProps) {
  return (
    <section id={id} className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center max-w-2xl mx-auto px-4">
        <h2 className="font-serif text-4xl md:text-5xl text-wedding-text mb-6">{title}</h2>
        <p className="text-lg md:text-xl text-wedding-text/70 leading-relaxed">{description}</p>
      </div>
    </section>
  )
}
