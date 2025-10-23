'use client'
import { React, useRef } from "react";
import styles from '../Header.module.scss';
import Link from "next/link";
import Lottie from "lottie-react";
import logoJSON from '../../../assets/json/animation/logo.json'
import useHoverLottie from "@/hooks/useHoverLottie";


export default function HeaderLogo() {

   const logoRef = useRef(null);
   const hoverLottie = useHoverLottie(logoRef);

   return (
      <div className={styles.header__logo}>
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
   )
}