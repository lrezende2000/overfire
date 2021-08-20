import Image from 'next/image';
import Link from 'next/link';
import { slide as Menu } from 'react-burger-menu';

import styles from './Header.module.css';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.headerContent}>
        <Image src="/logo-on-fire.png" alt="logo" height={49} width={249} />
        <div className={styles.subscribeButton}>
          <button>
            Garanta seu lugar
          </button>
        </div>
        <div className={styles.buttons}>
          <button>
            Faq
          </button>
          <div className={styles.separator} />
          <button>
            Ingressos
          </button>
        </div>
      </div>
    </div>
  );
}