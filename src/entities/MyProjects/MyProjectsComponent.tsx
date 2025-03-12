const MyProjects = () => {
  return (
    <div className="myProjects-container">
      <div className="wrap">
        {/* first */}
        <div className="lineOfProjects">
          <div className="rotate"
            style={{ transform: "rotate(-35deg)", marginRight: "4em", paddingTop: "10em" }}>
            <a href="https://github.com/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRj5cHt1ugymFusNUPSinFEWoey706jiBDJg&s"
                alt="my projects"
              />
            </a>
          </div>
          <div className="rotate">
            <a href="https://github.com/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRj5cHt1ugymFusNUPSinFEWoey706jiBDJg&s"
                alt="my projects"
              />
            </a>
          </div>
          <div
            className="rotate"
            style={{
              transform: "rotate(35deg)",
              marginLeft: "4em",
              paddingTop: "10em",
            }}
          >
            <a href="https://github.com/">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRj5cHt1ugymFusNUPSinFEWoey706jiBDJg&s"
                alt="my projects"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyProjects;
