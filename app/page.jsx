import React from "react";
import Carousel from "@/components/Carousel/Carousel";
import Advantages from "@/components/Advantages/Advantages";
import Solution from "@/components/Solution/Solution";
import Services from "@/components/Services/Services";
import LogoBlock from '@/components/LogoBlock/LogoBlock';
import Questions from "@/components/Questions/Questions";
import Quote from "@/components/Quote/Quote";

export default function Home() {
  return (
    <>
      <Carousel
        text='PAYLECT'
      />

      <Advantages />

      <Solution />

      <Services />

      <Quote />

      <Questions />

      <LogoBlock />

      <Carousel
        text='PAYLECT'
        version={true}
        color='#ffffff'
      />
    </>
  );
}
