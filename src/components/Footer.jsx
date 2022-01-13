import React from "react";
import styled from "styled-components";

const FooterBox = styled.div`
  width: 100%;
  height: 260px;

  position: absolute;
  bottom: 0;

  display: flex;
  flex-direction: row;
`;

const FooterDiv = styled.div`
  width: 20%;
  height: 100%;

  color: #000000;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const FooterP = styled.div`
  width: 80%;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const FooterSamp = styled.samp`
  color: #000000;

  margin-top: 20px;
`;

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <FooterBox>
          <FooterDiv>
            <div>logo</div>
          </FooterDiv>

          <FooterP>
            <FooterSamp>(주)router_app | 사업자등록번호:######</FooterSamp>
            <FooterSamp>대표:정은진 | 뭔지모르겟넹</FooterSamp>
            <FooterSamp>wjddmswls0403@gmail.com | F.041-4438-437</FooterSamp>
            <FooterSamp>카카오채널: 정은진귀여웡</FooterSamp>
            <FooterSamp>Cohdiaofd</FooterSamp>
          </FooterP>
        </FooterBox>
      </footer>
    );
  }
}

export default Footer;
