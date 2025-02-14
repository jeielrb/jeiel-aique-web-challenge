import React from 'react';

interface SendButtonProps {
  text: string;
  onClick: () => void;
}

const SendButton: React.FC<SendButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="flex justify-center items-center px-7 py-3 gap-2 w-full sm:w-[94px] h-12 bg-[#2D68F8] border border-[#2D68F8] rounded-full text-white font-medium transition"
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default SendButton;
