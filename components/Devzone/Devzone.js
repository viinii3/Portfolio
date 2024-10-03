import styles from './Devzone.module.css'
import Image from 'next/image'

import image1 from './imagens/1.png'
import image2 from './imagens/2.png'

export default function Devzone(){
    return(
        <div className={styles.devzone} id='devzone'>
            <h1>Quem é DevZone</h1>
            <p>
                Estou em busca de reconhecimento<br/> 
                pelos meus projetos de freelancer, <br/> 
                todos vinculados à DevZone Innovations.
            </p>
            <div className={styles.companyBtn}>
                <a href='https://devzoneinnovations.com.br' target='_blank'>
                    Visitar
                </a>
            </div>
            <p>
                Aqui estão alguns projetos vinculados à DevZone Innovations:
            </p>
            <div className={styles.devzoneLink}>
                <a href='https://terelita-cafe.vercel.app' target="_blank" data-aos="flip-left">
                    <Image
                        className={styles.img0}
                        src={image1}
                        alt='projeto da devzone (terelita café)'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay0}></div>
                </a>
                <a href='https://terere-like.vercel.app' target="_blank" data-aos="flip-right">
                    <Image
                        className={styles.img0}
                        src={image2}
                        alt='projeto da devzone (tereré like)'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay0}></div>
                </a>
            </div>
        </div>
    )
}