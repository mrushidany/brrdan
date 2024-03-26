'use client'

export default function Footer() {
    const date = new Date()
  return (
    <>
      <footer className="flex flex-row gap-x-1 text-yellow-100 font-light">
        <span>&copy;</span>
        <span>Copyright</span>
        <span>{date.getFullYear()}</span>
      </footer>
    </>
  )
}
