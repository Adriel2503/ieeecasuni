export function TopBar() {
  return (
    <div className="bg-gray-900 text-gray-300 text-xs font-semibold">
      <div className="max-w-7xl mx-auto px-6 h-9 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <a href="https://ieee.org" className="hover:text-white transition-colors">IEEE.org</a>
          <a href="https://ieeexplore.ieee.org" className="hover:text-white transition-colors">IEEE Xplore</a>
          <a href="https://standards.ieee.org" className="hover:text-white transition-colors">IEEE Standards</a>
          <a href="https://spectrum.ieee.org" className="hover:text-white transition-colors">IEEE Spectrum</a>
        </div>
        <span className="text-gray-500">Sección Estudiantil · UNI · Lima, Perú</span>
      </div>
    </div>
  )
}
