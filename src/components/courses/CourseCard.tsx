import Image from 'next/image';
import Link from 'next/link';
import { MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  id: number;
  slug: string;
  name: string;
  tagline: string;
  description?: string;
  parTotal: number;
  yardageTotal: number;
  difficultyRating: number;
  heroImageUrl: string;
  location: string;
}

export function CourseCard({
  slug,
  name,
  tagline,
  description,
  parTotal,
  yardageTotal,
  difficultyRating,
  heroImageUrl,
  location,
}: CourseCardProps) {
  return (
    <div className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-border">
      {/* Image */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={heroImageUrl}
          alt={name}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        {/* Par Badge */}
        <div className="absolute top-4 right-4 bg-accent text-accent-foreground px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
          Par {parTotal}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-2xl font-serif font-semibold mb-2 text-foreground">
          {name}
        </h3>
        <p className="text-muted-foreground mb-2 text-sm leading-relaxed font-medium">
          {tagline}
        </p>
        {description && (
          <p className="text-muted-foreground/80 mb-4 text-sm leading-relaxed">
            {description}
          </p>
        )}

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-6 py-4 border-y">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{parTotal}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Par</div>
          </div>
          <div className="text-center border-x">
            <div className="text-2xl font-bold text-primary">{yardageTotal.toLocaleString()}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Yards</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-primary">{difficultyRating}</div>
            <div className="text-xs text-muted-foreground uppercase tracking-wide">Rating</div>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>{location}</span>
        </div>

        {/* CTA */}
        <Button asChild className="w-full" variant="default">
          <Link href={`/courses/${slug}`}>View Course Details</Link>
        </Button>
      </div>
    </div>
  );
}
