import Image from 'next/image'

export default function Home() {
  return (
    <div className="w-full">
      <div className="">
        <Image
          src="/images/testImage.jpg"
          alt="profile image"
          width={500}
          height={500}
        />
      </div>
      <div className="grid scale-125 grid-cols-2 opacity-50 hover:opacity-75 focus:scale-150 sm:grid-cols-3 lg:grid-cols-4">
        content
      </div>
      <div />
    </div>
  )
}
