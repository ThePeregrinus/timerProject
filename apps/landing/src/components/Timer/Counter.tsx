import { FC } from 'react';
import styled from 'styled-components';

interface CounterInterface {
  time: number;
  color: string;
  className?: string;
}

export const Counter: FC<CounterInterface> = ({ time, color, className }) => {
  const convertTimeToHHMMSS = (time: number) => {
    return new Date(1970, 0, 0, 0, 0, time, 0).toLocaleTimeString();
  };

  return (
    <h2 color={color} className={className}>
      {convertTimeToHHMMSS(time)}
    </h2>
  );
};

export const StyledCounter = styled(Counter)`
  ${(props) => {
    switch (props.color) {
      case 'yellow':
        return 'color:#FFD600';
      case 'WhiteTheme':
        return 'color:#181818';
      case 'BlackTheme':
        return 'color: #F5F5F5';
      default:
        return 'color:#181818';
    }
  }};
`;
