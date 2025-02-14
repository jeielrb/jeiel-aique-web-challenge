import React from 'react';

interface CardButtonProps {
  text: string;
  onClick: () => void;
}

const CardButton: React.FC<CardButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="flex justify-center items-center px-7 py-3 gap-2 w-[151px] h-[48px] bg-[#FFFFFF] border border-[#000000] hover:border-[#FFFFFF] rounded-full text-black font-medium hover:bg-[#2D68F8] hover:text-[#FFFFFF] transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CardButton;
