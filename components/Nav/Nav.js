import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav(){
    return(
        <div className={styles.nav} id='nav'>
            <ul className={styles.navList}>
                <li className={styles.navItem}>
                    <Link href='#nav' passHref>
                        Home
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href='#sobre' passHref>
                        Sobre
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href='#skills' passHref>
                        Skills
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href='#projetos' passHref>
                        Projetos
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href='#devzone' passHref>
                        DevZone
                    </Link>
                </li>
                <li className={styles.navItem}>
                    <Link href='#contato' passHref>
                        Contato
                    </Link>
                </li>
            </ul>
        </div>
    )
}