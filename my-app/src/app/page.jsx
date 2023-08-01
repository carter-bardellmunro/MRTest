'use client'
import React, { useEffect } from "react"

const Home = () => {

  useEffect(() => {
    const getData = async () => {
      const query = await fetch('https://3sb655pz3a.execute-api.ap-southeast-2.amazonaws.com/live/product')
      const res = await query.json()
      console.log("data from api", res)
    }
    getData()
  }, [])

  return (
    <div>
      <h1>Hello</h1>
    </div>
  )
}

export default Home
