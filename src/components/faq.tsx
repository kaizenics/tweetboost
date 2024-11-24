import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  
  const faqs = [
    {
      question: "How does TweetBoost ensure my Twitter account stays safe?",
      answer: "TweetBoost operates within Twitter's API guidelines and terms of service. We use secure authentication methods and never store your Twitter password. Our AI-powered system is designed to mimic natural human behavior, reducing the risk of account suspension."
    },
    {
      question: "Can I customize the content my TweetBoost bot shares?",
      answer: "TweetBoost allows you to set custom parameters for content curation, including keywords, hashtags, and specific accounts to engage with. You can also upload your own content for the bot to share."
    },
    {
      question: "How quickly can I expect to see results?",
      answer: "While results can vary depending on your niche and existing audience, most users see a noticeable increase in engagement within the first 2-4 weeks. For optimal results, we recommend using TweetBoost consistently for at least 3 months."
    },
    {
      question: "Is there a limit to how many Twitter accounts I can manage with TweetBoost?",
      answer: "The number of accounts you can manage depends on your subscription plan. Our Starter plan allows for 1 account, Pro plan for 3 accounts, and Enterprise plan for unlimited accounts. You can upgrade your plan at any time as your needs grow."
    },
    {
      question: "What kind of support do you offer?",
      answer: "We offer email support for all plans, with priority support for Pro users and 24/7 dedicated support for Enterprise customers. Our knowledge base is also available to all users, providing guides and best practices for using TweetBoost effectively."
    }
  ]
  
  export function FAQ() {
    return (
      <section className="bg-muted/50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-display font-bold tracking-tight text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                <AccordionTrigger className="text-foreground hover:text-primary transition-colors font-display">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-sans">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    )
  }

