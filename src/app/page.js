"use client"

import Contato from '../../components/Contato/Contato';
import Devzone from '../../components/Devzone/Devzone';
import Exp from '../../components/Exp/Exp';
import Footer from '../../components/Footer/Footer';
import Nav from '../../components/Nav/Nav';
import Projetos from '../../components/Projetos/Projetos';
import Skills from '../../components/Skills/Skills';
import Sobre from '../../components/Sobre/Sobre';

import './globals.css'
import styles from './page.module.css'

import { React, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
        duration: 800,
        once: false,
    })
  }, [])

  return (
    <div className={styles.backgroundContent}>
      <Nav/>
      <Sobre/>
      <Exp/>
      <Skills/>
      <Devzone/>
      <Projetos/>
      <Contato/>
      <Footer/>
    </div>
  );
}
