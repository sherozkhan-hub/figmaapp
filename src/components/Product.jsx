import img from "../assets/unsplash_bzqU01v-G54.png";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import rectangle26 from "../assets/Rectangle 26.png";

const Product = () => {
  const heading = `Great Digital Product Agency since 2016 `;
  const paragraph = `Our Business Plan is a written document describing a company's core business activites, Objectives, and how it plans to achieve its goals. Our goal is to provide our client high quality Product with modern idea accordingly their budgets and according thir reuirements.`;
  return (
    <section className="w-[75rem] h-[27.25rem] max-w-[75rem] flex place-items-center mt-[6.1rem] mb-[4.31rem]">
      <div className="w-1/2 relative flex justify-center place-items-center">
        <img
          src={img}
          className="w-[34.3rem] h-[23.3rem] rounded-[2rem] mx-auto my-auto"
          alt=""
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[4rem] h-[4rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            // width="78"
            // height="78"
            viewBox="0 0 78 78"
            fill="none"
          >
            <g clipPath="url(#clip0_2_593)">
              <rect
                x="20.6939"
                y="17.5102"
                width="42.9796"
                height="42.9796"
                fill="white"
              />
              <path
                d="M39 0C17.55 0 0 17.55 0 39C0 60.45 17.55 78 39 78C60.45 78 78 60.45 78 39C78 17.55 60.45 0 39 0ZM31.2 56.55V21.45L54.6 39L31.2 56.55Z"
                fill="#2639ED"
              />
            </g>
            <defs>
              <clipPath id="clip0_2_593">
                <rect width="78" height="78" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="absolute right-0 bottom-0 -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="129"
            height="129"
            viewBox="0 0 129 129"
            fill="none"
          >
            <circle cx="64.5" cy="64.5" r="64.5" fill="#FFF5DB" />
          </svg>
        </div>
      </div>
      <div className="w-1/2 p-2">
        <div className="absolute -z-[10]">
          <img src={rectangle26} alt="" />
        </div>
        <Heading heading={heading} width={{ width: "29.25rem" }} />
        <Paragraph paragraph={paragraph} />
      </div>
    </section>
  );
};

export default Product;
