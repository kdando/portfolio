'use client'
//useEffect is client side so we have to specify this is a client-side component//

import Image from 'next/image'
import gsap from 'gsap';
import { useEffect, useRef } from 'react';

import styles from './index.module.css'

export default function Lander() {

  //refs for the marquee paras//
  const firstWelcome = useRef(null);
  const secondWelcome = useRef(null);

  //variables used in the animation
  let xPercent = 0;
  let direction = 1;

  //start animation on page load//
  useEffect(() => {
    requestAnimationFrame(animation)
  }, [])

  //animation to scroll the text to the right (because direction is positive, if -1 it would go left)//
  const animation = () => {
    //if out of bounds reset x: this achieves the infinite scroll//
    if (xPercent <= -100) {
      xPercent = 0
    }
    if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstWelcome.current, {xPercent: xPercent})
    gsap.set(secondWelcome.current, {xPercent: xPercent})
    //multiplication sets speed of scroll//
    xPercent += 0.05 * direction;
    requestAnimationFrame(animation);
  }

  return (
    <section className={styles.lander}>
      <div className={styles.splash}>
        <h1 className={styles.myNameText}>Karl Dando</h1>

      </div>
      {/* IMAGE ELEMENT LOOKS IN PUBLIC BY DEFAULT */}
      {/* <Image
        src='/babyflower.jpeg'
        alt='background'
        fill={true}
        /> */}

        

        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <p ref={firstWelcome}>WILKOMMEN BIENVENUE ALOHA </p>
            <p ref={secondWelcome}> WILKOMMEN BIENVENUE ALOHA</p>
          </div>
        </div>

      </section>
  )

}