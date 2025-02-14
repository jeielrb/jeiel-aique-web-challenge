import LocationSvg from '../elements/svg/LocationSvg';

interface LocationItemProps {
  title: string;
  location: string;
}

const LocationItem = ({ title, location }: LocationItemProps) => (
  <div className="flex flex-row items-center justify-start p-0 gap-3 w-full xxl:max-w-[50%] h-[50px] mb-4">
    <LocationSvg />
    <div>
      <h4 className="text-left text-blue-500 font-bold text-[14px]">{title}</h4>
      <h4 className="text-start text-black font-normal text-[16px]">
        {location}
      </h4>
    </div>
  </div>
);

const LocationSection = () => (
  <div className="flex-1 xxl:ml-7">
    <div className="flex flex-col  text-left justify-start">
      <h4
        style={{ textAlign: 'left', fontSize: 16 }}
        className="text-blue font-bold lg:-mb-2"
      >
        Contact Us
      </h4>
      <h3 className="text-black text-left lg:text-[42px] lg:-mb-2 font-semibold">
        Get In Touch With Us
      </h3>
      <h4
        style={{ textAlign: 'start', fontSize: 14, marginBottom: 10 }}
        className="text-black font-regular mb-10"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        <span className="block sm:inline"> sed do eius tempor</span>
      </h4>
    </div>

    <LocationItem
      title="Our Location"
      location="One World Place, Lane R, BGC"
    />
    <LocationItem
      title="Our Location"
      location="One World Place, Lane R, BGC"
    />
    <LocationItem
      title="Our Location"
      location="One World Place, Lane R, BGC"
    />
  </div>
);

export default LocationSection;
