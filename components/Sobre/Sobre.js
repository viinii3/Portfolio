import styles from './Sobre.module.css'
import { Typewriter } from 'nextjs-simple-typewriter'
import { FiSend } from "react-icons/fi";

export default function Sobre(){
    return(
        <div className={styles.sobre}>
            <h2>Olá eu sou</h2>
            <span>
                <Typewriter
                    words={['Marcos Vinicius!', 'Desenvolvedor Front-End!']}
                    loop={0}
                    cursor
                    cursorStyle='|'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                />
            </span>
            <p>
                Programador desde 2021, sou apaixonado<br/> 
                pelo mundo da tecnologia e me mantenho <br/> 
                constantemente atualizado sobre as<br/>  
                inovações e tendências da área.
            </p>
            <a href="https://wa.me/5511912125307" target="_blank" data-aos="fade-right">
                <FiSend /> Say Hello
            </a>
        </div>
    )
}