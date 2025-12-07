import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { MapPin, CheckCircle } from 'lucide-react';
import { notFound } from 'next/navigation';

// Mock course data
const coursesData: any = {
  'heritage-course': {
    id: 1,
    slug: 'heritage-course',
    name: 'The Heritage Course',
    tagline: 'A timeless Robert Trent Jones II masterpiece',
    description: 'Designed by legendary architect Robert Trent Jones II, the Heritage Course features traditional southern-style architecture with towering oaks and challenging water hazards. This championship layout has hosted numerous prestigious tournaments and continues to test the skills of golfers at every level.',
    parTotal: 72,
    yardageTotal: 7245,
    difficultyRating: 73.5,
    heroImageUrl: '/images/generated/course-heritage-clubhouse.png',
    location: 'Main Campus',
    gallery: ['/images/generated/course-heritage-clubhouse.png'],
    facilities: {
      drivingRange: true,
      caddies: true,
      clubhouse: true,
      proShop: true,
      golfCarts: true,
    },
    holes: [
      { number: 1, par: 4, yardage: 425, handicapIndex: 7, description: 'Opening drive over water to generous fairway' },
      { number: 2, par: 5, yardage: 565, handicapIndex: 3, description: 'Long par 5 with strategic bunker placement' },
      { number: 3, par: 3, yardage: 185, handicapIndex: 15, description: 'Scenic par 3 over water' },
      { number: 4, par: 4, yardage: 395, handicapIndex: 11, description: 'Dogleg right with bunkers guarding the green' },
      { number: 5, par: 4, yardage: 440, handicapIndex: 1, description: 'Challenging par 4 with elevated green' },
      { number: 6, par: 3, yardage: 205, handicapIndex: 13, description: 'Long par 3 with deep bunkers' },
      { number: 7, par: 5, yardage: 530, handicapIndex: 5, description: 'Reachable par 5 with risk-reward second shot' },
      { number: 8, par: 4, yardage: 380, handicapIndex: 17, description: 'Short par 4 requiring accuracy' },
      { number: 9, par: 4, yardage: 420, handicapIndex: 9, description: 'Finishing hole with water left' },
      { number: 10, par: 4, yardage: 410, handicapIndex: 8, description: 'Opening back nine with narrow fairway' },
      { number: 11, par: 3, yardage: 175, handicapIndex: 16, description: 'Island green par 3' },
      { number: 12, par: 5, yardage: 550, handicapIndex: 4, description: 'Three-shot par 5 with creek crossing' },
      { number: 13, par: 4, yardage: 400, handicapIndex: 12, description: 'Slight dogleg left' },
      { number: 14, par: 4, yardage: 445, handicapIndex: 2, description: 'Long par 4 into prevailing wind' },
      { number: 15, par: 3, yardage: 195, handicapIndex: 14, description: 'Downhill par 3 with multiple tiers' },
      { number: 16, par: 4, yardage: 375, handicapIndex: 18, description: 'Short par 4 with strategic bunkering' },
      { number: 17, par: 5, yardage: 560, handicapIndex: 6, description: 'Dramatic par 5 along the lake' },
      { number: 18, par: 4, yardage: 435, handicapIndex: 10, description: 'Finishing hole back to clubhouse' },
    ],
  },
  'lakeside-course': {
    id: 2,
    slug: 'lakeside-course',
    name: 'The Lakeside Course',
    tagline: 'Spectacular lakefront golf experience',
    description: 'Wind through natural lakes and wetlands on this visually stunning course. The signature stone bridge and waterfront holes make Lakeside unforgettable. Strategic shot-making and course management are rewarded on this beautiful and challenging layout.',
    parTotal: 71,
    yardageTotal: 7120,
    difficultyRating: 72.8,
    heroImageUrl: '/images/generated/course-lakeside-bridge.png',
    location: 'West Campus',
    gallery: ['/images/generated/course-lakeside-bridge.png'],
    facilities: {
      drivingRange: true,
      caddies: true,
      clubhouse: true,
      proShop: false,
      golfCarts: true,
    },
    holes: [],
  },
  'ridge-course': {
    id: 3,
    slug: 'ridge-course',
    name: 'The Ridge Course',
    tagline: 'Mountain vistas and dramatic elevation',
    description: 'Experience breathtaking mountain views and dramatic elevation changes. The Ridge Course offers a unique challenge with its rolling terrain and strategic shot-making. Each hole presents a new vista and a new test of skill.',
    parTotal: 72,
    yardageTotal: 6985,
    difficultyRating: 71.5,
    heroImageUrl: '/images/generated/course-ridge-mountain-view.png',
    location: 'North Campus',
    gallery: ['/images/generated/course-ridge-mountain-view.png'],
    facilities: {
      drivingRange: false,
      caddies: true,
      clubhouse: false,
      proShop: false,
      golfCarts: true,
    },
    holes: [],
  },
};

export default function CourseDetailPage({ params }: { params: { slug: string } }) {
  const course = coursesData[params.slug];

  if (!course) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        {/* Hero Image */}
        <section className="relative h-[400px] md:h-[500px]">
          <Image
            src={course.heroImageUrl}
            alt={course.name}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white container mx-auto px-4">
              <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
                {course.name}
              </h1>
              <p className="text-xl md:text-2xl text-white/90">
                {course.tagline}
              </p>
              <div className="flex items-center justify-center gap-2 mt-4 text-white/80">
                <MapPin className="h-5 w-5" />
                <span>{course.location}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Course Stats */}
        <section className="py-12 bg-muted border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{course.parTotal}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Par</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{course.yardageTotal.toLocaleString()}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Yards</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-primary mb-2">{course.difficultyRating}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Course Description */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-serif font-bold mb-6">About This Course</h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {course.description}
            </p>

            {/* Facilities */}
            <h3 className="text-2xl font-serif font-semibold mb-4">Facilities & Amenities</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {course.facilities.drivingRange && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Driving Range</span>
                </div>
              )}
              {course.facilities.caddies && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Caddie Service</span>
                </div>
              )}
              {course.facilities.clubhouse && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Clubhouse</span>
                </div>
              )}
              {course.facilities.proShop && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Pro Shop</span>
                </div>
              )}
              {course.facilities.golfCarts && (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Golf Carts</span>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Scorecard */}
        {course.holes && course.holes.length > 0 && (
          <section className="py-16 bg-muted">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">Scorecard</h2>
              <div className="overflow-x-auto">
                <table className="w-full bg-card rounded-lg border">
                  <thead className="bg-primary text-primary-foreground">
                    <tr>
                      <th className="py-3 px-4 text-left">Hole</th>
                      <th className="py-3 px-4 text-center">Par</th>
                      <th className="py-3 px-4 text-center">Yards</th>
                      <th className="py-3 px-4 text-center">HCP</th>
                      <th className="py-3 px-4 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    {course.holes.map((hole: any) => (
                      <tr key={hole.number} className="border-t">
                        <td className="py-3 px-4 font-semibold">{hole.number}</td>
                        <td className="py-3 px-4 text-center">{hole.par}</td>
                        <td className="py-3 px-4 text-center">{hole.yardage}</td>
                        <td className="py-3 px-4 text-center">{hole.handicapIndex}</td>
                        <td className="py-3 px-4 text-muted-foreground text-sm">{hole.description}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>
        )}

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Ready to Play {course.name}?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Book your tee time today or contact us to learn more about membership options.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/book-tee-time">Book Tee Time</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
