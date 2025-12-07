import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function BookTeeTimePage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Book a Tee Time
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg max-w-3xl mx-auto text-primary-foreground/90">
              Reserve your tee time on one of our three championship courses.
            </p>
          </div>
        </section>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-serif font-bold mb-6">Online Booking Coming Soon</h2>
            <p className="text-muted-foreground mb-8">
              Our online tee time booking system is currently being developed. In the meantime, please call us at <a href="tel:555-867-5100" className="text-primary font-semibold">(555) 867-5100</a> to reserve your tee time.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <a href="tel:555-867-5100">Call to Book</a>
              </Button>
              <Button asChild size="lg" variant="outline">
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
