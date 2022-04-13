import styled from "styled-components";
import banner from "../assets/images/banner.jpg";

export const StyledBanner = styled.div`
  width: 100%;
  height: 100vh;
  background: url(${banner});
  background-size: cover;
  margin-bottom: 50px;
`;

const Banner = () => {
  return <StyledBanner></StyledBanner>;
};

export default Banner;
