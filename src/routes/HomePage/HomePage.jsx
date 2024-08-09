import SearchBar from "../../components/SearchBar/SearchBar.jsx";
import "./HomePage.scss";

const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & Get Your Dream Place</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Esse
            veritatis earum similique explicabo aspernatur, expedita atque
            optio, consequuntur quo praesentium soluta, placeat corporis
            assumenda tenetur sapiente facere! Nihil, consequuntur esse.
          </p>

          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years Of Experience</h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award Gained</h2>
            </div>

            <div className="box">
              <h1>1200+</h1>
              <h2>Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
};

export default HomePage;
