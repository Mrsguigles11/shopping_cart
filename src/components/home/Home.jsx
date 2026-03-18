import styles from "./Home.module.css"
import "../../App.css"

export function Home () {
    return (
        <div className={`${styles.home} content`}>
            <h1>Home</h1>
        </div>
    )
}