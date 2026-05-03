import { HeroSection }    from '@/components/home/HeroSection'
import { StatsBar }       from '@/components/home/StatsBar'
import { MisionSection }  from '@/components/home/MisionSection'
import { EventosSection } from '@/components/home/EventosSection'
import { EquipoSection }  from '@/components/home/EquipoSection'
import { JoinSection }    from '@/components/home/JoinSection'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsBar />
      <MisionSection />
      <EventosSection />
      <EquipoSection />
      <JoinSection />
    </>
  )
}
