import React from "react";
import styles from './styles.module.scss';
import ServicesLottie from "./ServicesLottie";
import ServicesButton from "./ServicesButton";


export default function ServicesBlock(props) {

  return (
    <article className={styles['services__block-body']}>
      <div className={styles['services__block-number']}>S/00{props.data.id}</div>

      <div className={styles['services__block-content']}>
        <div className={styles['services__block-content-wrapper']}>
          <h3 className={styles['services__block-title']}>{props.data.title}</h3>
          <p className={styles['services__block-text']}>{props.data.text}</p>

          {props.data.button && (
            <ServicesButton />
          )}
        </div>
      </div>

      <div className={styles['services__block-lottie']}>
        <div className={styles['services__image-wrapper']}>
          {props.data.json ? (
            <ServicesLottie file={props.data.json} />
          ) : (
            <img
              src={`/svg/${props.data.image}`}
              alt="анимация" />
          )}
        </div>
      </div>
    </article>
  );
}
