import React from "react";
import logo from "./download.png";
import ImageWithButtons from "./ImageWithButtons";

function App() {
  return (
    <div className="App">
      <ImageWithButtons
        // enableZoomOnHover={0}
        // containerStyle={{}}
        img={
          <img
            src={logo}
            alt="logo"
            style={
              {
                // backgroundColor: "black",
                // margin: "50px",
                // height: "250px",
                // width: "100%",
              }
            }
          />
        }
        buttons={
          <div>
            <button>Hello world</button>
          </div>
        }
      />
    </div>
  );
}

export default App;
