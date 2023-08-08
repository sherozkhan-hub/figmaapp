// eslint-disable-next-line react/prop-types
const Scroll = ({ scroll }) => {
  return (
    <div>
      <button
        onClick={scroll}
        style={{
          backgroundColor: "black",
          border: "none",
          borderRadius: "50%",
          color: "white",
          cursor: "pointer",
          fontSize: "16px",
          lineHeight: "48px",
          width: "48px",
        }}
        className="w-[50px] h-[50px] bg-red-500 fixed z-20 right-6 bottom-5 text-xl font-bold"
      >
        &uarr;
      </button>
    </div>
  );
};

export default Scroll;
