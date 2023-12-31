import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'

function page({ params }) {
    console.log(params)
    return (
        <div className={styles.container}>
            <h1 className={styles.catTitle}>{params.category}</h1>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum blanditiis repellendus, officia laborum veniam eos alias, voluptatum rem fuga libero ut doloribus ducimus eius accusamus quidem. Accusantium, beatae quos.</p>
                    <Button text="Learn More" url="0" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="/contact.png"
                        alt=''
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum blanditiis repellendus, officia laborum veniam eos alias, voluptatum rem fuga libero ut doloribus ducimus eius accusamus quidem. Accusantium, beatae quos.</p>
                    <Button text="Learn More" url="0" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="/contact.png"
                        alt=''
                    />
                </div>
            </div>
            <div className={styles.item}>
                <div className={styles.content}>
                    <h1 className={styles.title}>Test</h1>
                    <p className={styles.desc}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio rerum blanditiis repellendus, officia laborum veniam eos alias, voluptatum rem fuga libero ut doloribus ducimus eius accusamus quidem. Accusantium, beatae quos.</p>
                    <Button text="Learn More" url="0" />
                </div>
                <div className={styles.imgContainer}>
                    <Image
                        className={styles.img}
                        fill={true}
                        src="/contact.png"
                        alt=''
                    />
                </div>
            </div>

            {/* <div className={styles.imgContainer}>
        <Image 
            className={styles.img}
            fill={true}
            src="/contact.png"
            alt=''
        />
      </div> */}
        </div>
    )
}

export default page
