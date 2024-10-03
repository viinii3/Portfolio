import styles from './Footer.module.css'

export default function Footer(){
    return(
        <div className={styles.footer} data-aos="fade-right" data-aos-offset="0">
            <p>&copy; Marcos Vinicius - 2021. Todos os direitos reservados.</p>
        </div>
    )
}