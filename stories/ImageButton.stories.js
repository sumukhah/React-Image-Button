import React from "react";
import Image from "./assets/image.jpeg";

import ImageWithButtons from "../src/";
import { Button } from "./Button";

export default {
  title: "ImageButton",
  component: ImageWithButtons,
};

const Template = (args) => (
  <ImageWithButtons {...args}>
    <Button primary label="Image-Button" />
  </ImageWithButtons>
);

export const ZeroConfig = Template.bind({});
ZeroConfig.args = {
  img: <img src={Image} />,
};

export const EventListeners = Template.bind({});
EventListeners.args = {
  img: <img src={Image} />,
  onClick: () => {console.log('you have clicked on the region')},
  onMouseEnter: () => {console.log('Mouse is entered the region')},
  onMouseLeave: () => {console.log('Mouse left the region')},
};

export const AllOtherProps = Template.bind({});
AllOtherProps.args = {
  img: <img src={Image} />,
  zoomOnHover: -1,
  animationDuration: 0.4,
  buttonPosition: "bottom",
  imageBackgroundColor: 'gray',
  containerStyle: {borderRadius: '40px'},
};
