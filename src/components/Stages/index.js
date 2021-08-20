import Image from 'next/image';

import styles from './Stages.module.css';

export default function Stages() {
  return (
    <div className={styles.stages}>
      <div className={styles.animation}>
        <Image src="/animation.gif" alt="Animation" width={567} height={283.5} />
        <h2>
          Conheça os
          <span> 4 palcos </span>
          do on fire 2021
        </h2>
      </div>
      <div className={styles.stagesContainer}>
        <div className={styles.stage}>
          <Image src="/inspiring.png" alt="Inspiring" width={204} height={155.5} />
          <p style={{ margin: '10px 0 0', fontSize: 16 }}><span style={{ color: 'var(--pink-color)', fontSize: 20 }}>FREE</span> durante todo o evento.</p>
          <p style={{ marginTop: 20 }}>
            Um <span style={{ color: 'var(--pink-color)' }}>hub de conexão entre todos os palcos, </span>
            uma visão de todo o ON FIRE 2021 com interação
            ao vivo com os palestrantes que passarem por ele.
          </p>
        </div>
        <div className={styles.stage}>
          <Image src="/incredible.png" alt="Incredible" width={233} height={144} />
          <p>
            <span style={{ color: 'yellow' }}>Grandes nomes estarão aqui. </span>
            As maiores marcas e referências com
            histórias inéditas que vão gerar muitos insights.
          </p>
        </div>
        <div className={styles.stage}>
          <Image src="/intense.png" alt="Intense" width={176} height={140} />
          <p>
            Produtores digitais e <span style={{ color: '#189cd8' }}>creators de todos os
              tamanhos, nacionalidades e nichos</span> dividindo
            estratégias, segredos e bastidores de seus
            produtos de sucesso.
          </p>
        </div>
        <div className={`${styles.stage} ${styles.bgOrange}`}>
          <Image src="/instructive.png" alt="Instructive" width={260} height={165} />
          <p>
            Aprenda com os especialistas da Hotmart
            <span style={{ color: 'black' }}> a criar e escalar as vendas do seu
            produto digital</span> em tempo real!
          </p>
        </div>
      </div>
    </div>
  );
}