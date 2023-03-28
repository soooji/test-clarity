import { FC } from "react";
import styled from "styled-components";
import { Card } from "../components/Card";
import { motion } from "framer-motion";
import { Button } from "../components/Button";
import { Link } from "react-router-dom";

const Wrapper = styled.div`
  padding: 32px;
  img {
    border-radius: 24px;
  }
  /* display: grid; */
  /* gap: 16px; */
  /* height: 100vh; */
`;

export const Tournament: FC = () => {
  return (
    <Wrapper>
      <h2 style={{ margin: 0 }}>This could be a tournament</h2>
      <h4 style={{ fontWeight: 100, marginTop: "12px" }}>
        In the front-end portal
      </h4>
      <div style={{ display: "flex" }}>
        <img
          src="https://images.unsplash.com/photo-1679421138603-2dfc7317365b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          width="500px"
        />
        <Card noHover style={{ marginLeft: 16 }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Card>
      </div>
      <br />
      <br />
      <br />
      <div
        style={{
          display: "grid",
          gridAutoFlow: "column",
          justifyContent: "center",
          gap: "100px",
          width: "100%",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map((v) => (
          <motion.div
            key={v}
            style={{
              display: "inline-block",
              background: "#27549a",
              width: 30,
              height: 30,
              borderRadius: 15,
            }}
            animate={{
              scale: [1, 1.5, 1.5, 1, 1],
              rotate: [0, 0, 270, 270, 0],
              borderRadius: ["20%", "20%", "50%", "50%", "20%"],
              opacity: [0, 0, 1, 1, 0],
            }}
            transition={{
              duration: 1,
              repeat: 10_000_000,
            }}
          />
        ))}
      </div>
      <br />
      <br />
      <br />
      <div style={{ display: "flex" }}>
        <Card noHover style={{ marginRight: 16 }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </Card>
        <img
          src="https://images.unsplash.com/photo-1679421138603-2dfc7317365b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
          width="500px"
        />
      </div>
      <br />
      <br />
      <br />
      <br />
      <Link to="/">
        <Button>Back to home</Button>
      </Link>
    </Wrapper>
  );
};
