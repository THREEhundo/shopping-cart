import styled from "styled-components";
import { animated } from "react-spring";

const Content = styled(animated.div)`
  will-change: transform, opacity;
  ${"" /* margin-left: 6px;
  padding: 0px 0px 0px 14px;
  border-left: 1px dashed rgba(255, 255, 255, 0.4);
  overflow: hidden; */}
`;

export default Content;
