import styles from './Projetos.module.css'
import Image from 'next/image'

import image1 from './imagens/1.png'
import image2 from './imagens/2.png'
import image3 from './imagens/3.png'
import image4 from './imagens/4.png'
import image5 from './imagens/5.png'
import image6 from './imagens/6.png'
import image7 from './imagens/7.png'
import image8 from './imagens/8.png'
import image9 from './imagens/9.png'
import image10 from './imagens/10.png'

export default function Projetos(){
    return(
        <div className={styles.projetos} id='projetos'>
            <h1>Projetos</h1>
            <div className={styles.projetosLink}>
                <a href='https://projeto3-virid.vercel.app' target="_blank" data-aos="flip-down">
                    <Image
                        className={styles.img}
                        src={image1}
                        alt='projeto1'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay}></div>
                </a>
                <a href='https://ebac-tech-talks-viinii3.vercel.app' target="_blank" data-aos="flip-down">
                    <Image
                        className={styles.img}
                        src={image2}
                        alt='projeto2'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay}></div>
                </a>
                <a href='https://clone-disney-plus-mauve.vercel.app' target="_blank" data-aos="flip-down">
                    <Image
                        className={styles.img}
                        src={image3}
                        alt='projeto3'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay}></div>
                </a>
                <a href='https://horario-em-tempo-real-pi.vercel.app' target="_blank" data-aos="flip-down">
                    <Image
                        className={styles.img}
                        src={image4}
                        alt='projeto4'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay}></div>
                </a>
                <a href='https://landing-page-nemo.vercel.app' target="_blank" data-aos="flip-down">
                    <Image
                        className={styles.img}
                        src={image5}
                        alt='projeto5'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay}></div>
                </a>
                <a href='https://projeto2-ebac-zeta.vercel.app' target="_blank" data-aos="flip-down">
                    <Image
                        className={styles.img}
                        src={image6}
                        alt='projeto6'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay}></div>
                </a>
                <a href='https://to-do-vue-js-chi.vercel.app' target="_blank" data-aos="flip-down">
                    <Image
                        className={styles.img}
                        src={image7}
                        alt='projeto7'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay}></div>
                </a>
                <a href='https://calculadora-imc-jet.vercel.app' target="_blank" data-aos="flip-down">
                    <Image
                        className={styles.img}
                        src={image8}
                        alt='projeto8'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay}></div>
                </a>
                <a href='https://galeria-de-imagens-gamma.vercel.app' target="_blank" data-aos="flip-down">
                    <Image
                        className={styles.img}
                        src={image9}
                        alt='projeto9'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay}></div>
                </a>
                <a href='https://mentalista-theta.vercel.app' target="_blank" data-aos="flip-down">
                    <Image
                        className={styles.img}
                        src={image10}
                        alt='projeto10'
                        height={280}
                        width={320}
                    />
                    <div className={styles.overlay}></div>
                </a>
            </div>
        </div>
    )
}