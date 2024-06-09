import React from 'react';

interface ArrowIconProps {
  width?: number;
  height?: number;
  fill?: string;
}

const ArrowIcon: React.FC<ArrowIconProps> = ({ width = 40, height = 40, fill = '#000' }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      style={{ fill, cursor: 'pointer', marginTop: '10px' }}
    >
      <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z"></path>
    </svg>
  );
}

export default ArrowIcon;
