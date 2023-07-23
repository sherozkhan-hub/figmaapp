import one from "../assets/1 (1).png";
import two from "../assets/1 (2).png";
import three from "../assets/1 (3).png";
import four from "../assets/1 (4).png";
import five from "../assets/1 (5).png";
import six from "../assets/1 (6).png";
import seven from "../assets/1 (7).png";
import eight from "../assets/1.png";

const HappyImages = () => {
  return (
    <aside className="flex justify-around gap-4 my-4 w-1/3">
      <div>
        <div className="relative top-[3.5rem] ">
          <img src={four} alt="" />
        </div>
        <div className="relative top-[4rem] left-[1rem] ">
          <img src={six} alt="" />
        </div>

        <div className="relative top-[5rem] left-[3.5rem] ">
          <img src={two} alt="" />
        </div>
        <div className="relative bottom-[9rem] left-[6rem] ">
          <img src={three} alt="" />
        </div>
      </div>
      <div>
        <div className="relative top-[2.5rem] right-[5.8rem] ">
          <img src={eight} alt="" />
        </div>
        <div className="relative top-6">
          <img src={five} alt="" />
        </div>
        <div className="relative top-[3rem] right-[0.5rem] ">
          <img src={seven} alt="" />
        </div>
        <div className="relative top-[4rem] right-[2rem]">
          <img src={one} alt="" />
        </div>
      </div>
    </aside>
  );
};

export default HappyImages;
