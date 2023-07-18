"use client";

import React, { useState, useEffect } from 'react';
import styles from './page.module.css';
import useSWR from 'swr';

const Page = () => {

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error, isLoading } = useSWR("https://jsonplaceholder.typicode.com/posts", fetcher)

  console.log(data)

  return (
    <div className={styles.container}>
      <h4>Dashboard page</h4>
    </div>
  )
}

export default Page
