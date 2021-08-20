import Image from 'next/image';

import styles from './Footer.module.css';

const socials = [
  {
    id: 1,
    url: '/social-facebook.png',
    alt: 'Facebook Logo'
  },
  {
    id: 2,
    url: '/social-insta.png',
    alt: 'Instagram Logo'
  },
  {
    id: 3,
    url: '/social-linkedin.png',
    alt: 'Linkedin Logo'
  },
  {
    id: 4,
    url: '/social-twitter.png',
    alt: 'Twitter Logo'
  },
  {
    id: 5,
    url: '/social-youtube.png',
    alt: 'Youtube Logo'
  },
  {
    id: 6,
    url: '/social-media.png',
    alt: 'Sparkle Logo'
  },
];

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.socials}>
        <button>Quero ser Patrocinador!</button>
        <span>Acompanhe nossas redes</span>
        <div className={styles.socialMedias}>
          {socials.map(image => (
            <div key={image.id} className={styles.media}>
              <Image src={image.url} alt={image.alt} width={37} height={37} />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.terms}>
        <Image src="/logo-footer.png" alt="Logo footer" width={178} height={32} />
        <div className={styles.codes}>
          <span>Código de Conduta</span>
          <div className={styles.separator} />
          <span>Termos e Políticas</span>
        </div>
      </div>
    </div>
  );
}