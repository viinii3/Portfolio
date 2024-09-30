import styles from './Exp.module.css'
import { HiDownload } from "react-icons/hi";

export default function Exp(){
    return(
        <div className={styles.container} id='sobre'>
            <h1>Quem é Marcos Vinicius</h1>
            <div className={styles.box}>
                <div className={styles.expBox}>
                    <h2>Experiência</h2>
                    <p>
                        +2 anos de <br/>
                        experiencia
                    </p>
                </div>
                <div className={styles.expBox}>
                <h2>Completo</h2>
                    <p>
                        +30 projetos <br/>
                        completos
                    </p>
                </div>
                <div className={styles.expBox}>
                <h2>Suporte</h2>
                    <p>
                        08h - 18h
                    </p>
                </div>
            </div>
            <div className={styles.text}>
                <p>
                    Sou um desenvolvedor de software dedicado a 
                    resolver problemas com soluções inovadoras e 
                    funcionais. Tenho experiência com diversas 
                    linguagens de programação e frameworks, 
                    buscando sempre atualizar minhas habilidades 
                    e seguir as tendências emergentes. Minha trajetória 
                    inclui aprendizagem contínua, experimentação 
                    prática e colaboração em projetos, onde desenvolvi 
                    competências em comunicação eficaz, trabalho em 
                    equipe e compartilhamento de conhecimento. 
                    Valorizo a aplicação prática dos conhecimentos 
                    teóricos e procuro projetos que ofereçam 
                    desafios reais. Além das habilidades técnicas, 
                    desenvolvo competências em trabalho em equipe, 
                    resolução de conflitos e gerenciamento de projetos. 
                    Estou comprometido com o aprendizado contínuo e 
                    o crescimento profissional, sempre buscando contribuir 
                    para a comunidade tecnológica.
                </p>
            </div>
            <div className={styles.curriculoBox}>
                <div className={styles.CVBox}>
                    <a href='./curriculo.pdf' download>
                        <HiDownload /> Download CV
                    </a>
                </div>
                <div className={styles.CVBox}>
                    <a href='./curriculoEnglish.pdf' download>
                        <HiDownload /> Download CV English
                    </a>
                </div>
            </div>
        </div>
    )
}