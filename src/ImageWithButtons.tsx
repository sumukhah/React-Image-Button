import React from "react";
import "./ImageContainer.css";

interface Props {
  img: JSX.Element;
  enableZoomOnHover: 1 | 0 | -1;
  buttonPosition: "top" | "bottom" | "center";
  containerStyle?: {};
  enableFullScreen?: Boolean;
  buttons?: React.ReactNode;
  alwaysShowButton?: Boolean;
  buttonsContainerStyle?: {};
}

const buttonPosition = {
  top: { top: "0%", transform: "translate(-50%, 0%)" },
  bottom: { bottom: "0%" },
  center: { top: "50%" },
};

const ImageWithButtons = (props: Props) => {
  let containerClassName: string = "image_container";
  if (props.enableZoomOnHover > 0) {
    containerClassName = "image_container zoom_in";
  } else if (props.enableZoomOnHover < 0) {
    containerClassName = "image_container zoom_out";
  }

  return (
    <div className={containerClassName} style={{ ...props.containerStyle }}>
      <div className="image">{props.img}</div>
      <div
        className={`buttons ${!props.alwaysShowButton && "hidden"}`}
        style={{
          ...buttonPosition[props.buttonPosition],
          ...props.buttonsContainerStyle,
        }}
      >
        {props.buttons}
      </div>
    </div>
  );
};

ImageWithButtons.defaultProps = {
  enableFullScreen: true,
  enableZoomOnHover: 0,
  alwaysShowButton: false,
  buttonPosition: "center",
};

export default ImageWithButtons;
