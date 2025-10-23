import React from "react";
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import AdvantagesCard from "./AdvantagesCard";
import styles from './Advantages.module.scss';

export default function Advantages() {
   const content = {
      title: "Our mission",
      text: "Empowering businesses with secure, fast, and versatile cryptocurrency payment solutions that meet every financial need.",
   };

   const list = [
      {
         id: 1,
         header: ["Main advantages", "Global Reach"],
         image: "",
         json: "global_reach.json",
         title: "Global Reach",
         text: "Accept crypto payments from anywhere in the world, breaking down geographic barriers.",
      },
      {
         id: 2,
         header: ["Main advantages", "Easy Integration"],
         image: "",
         json: "easy_integration.json",
         title: "Easy Integration",
         text: "Quickly and seamlessly integrate Paylect into your existing systems without extensive technical expertise.",
      },
      {
         id: 3,
         header: ["Main advantages", "Versatile Tools"],
         image: "",
         json: "versatile_tools.json",
         title: "Versatile Tools",
         text: "All-in-one tools designed to simplify and enhance your cryptocurrency financial management.",
      },
   ];

   return (
      <div
         id="anchor_1"
         className='container'
      >
         <section>
            <SectionHeader data={content} />

            <div className={styles['advantages__grid']}>
               {list.map((item) => (
                  <AdvantagesCard data={item} key={item.id} />
               ))}
            </div>
         </section>
      </div>
   );
}
