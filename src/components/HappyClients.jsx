import Heading from "./Heading";
import happy from "../assets/unsplash_MTZTGvDsHFY.png";
import HappyImages from "./HappyImages";

const HappyClients = () => {
  const heading = `What our happy client say`;
  return (
    <>
      <div className="mx-auto w-[37rem] text-center">
        <Heading heading={heading} />
        <p className="mb-[4rem] mt-2">
          Several selected clients, who already believe in our service
        </p>
      </div>
      <section className="flex justify-evenly place-items-center max-w-[79rem] max-height-[38rem]">
        <div className="max-w-1/3 relative">
          <div className="absolute right-4 -z-10 top-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="196"
              height="154"
              viewBox="0 0 196 154"
              fill="none"
            >
              <circle cx="3.5" cy="3.5" r="3.5" fill="#F4F4F4" />
              <circle cx="3.5" cy="24.5" r="3.5" fill="#F4F4F4" />
              <circle cx="3.5" cy="45.5" r="3.5" fill="#F4F4F4" />
              <circle cx="3.5" cy="66.5" r="3.5" fill="#F4F4F4" />
              <circle cx="3.5" cy="87.5" r="3.5" fill="#F4F4F4" />
              <circle cx="3.5" cy="108.5" r="3.5" fill="#F4F4F4" />
              <circle cx="3.5" cy="129.5" r="3.5" fill="#F4F4F4" />
              <circle cx="3.5" cy="150.5" r="3.5" fill="#F4F4F4" />
              <circle cx="24.5" cy="3.5" r="3.5" fill="#F4F4F4" />
              <circle cx="24.5" cy="24.5" r="3.5" fill="#F4F4F4" />
              <circle cx="24.5" cy="45.5" r="3.5" fill="#F4F4F4" />
              <circle cx="24.5" cy="66.5" r="3.5" fill="#F4F4F4" />
              <circle cx="24.5" cy="87.5" r="3.5" fill="#F4F4F4" />
              <circle cx="24.5" cy="108.5" r="3.5" fill="#F4F4F4" />
              <circle cx="24.5" cy="129.5" r="3.5" fill="#F4F4F4" />
              <circle cx="24.5" cy="150.5" r="3.5" fill="#F4F4F4" />
              <circle cx="45.5" cy="3.5" r="3.5" fill="#F4F4F4" />
              <circle cx="45.5" cy="24.5" r="3.5" fill="#F4F4F4" />
              <circle cx="45.5" cy="45.5" r="3.5" fill="#F4F4F4" />
              <circle cx="45.5" cy="66.5" r="3.5" fill="#F4F4F4" />
              <circle cx="45.5" cy="87.5" r="3.5" fill="#F4F4F4" />
              <circle cx="45.5" cy="108.5" r="3.5" fill="#F4F4F4" />
              <circle cx="45.5" cy="129.5" r="3.5" fill="#F4F4F4" />
              <circle cx="45.5" cy="150.5" r="3.5" fill="#F4F4F4" />
              <circle cx="66.5" cy="3.5" r="3.5" fill="#F4F4F4" />
              <circle cx="66.5" cy="24.5" r="3.5" fill="#F4F4F4" />
              <circle cx="66.5" cy="45.5" r="3.5" fill="#F4F4F4" />
              <circle cx="66.5" cy="66.5" r="3.5" fill="#F4F4F4" />
              <circle cx="66.5" cy="87.5" r="3.5" fill="#F4F4F4" />
              <circle cx="66.5" cy="108.5" r="3.5" fill="#F4F4F4" />
              <circle cx="66.5" cy="129.5" r="3.5" fill="#F4F4F4" />
              <circle cx="66.5" cy="150.5" r="3.5" fill="#F4F4F4" />
              <circle cx="87.5" cy="3.5" r="3.5" fill="#F4F4F4" />
              <circle cx="87.5" cy="24.5" r="3.5" fill="#F4F4F4" />
              <circle cx="87.5" cy="45.5" r="3.5" fill="#F4F4F4" />
              <circle cx="87.5" cy="66.5" r="3.5" fill="#F4F4F4" />
              <circle cx="87.5" cy="87.5" r="3.5" fill="#F4F4F4" />
              <circle cx="87.5" cy="108.5" r="3.5" fill="#F4F4F4" />
              <circle cx="87.5" cy="129.5" r="3.5" fill="#F4F4F4" />
              <circle cx="87.5" cy="150.5" r="3.5" fill="#F4F4F4" />
              <circle cx="108.5" cy="3.5" r="3.5" fill="#F4F4F4" />
              <circle cx="108.5" cy="24.5" r="3.5" fill="#F4F4F4" />
              <circle cx="108.5" cy="45.5" r="3.5" fill="#F4F4F4" />
              <circle cx="108.5" cy="66.5" r="3.5" fill="#F4F4F4" />
              <circle cx="108.5" cy="87.5" r="3.5" fill="#F4F4F4" />
              <circle cx="108.5" cy="108.5" r="3.5" fill="#F4F4F4" />
              <circle cx="108.5" cy="129.5" r="3.5" fill="#F4F4F4" />
              <circle cx="108.5" cy="150.5" r="3.5" fill="#F4F4F4" />
              <circle cx="129.5" cy="3.5" r="3.5" fill="#F4F4F4" />
              <circle cx="129.5" cy="24.5" r="3.5" fill="#F4F4F4" />
              <circle cx="129.5" cy="45.5" r="3.5" fill="#F4F4F4" />
              <circle cx="129.5" cy="66.5" r="3.5" fill="#F4F4F4" />
              <circle cx="129.5" cy="87.5" r="3.5" fill="#F4F4F4" />
              <circle cx="129.5" cy="108.5" r="3.5" fill="#F4F4F4" />
              <circle cx="129.5" cy="129.5" r="3.5" fill="#F4F4F4" />
              <circle cx="129.5" cy="150.5" r="3.5" fill="#F4F4F4" />
              <circle cx="150.5" cy="3.5" r="3.5" fill="#F4F4F4" />
              <circle cx="150.5" cy="24.5" r="3.5" fill="#F4F4F4" />
              <circle cx="150.5" cy="45.5" r="3.5" fill="#F4F4F4" />
              <circle cx="150.5" cy="66.5" r="3.5" fill="#F4F4F4" />
              <circle cx="150.5" cy="87.5" r="3.5" fill="#F4F4F4" />
              <circle cx="150.5" cy="108.5" r="3.5" fill="#F4F4F4" />
              <circle cx="150.5" cy="129.5" r="3.5" fill="#F4F4F4" />
              <circle cx="150.5" cy="150.5" r="3.5" fill="#F4F4F4" />
              <circle cx="171.5" cy="3.5" r="3.5" fill="#F4F4F4" />
              <circle cx="171.5" cy="24.5" r="3.5" fill="#F4F4F4" />
              <circle cx="171.5" cy="45.5" r="3.5" fill="#F4F4F4" />
              <circle cx="171.5" cy="66.5" r="3.5" fill="#F4F4F4" />
              <circle cx="171.5" cy="87.5" r="3.5" fill="#F4F4F4" />
              <circle cx="171.5" cy="108.5" r="3.5" fill="#F4F4F4" />
              <circle cx="171.5" cy="129.5" r="3.5" fill="#F4F4F4" />
              <circle cx="171.5" cy="150.5" r="3.5" fill="#F4F4F4" />
              <circle cx="192.5" cy="3.5" r="3.5" fill="#F4F4F4" />
              <circle cx="192.5" cy="24.5" r="3.5" fill="#F4F4F4" />
              <circle cx="192.5" cy="45.5" r="3.5" fill="#F4F4F4" />
              <circle cx="192.5" cy="66.5" r="3.5" fill="#F4F4F4" />
              <circle cx="192.5" cy="87.5" r="3.5" fill="#F4F4F4" />
              <circle cx="192.5" cy="108.5" r="3.5" fill="#F4F4F4" />
              <circle cx="192.5" cy="129.5" r="3.5" fill="#F4F4F4" />
              <circle cx="192.5" cy="150.5" r="3.5" fill="#F4F4F4" />
            </svg>
          </div>
          <img src={happy} width={"384"} alt="" />
          <div className="absolute left-4 -z-10 bottom-9">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="120"
              height="120"
              viewBox="0 0 120 120"
              fill="none"
            >
              <circle
                cx="60"
                cy="60"
                r="55.6"
                stroke="#FF007A"
                strokeWidth="8.8"
              />
            </svg>
          </div>
        </div>
        <div className="w-1/3">
          <h3 className="font-bold text-xl">Mathew Paul</h3>
          <p className="mb-[2.5rem] mt-[1.3rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti,
            voluptas eveniet impedit deleniti amet nam facere repudiandae! Quam,
            aspernatur iste!
          </p>
          <div className="flex gap-2 mt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#2639ED" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#E7F0FC" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#E7F0FC" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#E7F0FC" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <circle cx="8" cy="8" r="8" fill="#E7F0FC" />
            </svg>
          </div>
        </div>
        <HappyImages />
      </section>
    </>
  );
};

export default HappyClients;
