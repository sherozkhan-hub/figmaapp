import Heading from "../components/Heading";
import google from "../assets/Google Logo.svg";
import amazon from "../assets/Amazon Logo.svg";
import air from "../assets/Airbnb Logo.svg";
import uber from "../assets/Uber Eats Logo.svg";

const Clients = () => {
  const heading = "Our Client";
  return (
    <section className="mt-32 mb-20 flex place-items-center justify-between w-[65.6rem] h-[7rem] ml-[4rem]">
      <div className="w-[20%]">
        <Heading heading={heading} />
        <p>Several Clients who already believe in our service</p>
      </div>
      <ul className="flex justify-between w-[70%]">
        <li>
          <img src={google} alt="" className="w-[9rem] h-[3rem]" />
        </li>
        <li>
          <img src={air} alt="" className="w-[9rem] h-[3rem]" />
        </li>
        <li>
          <img src={amazon} alt="" className="w-[9rem] h-[3rem]" />
        </li>
        <li>
          <img src={uber} alt="" className="w-[9rem] h-[3rem]" />
        </li>
      </ul>
    </section>
  );
};

export default Clients;
