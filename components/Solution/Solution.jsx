import React from 'react';
import styles from './styles.module.scss';
import SectionHeader from '@/components/SectionHeader/SectionHeader';
import listData from '@/json/data/solution.json';
import SolutionTable from '@/components/Solution/SolutionTable';
import SolutionList from '@/components/Solution/SolutionList';
import SolutionButton from '@/components/Solution/SolutionButton'

const content = {
   title: 'The best solution',
   text: 'Paylect offers the ultimate crypto payment platform, combining cutting-edge tools with global accessibility to ensure secure and efficient financial management.',
}

export default function Solution() {

   return (
      <div
         id='anchor_2'
         className='container'
      >
         <section>
            <SectionHeader data={content} />
            <div className={styles.solution__body}>
               <SolutionTable />
               <div className={styles.solution__table}>
                  <div className={styles.solution__grid}>
                     {listData.map((item, index) => <SolutionList item={item} key={index} />)}
                  </div>
               </div>
            </div>
            <SolutionButton />
         </section>
      </div>
   )
}