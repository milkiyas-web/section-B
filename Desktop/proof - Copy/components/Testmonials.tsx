import avatar1 from "@/assets/avatar-1.png";
import avatar2 from "@/assets/avatar-2.png";
import avatar3 from "@/assets/avatar-3.png";
import avatar4 from "@/assets/avatar-4.png";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import React from "react";
const testimonials = [
  {
    text: "“This product has completely transformed how I manage my projects and deadlines”",
    name: "Sophia Perez",
    title: "Director @ Quantum",
    avatarImg: avatar1,
  },
  {
    text: "“These AI tools have completely revolutionized our SEO entire strategy overnight”",
    name: "Jamie Lee",
    title: "Founder @ Pulse",
    avatarImg: avatar2,
  },
  {
    text: "“The user interface is so intuitive and easy to use, it has saved us countless hours”",
    name: "Alisa Hester",
    title: "Product @ Innovate",
    avatarImg: avatar3,
  },
  {
    text: "“Our team's productivity has increased significantly since we started using this tool”",
    name: "Alec Whitten",
    title: "CTO @ Tech Solutions",
    avatarImg: avatar4,
  },
];

const firstColumn = testimonials.slice(0, 3);
const secondColumn = testimonials.slice(3, 6);
const thirdColumn = testimonials.slice(6, 9); 
const TestmonialsColunm = (props:  { className?: string; testimonials: typeof testimonials; duration?: number }) => (
    <div className={props.className}>
    <motion.div animate={{
        translateY: "-50%"
    }}
    transition={{
        repeat: Infinity,
        duration: props.duration || 10,
        ease: 'linear',
        repeatType: "loop"
    }} 
    className="flex flex-col gap-6 ">
        {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
                {props.testimonials.map(({text, avatarImg, name, title}) => (
                <div className="p-10 border border-solid border-[#222222]/10 rounded-3xl shadow-[0_7px_14px#EAEAEA] max-w-xs w-full">
                    <div>{text}</div>
                    <div className="flex items-center gap-2 mt-5">
                        <Image src={avatarImg} alt={name} width={40} height={40} className="h-10 w-10 rounded-full"/>
                        <div className="flex flex-col ">
                            <div className="font-medium tracking-tight leading-5">{name}</div>
                            <div className="leading-5 tracking-tight">{title}</div>
                        </div>
                    </div>
                </div>    
            ))}
            </React.Fragment>
        ))}
            
        </motion.div>
        </div>
)


export const Testimonials = () => {
  return (
  <section className="bg-white">
    <div className="container">
        <div className="section-heading">
        <div className="flex justify-center">
             <div className="tag">Testmonials</div>
        </div>
        <h2 className="section-tittle mt-5">What our users say</h2>
        <p className="section-description mt-5">Collecting your reviews has never been this easy, our app has become an essential tool for users around the world.</p>
        </div>
        <div className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[738px] overflow-hidden">
            <TestmonialsColunm testimonials={firstColumn} duration={15}/>
            <TestmonialsColunm testimonials={secondColumn} className="hidden md:flex" duration={19}/>
            <TestmonialsColunm testimonials={thirdColumn} className="hidden lg:flex" duration={17}/>
        </div>
    </div>
  </section>
)
};
