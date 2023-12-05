import React from 'react'
import styles from './card.module.css'
import Image from 'next/image'
import Link from 'next/link'

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/p1.jpeg" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.date}>2023.11.27 -</span>
          <span className={styles.category}> Culture </span>
        </div>
        <Link href="/">
          <h1 className={styles.postTitle}>Title</h1>
        </Link>
        <p className={styles.desc}> Description Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit ducimus quos dolor obcaecati porro, iure ea, repellendus deserunt debitis in eum. Sequi fugit vero ratione.</p>

        <Link href="/" className={styles.link}>
          Read More
        </Link>
      </div>
    </div>
  )
}

export default Card
