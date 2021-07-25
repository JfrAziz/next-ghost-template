export default function Intro({title, description}) {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-4 mb-16 md:mb-12">
      <h1 className="text-5xl font-bold tracking-tighter leading-tight md:pr-8">
        {title}
      </h1>
      <h4 className="text-center md:text-left text-lg mt-5 md:pl-8">
        {description}
      </h4>
    </section>
  )
}
