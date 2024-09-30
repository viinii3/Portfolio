import Exp from '../../components/Exp/Exp';
import Nav from '../../components/Nav/Nav';
import Sobre from '../../components/Sobre/Sobre';
import './globals.css'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.backgroundContent}>
      <Nav/>
      <Sobre/>
      <Exp/>
    </div>
  );
}
