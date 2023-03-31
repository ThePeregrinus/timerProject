import { FC } from 'react';
import styled from 'styled-components';
import { StyledCounter } from './Counter';
import { TimerDescription } from './TimerDescription';

const StyledTimerDescription = styled(TimerDescription)`
  margin: 0px 0px 10px 0px;
  color: #ffd600;
`;

interface TimerInterface {
  timerName?: string;
  time: number;
  color: string;
  className?: string;
}

export const Timer: FC<TimerInterface> = ({
  timerName,
  time,
  color,
  className,
}) => {
  return (
    <div>
      <StyledTimerDescription color={color} timerName={timerName} />
      <StyledCounter time={time} className={className} color={color} />
    </div>
  );
};
