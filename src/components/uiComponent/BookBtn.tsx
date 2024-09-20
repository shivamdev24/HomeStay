import React from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface BookBtnProps {
    link: string;        // URL to navigate to
    text: string;        // Button text
    className?: string;  // Optional custom CSS classes
}

const BookBtn: React.FC<BookBtnProps> = ({ link, text, className }) => {
    return (
        <Link href={link}>
            {/* Using `Link` with `a` element */}
            <span className={cn("bg-[#FFC973] text-white py-2 px-4 rounded-md hover:bg-[#ffb444] transition-colors duration-300", className)}>
                {text}
            </span>
        </Link>
    );
};


const NavBookBtn: React.FC<BookBtnProps> = ({ link, text, className }) => {
    return (
        <Link href={link} className='relative'>
            {/* Using `Link` with `a` element */}
            <span className={cn(" text-black text-xs py-2 px-4 rounded-md hover:bg-[#ffb444] transition-colors duration-300", className)}>
                {text}
               
            </span>
            <span className='w-6 h-12 bg-[#FFC973] absolute -top-3 rounded-full -z-10 left-9'></span>
        </Link>
    );
};




export { BookBtn, NavBookBtn };
