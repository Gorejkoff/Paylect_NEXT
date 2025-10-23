'use client'

import { React, useEffect, useRef } from "react";
import styles from "./Footer.module.scss";
import LinkTextAnimated from "../Buttons/LinkTextAnimated/LinkTextAnimated";
import ButtonToTop from '@/components/Buttons/ButtonToTop/ButtonToTop';
import listNav from '@/json/data/nav_anhors.json';

// import useOpenModal from "../../Hooks/ModalsHooks/useOpenModal";

export default function Footer() {

  // const openModalTerms = useOpenModal("terms");
  // const openModalPrivacy = useOpenModal("privacy");

  const refParentPrivacy = useRef(null);
  const refPrivacy = useRef(null);
  const refTerms = useRef(null);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1200px)");
    function moveElement() {
      if (!refParentPrivacy.current || !refPrivacy.current || !refTerms.current) return;
      if (media.matches) {
        refParentPrivacy.current.append(refPrivacy.current);
        return;
      }
      refTerms.current.before(refPrivacy.current);
    }
    window.addEventListener("resize", moveElement);
    return () => {
      window.removeEventListener("resize", moveElement);
    }

  }, [])

  return (
    <footer className={styles.footer}>
      <div className='container'>
        <div className={styles['footer__body']}>
          <div className={styles['footer__wrapper']}>
            <div className={styles['footer__info']}>Innovate. Customize. Collaborate.</div>
            <div>
              <a href="#0" className={styles['footer__link']}>support@paylect.com</a>
              <br />
              <div className={styles['footer__bottom-text']}>
                Paylect Limited Liability Company
                <br />
                Сompany number 3254 LLC 2023
                <br />
                Kingstown, St. Vincent and the Grenadines
              </div>
            </div>
          </div>
          <div className={styles['footer__bottom']}>
            <div className={styles['footer__anchor-block']}>
              {listNav.map((data, index) => (
                <div key={index}>
                  <LinkTextAnimated props={data} />
                </div>
              ))}
              <div className={styles['footer__slash']} key="10">&#47;&#47;</div>
              <div className={styles['footer__privacy']} ref={refParentPrivacy} key="11">
                <LinkTextAnimated
                  ref={refPrivacy}
                  props={{
                    type: 'button',
                    name: 'Privacy',
                    id: 'privacy',
                  }} />
              </div>
            </div>
            <div className={styles['footer__terms']}>
              <LinkTextAnimated
                ref={refTerms}
                props={{
                  type: 'button',
                  name: 'Terms',
                  id: 'terms',
                }} />
            </div>
            <div className={styles['footer__copyright']}>
              <ButtonToTop text='Back to top' />
              <div>©2024 Paylect.com</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
