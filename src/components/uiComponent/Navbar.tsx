"use client"

import React from 'react'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link'
import { usePathname } from "next/navigation";
import { NavBookBtn } from './BookBtn';
import { Menu } from 'lucide-react';
import Image from 'next/image'
import CallUs from '@/assets/svgImages/callus.svg'




function Navbar() {



  const Pathname = usePathname();

  return (
    <div>






      {/* mobile version navbar  */}

      <div className='lg:hidden flex justify-between fixed w-full'>
        <div className={`${Pathname == "/" ? "active text-[#FFC973] flex flex-col items-center h-screen w-20 gap-6" : "bg-[#FFC973] text-white flex flex-col items-center h-screen w-[3.359rem] gap-6"}`}>
          <Sheet>
            <SheetTrigger className='mt-8'>
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <Link href="" />
            </SheetContent>
          </Sheet>
          <a href="https://dev.to/dolearning/importing-svgs-to-next-js-nna" target='_blank'>

            <svg className={`${Pathname == "/" ? " text-[#FFC973]" : "text-white"}`} width="22" height="22" fill='currentColor' viewBox="0 0 63 63" xmlns="http://www.w3.org/2000/svg">
              <path d="M53.9093 10.0385C51.0341 7.1497 47.6098 4.85919 43.836 3.30043C40.0622 1.74167 36.0143 0.945836 31.9282 0.959305C14.8074 0.959305 0.853668 14.8433 0.853668 31.8784C0.853668 37.3384 2.29608 42.6424 4.99276 47.3224L0.602814 63.3591L17.0651 59.0536C21.6119 61.5183 26.723 62.8287 31.9282 62.8287C49.049 62.8287 63.0028 48.9448 63.0028 31.9096C63.0028 23.6416 59.7731 15.8729 53.9093 10.0385ZM31.9282 57.5872C27.2874 57.5872 22.7407 56.3392 18.7584 53.9992L17.8177 53.4376L8.03437 55.996L10.637 46.5112L10.0098 45.544C7.4309 41.4476 6.06179 36.7121 6.05889 31.8784C6.05889 17.7137 17.6609 6.16969 31.8969 6.16969C38.7954 6.16969 45.2862 8.85288 50.1465 13.7201C52.5535 16.1033 54.461 18.9384 55.7582 22.0608C57.0555 25.1833 57.7167 28.5309 57.7035 31.9096C57.7662 46.0744 46.1642 57.5872 31.9282 57.5872ZM46.1015 38.368C45.3176 37.9936 41.4921 36.1216 40.8022 35.8408C40.081 35.5912 39.5793 35.4664 39.0462 36.2152C38.5132 36.9952 37.0394 38.7424 36.6004 39.2416C36.1614 39.772 35.6911 39.8344 34.9071 39.4288C34.1232 39.0544 31.6147 38.212 28.6671 35.5912C26.3467 33.532 24.8102 31.0048 24.3399 30.2248C23.9009 29.4448 24.2772 29.0392 24.6848 28.6336C25.0297 28.2904 25.4687 27.7288 25.845 27.292C26.2213 26.8552 26.3781 26.512 26.6289 26.0128C26.8798 25.4824 26.7544 25.0456 26.5662 24.6712C26.3781 24.2968 24.8102 20.4905 24.1831 18.9305C23.556 17.4329 22.8975 17.6201 22.4271 17.5889H20.922C20.3889 17.5889 19.5737 17.7761 18.8525 18.5561C18.1626 19.3361 16.1558 21.2081 16.1558 25.0144C16.1558 28.8208 18.9465 32.5024 19.3228 33.0016C19.6991 33.532 24.8102 41.332 32.5867 44.6704C34.4368 45.4816 35.8792 45.9496 37.008 46.2928C38.8581 46.8856 40.5514 46.792 41.8997 46.6048C43.4048 46.3864 46.5091 44.7328 47.1363 42.9232C47.7948 41.1136 47.7948 39.5848 47.5753 39.2416C47.3558 38.8984 46.8854 38.7424 46.1015 38.368Z" />

            </svg>

          </a>
          <a href="https://dev.to/dolearning/importing-svgs-to-next-js-nna" target='_blank'>

            <svg width="22" height="22" viewBox="0 0 71 72" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_d_118_218)">
                <path d="M22.0988 0.959137H48.3068C58.2908 0.959137 66.4028 9.07114 66.4028 19.0551V45.2631C66.4028 50.0625 64.4963 54.6653 61.1026 58.0589C57.709 61.4526 53.1062 63.3591 48.3068 63.3591H22.0988C12.1148 63.3591 4.00281 55.2471 4.00281 45.2631V19.0551C4.00281 14.2558 5.90935 9.65299 9.303 6.25933C12.6967 2.86567 17.2995 0.959137 22.0988 0.959137ZM21.4748 7.19914C18.4959 7.19914 15.639 8.38251 13.5326 10.4889C11.4262 12.5953 10.2428 15.4522 10.2428 18.4311V45.8871C10.2428 52.0959 15.266 57.1191 21.4748 57.1191H48.9308C51.9097 57.1191 54.7666 55.9358 56.873 53.8294C58.9794 51.723 60.1628 48.866 60.1628 45.8871V18.4311C60.1628 12.2223 55.1396 7.19914 48.9308 7.19914H21.4748ZM51.5828 11.8791C52.6172 11.8791 53.6091 12.29 54.3405 13.0214C55.0719 13.7528 55.4828 14.7448 55.4828 15.7791C55.4828 16.8135 55.0719 17.8055 54.3405 18.5369C53.6091 19.2682 52.6172 19.6791 51.5828 19.6791C50.5485 19.6791 49.5565 19.2682 48.8251 18.5369C48.0937 17.8055 47.6828 16.8135 47.6828 15.7791C47.6828 14.7448 48.0937 13.7528 48.8251 13.0214C49.5565 12.29 50.5485 11.8791 51.5828 11.8791ZM35.2028 16.5591C39.3402 16.5591 43.3081 18.2027 46.2337 21.1283C49.1592 24.0538 50.8028 28.0218 50.8028 32.1591C50.8028 36.2965 49.1592 40.2644 46.2337 43.19C43.3081 46.1156 39.3402 47.7591 35.2028 47.7591C31.0654 47.7591 27.0975 46.1156 24.1719 43.19C21.2464 40.2644 19.6028 36.2965 19.6028 32.1591C19.6028 28.0218 21.2464 24.0538 24.1719 21.1283C27.0975 18.2027 31.0654 16.5591 35.2028 16.5591ZM35.2028 22.7991C32.7204 22.7991 30.3396 23.7853 28.5843 25.5406C26.8289 27.296 25.8428 29.6767 25.8428 32.1591C25.8428 34.6416 26.8289 37.0223 28.5843 38.7777C30.3396 40.533 32.7204 41.5191 35.2028 41.5191C37.6852 41.5191 40.066 40.533 41.8213 38.7777C43.5767 37.0223 44.5628 34.6416 44.5628 32.1591C44.5628 29.6767 43.5767 27.296 41.8213 25.5406C40.066 23.7853 37.6852 22.7991 35.2028 22.7991Z"  />
              </g>
             
            </svg>


          </a>
          <a href="https://dev.to/dolearning/importing-svgs-to-next-js-nna" target='_blank'>

            <svg width="22" height="22" viewBox="0 0 69 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M67.6991 6.13232C67.4473 4.61134 66.7467 3.2003 65.6873 2.08027C64.2353 1.46066 62.6754 1.13328 61.0968 1.11684C49.8725 0.507883 38.6217 0.57412 27.4053 1.3152C16.0142 2.05193 5.69988 3.55374 2.44123 5.8773C1.8948 6.38332 1.54373 7.06539 1.44947 7.80415C0.978235 11.4869 0.788778 15.2003 0.88275 18.9119C0.837771 28.4608 1.31073 38.0052 2.29955 47.5029C2.31769 47.6186 2.35875 47.7294 2.42033 47.8289C2.4819 47.9285 2.56275 48.0147 2.65811 48.0825C2.75348 48.1504 2.86145 48.1985 2.97567 48.224C3.08989 48.2496 3.20806 48.252 3.32325 48.2313C3.43843 48.2105 3.5483 48.1669 3.64641 48.1031C3.74451 48.0393 3.82887 47.9565 3.89453 47.8596C3.96019 47.7627 4.00582 47.6537 4.02875 47.5389C4.05168 47.4241 4.05144 47.3059 4.02805 47.1912C3.60301 44.4993 3.2063 35.8568 3.14963 27.0443C3.02316 21.2672 3.21235 15.4875 3.71635 9.731C8.36346 12.848 17.5443 18.9402 25.0534 23.0206L29.1904 25.0608C31.4132 26.2781 33.8452 27.0663 36.3595 27.3843C37.5031 27.2003 38.6001 26.7961 39.5898 26.1942C40.3604 25.7824 41.1077 25.3283 41.8283 24.8341L45.9087 22.0005C46.8721 21.2921 47.8072 20.612 48.7423 19.8186C54.2471 15.6042 59.3936 10.9411 64.1288 5.8773C64.1288 6.18899 64.3271 6.55736 64.4121 6.95407C65.2382 11.3919 65.6273 15.9 65.5739 20.4137C65.7201 28.1443 65.3794 35.8764 64.5538 43.5642C64.5538 44.1876 64.3555 44.8393 64.2705 45.2077H62.3153C57.2431 45.7178 46.4471 46.5112 35.4527 47.1912C23.0132 47.9563 10.347 48.608 5.52986 48.7214C5.39962 48.7214 5.27066 48.747 5.15033 48.7969C5.03 48.8467 4.92067 48.9198 4.82858 49.0119C4.73649 49.1039 4.66343 49.2133 4.61359 49.3336C4.56375 49.4539 4.5381 49.5829 4.5381 49.7131C4.54548 49.9787 4.6562 50.231 4.84671 50.4162C5.03723 50.6014 5.29249 50.705 5.5582 50.7049C11.9905 50.7049 32.3357 49.8832 47.5805 49.0614C54.8346 48.693 60.9268 48.2963 63.8171 48.013C64.6532 47.9666 65.4762 47.7848 66.254 47.4746C66.5677 47.2734 66.8066 46.9747 66.934 46.6245C67.2443 45.7638 67.4535 44.8699 67.5574 43.9609C68.501 36.1196 68.9458 28.2263 68.8892 20.3287C68.952 15.5692 68.5535 10.8149 67.6991 6.13232ZM49.7624 15.4265C46.2771 18.0335 42.7351 20.4704 40.0148 22.1138C38.8525 22.9694 37.5478 23.6122 36.1611 24.0124C34.9035 23.8522 33.6848 23.4684 32.5624 22.8789C30.0122 21.8305 26.7252 20.2153 23.2399 18.3735C16.0142 14.6615 8.02343 10.0994 4.08472 7.80415C7.42837 5.84896 17.0343 4.97054 27.5753 4.40382C38.6556 3.78928 49.7615 3.78928 60.8418 4.40382H62.5986C58.6088 8.40175 54.3174 12.0869 49.7624 15.4265Z"  />
              <path d="M50.9809 32.5415C51.9443 33.4766 52.936 34.3833 53.8145 35.2334C56.6481 37.8687 59.4817 40.1639 60.7851 41.439C60.9753 41.6225 61.2292 41.7251 61.4935 41.7251C61.7578 41.7251 62.0118 41.6225 62.2019 41.439C62.2962 41.3467 62.371 41.2365 62.4222 41.1148C62.4733 40.9932 62.4996 40.8626 62.4996 40.7306C62.4996 40.5987 62.4733 40.4681 62.4222 40.3464C62.371 40.2248 62.2962 40.1146 62.2019 40.0222C60.9835 38.5771 58.7166 35.8852 56.0247 32.9665C55.1179 32.0031 54.1734 31.0586 53.1911 30.1329C52.2276 29.1979 51.2359 28.2628 50.3575 27.2993C49.479 26.3359 48.0622 25.3725 46.9855 24.4657C45.0303 23.1339 43.5851 24.4657 44.9736 26.1376C45.937 27.186 46.9855 28.3478 48.1472 29.5379C49.309 30.728 50.0174 31.6064 50.9809 32.5415Z" />
              <path d="M13.889 35.2051C10.9456 38.12 8.16449 41.1944 5.55819 44.4143C5.47261 44.5129 5.40728 44.6274 5.36595 44.7513C5.32461 44.8751 5.30808 45.0059 5.31729 45.1362C5.3265 45.2664 5.36127 45.3936 5.41962 45.5104C5.47797 45.6272 5.55876 45.7313 5.65737 45.8169C5.75598 45.9025 5.87048 45.9678 5.99434 46.0092C6.11819 46.0505 6.24898 46.067 6.37923 46.0578C6.50947 46.0486 6.63663 46.0139 6.75344 45.9555C6.87025 45.8972 6.97442 45.8164 7.06 45.7178C8.73183 44.0176 11.8488 41.439 15.2491 38.4071C17.0343 36.7919 18.9045 35.0917 20.633 33.3349C22.3615 31.5781 24.6567 29.0278 26.3002 27.0726C27.9437 25.1175 25.9035 24.239 23.9766 25.9675C22.5031 27.271 20.9163 28.6311 19.2445 30.1329C17.5727 31.6348 15.6175 33.5049 13.889 35.2051Z"  />
            </svg>


          </a>
          <a href="https://dev.to/dolearning/importing-svgs-to-next-js-nna" target='_blank'>

            <svg width="22" height="22" viewBox="0 0 39 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M35.1472 8.4205C33.7327 5.95268 31.6472 3.93671 29.1329 2.60666C24.3791 0.611544 19.1156 0.172921 14.0971 1.35368C11.4704 1.83598 8.989 2.91335 6.84316 4.50319C4.69731 6.09302 2.94401 8.15311 1.71765 10.5255C-0.0830394 15.174 -0.432532 20.2591 0.715263 25.1102C1.69782 29.8167 3.73725 34.2384 6.67946 38.041C8.18688 39.959 9.86432 41.7371 11.6914 43.3536C14.3978 45.7594 17.3047 47.9145 20.2117 50.1699C20.3565 50.2883 20.5232 50.3771 20.7023 50.4312C20.8814 50.4852 21.0694 50.5034 21.2556 50.4848C21.4417 50.4662 21.6224 50.4111 21.7873 50.3227C21.9521 50.2342 22.098 50.1142 22.2164 49.9694C22.3349 49.8246 22.4237 49.6579 22.4777 49.4787C22.5318 49.2996 22.55 49.1116 22.5314 48.9255C22.5128 48.7393 22.4577 48.5586 22.3692 48.3938C22.2808 48.2289 22.1608 48.0831 22.016 47.9646C19.3095 45.609 16.5028 43.3536 13.9969 40.8978C12.3423 39.3544 10.817 37.6782 9.43602 35.8859C7.102 32.4643 5.57667 28.5567 4.9754 24.4587C4.24847 20.5767 4.68436 16.5664 6.22838 12.9312C7.14288 11.2383 8.44704 9.78722 10.0331 8.69788C11.6192 7.60853 13.4417 6.91218 15.3501 6.66633C19.1802 5.7026 23.2177 5.98347 26.8775 7.46824C28.9675 8.57659 30.6391 10.3362 31.6389 12.4802C32.7924 14.7418 33.4744 17.2143 33.6436 19.7475C33.8431 23.7344 33.2468 27.7212 31.8894 31.4754C29.7833 37.3537 27.0085 42.9705 23.6198 48.2152C23.3872 48.5741 23.3066 49.0107 23.3959 49.429C23.4852 49.8472 23.737 50.2129 24.0959 50.4455C24.4548 50.6781 24.8914 50.7586 25.3097 50.6694C25.7279 50.5801 26.0936 50.3283 26.3262 49.9694C30.1253 44.6432 33.2877 38.8904 35.7486 32.8286C37.5744 28.6333 38.5619 24.1214 38.6556 19.547C38.4462 15.6011 37.239 11.7728 35.1472 8.4205Z"  />
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3787 17.8928C27.2647 16.7377 26.9013 15.6212 26.3136 14.6203C25.7259 13.6194 24.928 12.758 23.9749 12.0956C23.0218 11.4332 21.9363 10.9856 20.7933 10.7837C19.6503 10.5818 18.4772 10.6304 17.3548 10.9262C15.3494 11.1982 13.5163 12.2049 12.2107 13.7512C10.9051 15.2976 10.22 17.2735 10.288 19.2961C11.0899 28.1672 28.6317 30.7734 27.3787 17.8928ZM14.6985 19.246C14.8216 18.4006 15.2533 17.6308 15.9104 17.0848C16.5674 16.5388 17.4033 16.2553 18.257 16.289C20.813 15.7377 22.4169 16.8904 22.7677 18.6446C24.6221 27.3152 14.3978 24.1076 14.6985 19.246Z" />
            </svg>

          </a>
         
          

        </div>
        <div className='mr-4 mt-8 flex'>
          <a href="#" className={`${Pathname == "/" ? "active text-white " : "text-[#0A4D68] "}`}>
            <svg width="24" height="24" viewBox="0 0 47 51" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M45.4502 40.2971C45.0212 39.6662 44.4408 39.0858 44.0371 38.5812C43.1035 37.3952 42.1446 36.2092 41.1352 35.0989C40.1259 33.9886 39.7221 33.6101 38.9651 32.9036C38.3618 32.314 37.7121 31.7739 37.0221 31.2886C36.4158 30.8983 35.7223 30.6642 35.0034 30.6073C34.4083 30.5962 33.8222 30.7536 33.3128 31.0615C32.1268 31.7176 30.5371 33.3326 29.0483 34.3419C28.7539 34.5608 28.4314 34.739 28.0894 34.8718C27.8875 34.8718 27.7109 35.0484 27.5847 34.8718L19.4847 25.5606C18.3997 24.3494 16.9614 23.0372 15.5987 21.4223C14.8492 20.5576 14.2596 19.5665 13.8576 18.4951C13.8576 18.0662 14.0595 17.6624 14.438 17.183C15.4726 15.7699 17.3399 14.4073 18.4249 13.1456C19.0143 12.5427 19.4324 11.7936 19.6361 10.9755C19.6977 10.5385 19.6088 10.0935 19.3838 9.71382C19.081 9.20914 18.5511 8.7297 18.2987 8.37643L13.8071 2.59791C13.7518 2.49919 13.6757 2.41365 13.5841 2.3472C13.4924 2.28075 13.3875 2.23497 13.2765 2.21303C13.1654 2.19108 13.051 2.1935 12.9409 2.2201C12.8309 2.2467 12.728 2.29686 12.6393 2.36711C12.5505 2.43737 12.4781 2.52604 12.427 2.62701C12.3758 2.72798 12.3472 2.83885 12.3431 2.95196C12.339 3.06506 12.3594 3.17771 12.4031 3.28214C12.4467 3.38656 12.5125 3.48027 12.5959 3.55679L16.9109 9.31008L17.9455 10.6727C17.8193 11.3288 17.0875 11.9848 16.28 12.7166C14.9794 13.7895 13.7645 14.9622 12.6464 16.2241C12.3289 16.5946 12.1003 17.0327 11.9778 17.505C11.8554 17.9773 11.8424 18.4713 11.9399 18.9493C12.3875 20.2932 13.0806 21.5423 13.9838 22.6335C15.195 24.198 16.7343 25.712 17.8193 26.9484L25.5913 36.4868C25.9586 36.9451 26.4619 37.2751 27.0287 37.4293C27.5955 37.5835 28.1966 37.5538 28.7455 37.3447C30.3276 36.643 31.785 35.6885 33.0605 34.5185C33.4973 34.1671 33.9521 33.8387 34.4231 33.5344C34.5745 33.5344 34.852 33.5344 34.852 33.3578C35.1783 33.4371 35.481 33.5928 35.7352 33.812C36.1931 34.1748 36.6232 34.5712 37.0221 34.998C37.716 35.633 38.3731 36.307 38.9904 37.0167C39.9493 38.1017 40.8577 39.2372 41.7408 40.3728C42.0941 40.7765 42.5483 41.2559 42.9016 41.7354C43.0605 41.9242 43.1883 42.1372 43.2801 42.3662C43.6081 43.4513 42.6745 44.3092 41.6904 45.0662C40.4716 45.9619 39.1051 46.6366 37.653 47.0597C32.6213 48.5005 27.2365 48.0517 22.5128 45.798C17.7216 43.4382 13.4956 40.0729 10.123 35.9316C5.75982 31.2133 3.18833 25.1149 2.85572 18.697C2.60339 10.7989 6.23704 4.31381 10.1987 2.34558C10.3016 2.29962 10.3941 2.23327 10.4706 2.15053C10.547 2.0678 10.6059 1.9704 10.6437 1.86425C10.6814 1.75809 10.6972 1.64537 10.6901 1.53293C10.6831 1.42048 10.6532 1.31064 10.6025 1.21006C10.5561 1.1073 10.49 1.01469 10.4078 0.937506C10.3256 0.860327 10.2291 0.800095 10.1236 0.760257C10.0182 0.720418 9.90588 0.701752 9.79321 0.705326C9.68053 0.708901 9.56967 0.734645 9.46695 0.781087C5.00059 2.85025 0.635157 9.94092 0.736092 18.7475C0.990566 25.7123 3.66789 32.3699 8.3062 37.5718C11.8333 42.0263 16.273 45.6744 21.3268 48.2709C26.6383 50.8696 32.7242 51.409 38.41 49.7849C40.6181 49.1571 42.6545 48.0353 44.3651 46.5045C45.0892 45.9044 45.6311 45.1139 45.9298 44.2222C46.2286 43.3304 46.2722 42.373 46.0558 41.4578C45.908 41.045 45.7042 40.6545 45.4502 40.2971Z"  />
            </svg>

          </a>
          <NavBookBtn link="/" text="BooK Now" className={`${Pathname == "/" ? "active text-white " : "text-[#0A4D68] "}`} /></div>
      </div>



    </div>
  )
}

export default Navbar