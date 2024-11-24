import Image from 'next/image'

const logos = [
  { name: 'Company 1', src: '/placeholder.svg?height=40&width=120' },
  { name: 'Company 2', src: '/placeholder.svg?height=40&width=120' },
  { name: 'Company 3', src: '/placeholder.svg?height=40&width=120' },
  { name: 'Company 4', src: '/placeholder.svg?height=40&width=120' },
  { name: 'Company 5', src: '/placeholder.svg?height=40&width=120' },
  { name: 'Company 6', src: '/placeholder.svg?height=40&width=120' },
]

export function LogoMarquee() {
  return (
    <div className="w-full overflow-hidden bg-white py-4">
      <div className="flex animate-marquee">
        {[...logos, ...logos].map((logo, index) => (
          <div key={index} className="mx-4 flex w-[120px] items-center justify-center">
            <Image src={logo.src} alt={`${logo.name} logo`} width={120} height={40} />
          </div>
        ))}
      </div>
    </div>
  )
}
