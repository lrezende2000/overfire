import Header from '../src/components/Header';
import Headline from '../src/components/Headline';
import Stages from '../src/components/Stages';
import Programming from '../src/components/Programming';
import Section from '../src/components/Section';
import Reservation from '../src/components/Reservation';
import Faq from '../src/components/Faq';
import Countdown from '../src/components/Countdown';
import Footer from '../src/components/Footer';

import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.headerContainer}>
        <Header />
      </div>
      <div className={styles.pageContent}>
        <Headline />
        <Stages />
        <Programming />
        <Section
          imageUrl="incredible-white.png"
          width={250}
          height={155}
          backgroundImage="incredible-background.png"
          title="Grandes marcas<br />e muitos insights"
        />
        <Section
          imageUrl="intense-white.png"
          width={250}
          height={199}
          backgroundImage="intense-background.png"
          title="Experts do mercado, de todos os tamanhos, nacionalidades e nichos!"
        />

        {/* TODO: Adicionar parágrfo */}
        <Section
          imageUrl="instructive-white.png"
          width={380}
          height={252}
          backgroundImage="instructive-background.png"
          title="Um evento dentro do evento!"
        />
        <Reservation />
        <Faq />
        <Countdown />
      </div>
      <Footer />
    </div>
  )
}
