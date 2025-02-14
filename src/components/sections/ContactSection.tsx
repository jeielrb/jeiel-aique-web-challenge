import React from 'react';
import SendButton from '../elements/button/SendButton';

const ContactSection = () => {
  const fields = [
    { label: 'Full Name', defaultValue: 'John Doe' },
    { label: 'Email', defaultValue: 'johndoe@gmail.com' },
    { label: 'Phone', defaultValue: '+63' },
    { label: 'Message', defaultValue: 'Type your message here' },
  ];

  const handleClick = () => {
    console.log('send button clicked!');
  };

  return (
    <div
      id="contact"
      className="one flex flex-col items-start p-6 gap-3 lg:w-[50%] xxl:max-w-[50%] h-full mt-7 xxl:mr-7 rounded-lg flex-none order-2 self-stretch z-20"
    >
      <h3 className="text-black text-lg font-bold">Send us a message</h3>
      {fields.map((field, index) => (
        <div key={index} className="w-full">
          <h4 className="mt-5 text-black text-xs font-medium text-left">
            {field.label}
          </h4>
          <input
            type="text"
            className="box-border flex flex-row items-start px-0 pb-1 gap-2 w-full h-[28px] border-b border-black order-1 self-stretch flex-grow-0 focus:outline-none bg-transparent"
            placeholder="Type here..."
            defaultValue={field.defaultValue}
          />
        </div>
      ))}
      <div className="flex justify-end w-full max-w-full mt-2">
        <SendButton text="Send" onClick={handleClick} />
      </div>
    </div>
  );
};

export default ContactSection;
