import React from "react";
import { connect, styled } from "frontity";

const Sidebar = ({ state }) => {
  console.log('state', state);
  return (
      <Container>
        <About>
            <AboutPhoto>
            <img src="https://avatars0.githubusercontent.com/u/5580317?s=460&u=5bbf7522cb47c5f3c38cd2cf1c505fb7192c1c17&v=4" />
            <PolaroidCaption>Rachel & Ruby</PolaroidCaption>
            </AboutPhoto>
            <AboutText>Hi! I am Rachel. The purpose of the site is to explore topics in analytic philosophy through 
            a phenomenological perspective. Hence conceptuelle. Learn more here...</AboutText>
        </About>
      </Container>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Sidebar);

const Container = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  padding-left: 5px;
  padding-right: 5px;
  color: #FFFFFF;
`;

const About = styled.div`
  background-color: #202020;
  display: flex;
  flex-direction: center;
  justify-content: center;
  flex-direction: column;
  padding-left: 5%;
  margin-right: 5%;
  border-left: 2px solid #FFFFFF;
`;

const AboutPhoto = styled.div`
  background-color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 25px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  img {
    width:80%;
  }
`;

const PolaroidCaption = styled.div`
  font-family: 'Roboto Mono', monospace;
  text-align: center;
  padding: 15px 20px 20px;
`;

const AboutText = styled.div`
  font-size: 14px;
  padding: 0px 20px 20px 20px;
`;