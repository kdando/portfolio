'use client'

//useEffect is client side so we have to specify this is a client-side component//

import Image from 'next/image'
import styles from './page.module.css'

import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function Home() {

  //refs for the marquee paras//
  const firstWelcome = useRef(null);
  const secondWelcome = useRef(null);

  //variables used in the animation
  let xPercent = 0;
  let direction = 1;

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
    xPercent += 0.1 * direction;
    requestAnimationFrame(animation);
  }

  return (
    <main className={styles.main}>
      {/* IMAGE ELEMENT LOOKS IN PUBLIC BY DEFAULT */}
      <Image
        src='/babyflower.jpeg'
        alt='background'
        fill={true}
        />

        <div className={styles.sliderContainer}>
          <div className={styles.slider}>
            <p ref={firstWelcome}>WILKOMMEN BIENVENUE ALOHA </p>
            <p ref={secondWelcome}> WILKOMMEN BIENVENUE ALOHA</p>
          </div>
        </div>
    </main>
  )

}