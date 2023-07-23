import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Groups from "./Groups";
import Dots from "./Dots";

const Bussiness = () => {
  const heading = "How can we Help your Bussiness?";
  const paragraph = `We
  build readymade websites mobile applications and elaborate online
  business services`;
  return (
    <section className="flex w-[70.8rem] h-[54.18rem] relative">
      <div className="w-[40%] self-center pl-4">
        <div
          style={{ borderRadius: "6.25rem 0rem 0rem 0rem" }}
          className="bg-[#FFF5DB] absolute -z-10 top-[30%] w-[11rem] h-[11rem]"
        ></div>
        <Heading heading={heading} width={{ width: "22rem" }} />
        <Paragraph paragraph={paragraph} />
        <Dots />
      </div>
      <Groups />
    </section>
  );
};

export default Bussiness;
