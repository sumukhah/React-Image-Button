import React from "react";
import PropType from "prop-types";
import "./ImageContainer.css";

const buttonPosition = {
  top: { top: "0%", transform: "translate(-50%, 0%)" },
  bottom: { bottom: "0%" },
  center: { top: "50%" },
};

const ImageWithButtons = (props) => {
  let containerClassName = "image_container";
  if (props.zoomOnHover > 0) {
    containerClassName = "image_container zoom_in";
  } else if (props.zoomOnHover < 0) {
    containerClassName = "image_container zoom_out";
  }

  const transitionDuration = {
    transition: `${props.animationDuration}s ease-in-out`,
  };

  return (
    <div
      className={containerClassName}
      style={{
        overflow: "hidden",
        backgroundColor: props.imageBackgroundColor,
        ...props.containerStyle,
      }}
      onMouseEnter={props.onMouseEnter}
      onMouseLeave={props.onMouseLeave}
      onClick={props.onClick}
    >
      <div className="image" style={{ ...transitionDuration }}>
        {props.img}
      </div>
      <div
        className={`buttons ${!props.alwaysShowButton && "hidden"}`}
        style={{
          ...buttonPosition[props.buttonPosition],
          ...props.buttonsContainerStyle,
        }}
      >
        {props.children}
        {/* a button */}
      </div>
    </div>
  );
};

ImageWithButtons.defaultProps = {
  zoomOnHover: -1,
  alwaysShowButton: false,
  buttonPosition: "center",
  animationDuration: 1,
};

ImageWithButtons.propTypes = {
  img: PropType.element.isRequired,
  zoomOnHover: PropType.oneOf([1, 0, -1]).isRequired,
  animationDuration: PropType.number.isRequired,
  buttonPosition: PropType.oneOf(["top", "bottom", "center"]).isRequired,
  onMouseEnter: PropType.func,
  onMouseLeave: PropType.func,
  onClick: PropType.func,
  imageBackgroundColor: PropType.string,
  containerStyle: PropType.object,
  children: PropType.element,
  alwaysShowButton: PropType.bool,
  buttonsContainerStyle: PropType.object,
};

export default ImageWithButtons;
