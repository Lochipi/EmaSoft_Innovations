import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Link from 'next/link'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts',
  { cache: 'no-store' })

  // handle errors
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }

  return res.json()
}


const page = async () => {

  const data = await getData()

  return (

    <div className={styles.mainContainer}>
      {data.map((items) => (

        < Link href="blog/testid" className={styles.container} key={items.id} >
          <div className={styles.item}>
            <div className={styles.imgContainer}>
              <Image
                className={styles.image}
                width={400}
                height={250}
                // fill={true}
                src="/contact.png"
                alt='Contact Image'
              />
            </div>
            <div className={styles.content}>
              <h1 className={styles.title}>{items.title}</h1>
              <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum blanditiis repellendus, officia laborum veniam eos alias, voluptatum rem fuga libero ut doloribus ducimus eius accusamus quidem. Accusantium, beatae quos.</p>
            </div>
          </div>
        </Link>
      ))}
      {/* <Link href="blog/testid" className={styles.container}>
        <div className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              width={400}
              height={250}
              // fill={true}
              src="/contact.png"
              alt=''
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum blanditiis repellendus, officia laborum veniam eos alias, voluptatum rem fuga libero ut doloribus ducimus eius accusamus quidem. Accusantium, beatae quos.</p>
          </div>
        </div>
      </Link>
      <Link href="blog/testid" className={styles.container}>
        <div className={styles.item}>
          <div className={styles.imgContainer}>
            <Image
              className={styles.image}
              width={400}
              height={250}
              // fill={true}
              src="/contact.png"
              alt=''
            />
          </div>
          <div className={styles.content}>
            <h1 className={styles.title}>Test</h1>
            <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum blanditiis repellendus, officia laborum veniam eos alias, voluptatum rem fuga libero ut doloribus ducimus eius accusamus quidem. Accusantium, beatae quos.</p>
          </div>
        </div>
      </Link> */}
    </div >
  )
}

export default page
