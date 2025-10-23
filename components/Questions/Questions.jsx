import { React } from 'react';
import styles from './Questions.module.scss';
import QuestionsTabs from './Components/QuestionsTabs/QuestionsTabs';
import listQuestions from '@/json/data/questions.json';


export default function Questions() {

   return (
      <section className='container-large' id='anhor5'>
         <div className={styles.questions__body}>
            <h2 className={styles.questions__title}>frequently <br /> asked questions</h2>
            <QuestionsTabs list={listQuestions} />
         </div>
      </section>
   )
}  