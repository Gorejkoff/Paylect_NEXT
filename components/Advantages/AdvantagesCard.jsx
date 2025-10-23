'use client'

import React, { useRef } from "react";
import Lottie from "lottie-react";
import styles from './Advantages.module.scss';


export default function AdvantagesCard(props) {
  const lottieRef = useRef();

  return (
    <div className={styles.advantages}
      onPointerEnter={() => lottieRef.current?.play()}
      onPointerLeave={() => lottieRef.current?.stop()}
    >
      <div className={styles['advantages__header']}>
        <span>{props.data.header[0]}</span>
        <h2>{props.data.header[1]}</h2>
      </div>
      {props.data.json ? (
        <div className={styles['advantages__image']}>
          <Lottie
            lottieRef={lottieRef}
            animationData={require(`@/json/animation/${props.data.json}`)}
            style={{ width: "150px" }}
            loop={true}
            autoplay={false}
          />
        </div>
      ) : (
        <div className={styles['advantages__image']}>{props.data.image}</div>
      )}
      <div className={styles['advantages__title']}>{props.data.title}</div>
      <div className={styles['advantages__line']} />
      <div className={styles['advantages__text']}>{props.data.text}</div>
      <div className={styles['advantages__number']}>00{props.data.id}.</div>
    </div>
  );
}
