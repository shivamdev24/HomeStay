import Navbar from "@/components/uiComponent/Navbar";
import Image from "next/image";

import Hero from '@/assets/images/Hero.png'
import Logo from '@/assets/images/Logo.png'
import { BookBtn } from "@/components/uiComponent/BookBtn";


export default function Home() {
  return (
   <main className="relative">
   <Navbar/>
            <div className="relative -z-10">
        <Image src={Hero} alt={""} className="h-[52.75rem] object-cover object-center "/>
                 <div className="absolute top-0  items-center h-[52.75rem] w-full flex justify-center">
                      <Image src={Logo} alt={""}  />
        </div>
        
   </div>

   <div className="text-center py-10">
                 <h1 className="font-girassol text-[32px] font-semibold">Dadi Homestay</h1>
                 <p className="font-poppins text-[18px] leading-[27px]">Discover a serene sanctuary where calm and comfort intertwine. Nested amidst the Himalayas Dadi Homestay offers a welcoming retreat that embraces you with warmth and sophistication, all nestled amidst breath-taking natural beauty</p>
     
   </div>
   <section>
{/* #TODO: work on form */}
     <div>
          <form action="">
               <div>

               </div>
          </form>
     </div>

   </section>

   <section className="p-4" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4222.350154399351!2d76.73944588827928!3d32.058362853267!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3904b97a943f140d%3A0xdc9ee413a879b6cf!2sBir%20Billing%20Thrill!5e1!3m2!1sen!2sin!4v1726743723703!5m2!1sen!2sin" width="600" height="450" allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

   </section>

   <section>
     <Image src={""} alt={""} />
   </section>
   
            <div className="fixed top-[80%]  w-full h-full p-4 flex justify-center">
                 <BookBtn link="/rooms" text={"Book Now"} className="w-[215.37px] h-[55.42px] rounded-[50.56px]" />
            </div>
   </main>  );
}
