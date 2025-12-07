import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { CourseCard } from '@/components/courses/CourseCard';

// Mock data for MVP
const courses = [
  {
    id: 1,
    slug: 'heritage-course',
    name: 'The Heritage Course',
    tagline: 'A timeless Robert Trent Jones II masterpiece',
    description: 'Our signature course showcases classic southern architecture and strategic bunkering. With tree-lined fairways and challenging water hazards, The Heritage Course rewards precision and shot-making ability. The bentgrass greens are impeccably maintained year-round.',
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
    description: 'Featuring dramatic lakefront views and strategic risk-reward opportunities, The Lakeside Course offers a stunning visual experience. Nine holes play along or over the water, creating memorable moments and exciting challenges for all skill levels.',
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
    description: 'Set against breathtaking mountain views with significant elevation changes, The Ridge Course tests every club in your bag. The strategic routing utilizes the natural terrain to create one of the most scenic and challenging courses in the region.',
    parTotal: 72,
    yardageTotal: 6985,
    difficultyRating: 71.5,
    heroImageUrl: '/images/generated/ridge-course-mountain-view.png',
    location: 'North Campus',
  },
];

export default function CoursesPage() {
  return (
    <>
      <Header />

      <main>
        {/* Hero */}
        <section className="py-20 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our Championship Courses
            </h1>
            <div className="w-24 h-1 bg-accent mx-auto mb-6" />
            <p className="text-lg max-w-3xl mx-auto text-primary-foreground/90">
              Three distinctly challenging championship courses, each designed by legendary architect Robert Trent Jones II.
              Experience world-class golf in a breathtaking natural setting.
            </p>
          </div>
        </section>

        {/* Courses Grid */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {courses.map((course) => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </div>
        </section>

        {/* Additional Info */}
        <section className="py-16 bg-muted">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-serif font-bold mb-6">
                Designed for Excellence
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Each course at Sterling Oaks has been meticulously crafted to challenge golfers of all skill levels
                while showcasing the natural beauty of the landscape. From the classic southern architecture of Heritage
                to the dramatic lakefront vistas of Lakeside and the mountain elevation changes of Ridge, every round
                offers a unique and memorable experience.
              </p>
              <p className="text-sm text-muted-foreground">
                All courses are impeccably maintained year-round by our expert grounds crew and feature championship
                tees, full practice facilities, and premium amenities.
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
