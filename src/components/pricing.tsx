import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: 'Starter',
    price: '$29',
    description: 'Perfect for individuals and small businesses',
    features: ['1 Twitter bot', 'Basic automation', '100 tweets/day', 'Email support'],
  },
  {
    name: 'Pro',
    price: '$79',
    description: 'Ideal for growing businesses and influencers',
    features: ['3 Twitter bots', 'Advanced automation', '500 tweets/day', 'Priority support', 'Analytics dashboard'],
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large-scale operations and agencies',
    features: ['Unlimited Twitter bots', 'Custom automation', 'Unlimited tweets', '24/7 dedicated support', 'Advanced analytics', 'API access'],
  },
]

export function Pricing() {
  return (
    <section className="bg-muted/50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-display font-bold tracking-tight text-foreground text-center mb-20">
          Choose the Perfect Plan for Your Twitter Growth
        </h2>
        <div className="grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <Card 
              key={plan.name} 
              className={`
                flex flex-col justify-between border bg-card hover:shadow-md transition-all duration-300
                ${plan.name === 'Pro' ? 
                  'relative shadow-lg before:absolute before:inset-0 before:bg-gradient-to-r before:from-primary/50 before:to-purple-500/50 before:rounded-lg before:-z-10 before:p-[2px]' 
                  : ''
                }
              `}
            >
              {plan.name === 'Pro' && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-gradient-to-r from-primary to-purple-500 text-white text-sm font-semibold px-4 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle className={`text-2xl font-display font-bold ${plan.name === 'Pro' ? 'text-primary' : ''}`}>
                  {plan.name}
                </CardTitle>
                <CardDescription className="font-sans text-muted-foreground">{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className={`text-4xl font-display font-bold mb-4 text-foreground ${plan.name === 'Pro' ? 'text-primary' : ''}`}>
                  {plan.price}
                </p>
                <ul className="space-y-2 font-sans">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-card-foreground">
                      <Check className={`h-5 w-5 mr-2 ${plan.name === 'Pro' ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button 
                  className={`w-full font-sans ${
                    plan.name === 'Pro' 
                      ? 'bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90' 
                      : ''
                  }`} 
                  variant={plan.name === 'Pro' ? 'default' : 'outline'}
                >
                  {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
