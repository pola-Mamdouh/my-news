export default function SectionTitle({ children, light = false }) {
  return (
    <h2 className={`section-title text-2xl font-bold${light ? ' light' : ''}`}>
      {children}
    </h2>
  )
}
