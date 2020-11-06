import React from "react";
import { connect, styled } from "frontity";
import Link from "./link";
import Nav from "./nav";
import MobileMenu from "./menu";
import Automata from './automata/automata.js';

const Header = ({ state }) => {
  console.log('state', state);
  return (
    <>
      <Container>
        <StyledLink link="/">
          <Title>
            <TitleAnimation>{state.frontity.title}</TitleAnimation>
          </Title>
        </StyledLink>
        <MobileMenu />
      </Container>
      <Nav />
      <HeaderExperience>
        <Automata />
      </HeaderExperience>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Header);

const Container = styled.div`
  width: 1000px;
  max-width: 100%;
  box-sizing: border-box;
  padding-top: 24px;
  padding-bottom: 24px;
  color: #fff;
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */
`;

const Title = styled.div`
  display: flex;
  justify-content: left;
  width: 165px;
`;

const TitleAnimation = styled.h2`
  font-family: 'VT323', monospace;
  overflow: hidden; /* Ensures the content is not revealed until the animation */
  border-right: .15em solid orange; /* The typwriter cursor */
  white-space: nowrap; /* Keeps the content on a single line */
  margin: 0 auto; /* Gives that scrolling effect as the typing happens */
  letter-spacing: .15em; /* Adjust as needed */
  animation: 
    typing 3.5s steps(13, end),
    blink-caret .75s step-end infinite;
    /* The typing effect */
  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  /* The typewriter cursor effect */
  @keyframes blink-caret {
    from, to { border-color: transparent }
    50% { border-color: green; }
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const HeaderExperience = styled.div`
  /* width: 100%; */
  height: 300px;
  /* background-image: url('https://www.jakubkonka.com/images/gof.gif'); */
`;