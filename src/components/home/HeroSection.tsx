import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative h-[650px] md:h-[750px] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/generated/hero-golf-course-clubhouse.png"
          alt="Sterling Oaks Golf Club"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient Overlay - darker for better text contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="inline-block mb-4 px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full text-accent-foreground text-sm font-semibold tracking-wide">
          ⛳ STERLING OAKS GOLF CLUB
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6 tracking-tight leading-tight">
          Where Tradition<br />Meets Excellence
        </h1>
        <p className="text-lg md:text-xl mb-10 max-w-3xl mx-auto text-white/95 leading-relaxed">
          Experience championship golf on three award-winning courses designed by legendary architect Robert Trent Jones II.
          Immerse yourself in luxury, tradition, and unparalleled service.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-10 py-7 shadow-2xl hover:shadow-accent/50 transition-all"
          >
            <Link href="/membership" className="flex items-center gap-2">
              Explore Memberships
              <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="bg-white/10 text-white border-2 border-white hover:bg-white hover:text-foreground backdrop-blur-sm text-base px-10 py-7 transition-all"
          >
            <Link href="/book-tee-time">Book a Tee Time</Link>
          </Button>
        </div>

        {/* Floating stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-accent">3</div>
            <div className="text-sm text-white/80 mt-1">Championship Courses</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-accent">54</div>
            <div className="text-sm text-white/80 mt-1">Holes of Golf</div>
          </div>
          <div className="text-center backdrop-blur-sm bg-white/10 rounded-lg p-4">
            <div className="text-3xl md:text-4xl font-bold text-accent">1995</div>
            <div className="text-sm text-white/80 mt-1">Established</div>
          </div>
        </div>
      </div>
    </section>
  );
}
