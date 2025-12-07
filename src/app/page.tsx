import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/home/HeroSection';
import { CourseCard } from '@/components/courses/CourseCard';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Star, Award, Users, Sparkles, Trophy, Clock, MapPin } from 'lucide-react';

// Mock data for MVP - will be replaced with API calls
const courses = [
  {
    id: 1,
    slug: 'heritage-course',
    name: 'The Heritage Course',
    tagline: 'A timeless Robert Trent Jones II masterpiece',
    parTotal: 72,
    yardageTotal: 7245,
    difficultyRating: 73.5,
    heroImageUrl: '/images/generated/heritage-course-clubhouse.png',
    location: 'Main Campus',
  },
  {
    id: 2,
    slug: 'lakeside-course',
    name: 'The Lakeside Course',
    tagline: 'Spectacular lakefront golf experience',
    parTotal: 71,
    yardageTotal: 7120,
    difficultyRating: 72.8,
    heroImageUrl: '/images/generated/lakeside-course-bridge.png',
    location: 'West Campus',
  },
  {
    id: 3,
    slug: 'ridge-course',
    name: 'The Ridge Course',
    tagline: 'Mountain vistas and dramatic elevation',
    parTotal: 72,
    yardageTotal: 6985,
    difficultyRating: 71.5,
    heroImageUrl: '/images/generated/ridge-course-mountain-view.png',
    location: 'North Campus',
  },
];

const testimonials = [
  {
    id: 1,
    name: 'Michael Anderson',
    role: 'Golf Membership',
    quote: 'Sterling Oaks has exceeded every expectation. The courses are impeccably maintained, and the staff makes you feel like family.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Sarah Thompson',
    role: 'Premier Membership',
    quote: 'From the moment I joined, I knew this was special. The attention to detail and level of service is truly world-class.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Robert Chen',
    role: 'Golf Membership',
    quote: 'The Heritage Course is my favorite. Every hole presents a unique challenge, and the scenery is absolutely breathtaking.',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Championship Courses Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                Our Championship Courses
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Experience world-class golf on three distinctly challenging courses, each designed to test your skills and reward precision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Membership CTA Section */}
        <section className="py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/generated/membership-golfers-community.png"
              alt="Sterling Oaks Members"
              fill
              className="object-cover opacity-20"
            />
          </div>
          <div className="container mx-auto px-4 relative z-10 text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Elevate Your Game at Sterling Oaks
            </h2>
            <p className="text-lg mb-8 max-w-3xl mx-auto text-primary-foreground/90 leading-relaxed">
              Join a community of passionate golfers and enjoy unparalleled access to our world-class facilities. Our memberships include priority tee times, exclusive events, access to the elite practice academy, and unforgettable experiences. Discover the privilege of belonging to Sterling Oaks Golf Club.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 text-base px-8 py-6"
            >
              <Link href="/membership">Discover Membership Tiers</Link>
            </Button>
          </div>
        </section>

        {/* Facilities Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                World-Class Facilities
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Every detail designed to enhance your golfing experience
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Trophy className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Championship Courses</h3>
                <p className="text-muted-foreground text-sm">
                  Three award-winning courses designed by Robert Trent Jones II
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Practice Facilities</h3>
                <p className="text-muted-foreground text-sm">
                  State-of-the-art driving range, putting greens, and short game areas
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Award className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Golf Academy</h3>
                <p className="text-muted-foreground text-sm">
                  Expert instruction from PGA professionals with cutting-edge technology
                </p>
              </div>

              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">Clubhouse & Dining</h3>
                <p className="text-muted-foreground text-sm">
                  Elegant clubhouse with fine dining and private event spaces
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
                What Our Members Say
              </h2>
              <div className="w-24 h-1 bg-accent mx-auto mb-6" />
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join a community of passionate golfers who call Sterling Oaks home
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="bg-card p-8 rounded-lg border shadow-md hover:shadow-xl transition-shadow"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-foreground mb-6 leading-relaxed italic">
                    &quot;{testimonial.quote}&quot;
                  </p>
                  <div className="border-t pt-4">
                    <p className="font-semibold text-foreground">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-accent">30+</div>
                <div className="text-sm md:text-base text-primary-foreground/90">Years of Excellence</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-accent">500+</div>
                <div className="text-sm md:text-base text-primary-foreground/90">Member Families</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-accent">15+</div>
                <div className="text-sm md:text-base text-primary-foreground/90">Tournament Championships</div>
              </div>
              <div className="space-y-2">
                <div className="text-5xl md:text-6xl font-bold text-accent">75K+</div>
                <div className="text-sm md:text-base text-primary-foreground/90">Rounds Played Annually</div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Links Section */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Events */}
              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Events Calendar</h3>
                <p className="text-muted-foreground mb-6">
                  Join us for tournaments, clinics, and exclusive member events throughout the year.
                </p>
                <Button asChild variant="outline">
                  <Link href="/events">View Events</Link>
                </Button>
              </div>

              {/* Academy */}
              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Golf Academy</h3>
                <p className="text-muted-foreground mb-6">
                  Improve your game with our PGA professionals and state-of-the-art training facilities.
                </p>
                <Button asChild variant="outline">
                  <Link href="/academy">Learn More</Link>
                </Button>
              </div>

              {/* Contact */}
              <div className="bg-card p-8 rounded-lg border text-center hover:shadow-lg transition-all hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-serif font-semibold mb-4">Visit Us</h3>
                <p className="text-muted-foreground mb-6">
                  Schedule a tour or contact us to learn more about membership opportunities.
                </p>
                <Button asChild variant="outline">
                  <Link href="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}