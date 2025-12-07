import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function ProShopPage() {
  return (
    <>
      <Header />
      <main>
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Pro Shop
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg max-w-3xl mx-auto text-primary-foreground/90">
              Premium golf equipment, apparel, and accessories from the world's leading brands.
            </p>
          </div>
        </section>
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 text-center max-w-4xl">
            <h2 className="text-3xl font-serif font-bold mb-6">Coming Soon</h2>
            <p className="text-muted-foreground mb-8">
              Our online pro shop is currently being developed. Visit us in person for the full selection of premium golf gear.
            </p>
            <Button asChild>
              <Link href="/contact">Visit Our Pro Shop</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
