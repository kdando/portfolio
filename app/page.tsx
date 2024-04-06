import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="w-screen h-screen relative">

      <div className="flex items-center w-full h-full bg-cover bg-center" style={{backgroundImage: "url(/ape_with_gun.jpeg"}}>

        {/* MAIN TEXT */}
        <div className="pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap-5 z-[10] max-w-[750px]">
          <h1 className="text-[80px] custom-line-height text-transparent bg-clip-text bg-gradient-to-b from-purple-500 to-cyan-500 font-barloesius">Karl Dando</h1>
          <p className="text-white md:block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam in tellus non augue vehicula congue ut eu ligula. Ut vulputate velit nec justo suscipit, eget ultricies tortor tempor.</p>
        </div>

      </div>

      {/* <div className="absolute bottom-0 right-0 z-[10]">
        <Image src="/horse.png" alt="horse" height={300} width={300} className="absolute right-55 top-40"/>
        <Image src="/cliff.webp" alt="cliff" height={480} width={480}/>
      </div> */}

      {/* <div className="absolute bottom-0 z-[5] w-full h-auto">
        <Image src="/trees.webp" alt="trees" height={2000} width={2000} className="w-full h-full"/> 
      </div> */}

      <Image src="/stars.png" alt="stars" height={300} width={300} className="absolute left-0 top-10 z-[10]"/>

    </main>
  )
}
