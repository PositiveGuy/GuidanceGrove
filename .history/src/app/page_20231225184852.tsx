import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <nav className='bg-[#C5D5C3] h-11 text-white   text-base'>

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
      </nav>

      <main className="bg-[#C5D5C3] flex min-h-screen flex-col items-center justify-between  ">
        <div className=' '>
          <div className=''></div>


        </div>
      </main>
      <footer className='bg-[#A8BFA5] w-full h-32'>

        <div className='flex justify-center items-end w-full h-24'>
          <span id='currentYear'>© 2023</span>
          <a href="https://graphalytics.co">Graphalytics</a>
          <span>. All Rights Reserved. </span>
        </div>
      </footer>
    </div>
  )
}
