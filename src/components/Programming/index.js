import Image from 'next/image';

import styles from './Programming.module.css';

export default function Programming() {
  return (
    <div className={styles.programming}>
      <div className={styles.title}>
        <h2>
          MAIS CONTEÚDO. MAIS GLOBAL.
          <br />
          <span> HISTÓRIAS QUE VOCÊ VAI SE LEMBRAR!</span>
        </h2>
      </div>
      <div className={styles.content}>
        <div className={styles.left}>
          <p>
            O ON FIRE traz mais de<br />
            <span style={{ color: '#189cd8' }}> 100 horas de conteúdo</span>, mais de
            <span style={{ color: 'var(--pink-color)' }}> 100 palestras/aulas/workshops</span>.
            Em multiplataformas, masterclasses
            exclusivas e referências globais
            para você.
          </p>
        </div>
        <div className={styles.right}>
          <Image src="/programming-animation.gif" alt="Programming animation" width={585} height={292.5} />
        </div>
      </div>
      <div className={styles.footer}>
        <p>
          Programação completa <span>EM BREVE!</span>
        </p>
      </div>
    </div>
  );
}