export default function Intro({ title, description }) {
  return (
    <section className="text-center my-8">
      <h1 className="text-5xl font-bold tracking-tighter leading-tight">{title}</h1>
      <h2 className="text-lg mt-5">{description}</h2>
    </section>
  )
}
