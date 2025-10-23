import { React } from 'react';
import stylesModal from '../Modals.module.scss';
import BackgroundModal from '@/components/Modals/Components/BackgroundModal/BackgroundModal';
import ButtonClose from '@/components/Buttons/ButtonClose/ButtonClose';


const id = 'sent';

export default function Sent() {

   return (

      <BackgroundModal id={id} opacity={true}>

         <div className={stylesModal.modal__scroll}>
            <div className='container-modal'>
               <div className={`${stylesModal.modal__body} ${'modal-body'}`}>
                  <div className={stylesModal['modal__sent-button-close']}>
                     <ButtonClose id={id} />
                  </div>
                  <div className={stylesModal.modal__header}>
                     <div className={stylesModal.modal__title}>Сontact form</div>
                  </div>
                  <div className={stylesModal['modal__sent-text']}>YOUR MESSAGE HAS BEEN SENT SUCCESSFULLY!</div>
               </div>
            </div>
         </div>
      </BackgroundModal>
   )
}