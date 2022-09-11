import Link from "next/link"

import { useState, useEffect } from "react"

import A from "./components/A"
import MainContainer from "./components/MainContainer"
const Users = ({users}) => {

    return (
        <MainContainer
            keywords={"Список пользователей"}

        >
            
            <h1>Список пользователей</h1>
            <ul>
                {users.map((item) => {
                    return (
                        <li key={item.id} >
                            <A text={item.name} href={`/users/${item.id}`} />
                        </li>
                    )
                })}
            </ul>
        </MainContainer>

    )
}

export default Users

export async function getStaticProps(context) {
    const response = await fetch("https://jsonplaceholder.typicode.com/users") 
    const users = await response.json()
    
    return {
      props: {users}, // will be passed to the page component as props
    }
  }