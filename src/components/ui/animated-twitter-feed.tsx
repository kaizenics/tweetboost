'use client'

import { useState, useEffect } from 'react'
import { Twitter, Heart, RefreshCw } from 'lucide-react'

const tweets = [
  { id: 1, content: "Just tried @TweetBoost and my engagement is through the roof! 🚀 #SocialMediaMarketing", likes: 45, retweets: 12 },
  { id: 2, content: "Automated responses have never been this smart. Thanks @TweetBoost! 🤖💬 #AI #TwitterBot", likes: 32, retweets: 8 },
  { id: 3, content: "Seeing a major uptick in followers since using @TweetBoost. Highly recommend! 📈 #GrowYourAudience", likes: 67, retweets: 23 },
]

export function AnimatedTwitterFeed() {
  const [activeTweet, setActiveTweet] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTweet((prev) => (prev + 1) % tweets.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg shadow-xl p-6 w-full">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <Twitter className="h-8 w-8 text-primary mr-2" />
          <h3 className="text-xl font-bold text-foreground">Live Feed</h3>
        </div>
        <div className="text-sm text-muted-foreground">
          Powered by TwitterKings
        </div>
      </div>
      <div className="h-48 relative">
        {tweets.map((tweet, index) => (
          <div
            key={tweet.id}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              index === activeTweet ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-full'
            }`}
          >
            <p className="text-foreground mb-4 text-lg">{tweet.content}</p>
            <div className="flex justify-between text-muted-foreground text-sm">
              <span className="flex items-center">
                <Heart className="h-4 w-4 mr-1 text-primary" />
                {tweet.likes} Likes
              </span>
              <span className="flex items-center">
                <RefreshCw className="h-4 w-4 mr-1 text-primary" />
                {tweet.retweets} Retweets
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

