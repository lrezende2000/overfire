import Image from 'next/image';

import styles from './Headline.module.css';

export default function Headline() {
  return (
    <div className={styles.headline}>
      <div className={styles.left}>
        <span>19, 20 e 21 de Outubro de 2021</span>
        <h2>Conteúdo.</h2>
        <h2>Aprendizado.</h2>
        <h2>Transformação.</h2>
        <h2>Interação.</h2>
        <h3>O futuro dos eventos online chegou!</h3>
        <p>
          Não fique de fora do encontro entre os maiores
          nomes do mercado digital, da comunicação,
          da tecnologia, das artes e grandes marcas
          em uma experiência “online-imersiva” inédita.
        </p>
        <button>
          Quero garantir meu lugar
        </button>
      </div>
      <div className={styles.right}>
        <Image src="/girl.png" alt="Girl" height={582} width={582} />
      </div>
    </div>
  );
}