'use client';

import { FC } from 'react';
import { CustomButtonProps } from '@/types';

const CustomButton: FC<CustomButtonProps> = ({
  title,
  containerStyles,
  handleClick,
  btnType,
}) => (
  <button
    disabled={false}
    type={btnType || 'button'}
    className={`custom-btn ${containerStyles}`}
    onClick={handleClick}
  >
    <span className={`flex-1`}>{title}</span>
  </button>
);

export default CustomButton;
