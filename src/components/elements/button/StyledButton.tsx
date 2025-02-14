import React from 'react';
import RocketSvg from '../svg/RocketSvg';

interface StyledButtonProps {
  text: string;
  onClick: () => void;
}

const StyledButton: React.FC<StyledButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-row justify-center text-white items-center p-[12px_15px] gap-[8px] w-[206.14px] h-[48px] bg-[#3758F9] border-[1px] border-[#3758F9] mt-2 rounded-[8px] flex-none order-0 flex-grow-0"
    >
      <RocketSvg />
      {text}
    </button>
  );
};

export default StyledButton;
