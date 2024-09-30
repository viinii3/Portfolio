import styles from './Nav.module.css'
import Link from 'next/link'

export default function Nav(){
    return(
        <div className={styles.nav}>
            <ul>
                <li>
                    <Link href='#' passHref>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='#sobre' passHref>
                        Sobre
                    </Link>
                </li>
                <li>
                    <Link href='#skiils' passHref>
                        Skiils
                    </Link>
                </li>
                <li>
                    <Link href='#projetos' passHref>
                        Projetos
                    </Link>
                </li>
                <li>
                    <Link href='#devzone' passHref>
                        DevZone
                    </Link>
                </li>
                <li>
                    <Link href='#contato' passHref>
                        Contato
                    </Link>
                </li>
            </ul>
        </div>
    )
}