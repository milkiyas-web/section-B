



// import { css } from '@emotion/react';
// import styled from '@emotion/styled';

// const buttonStyle = css`
//   display: inline-flex;
//   align-items: center;
//   justify-content: center;
//   white-space: nowrap;
//   border-radius: 0.375rem;
//   font-size: 0.875rem;
//   font-weight: 500;
//   transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
//   outline: none;
//   background-color: #0000;
//   width: 400px;
// `;

// const Button = styled('button')`
//   ${buttonStyle}
// `;

// export default Button

// src/components/ui/Button.tsx

import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React from 'react';

type ButtonVariants = 'default' | 'primary' | 'secondary';
type ButtonSizes = 'small' | 'medium' | 'large';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: ButtonVariants;
    size?: ButtonSizes;
}

const getButtonStyles = (variant: ButtonVariants = 'default', size: ButtonSizes = 'medium') => {
    return css`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    white-space: nowrap;
    border-radius: 0.375rem;
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    outline: none;
    width: 300px;
    
    ${variant === 'default' && css`
      background-color: #0000;
    `}
    ${variant === 'primary' && css`
      background-color: blue;
      color: white;
    `}
    ${variant === 'secondary' && css`
      background-color: gray;
      color: black;
    `}
    ${size === 'small' && css`
      padding: 0.25rem 0.5rem;
      font-size: 0.75rem;
    `}
    ${size === 'medium' && css`
      padding: 0.5rem 1rem;
      font-size: 0.875rem;
    `}
    ${size === 'large' && css`
      padding: 0.75rem 1.5rem;
      font-size: 1rem;
    `}
  `;
};

const Button = styled('button') <ButtonProps>`
  ${(props) => getButtonStyles(props.variant, props.size)}
`;

export default Button;
