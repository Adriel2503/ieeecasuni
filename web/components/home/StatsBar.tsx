'use client'
import { useEffect, useRef, useState } from 'react'
import { colors } from '@/lib/tokens'

const stats = [
  { value: 52,  suffix: '+', label: 'Miembros activos',   color: colors.primary[400] },
  { value: 12,  suffix: '',  label: 'Eventos al año',     color: colors.secondary[400] },
  { value: 5,   suffix: '',  label: 'Proyectos técnicos', color: colors.quaternary[300] },
  { value: 3,   suffix: '',  label: 'Años de actividad',  color: colors.tertiary[300] },
]

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const started = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true
          let startTime: number | null = null
          const duration = 1400

          const step = (timestamp: number) => {
            if (!startTime) startTime = timestamp
            const progress = Math.min((timestamp - startTime) / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 3)
            setCount(Math.floor(eased * value))
            if (progress < 1) requestAnimationFrame(step)
          }

          requestAnimationFrame(step)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [value])

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  )
}

export function StatsBar() {
  return (
    <section className="bg-gray-900 pt-14 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div
                className="text-5xl lg:text-6xl font-bold tabular-nums mb-2 transition-transform duration-300 group-hover:scale-105"
                style={{ color: stat.color }}
              >
                <Counter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-gray-400 font-medium tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
