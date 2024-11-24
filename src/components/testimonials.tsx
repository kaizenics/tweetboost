import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Social Media Manager',
    company: 'TechCorp',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'TwitterKings has revolutionized our Twitter strategy. We&apos;ve seen a 200% increase in engagement since we started using it.',
  },
  {
    name: 'Mike Chen',
    role: 'Influencer',
    company: 'Self-employed',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'As an influencer, time is money. TweetBoost saves me hours every day while growing my audience consistently.',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthStartup',
    image: '/placeholder.svg?height=100&width=100',
    quote: 'The AI-powered optimization in TwitterKings is a game-changer. It&apos;s like having a Twitter expert working for us 24/7.',
  },
]

export function Testimonials() {
  return (
    <section className="bg-background py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold tracking-tight text-foreground text-center mb-12">
          What Our Customers Say
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="flex flex-col justify-between border bg-card text-card-foreground hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full bg-muted"
                  />
                  <div>
                    <CardTitle className="text-lg font-display font-semibold text-primary">{testimonial.name}</CardTitle>
                    <p className="text-sm font-sans text-muted-foreground">{testimonial.role} at {testimonial.company}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="font-sans text-card-foreground italic leading-relaxed">&quot;{testimonial.quote}&quot;</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

