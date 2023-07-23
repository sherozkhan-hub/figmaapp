import Heading from "./Heading";
import rec from "../assets/Rectangle 32.png";

const NewsLetter = () => {
  const heading = `Subscribe NewsLetter`;
  return (
    <section className="w-[75.5rem] h-[24.18rem] flex p-9 bg-[#F4F9FF] rounded-l-[4.6rem] overflow-hidden">
      <div className="w-1/2 self-center relative">
        <Heading heading={heading} />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
          explicabo.
        </p>
        <div className="absolute -bottom-2 -z-[1]">
          <img src={rec} alt="" />
        </div>
      </div>
      <div className="w-1/2 relative">
        <div className="absolute z-10 w-[33rem] h-[18rem] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="497"
            height="292"
            viewBox="0 0 497 292"
            fill="none"
          >
            <path
              d="M7.07175 158.172C-19.0148 80.4252 38.8318 0 120.839 0H422C463.421 0 497 33.5786 497 75V217C497 258.421 463.421 292 422 292H123.901C80.9308 292 42.7643 264.549 29.0954 223.81L7.07175 158.172Z"
              fill="#2639ED"
            />
          </svg>
        </div>
        <div className="absolute z-20 -left-7 top-[7rem]">
          <input
            type="email"
            className="block w-[29rem] h-[4rem] shadow-md p-3 pl-7 border-none focus:border-none active:border-none rounded-[3.75rem] bg-white "
            placeholder="Enter Your Email Here"
            required
          />
          <button
            type="submit"
            className="text-white absolute right-2.5 bottom-[0.9rem] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Contact Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default NewsLetter;
