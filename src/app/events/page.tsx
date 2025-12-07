import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Users } from 'lucide-react';

// Mock events data
const events = [
  {
    id: 1,
    slug: 'spring-member-guest',
    title: 'Spring Member-Guest Tournament',
    description: 'Our premier member-guest tournament featuring two days of competitive golf, evening socials, and prizes.',
    courseName: 'The Heritage Course',
    startDatetime: '2025-04-12T08:00:00Z',
    endDatetime: '2025-04-13T18:00:00Z',
    capacity: 80,
    price: 500,
    eventType: 'tournament',
    heroImageUrl: '/images/generated/heritage-course-clubhouse.png',
  },
  {
    id: 2,
    slug: 'junior-golf-clinic',
    title: 'Junior Golf Clinic',
    description: 'Week-long clinic for junior golfers ages 8-16. Professional instruction covering fundamentals and course management.',
    courseName: 'Clubhouse',
    startDatetime: '2025-06-15T09:00:00Z',
    endDatetime: '2025-06-19T15:00:00Z',
    capacity: 24,
    price: 350,
    eventType: 'clinic',
    heroImageUrl: '/images/generated/lakeside-course-bridge.png',
  },
  {
    id: 3,
    slug: 'ladies-championship',
    title: "Ladies' Club Championship",
    description: 'Annual championship for our female members. Two-day stroke play event with multiple flight divisions.',
    courseName: 'The Lakeside Course',
    startDatetime: '2025-07-20T08:00:00Z',
    endDatetime: '2025-07-21T17:00:00Z',
    capacity: 60,
    price: 150,
    eventType: 'tournament',
    heroImageUrl: '/images/generated/lakeside-course-bridge.png',
  },
  {
    id: 4,
    slug: 'fall-harvest-social',
    title: 'Fall Harvest Social',
    description: 'Celebrate the season with an evening of dining, live music, and fellowship. Open to all members and their guests.',
    courseName: 'Clubhouse',
    startDatetime: '2025-10-05T18:00:00Z',
    endDatetime: '2025-10-05T22:00:00Z',
    capacity: 200,
    price: 75,
    eventType: 'social',
    heroImageUrl: '/images/generated/membership-golfers-highfive.png',
  },
];

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

function formatTime(dateString: string) {
  const date = new Date(dateString);
  return date.toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });
}

export default function EventsPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Events & Tournaments
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg max-w-3xl mx-auto text-primary-foreground/90">
              Join us for tournaments, clinics, social gatherings, and exclusive member events throughout the year.
            </p>
          </div>
        </section>

        {/* Events List */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="space-y-8">
              {events.map((event) => (
                <div
                  key={event.id}
                  className="bg-card rounded-lg border overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
                    {/* Image */}
                    <div className="relative h-64 md:h-auto">
                      <Image
                        src={event.heroImageUrl}
                        alt={event.title}
                        fill
                        className="object-cover"
                      />
                      {/* Event Type Badge */}
                      <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold uppercase">
                        {event.eventType}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="md:col-span-2 p-6 flex flex-col">
                      <h3 className="text-2xl font-serif font-bold mb-3">{event.title}</h3>
                      <p className="text-muted-foreground mb-4 flex-grow">{event.description}</p>

                      {/* Event Details */}
                      <div className="space-y-2 mb-6 text-sm">
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {formatDate(event.startDatetime)} at {formatTime(event.startDatetime)}
                          </span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <MapPin className="h-4 w-4" />
                          <span>{event.courseName}</span>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground">
                          <Users className="h-4 w-4" />
                          <span>Capacity: {event.capacity} participants</span>
                        </div>
                      </div>

                      {/* Price & CTA */}
                      <div className="flex items-center justify-between pt-4 border-t">
                        <div>
                          <div className="text-2xl font-bold text-primary">${event.price}</div>
                          <div className="text-xs text-muted-foreground">per person</div>
                        </div>
                        <Button asChild>
                          <Link href={`/contact?subject=event&event=${event.slug}`}>
                            Register Interest
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-muted text-center">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-serif font-bold mb-6">
              Stay Updated on Upcoming Events
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Members receive priority registration and exclusive invitations to special events. Contact us to learn
              more about membership benefits.
            </p>
            <Button asChild size="lg">
              <Link href="/membership">Explore Memberships</Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
