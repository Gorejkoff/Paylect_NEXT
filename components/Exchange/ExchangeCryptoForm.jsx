import React from 'react';
import Input from '@/components/FormsElements/Input/Input';
import styles from '@/components/FormsElements/Form.module.scss';
import useInputOnlyNumbers from '@/hooks/forms/useInputOnlyNumbers';
import useInputNotCyrillic from '@/hooks/forms/useInputNotCyrillic';


export default function ExchangeCryptoForm() {

   const inputOnlyNumbers = useInputOnlyNumbers();
   const inputNotCyrillic = useInputNotCyrillic();

   return (
      <form action="#" method="post" name="" id="" >
         <div className={styles.input__group}>
            <Input
               type="text"
               key="1"
               name="wallet_address"
               id="wallet_address"
               placeholder="Enter Wallet address *"
               required
               regexp='.{2,}'
               action={inputNotCyrillic}
            />
            <Input
               className="input-tag"
               type="text"
               key="2"
               name="tag"
               id="tag"
               placeholder="Enter tag *"
               required
               regexp=".{2,}"
               action={inputOnlyNumbers}
            />
         </div>
         <Input
            type="text"
            key="3"
            name="invoice"
            id="invoice"
            placeholder="Email for invoice * *"
            required
            regexp='.{2,}'
         />
      </form>
   );
};