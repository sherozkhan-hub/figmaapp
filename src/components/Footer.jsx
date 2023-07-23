import Paragraph from "./Paragraph";
import fb from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import twitter from "../assets/twitter.svg";

const Footer = () => {
  const paragraph = `Leading digital agency with solid design and development expertise. We
    build readymade websites mobile applications and elaborate online
    business services.`;
  return (
    <>
      <footer className="w-[75rem] h-[19.75rem] flex gap-4 mt-[4.12rem] list-none">
        <div className="w-1/4">
          <h3 className="font-bold text-xl">A+ Studio</h3>
          <Paragraph paragraph={paragraph} />
          <ul className="flex gap-2">
            <li>
              <img src={fb} alt="" />
            </li>
            <li>
              <img src={linkedin} alt="" />
            </li>
            <li>
              <img src={twitter} alt="" />
            </li>
          </ul>
        </div>
        <div className="w-[75%] flex justify-evenly gap-6">
          <div>
            <h3 className="font-semibold text-xl mb-6">What We Do</h3>
            <ul className="space-y-2 ">
              <li>Web Design</li>
              <li>App Design</li>
              <li>Social Media App</li>
              <li>Market Analysis Project</li>
            </ul>
          </div>
          <div className="space-y-2 ">
            <h3 className="font-semibold text-xl mb-6">Company</h3>
            <li>About Us</li>
            <li>Career</li>
            <li>Become Investor</li>
          </div>
          <div className="space-y-2 ">
            <h3 className="font-semibold text-xl mb-6">Support</h3>
            <li>FAQ</li>
            <li>Policy</li>
            <li>Bussiness</li>
          </div>
          <div className="space-y-2 ">
            <h3 className="font-semibold text-xl mb-6">Contact</h3>
            <li>Whatsapp</li>
            <li>Support 24</li>
          </div>
        </div>
      </footer>
      <p className="text-center py-4">Copyright © 2022 Avi Yansah</p>
    </>
  );
};

export default Footer;
