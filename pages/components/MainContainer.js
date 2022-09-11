import Head from "next/head"
import A from "./A"
import styles from "../styles/MainContainer.module.css"
const MainContainer = ({ children, keywords }) => {
    return (
            <>
                <Head>
                    <meta keywords={"next.js zahorniak " + keywords}></meta>
                    <title>{keywords}</title>
                </Head>
                <nav className={styles.navbar}>
                    <A href={"/"} text={"Главная"} />
                    <A href={"/users"} text={"Пользователи"} />
                </nav>
                <div>
                    {children}
                </div>
            </>
    )
}

export default MainContainer