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
        <div className="w-[1280px] h-[900px] relative bg-stone-500 bg-opacity-30">
          <div className="w-[1280px] h-[900px] left-0 top-0 absolute bg-stone-300" />
          <div className="left-[563px] top-[25px] absolute text-center text-black text-[50px] font-normal font-['Kristi']">Testimonials</div>
          <div className="w-[400px] h-[720px] left-[25px] top-[122px] absolute">
            <div className="w-[400px] h-[720px] left-0 top-0 absolute bg-white" />
            <div className="w-[347px] h-[342px] left-[27px] top-[102px] absolute bg-zinc-300" />
          </div>
          <div className="w-[400px] h-[720px] left-[440px] top-[122px] absolute">
            <div className="w-[400px] h-[720px] left-0 top-0 absolute bg-white" />
            <div className="w-[347px] h-[342px] left-[26px] top-[102px] absolute bg-zinc-300" />
          </div>
          <div className="w-[400px] h-[720px] left-[855px] top-[122px] absolute">
            <div className="w-[400px] h-[720px] left-0 top-0 absolute bg-white" />
            <div className="w-[347px] h-[342px] left-[26px] top-[102px] absolute bg-zinc-300" />
          </div>
        </div>
        <section>
          <div>call to action</div>
          <button>schedule</button>
        </section>
        <section>
          <div>email us form</div>
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
