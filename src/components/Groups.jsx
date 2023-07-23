import box from "../assets/box-search 1.svg";
import wallet from "../assets/empty-wallet 1.svg";
import code from "../assets/code-1 1.svg";
import chart from "../assets/chart-square 1.svg";

const Groups = () => {
  return (
    <section className="flex gap-6 place-content-center text-center before:overflow-hidden before:bg-[#F4F9FF] before:absolute before:w-[54rem] before:top-[10%] before:-z-[10] before:h-[38rem] before:rounded-tl-[9.37rem] ">
      <div className="flex flex-col">
        <div className="p-5 mt-[2.56rem] w-[19.25rem] h-[23.68rem] bg-[#FFF] text-slate-900 rounded-[2rem] shadow-lg border-[#F2F2F2]">
          <div className="bg-[#F1F7FF] rounded-[1.25rem] mb-2 w-[7.5rem] h-[7.5rem] mx-auto flex place-items-center justify-center">
            <img src={box} alt="" />
          </div>
          <h2 className="mt-[1.94rem] mb-[1.69rem] font-medium text-center text-[1.5rem] w-[10.43rem] mx-auto">
            Bussiness Idea Planning
          </h2>
          <p className="text-[#757575]">
            We present you a proposal and discuss niffty-gritty like
          </p>
        </div>
        <div className="p-5 w-[19.25rem] h-[23.68rem] bg-white text-slate-900 rounded-[2rem] shadow-lg mt-[2.56rem] mb-[3.56rem] border-[#F2F2F2]">
          <div className="bg-[#FFF7E3] rounded-[1.25rem] mb-2 w-[7.5rem] h-[7.5rem] mx-auto flex place-items-center justify-center">
            <img src={wallet} alt="" />
          </div>
          <h2 className="mt-[1.94rem] mb-[1.69rem] font-medium text-center text-[1.5rem] w-[12.43rem] mx-auto">
            Financial Planning System
          </h2>
          <p className="text-[#757575]">
            Protocols apart from aengage models, pricing billing
          </p>
        </div>
      </div>
      <div className="flex flex-col relative bottom-14">
        <div className="p-5 w-[19.25rem] h-[23.68rem] bg-white text-slate-900 rounded-[2rem] shadow-lg mt-[2.56rem] border-[#F2F2F2]">
          <div className="bg-[#FFF2F8] rounded-[1.25rem] mb-2 w-[7.5rem] h-[7.5rem] mx-auto flex place-items-center justify-center">
            <img src={code} alt="" />
          </div>
          <h2 className="mt-[1.94rem] mb-[1.69rem] font-medium text-center text-[1.5rem] w-[14.43rem] mx-auto">
            Development Website and App
          </h2>
          <p className="text-[#757575]">
            Communication protocols apart from engagement models
          </p>
        </div>
        <div className="p-5 w-[19.25rem] h-[23.68rem] bg-white text-slate-900 rounded-[2rem] shadow-lg mt-[2.56rem] mb-[3.56rem] border-[#F2F2F2]">
          <div className="bg-[#DEFFEE] rounded-[1.25rem] mb-2 w-[7.5rem] h-[7.5rem] mx-auto flex place-items-center justify-center">
            <img src={chart} alt="" />
          </div>
          <h2 className="mt-[1.94rem] mb-[1.69rem] font-medium text-center text-[1.5rem] w-[14.43rem] mx-auto">
            Market Analysis Project
          </h2>
          <p className="text-[#757575]">
            Protocols apart from aengage models, pricing billing
          </p>
        </div>
        <div className="absolute -right-10 -z-30 bottom-6">
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
    </section>
  );
};

export default Groups;
