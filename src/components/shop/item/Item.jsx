import styles from "./Item.module.css"

export function Item({data}) {
    return (
        <div className={styles.container}>
            <h1 className={styles.text}>{data.title}</h1>
            <img src={data.image} alt={data.title + " image"} className={styles.image}/>
            <p className={styles.text}>{data.price}</p>
        </div>
    )
}