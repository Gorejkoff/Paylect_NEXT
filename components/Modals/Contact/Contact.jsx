'use client'

import { React, useRef } from 'react';
import styles from './Contact.module.scss';
import BackgroundModal from '../Components/BackgroundModal/BackgroundModal';
import ButtonClose from '@/components/Buttons/ButtonClose/ButtonClose';
import ButtonBorderAninamation from '@/components/Buttons/ButtonBorderAnimation/ButtonBorderAnimation';
import Input from '@/components/FormsElements/Input/Input';
import InputMedia from '@/components/FormsElements/InputMedia/InputMedia';
import { $api } from '@/api/api';
import { useSelector } from 'react-redux';
import useCloseModal from '@/store_redux/hooks/modalsHooks/useCloseModal';
import useOpenModal from '@/store_redux/hooks/modalsHooks/useOpenModal';


const id = 'contacts';

export default function Contact() {
  const phoneInputValid = useRef(false);

  const closeModalContact = useCloseModal(id);
  const openModalSent = useOpenModal('sent');
  const isOpen = useSelector(state => state.modals[id].isOpen);

  async function checkSubmit(event) {
    event.preventDefault();
    // console.log('event:', event);
    if (!phoneInputValid.current) return;

    const email = document.getElementById('email')?.value ?? '';
    const name = document.getElementById('name')?.value ?? '';
    const media = document.getElementById('media')?.value ?? '';
    const link = document.getElementById('link')?.value ?? '';
    const project = document.getElementById('project')?.value ?? '';
    try {
      const formData = {
        name,
        description: project,
        email,
        contactType: media,
        contact: link,
        number: '',
      };

      const response = await $api.post('/feedback', formData, {
        headers: { 'Project-Name': 'paylect.com' },
      });

      console.log('API /feedback response', response.data);

      openModalSent();
      closeModalContact();
    } catch (e) {
      console.error(e);
    }
  }

  function statePhoneInput(state) {
    state ? (phoneInputValid.current = true) : (phoneInputValid.current = false);
  }



  return (
    <BackgroundModal id={id} opacity={true}>

      <div className='container-large'>
        <form
          action='#'
          method='post'
          name=''
          id=''
          onSubmit={(event) => {
            checkSubmit(event);
          }}
        >
          <div className={`${styles.contact__body} ${'modal-body'}`}>
            <div className={styles.contact__shell}>
              <div className={styles.contact__title}>
                <ButtonClose id={id} />
                <span>Contact Us</span>
                <div className={styles.contact__indent}></div>
              </div>
              <div className={styles.contact__text}>
                <div className={styles['contact__text-block']}>
                  <div>&#91; Disclaimer</div>
                  <div>
                    <span>Fill out the form to receive customized terms for your project</span>
                  </div>
                </div>
              </div>
            </div>
            <div>

              <Input
                type='text'
                key='1'
                name='name'
                id='name'
                placeholder='Enter your name *'
                required
                regexp='.{1,}'
              />

              <Input
                type='text'
                key='2'
                name='email'
                id='email'
                placeholder='Enter your email *'
                required
                regexp='^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
              />


              <InputMedia statePhoneInput={statePhoneInput} />

              <Input
                key='5'
                tag='textarea'
                name='project'
                id='project'
                placeholder='Describe your project *'
                required
                regexp='.{1,}'
              />

              <div className={styles['contact__text-form']}>
                <div className={styles.contact__text}>
                  By clicking the 'Send' button, you give your consent to the paylect
                  Administration to process and store your personal and other data provided in the
                  form above.
                </div>
              </div>
              <div className={styles['contact__button-wrapper']}>
                <ButtonBorderAninamation type='submit' text='send' />
                {/* <Button type={'submit'} text='send' /> */}
              </div>
            </div>
          </div>
        </form>
      </div>

    </BackgroundModal>
  );
}
