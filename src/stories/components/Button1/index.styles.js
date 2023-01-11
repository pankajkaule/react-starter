import styled from "../../../theme";
import { css, keyframes } from "@emotion/react";

const MyStyledButton = styled("button")((props) => ({
  backgroundColor: props.bgcolor,
  fontSize: props.fontSize,
  border: "none",
  padding: props.padding,
  borderRadius: "5px",
  textTransform: "uppercase",
  letterSpacing: "2px",
  // transform: `translateY(${props.translate})`,
  // transform: `translateY(-${props.translate})`,
  color: props.color,

  boxShadow: props.mouseShadow,
  animation: `${myKeyframe} 1s infinite ease`

}));

const myKeyframe = keyframes`
    0 %  { transform: translate(1px, 10px)   rotate(0deg)    },
    
    100% { transform: translate(1px, -2px)  rotate(-1deg);  }
`;

export default MyStyledButton;
