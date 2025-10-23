import React from 'react';
import styles from '../Exchange.module.scss';
import details from '@/json/data/transaction_details.json';
import ExchangeHeader from '../ExchangeHeader';
import Message from '../Components/Message/Message';
import TransactionDetails from '../TransactionDetails';
import ButtonBorderAnimation from '@/components/Buttons/ButtonBorderAnimation/ButtonBorderAnimation';


import SimpleTabs from '../../Tabs/SimpleTabs/SimpleTabs';
import ChangeTabs from '../../Tabs/ChangeTabs/ChangeTabs';
import ExchangeCrypto from '../ExchangeCrypto';
import ExchangeCryptoForm from '../ExchangeCryptoForm';



const tabsList = [
   {
      id: 1,
      title: "Transaction details",
      component: TransactionDetails,
      props: details
   }
]

const changeTabsProps = [
   {
      id: 1,
      text: "CRYPTO",
      disabled: false,
      component: ExchangeCrypto
   },
   {
      id: 2,
      text: "FIAT",
      disabled: true,
      component: null
   },
   {
      id: 3,
      text: "DEFI",
      disabled: true,
      component: null
   }
];

export default function Exchange({ action }) {

   return (
      <>
         <div className={styles.exchange__title}>Exchange</div>
         <div className={`${styles.exchange__container} modal-body`} >
            <div className={styles.exchange__body}>

               <ExchangeHeader
                  iconType='notifications'
                  action={action}
               />

               <ChangeTabs props={changeTabsProps} />

            </div>

            <ExchangeCryptoForm />

            <Message
               color="red"
               text="Don't forget to include the XRP Destination Tag from your wallet. If it's required but is missing, your Ripples won't be delivered."
            />

            <Message
               color="green"
               text="The floating rate can change at any point due to market conditions, so you might receive more or less crypto than expected."
            />

            <div style={{ marginTop: '40px' }}>
               <SimpleTabs listTabs={tabsList} />
            </div>

            <div className={styles.exchange__button}>
               <ButtonBorderAnimation
                  text="Next step"
                  action={action.nextStep}
                  nameClass='large'
               />
            </div>

         </div>
      </>
   );
};