import Image from 'next/image'
import leaf from "../../public/leaf.svg"

export default function Home() {
  return (
    <div>
      <nav className='flex bg-[#C5D5C3] h-11 font-[Lora] text-base'>
        <Image src="/leaf.svg" alt="leaf" width={30} height={30} />
        <div>
          the navbar
        </div>
        <div>
          the navbar
        </div>
        <div>
          the navbar
        </div>
        <div>
          the navbar
        </div>
        <div>
          the navbar
        </div>
        <Image src="/leaf.svg" alt="leaf" width={30} height={30} />
      </nav>

      <main className="bg-[#C5D5C3] flex min-h-screen flex-col items-center justify-between  ">
        <div className=' '>
          <div className=''></div>


        </div>
      </main>
      <footer className='bg-[#A8BFA5] w-full h-32'>

        <div className='flex justify-center items-end w-full h-24'>
          <span>©2023; designed with love and care by GuidanceGrove™</span>
        </div>
      </footer>
    </div >
  )
}
