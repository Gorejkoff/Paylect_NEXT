import React from 'react';
import stylesModal from '@/components/Modals/Modals.module.scss';
import ButtonClose from '@/components/Buttons/ButtonClose/ButtonClose';

export default function ModalBase({ children, id, title }) {

   return (
      <div className={stylesModal.modal__scroll}>
         <div className='container-modal'>
            <div className={`${stylesModal.modal__body} modal-body`}  >
               <div className={stylesModal['modal__body-fixed-button']}>
                  <div className={stylesModal['modal__body-fixed-background']}>
                     <ButtonClose id={id} />
                  </div>
               </div>
               <div className={stylesModal.modal__header}>
                  <div className={stylesModal.modal__title}>{title}</div>
               </div>
               {children}
            </div>
         </div>
      </div>
   );
};