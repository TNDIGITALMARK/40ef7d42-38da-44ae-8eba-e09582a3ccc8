import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function AcademyPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Golf Academy
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg max-w-3xl mx-auto text-primary-foreground/90">
              Elevate your game with professional instruction from PGA-certified instructors and state-of-the-art training facilities.
            </p>
          </div>
        </section>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-serif font-bold mb-6">Coming Soon</h2>
            <p className="text-muted-foreground mb-8">
              Our comprehensive golf academy program is currently under development. Check back soon for details on lessons, clinics, and training programs.
            </p>
            <Button asChild>
              <Link href="/contact">Contact Us for More Information</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
