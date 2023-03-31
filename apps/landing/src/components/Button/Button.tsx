import { FC } from 'react';
import styled from 'styled-components';

interface ButtonInterface {
  color?: string;
  className?: string;
  text: string;
  onClick?: () => void;
}

export const Button: FC<ButtonInterface> = ({
  color,
  className,
  text,
  onClick,
}) => (
  <button onClick={onClick} className={className} color={color}>
    {text}
  </button>
);

export const StyledButton = styled(Button)`
  ${(props) => {
    switch (props.color) {
      case 'red':
        return 'background:#B40000; color:#F5F5F5';
      case 'white':
        return 'background:#F5F5F5; color:#181818';
      case 'whiteBlackTheme':
        return 'background:#F5F5F5; color:#181818';
      case 'whiteWhiteTheme':
        return 'background:#181818; color:#F5F5F5';

      default:
        return 'background:#B40000; color:#F5F5F5';
    }
  }};

  border: none;
  height: 42px;
  padding: 12px 24px;
  text-transform: uppercase;

  font-weight: 700;
  font-size: 15px;
  line-height: 18px;
`;
