'use client';

import CardButton from '@/components/elements/button/CardButton';
import StyledButton from '@/components/elements/button/StyledButton';
import ContactSection from '@/components/sections/ContactSection';
import Header from '@/components/sections/Header';
import LocationSection from '@/components/sections/LocationSection';
import { content, formatBlogs } from '@/utils/scrolldata';
import Image from 'next/image';

export default function Home() {
  const formattedBlogs = formatBlogs(content);

  const handleClick = () => {
    console.log('view button clicked!');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="main xxl:mt-10 text-center flex flex-col items-center min-h-screen">
        <Image
          className="lg:mt-10 mb-2"
          src="/rocket.png"
          alt="rocket"
          width={44}
          height={32}
          priority
        />
        <h2 className="text-blue font-semibold">
          Build and Launch Reliable and Market-Ready Products
        </h2>
        <p className="text-black font-regular">
          This 2025, Aique DANG aims to optimize internal structures and
          processes, ensuring enhanced reliability, integrity, and efficiency,
          ultimately driving increased profitability for its clients.
        </p>
        <div className="flex mb-10 whitespace-nowrap text-base justify-center items-center">
          <StyledButton text="Check our solutions" onClick={handleClick} />
        </div>
        <div
          className="
    flex justify-start items-start  
    xl:mx-20 sm:px-6 md:px-8 py-2
    space-x-3 touch-pan-x
    overflow-x-auto scroll-smooth
    scrollbar-hide
    w-full
    max-w-[1480px]
    outline-none
    bg-white
  "
          style={{
            WebkitOverflowScrolling: 'touch',
            cursor: 'grab',
          }}
        >
          {formattedBlogs.map((data) => (
            <div
              key={data.id}
              className="flex-none w-[370px] cursor-pointer border-shadow shadow-md rounded-lg transition-transform transform hover:scale-100 hover:shadow-l"
              // onClick={() => (window.location.href = data.url)}
            >
              {/* Image Section */}
              <div className="relative h-[230px] w-full rounded-tl-lg rounded-tr-lg overflow-hidden">
                <Image
                  src={data.image}
                  alt={data.title}
                  layout="fill"
                  priority
                />
              </div>

              {/* Text Section */}
              <div className="relative h-[230px] w-[full] p-4 bg-white rounded-b-lg">
                <p id="title" className="text-lg text-title">
                  {data.title}
                </p>
                <p id="description" className="text-description w-[300px]">
                  {data.description}
                </p>
              </div>
              <div className="flex mb-10 whitespace-nowrap text-base justify-center items-center">
                <CardButton text="View Details" onClick={handleClick} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col lg:flex-row py-6 sm:px-8 md:px-8 xxl:px-0 text-left w-full max-w-[1480px] xxl:max-w-[1480px] mx-auto">
          <LocationSection />
          <ContactSection />
        </div>
      </main>
      {/* <Footer /> */}
    </div>
  );
}
