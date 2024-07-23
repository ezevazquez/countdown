'use client';

import { useState, useEffect } from 'react';

interface Props {
  targetDate: string; // La fecha objetivo en formato ISO (ejemplo: '2024-12-31T23:59:59')
}

interface TimeLeft {
  days: number;
}

const Contador: React.FC<Props> = ({ targetDate }) => {
  const [time, setTime] = useState<TimeLeft>({
    days: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date(targetDate) - +new Date();
      let timeLeft: TimeLeft = {
        days: 0,
      };

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        };
      }

      return timeLeft;
    };

    const timer = setInterval(() => {
      setTime(calculateTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [targetDate]);

  return (
    <div>
      <div>
        <div>{String(time.days)}</div>
        <div>días</div>
      </div>
    </div>
  );
};

export default Contador;
