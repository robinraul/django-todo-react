

const subtitleStyle = {
  fontStyle: "italic",
  fontSize: "x-large",
  color: "blue",
};

const Banner = ({ children }) => {
  return (
    <header className="row mb-4">
      <div className="col-5">
        <img src="./mxlogo.JPG" alt="logo"  />
      </div>
      <div className="col-7 mt-5" style={subtitleStyle}>
        {children}
      </div>
    </header>
  );
};

export default Banner;
