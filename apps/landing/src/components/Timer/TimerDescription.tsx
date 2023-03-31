import { FC } from 'react';
interface TimerDectriptionInterface {
  timerName?: string;
  color: string;
  className?: string;
}

export const TimerDescription: FC<TimerDectriptionInterface> = ({
  timerName,
  color,
  className,
}) => (
  <h1 color={color} className={className}>
    {timerName}
  </h1>
);
