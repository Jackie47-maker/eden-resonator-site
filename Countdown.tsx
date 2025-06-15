import React, { useEffect, useState } from 'react';
import dayjs from 'dayjs';

interface CountdownProps { targetDate: string }

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState('');

  useEffect(() => {
    const target = dayjs(targetDate);
    const interval = setInterval(() => {
      const now = dayjs();
      const diff = target.diff(now);
      if (diff <= 0) {
        setTimeLeft('It’s Party Time!');
        clearInterval(interval);
      } else {
        const days = target.diff(now, 'day');
        const hours = target.diff(now, 'hour') % 24;
        const minutes = target.diff(now, 'minute') % 60;
        const seconds = target.diff(now, 'second') % 60;
        setTimeLeft(`${days}d ${hours}h ${minutes}m ${seconds}s`);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return <div className="text-2xl mt-4">{timeLeft}</div>;
};

export default Countdown;
