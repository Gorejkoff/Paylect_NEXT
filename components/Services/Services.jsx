import React from 'react';
import ServicesTitle from './ServicesTitle';
import ServicesBlock from './ServicesBlock';
import data from '@/json/data/services.json';

export default function Services() {
   return (
      <section id='anchor_3'>
         <div className='container-large'>
            <ServicesTitle />
            <div>
               {data.map((item) => <ServicesBlock data={item} key={item.id} />)}
            </div>
         </div>
      </section>
   )
}