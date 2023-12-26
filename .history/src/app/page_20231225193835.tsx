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
        <section>
          <div className="w-[1280px] h-[900px] relative bg-white border border-black">
            <div className="w-[1280px] h-[900px] left-0 top-0 absolute bg-stone-500 bg-opacity-30" />
            <div className="w-[550px] h-[720px] left-[670px] top-[122px] absolute bg-gradient-to-b from-white via-white to-white" />
            <div className="w-[549px] h-[720px] left-[58px] top-[122px] absolute text-center"><span className="text-black text-[50px] font-semibold font-['Lora'] underline">What we Believe<br /></span><span className="text-black text-[26px] font-semibold font-['Lora']">At Guidance Grove, we are dedicated to illuminating the path of learning for every student. We believe that education is a journey best navigated with support, understanding, and personalized guidance. Our mission is to provide a nurturing environment where learners of all ages and backgrounds can discover their potential, overcome challenges, and achieve their academic goals. Through a combination of expert tutoring, mentorship, and a commitment to individual growth, we strive to empower students to take confident steps towards their future, fostering lifelong learners who are equipped to navigate the world with knowledge and curiosity.</span></div>
            <img className="w-[549px] h-[549px] left-[670px] top-[216px] absolute" src="https://via.placeholder.com/549x549" />
          </div>
        </section>
        <section>
          <div className="w-[1280px] h-[900px] relative">
            <div className="w-[1280px] h-[900px] left-0 top-0 absolute bg-stone-500 bg-opacity-30" />
            <div className="left-[499px] top-0 absolute text-center text-black text-8xl font-normal font-['Kristi'] underline">What we do</div>
            <div className="w-[400px] h-[720px] left-[859px] top-[121px] absolute">
              <div className="w-[400px] h-[720px] left-0 top-0 absolute bg-white" />
              <div className="w-[200px] h-[262px] left-[11px] top-[458px] absolute text-black text-4xl font-normal font-['Lora']">MCAT©<br />GMAT©<br />TOEFL©<br />OET©</div>
              <div className="w-[197px] h-[262px] left-[200px] top-[458px] absolute text-black text-4xl font-normal font-['Lora']">USMLE Step 1©<br />USMLE Step 2 CK©</div>
              <img className="w-[347px] h-[342px] left-[26px] top-[102px] absolute" src="https://via.placeholder.com/347x342" />
            </div>
            <div className="w-[400px] h-[720px] left-[444px] top-[121px] absolute">
              <div className="w-[400px] h-[720px] left-0 top-0 absolute bg-white" />
              <div className="w-[188px] h-[265px] left-[12px] top-[442px] absolute text-black text-xl font-normal font-['Lora']">Pre-algebra<br />Algebra<br />Differential & Integral Calculus<br />Analytical & Physical Chemistry<br />Organic Chemistry<br />Physics</div>
              <div className="w-[174px] h-[266px] left-[218px] top-[442px] absolute text-black text-xl font-normal font-['Lora']">Biochemistry<br />Anatomy<br />Physiology<br />Pathology<br />Pharmacology<br />Nutrition<br />Statistics<br />Critical Reasoning</div>
              <img className="w-[347px] h-[342px] left-[26px] top-[102px] absolute" src="https://via.placeholder.com/347x342" />
            </div>
            <div className="w-[400px] h-[720px] left-[29px] top-[121px] absolute">
              <div className="w-[400px] h-[720px] left-0 top-0 absolute bg-white" />
              <img className="w-[347px] h-[342px] left-[27px] top-[102px] absolute" src="https://via.placeholder.com/347x342" />
              <div className="w-[359px] h-[262px] left-[21px] top-[447px] absolute text-center text-black text-4xl font-normal font-['Lora']">Curriculum Vitae (CV) Drafting, Resume Drafting, Personal Statement Editing, Career Path Advisement</div>
            </div>
          </div>
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
        <div className="w-[1280px] h-[900px] relative bg-white border border-black">
          <div className="w-[1280px] h-[900px] left-0 top-0 absolute bg-stone-500 bg-opacity-30" />
          <div className="w-[918px] h-[200px] left-[181px] top-[350px] absolute text-center text-orange-700 text-opacity-80 text-8xl font-normal font-['Lancelot']">schedule one-on-one with one of our mentors</div>
          <div className="w-[555px] h-[109px] left-[365px] top-[606px] absolute bg-orange-700 bg-opacity-80 rounded-[20px] shadow border border-black" />
          <button className="w-[354px] h-[90px] left-[466px] top-[616px] absolute text-center text-white text-8xl font-normal font-['Lancelot']">schedule</button>
        </div>
        <section>
          <div className="w-[1280px] h-[900px] relative">
            <form action="">
              <label htmlFor=""></label>
              <input type="text" placeholder="name" />" />
              <div className="left-[214px] top-[171px] absolute text-black text-[50px] font-normal font-['Inter']">name: <br />email: <br />message: <br /><br />
              </div>
              <div className="w-[200px] h-[75px] left-[540px] top-[664px] absolute bg-orange-700 bg-opacity-80 rounded-[5px] shadow" />
              <button className="left-[582px] top-[671px] absolute text-center text-white text-[50px] font-normal font-['Inter']">send</button>

            </form>
            \
          </div>
        </section>
      </main>
      <footer className="bg-[#A8BFA5]">

        <div className="flex flex-row">
          <a href="">Home</a>
          <a href="">News</a>
          <a href="">About Us</a>
          <a href="">Contact Us</a>
          <a href="">Out Team</a>
        </div>

        <div className="flex justify-center w-full ">
          <span className="text-black text-xl font-normal font-['Inter']">©2023; designed with love and care by GuidanceGrove™</span>

        </div>

      </footer>
    </div >
  )
}
