import styled, { css } from "styled-components";
import bg1 from "../assets/banner1.jpg";
import bg2 from "../assets/banner2.jpg";
import bg3 from "../assets/banner3.jpg";
import bg4 from "../assets/banner4.jpg";
import bg5 from "../assets/banner5.jpg";
import g3 from "../assets/g3.jpg";
import { useEffect, useState } from "react";


const Container = styled.div`
  height: 680px;
  background-color: black;
  margin: 0;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div<{ bg: string; active: boolean }>`
  position: absolute;
  inset: 0;
  background-image: url(${(props) => props.bg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  padding-left: 10%;
  opacity: ${(props) => (props.active ? 1 : 0)};
  transition: opacity 3s ease-in-out;
`;

const Title = styled.h1`
  color: white;
  font-size: 58px;
  font-weight: bold;
`;

const Subtitle = styled.h3`
  color: white;
  font-size: 18px;
  font-weight: normal;
  max-width: 500px;
`;

const UrlButton = styled.button`
  padding: 20px 30px;
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: rgba(240, 163, 58, 1.0);
  }
`;


const NavContainer = styled.div`
  width: 97%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  padding-left: 20px;
  z-index: 20;
`;

const NavButton = styled.button`
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  border-radius: 100%;
  padding: 10px;
  height: 50px;
  width: 50px;
  cursor: pointer;
`;


const ReflectContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 70%;
  height: 180px !important;
  background-color: red;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  z-index: 15;
`;

const ReflectLeft = styled.div<{width: string, bg?: string, bgimg?: boolean}>`
  width: ${(props) => props.width};
  background: ${(props) => props.bg || "#000"};
  color: #fff;
  height: 180px !important;
  display: flex;
  justify-content: center;
  align-items: center;

  ${(props) => props.bgimg && css `
    background-image: url(${props.bg});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;`
  }
    

  h2 {
    font-size: 32px;
    font-weight: 700;
  }
`;

const Overlay = styled.div`
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
  `;

const PlayContainer = styled.div`
  height: 70px;
  width: 70px;
  border-radius: 100%;
  background-color: transparent;
  border: 1px solid white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`;


const PlayButton = styled.button`
  height: 50px;
  width: 50px;
  border-radius: 100%;
  background-color: white;
  border: none;
  cursor: pointer;
  font-size: 24px;
  color: #f2a53a;
`;

  


const SliderItems = [
  { id: 1, img: bg1, title: "SUMMER SALE", desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS." },
  { id: 2, img: bg2, title: "SUMMER SALE", desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS." },
  { id: 3, img: bg3, title: "SUMMER SALE", desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS." },
  { id: 4, img: bg4, title: "SUMMER SALE", desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS." },
  { id: 5, img: bg5, title: "SUMMER SALE", desc: "DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS." },
];


const Slider = () => {
  const [current, setCurrent] = useState(0);
  const totalItems = SliderItems.length;

  const HandleButtonClick = (direction: string) => {
    if (direction === "left") {
      setCurrent(current === 0 ? totalItems - 1 : current - 1);
    } else {
      setCurrent(current === totalItems - 1 ? 0 : current + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % totalItems);
    }, 5000);

    return () => clearInterval(interval);
  }, [totalItems]);

  return (
    <Container>
      {SliderItems.map((item, index) => (
        <Slide key={item.id} bg={item.img} active={index === current}>
          <Subtitle>{item.desc}</Subtitle>
          <Title>{item.title}</Title>
          <UrlButton>Read More</UrlButton>
        </Slide>
      ))}

      <NavContainer>
        <NavButton onClick={() => HandleButtonClick("left")}>&#8592;</NavButton>
        <NavButton onClick={() => HandleButtonClick("right")}>&#8594;</NavButton>
      </NavContainer>
      <ReflectContainer>
        <ReflectLeft width="33.33%">
          <h2>Reflect Your Style</h2>
        </ReflectLeft>
        <ReflectLeft width="33.33%" bg = "#1e1e1e">
          Lorem ipsum viverra feugiat. Pellentesque libero ut justo,
          ultrices in ligula. Semper at tempufddfel.
        </ReflectLeft>
        <ReflectLeft width="33.33% " bgimg={true} bg={g3}>
          <Overlay>
            <PlayContainer>
              <PlayButton>&#9658;</PlayButton>
            </PlayContainer>
          </Overlay>
        </ReflectLeft>
      </ReflectContainer>
    </Container>
  );
};

export default Slider;
