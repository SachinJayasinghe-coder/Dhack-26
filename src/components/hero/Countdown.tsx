"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = new Date(
    "2026-08-15T00:00:00"
  ).getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();

      const distance = targetDate - now;

      setTimeLeft({
        days: Math.floor(
          distance / (1000 * 60 * 60 * 24)
        ),
        hours: Math.floor(
          (distance %
            (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        ),
        minutes: Math.floor(
          (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        ),
        seconds: Math.floor(
          (distance % (1000 * 60)) / 1000
        ),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const Card = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="rounded-2xl border border-white/10 bg-white/5 px-5 py-4 backdrop-blur-xl">
      <h3 className="text-3xl font-bold">
        {String(value).padStart(2, "0")}
      </h3>
      <p className="mt-1 text-xs uppercase tracking-widest text-gray-400">
        {label}
      </p>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Card value={timeLeft.days} label="Days" />
      <Card value={timeLeft.hours} label="Hours" />
      <Card value={timeLeft.minutes} label="Minutes" />
      <Card value={timeLeft.seconds} label="Seconds" />
    </div>
  );
}