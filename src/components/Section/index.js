import { useRef, useEffect } from 'react';
import Image from 'next/image';

import styles from './Section.module.css';

export default function Section({ imageUrl, title, backgroundImage, width, height, paragraph }) {
  const titleRef = useRef(null);
  const paragraphRef = useRef(null);

  useEffect(() => {
    if (titleRef.current) {
      titleRef.current.innerHTML = title;
    }
  }, [titleRef, title]);

  useEffect(() => {
    if (paragraphRef.current) {
      paragraphRef.current.innerHTML = paragraph;
    }
  }, [paragraphRef, paragraph]);

  return (
    <div className={styles.section} style={{ backgroundImage: `url(/${backgroundImage})` }}>
      <div className={styles.head}>
        <div className={styles.image}>
          <Image src={`/${imageUrl}`} alt="Incredible" width={width} height={height} />
        </div>
        <div className={styles.title}>
          <h2 ref={titleRef} />
          {paragraph && (<p ref={paragraphRef} />)}
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <Image src="/guy.png" alt="image" height={220} width={220} />
          <h2>Seth Godin</h2>
          <span>altMBA | The Akimbo Workshops</span>
        </div>
        <div className={styles.card}>
          <Image src="/guy.png" alt="image" height={220} width={220} />
          <h2>Seth Godin</h2>
          <span>altMBA | The Akimbo Workshops</span>
        </div>
        <div className={styles.card}>
          <Image src="/guy.png" alt="image" height={220} width={220} />
          <h2>Seth Godin</h2>
          <span>altMBA | The Akimbo Workshops</span>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <button>Line-up completo</button>
      </div>
    </div>
  );
}