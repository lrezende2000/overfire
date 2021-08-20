import { useState } from 'react';

import styles from './Faq.module.css';

const Question = ({ question, answer }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.questionContainer}>
      <div onClick={() => setOpen(!open)} className={styles.question}>
        <p>{question}</p>
        <svg className={open ? styles.invert : ''} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1152 1792" style={{ backgroundColor: 'inherit' }} fill="currentColor"> <path fill="inherit" d="M1075 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
          <path fill="inherit" d="M1075 736q0 13-10 23l-466 466q-10 10-23 10t-23-10l-466-466q-10-10-10-23t10-23l50-50q10-10 23-10t23 10l393 393 393-393q10-10 23-10t23 10l50 50q10 10 10 23z"></path>
        </svg>
      </div>
      {open && <p>{answer}</p>}
    </div>
  );
}

export default function Faq() {
  return (
    <div id="faq" className={styles.faq}>
      <div className={styles.title}>
        <h1>FAQ</h1>
        <h2>Tudo o que você quer saber sobre o ON FIRE!</h2>
      </div>
      <div className={styles.questions}>
        <div className={styles.events}>
          <div className={styles.head}>
            <h2>Informações<br />do evento</h2>
          </div>
          <Question
            question="O que é o ON FIRE?"
            answer="O ON FIRE é um encontro online diferente de tudo que você já viu.Intenso. Inspirador. Indescritível.Você vai se inspirar com histórias de grandes empreendedores, especialistas e artistas do mundo. Na sua casa, na sua sala ou onde você quiser estar. Afinal, a inspiração não tem lugar para acontecer."
          />
          <Question
            question="O ON FIRE é o FIRE FESTIVAL online?"
            answer="Não! São dois eventos distintos. O FIRE FESTIVAL é uma experiência presencial, é o ponto de partida, onde tudo começou, lá em 2015. 

            Desde então, a família FIRE FESTIVAL cresceu. Por isso, vamos te deixar por dentro de tudo: 
            
            FIRE FESTIVAL: nosso encontro, essencialmente presencial, com empreendedores, pensadores e estudiosos que estão mudando o mundo. 
            
            FIRE Cast: podcast da Hotmart, que está em sua 2ª temporada, com debates das principais tendências do mercado digital, convidados e mediações inéditas. 
            
            FIRE SESSIONS: painéis de discussão entre creators, marcas e empreendedores, em um ambiente com muito networking e entretenimento. 
            
            ON FIRE: uma experiência online que reúne tudo que aprendemos desde 2015 com um dos melhores eventos de empreendedorismo digital, o FIRE FESTIVAL. Inspire-se!
            
            O momento exige cuidado e, para nós, as pessoas vêm sempre em primeiro lugar. Por isso, o FIRE FESTIVAL foi adiado."
          />
          <Question
            question="Quando será o ON FIRE?"
            answer="A primeira edição acontecerá nos dias 19, 20 e 21 de outubro de 2021."
          />
        </div>
        <div className={styles.tickets}>
          <div className={styles.head}>
            <h2>Ingressos</h2>
          </div>
          <Question
            question="O que é o ON FIRE?"
            answer="O ON FIRE é um encontro online diferente de tudo que você já viu.Intenso. Inspirador. Indescritível.Você vai se inspirar com histórias de grandes empreendedores, especialistas e artistas do mundo. Na sua casa, na sua sala ou onde você quiser estar. Afinal, a inspiração não tem lugar para acontecer."
          />
          <Question
            question="O ON FIRE é o FIRE FESTIVAL online?"
            answer="Não! São dois eventos distintos. O FIRE FESTIVAL é uma experiência presencial, é o ponto de partida, onde tudo começou, lá em 2015. 

            Desde então, a família FIRE FESTIVAL cresceu. Por isso, vamos te deixar por dentro de tudo: 
            
            FIRE FESTIVAL: nosso encontro, essencialmente presencial, com empreendedores, pensadores e estudiosos que estão mudando o mundo. 
            
            FIRE Cast: podcast da Hotmart, que está em sua 2ª temporada, com debates das principais tendências do mercado digital, convidados e mediações inéditas. 
            
            FIRE SESSIONS: painéis de discussão entre creators, marcas e empreendedores, em um ambiente com muito networking e entretenimento. 
            
            ON FIRE: uma experiência online que reúne tudo que aprendemos desde 2015 com um dos melhores eventos de empreendedorismo digital, o FIRE FESTIVAL. Inspire-se!
            
            O momento exige cuidado e, para nós, as pessoas vêm sempre em primeiro lugar. Por isso, o FIRE FESTIVAL foi adiado."
          />
          <Question
            question="Quando será o ON FIRE?"
            answer="A primeira edição acontecerá nos dias 19, 20 e 21 de outubro de 2021."
          />
        </div>
        <div className={styles.platform}>
          <div className={styles.head}>
            <h2>Acesso e uso<br />da plataforma</h2>
          </div>
          <Question
            question="O que é o ON FIRE?"
            answer="O ON FIRE é um encontro online diferente de tudo que você já viu.Intenso. Inspirador. Indescritível.Você vai se inspirar com histórias de grandes empreendedores, especialistas e artistas do mundo. Na sua casa, na sua sala ou onde você quiser estar. Afinal, a inspiração não tem lugar para acontecer."
          />
          <Question
            question="O ON FIRE é o FIRE FESTIVAL online?"
            answer="Não! São dois eventos distintos. O FIRE FESTIVAL é uma experiência presencial, é o ponto de partida, onde tudo começou, lá em 2015. 

            Desde então, a família FIRE FESTIVAL cresceu. Por isso, vamos te deixar por dentro de tudo: 
            
            FIRE FESTIVAL: nosso encontro, essencialmente presencial, com empreendedores, pensadores e estudiosos que estão mudando o mundo. 
            
            FIRE Cast: podcast da Hotmart, que está em sua 2ª temporada, com debates das principais tendências do mercado digital, convidados e mediações inéditas. 
            
            FIRE SESSIONS: painéis de discussão entre creators, marcas e empreendedores, em um ambiente com muito networking e entretenimento. 
            
            ON FIRE: uma experiência online que reúne tudo que aprendemos desde 2015 com um dos melhores eventos de empreendedorismo digital, o FIRE FESTIVAL. Inspire-se!
            
            O momento exige cuidado e, para nós, as pessoas vêm sempre em primeiro lugar. Por isso, o FIRE FESTIVAL foi adiado."
          />
          <Question
            question="Posso solicitar reembolso dos ingressos adquiridos?"
            answer="A primeira edição acontecerá nos dias 19, 20 e 21 de outubro de 2021."
          />
        </div>
      </div>
    </div>
  );
}