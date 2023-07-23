// eslint-disable-next-line react/prop-types
const Heading = ({ heading, width }) => {
  return (
    <h1
      style={width}
      className="text-[2.5rem] text-slate-950 font-bold leading-[normal]"
    >
      {heading}
    </h1>
  );
};

export default Heading;
