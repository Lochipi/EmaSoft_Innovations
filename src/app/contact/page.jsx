import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <h3>Let's Keep in Touch</h3>
      </div>
      <div className={styles.content}>
        <div className={styles.imgContainer}>
          <Image
            src="/contact.png"
            alt='...'
            fill={true}
            className={styles.image}
          />
        </div>
        <div className={styles.form}>
          <input type="text" className={styles.input} placeholder="your name" />
          <input type="text" className={styles.input} placeholder="your email" />
          <textarea name="message" id="" cols="30" rows="10" placeholder='message' className={styles.textArea}></textarea>

          <Button url="#" text={"Send"}/>
        </div>
      </div>
    </div>
  )
}

export default Contact
