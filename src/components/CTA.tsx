function CTA() {
  // TODO : Add extend au hover
  // 44 - 52
  return (
    <div className="group relative w-full mt-14 flex flex-col gap-2">
      <span className="block bg-black h-0.5"></span>
      <span className="opacity-0 group-hover:opacity-100 transition-opacity">Découvrir</span>
      <span className="CTA__circle absolute block w-3/5 aspect-square top-0 -translate-y-1/2 right-0 translate-x-1/2"></span>
    </div>
  )
}

export default CTA