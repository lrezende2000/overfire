import { useEffect, useState } from 'react';

import styles from './Countdown.module.css';

export default function Countdown() {
  const getDateDifference = () => {
    let difference = new Date(2021, new Date().getMonth() + 2, 1) - (new Date());
    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  }
  
  const [timeLeft, setTimeLeft] = useState(getDateDifference());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(getDateDifference());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div className={styles.countdown}>
      <h2>
        Estamos contando os dias. <span>E você?</span>
      </h2>
      <div className={styles.countdownContainer}>
        <div className={styles.counter}>
          <div className={styles.timer}>
            <span>{timeLeft.days}</span>
          </div>
          <span>Days</span>
        </div>
        <div className={styles.counter}>
          <div className={styles.timer}>
            <span>{timeLeft.hours}</span>
          </div>
          <span>Hours</span>
        </div>
        <div className={styles.counter}>
          <div className={styles.timer}>
            <span>{timeLeft.minutes}</span>
          </div>
          <span>Minutes</span>
        </div>
        <div className={styles.counter}>
          <div className={styles.timer}>
            <span>{timeLeft.seconds}</span>
          </div>
          <span>Seconds</span>
        </div>
      </div>
    </div>
  );
}