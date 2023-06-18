import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'

function Page() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>Lorem ipsum dolor sit elit. Saepe, optio?</h1>
          <p className={styles.desc}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates assumenda aspernatur mollitia! Libero excepturi ex et aut, ab quisquam nesciunt.</p>
          <div className={styles.author}>
            <Image
              className={styles.avatar}
              width={40}
              height={40}
              src="/contact.png"
              alt=''
            />
            <span className={styles.username}>John Doe</span>
          </div>
        </div>
        <div className={styles.imageContainer}>
            <Image
              className={styles.image}
              fill={true}
              src="/illustration.png"
              alt='image subfolder'
            />
          </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique, fugiat vero! Laboriosam nam sapiente tenetur quasi debitis. Aliquam provident ut deserunt quo consequatur, ad nulla sunt omnis est corrupti alias corporis earum laboriosam ullam placeat? Magnam provident earum minima perferendis, et voluptatibus accusantium soluta delectus quis corporis in doloremque tempora, <br/> <br/> ipsam illo? Asperiores in, illum libero officia blanditiis consectetur laboriosam sed eum et. Temporibus animi ab omnis distinctio quae sed in sunt quas, quos perferendis officia autem, harum ipsum sequi ratione obcaecati earum similique, cum iure? Expedita quo praesentium sapiente in atque? Enim commodi asperiores, quod excepturi animi explicabo sequi?
        </p>
      </div>
    </div>
  )
}

export default Page