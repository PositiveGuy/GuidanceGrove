import Image from 'next/image'
import leaf from "../../public/leaf.svg"

export default function Home() {
  return (
    <div>
      <nav className='flex items-center justify-between bg-[#C5D5C3] h-11 px-4'>
        <Image src="/leaf.svg" alt="leaf" width={30} height={30} />
        <div className='flex gap-4'>
          <div>Link 1</div>
          <div>Link 2</div>
          <div>Link 3</div>
          <div>Link 4</div>
          <div>Link 5</div>
        </div>
        <Image src="/leaf.svg" alt="leaf" width={30} height={30} />
      </nav>

      <main className="bg-[#C5D5C3] flex min-h-screen flex-col items-center justify-between  ">
        <section>what we believe</section>
        <section>
          <div><p>what we do</p></div>
          <div>card 1</div>
          <div>card 2</div>
          <div>card 3</div>
        </section>
        <section>
          <div>testimonial</div>
          <div></div>
          <div></div>
          <div></div>
        </section>
      </main>
      <footer className='bg-[#A8BFA5] w-full h-32'>

        <div className='flex justify-center items-end w-full h-24'>
          <span>©2023; designed with love and care by GuidanceGrove™</span>
        </div>
      </footer>
    </div >
  )
}
