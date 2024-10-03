import styles from './Contato.module.css'
import Image from 'next/image'

import instagram from './imagens/001-instagram.png'
import github from './imagens/002-github.png'
import linkedin from './imagens/003-linkedin.png'

export default function Contato(){
    return(
        <div className={styles.contato} id='contato'>
            <h1>Contato</h1>
            <p>
                Fique à vontade para me acompanhar 
                nas redes sociais e ficar por dentro 
                das minhas atividades e novidades no 
                mundo da tecnologia. Basta clicar nos 
                links de contato abaixo e se conectar 
                comigo. Será um prazer compartilhar 
                conhecimento, projetos e tudo o que 
                envolve esse universo!
            </p>
            <div className={styles.redes}>
                <a href='https://www.linkedin.com/in/marcosvclementec/' className={styles.container} target='_blank' data-aos="zoom-in">
                    <Image
                        src={linkedin}
                        alt='foto linkedin'
                        height={40}
                        width={40}
                    />
                </a>
                <a href='https://www.instagram.com/viinii__3/' className={styles.container} target='_blank' data-aos="zoom-in">
                    <Image
                        src={instagram}
                        alt='foto instagram'
                        height={40}
                        width={40}
                    />
                </a>
                <a href='https://github.com/viinii3' className={styles.container} target='_blank' data-aos="zoom-in">
                    <Image
                        src={github}
                        alt='foto github'
                        height={40}
                        width={40}
                    />
                </a>
            </div>  
        </div>
    )
}