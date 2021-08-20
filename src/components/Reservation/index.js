import Image from 'next/image';

import styles from './Reservation.module.css';

export default function Reservation() {
  return (
    <div className={styles.reservation}>
      <div className={styles.condition}>
        <h2>Reserve seu lugar no <span>on fire!</span></h2>
        <h3>COM CONDIÇÃO ESPECIAL:</h3>
        <div className={styles.offerImages}>
          <Image src="/vip.png" alt="vip" height={50} width={100} />
          <Image src="/biz.png" alt="biz" height={50} width={100} />
        </div>
      </div>
      <div className={styles.offers}>
        <div className={styles.offerImage}>
          <Image src="/vip.png" alt="vip" height={50} width={100} />
        </div>
        <div
          className={styles.offer}
          style={{
            background: 'linear-gradient(180deg,rgba(230,0,126,1) 0,rgba(0,0,0,1) 100%)',
          }}
        >
          <h3>Apenas 12x de</h3>
          <h2>R$41,42 sem juros</h2>
          <h2 className={styles.price}>R$ 497,00</h2>

          <ul>
            <li>KIT VIP entregue em casa * Estoque  Limitado ✔</li>
            <li>3 dias de evento ✔</li>
            <li>+ de 100 palestras, painéis e entrevistas ✔</li>
            <li>4 palcos de conhecimento ✔</li>
            <li>Acesso à Área de Patrocinadores ✔</li>
            <li>Acesso a Conteúdos Gravados ** ✔</li>
            <li>Masterclass - 2 Edições Inéditas ✔</li>
          </ul>

          <button className={styles.myPlace}>
            Quero meu lugar
          </button>
          <button className={styles.information}>
            * Informações
          </button>
        </div>
        <div className={styles.offerImage}>
          <Image src="/biz.png" alt="biz" height={50} width={100} />
        </div>
        <div
          className={styles.offer}
          style={{
            background: 'linear-gradient(180deg,rgba(0,159,227,1) 0,rgba(0,0,0,1) 100%)',
          }}
        >
          <h3>Apenas 12x de</h3>
          <h2>R$41,42 sem juros</h2>
          <h2 className={styles.price}>R$ 497,00</h2>

          <ul>
            <li>KIT VIP entregue em casa * Estoque  Limitado ✔</li>
            <li>3 dias de evento ✔</li>
            <li>+ de 100 palestras, painéis e entrevistas ✔</li>
            <li>4 palcos de conhecimento ✔</li>
            <li>Acesso à Área de Patrocinadores ✔</li>
            <li>Acesso a Conteúdos Gravados ** ✔</li>
            <li>Masterclass - 2 Edições Inéditas ✔</li>
          </ul>

          <button className={styles.myPlace}>
            Quero meu lugar
          </button>
          <button
            className={styles.information}
            style={{ borderColor: 'rgba(0,159,227,1)' }}
          >
            * Informações
          </button>
        </div>
      </div>
      <div className={styles.day}>
        <div className={styles.imageContainer}>
          <Image src="/day.png" alt="Day" width={274} height={269} />
        </div>
        <div className={styles.text}>
          <h2>
            TENHA UM GOSTINHO<br />
            DO ON FIRE 2021
          </h2>
          <h3>
            Preparamos o dia 19
            para que todos
            possam se inspirar.
          </h3>
          <p>
            <span>Inscreva-se gratuitamente</span> e tenha
            acesso a todo conteúdo do primeiro
            dia do ON FIRE, que acontece
            NO DIA 19 DE OUTUBRO.
          </p>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/free.png" alt="Day" width={225} height={106} />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.form}>
          <form>
            <div className={styles.row}>
              <div className={styles.input}>
                <label htmlFor="name">Seu nome completo:*</label>
                <input type="text" id="name" />
              </div>
              <div className={styles.input}>
                <label htmlFor="email">Seu email principal:*</label>
                <input type="text" id="email" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.input}>
                <label htmlFor="country">País de residência</label>
                <input type="text" id="country" />
              </div>
            </div>
            <div className={styles.row}>
              <div className={styles.input}>
                <label htmlFor="">
                  Deixe seu número de telefone para ficar por dentro do ON FIRE em tempo real:
                </label>
                <div className={styles.customInput}>
                  <input type="text" />
                  <input type="text" />
                </div>
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <input type="checkbox" id="terms" />
                <label htmlFor="terms">Ao clicar em “GARANTA SEU LUGAR”, você confirma a sua participação no ON FIRE e autoriza o tratamento dos dados pessoais pela Hotmart para viabilizar a sua participação no evento. Você, igualmente, confirma que leu e entendeu os termos da Política de Privacidade.</label>
              </div>
            </div>
            <div className={styles.row}>
              <div>
                <input type="checkbox" id="news" />
                <label htmlFor="news">Confirmo que aceito receber conteúdos e ofertas da Hotmart e compreendo que posso me descadastrar desta comunicação a qualquer momento.</label>
              </div>
            </div>
            <div className={styles.row} style={{ marginTop: 40 }}>
              <button type="submit">Garanta sua vaga</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}