'use client'

import { React, useRef } from "react";
import styles from './LogoBlock.module.scss';
import Link from "next/link";
import Lottie from "lottie-react";
import logoJSON from '@/json/animation/logo_green.json';
import useHoverLottie from "@/hooks/useHoverLottie";


export default function LogoFooter() {

   const logoRef = useRef(null);
   const hoverLottie = useHoverLottie(logoRef);

   return (
      <div className='container'>
         <div className={styles['logo-block']}>
            <Link href="/">
               <Lottie animationData={logoJSON}
                  lottieRef={logoRef}
                  loop={false}
                  autoplay={false}
                  onMouseEnter={() => { hoverLottie.play() }}
                  onMouseLeave={() => { hoverLottie.stop() }}
                  onComplete={() => hoverLottie.check()}
               />
            </Link>
         </div>
      </div>
   )
}

