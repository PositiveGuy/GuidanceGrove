import Image from 'next/image'

export default function Home() {
  return (
    <>
      <nav className="w-[1280px] h-[102.72px] relative">
        <div className="left-[174px] top-[28px] absolute text-center text-black text-5xl font-normal font-['Lora'] underline">Home</div>
        <div className="left-[405px] top-[28px] absolute text-center text-black text-5xl font-normal font-['Lora']">About</div>
        <div className="left-[642px] top-[28px] absolute text-center text-black text-5xl font-normal font-['Lora']">Services</div>
        <div className="left-[918px] top-[28px] absolute text-center text-black text-5xl font-normal font-['Lora']">Contact</div>
        <div className="w-[82px] h-[93px] left-[1160px] top-[9.72px] absolute" />
        <div className="w-[82px] h-[93px] left-[28px] top-[9.72px] absolute" />
      </nav>
      <main className='bg-[#598553]'></main>
      <footer className='bg-[#598553]'></footer>
    </>
  )
}
