import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Check, Star } from 'lucide-react';
import Image from 'next/image';

// Mock membership data
const memberships = [
  {
    id: 1,
    name: 'Social Membership',
    description: 'Perfect for those who want to enjoy our clubhouse, dining, and social events',
    price: 2500,
    billingInterval: 'yearly',
    benefits: [
      'Access to clubhouse and dining facilities',
      'Priority event registration',
      'Member-only social events',
      'Guest privileges (up to 4 per year)',
      'Pro shop discounts (10%)',
    ],
  },
  {
    id: 2,
    name: 'Golf Membership',
    description: 'Full access to all three championship courses with priority tee times',
    price: 12500,
    billingInterval: 'yearly',
    featured: true,
    benefits: [
      'Unlimited golf on all courses',
      'Priority tee time booking',
      'Free range balls',
      'Locker room access',
      'All social membership benefits',
      'Guest privileges (12 rounds per year)',
      'Pro shop discounts (20%)',
      'Complimentary club storage',
    ],
  },
  {
    id: 3,
    name: 'Premier Membership',
    description: 'The ultimate Sterling Oaks experience with exclusive privileges',
    price: 25000,
    billingInterval: 'yearly',
    benefits: [
      'All Golf Membership benefits',
      'Guaranteed tee times 7 days advance',
      'Private locker with amenities',
      'Unlimited guest privileges',
      'Complimentary caddie service (10 rounds/year)',
      'Academy access with 4 complimentary lessons',
      'Pro shop discounts (30%)',
      'Priority tournament entry',
      'Exclusive member events',
    ],
  },
];

export default function MembershipPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero with Background Image */}
        <section className="relative py-32 bg-primary text-primary-foreground overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/generated/membership-golfers-highfive.png"
              alt="Sterling Oaks Members"
              fill
              className="object-cover opacity-25"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/70 to-primary" />
          </div>
          <div className="container mx-auto px-4 text-center relative z-10">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-accent/90 backdrop-blur-sm rounded-full text-accent-foreground text-sm font-semibold">
              <Star className="h-4 w-4" />
              EXCLUSIVE MEMBERSHIP
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6">
              Membership at Sterling Oaks
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-xl max-w-3xl mx-auto text-primary-foreground/95 leading-relaxed">
              Join a distinguished community of golf enthusiasts and experience the finest in championship golf,
              world-class amenities, and exclusive events. Discover the privilege of belonging.
            </p>
          </div>
        </section>

        {/* Membership Tiers */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                Choose Your Membership Level
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Each tier is designed to provide exceptional value and unforgettable experiences
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {memberships.map((membership) => (
                <div
                  key={membership.id}
                  className={`bg-card rounded-lg border p-8 flex flex-col transition-all hover:-translate-y-2 ${
                    membership.featured
                      ? 'border-accent shadow-2xl ring-2 ring-accent transform md:scale-105 relative'
                      : 'border-border shadow-md hover:shadow-xl'
                  }`}
                >
                  {membership.featured && (
                    <>
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground text-sm font-bold px-6 py-2 rounded-full shadow-lg">
                        ⭐ Most Popular
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-lg pointer-events-none" />
                    </>
                  )}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-serif font-bold mb-2 mt-2">{membership.name}</h3>
                    <p className="text-muted-foreground mb-6 text-sm leading-relaxed">{membership.description}</p>
                    <div className="mb-6 pb-6 border-b">
                      <div className="text-5xl font-bold text-primary">
                        ${membership.price.toLocaleString()}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">per {membership.billingInterval}</div>
                    </div>
                    <ul className="space-y-3 mb-8 flex-grow">
                      {membership.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                            <Check className="h-4 w-4 text-primary flex-shrink-0" />
                          </div>
                          <span className="text-sm leading-relaxed">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      asChild
                      className="w-full"
                      size="lg"
                      variant={membership.featured ? 'default' : 'outline'}
                    >
                      <Link href="/contact?subject=membership">Inquire Now</Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Additional Benefits */}
        <section className="py-20 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-serif font-bold mb-8 text-center">
                Member Benefits & Privileges
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-serif font-semibold mb-3">Championship Golf</h3>
                  <p className="text-muted-foreground text-sm">
                    Access three award-winning Robert Trent Jones II courses with impeccable conditioning and
                    challenging layouts that test your skills.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-serif font-semibold mb-3">Elite Facilities</h3>
                  <p className="text-muted-foreground text-sm">
                    Enjoy our state-of-the-art practice facilities, luxurious clubhouse, fine dining, and
                    professional services.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-serif font-semibold mb-3">Social Events</h3>
                  <p className="text-muted-foreground text-sm">
                    Participate in exclusive member tournaments, social gatherings, and special events throughout
                    the year.
                  </p>
                </div>
                <div className="bg-card p-6 rounded-lg border">
                  <h3 className="text-xl font-serif font-semibold mb-3">Golf Academy</h3>
                  <p className="text-muted-foreground text-sm">
                    Improve your game with lessons from PGA professionals and access to cutting-edge training
                    technology.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-primary text-primary-foreground text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Join Sterling Oaks?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto text-primary-foreground/90">
              Contact us today to schedule a tour, learn more about membership options, or begin your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90">
                <Link href="/contact?subject=membership">Contact Us</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-primary"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
