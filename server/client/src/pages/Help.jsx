import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  width: 700px;
  height: 400px;
  margin-top: 80px;
  background-color: ${({ theme }) => theme.bgLighter};
  color: ${({ theme }) => theme.text};
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: relative;
`;

const Title = styled.h1`
  margin-top: 15px;
  margin-bottom: 15px;
  text-align: center;
`;

const Subtitle = styled.h2`
  font-size: 15px;
  text-align: center;
  margin-bottom: 15px;
`;

const Contact = styled.div`
  margin-top: 20px;
`;

const P = styled.p`
  margin-top: 5px;
  text-align: center;
`;

const A = styled.a`
  text-align: center;
  text-decoration: underline;
  color: ${({ theme }) => theme.text};
`;

const Help = () => {
  return (
    <Container>
      <Wrapper>
        <Title>About MaloTube</Title>
        <Subtitle>
          My name is Malo de Poret, I'm fullstack developper J.s.
        </Subtitle>
        <P>
          I wanted to make a clone of the Youtube Application from scratch. I
          used React/Redux, Node.js / Express and a database in MongoDb. This
          project allowed me to use React hooks, Redux Dev Toolkits, JWT
          Authentication, Firebase for GoogleAuth, Upload files.
        </P>
        <P>
          Feel free to create an account or log in with a google account and
          upload your own videos ...... Have fun !
        </P>
        <Contact>
          <P>You can contact me on my mail malo.deporet@gmail.com</P>
          <P>or </P>
          <P>
            On my LinkedIn :{" "}
            <A href="https://www.linkedin.com/in/malo-de-poret/">
              Malo de Poret
            </A>
          </P>
        </Contact>
      </Wrapper>
    </Container>
  );
};

export default Help;
