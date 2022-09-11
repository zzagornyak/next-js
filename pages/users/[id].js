import { useRouter } from "next/router"
import { useEffect } from "react"
import MainContainer from "../components/MainContainer"

export default function ({user}) {

    return (
        <>
            <MainContainer keywords={user.name}>
                <div>
                    <h1>Пользователь №{user.id}</h1>
                    <h2>Имя пользователя: {user.name}</h2>
                    <h3>e-mail: {user.email}</h3>
                    <h3>adress: {user.address.city}, {user.address.street}, {user.address.suite} </h3>
                    <h3>{user.phone}</h3>
                </div>
            </MainContainer>    
        </>
    )
}


export async function getServerSideProps({params}) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`) 
    const user = await response.json()
    return {
      props: {user}, // will be passed to the page component as props
    }
  }