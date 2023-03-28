import { FC, useRef } from "react";
import { motion } from "framer-motion";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Link, useParams, useSearchParams } from "react-router-dom";
import { Card } from "../components/Card";

const Wrapper = styled.div`
display: flex;
flex-direction: column;
gap: 32px;

  padding: 32px;
  .handle {
    background: white;
    border-radius: 30px;
    width: 150px;
    height: 150px;
    position: absolute;
    top: calc(50% - 150px / 2);
    left: calc(50% - 150px / 2);
  }

  .area {
    opacity: 0.2;
    background: white;
    position: absolute;
    width: 300px;
    height: 300px;
    border-radius: 30px;
    top: calc(50% - 150px);
    left: calc(50% - 150px);
  }
`;

export const Param: FC = () => {
  const constraintsRef = useRef(null);
  const [params] = useSearchParams();

  console.log("params", params);

  return (
    <Wrapper>
      <Link to={`/param?key=${Math.ceil(Math.random() * 100)}`}>
        <Button>Push random number into url</Button>
      </Link>
      <Card noHover>
        <h4>Random Number: Key in url param</h4>
        <p style={{fontSize: '1.4rem'}}>{params?.get("key") ?? "Nothing Provided"}</p>
      </Card>
      <div>
        <motion.div className="area" ref={constraintsRef} />
        <motion.div
          className="handle"
          drag
          dragConstraints={constraintsRef}
          style={{
            background: "#3c4f6b",
            width: 150,
            height: 150,
            borderRadius: 32,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
          }}
        >
          <div>Drag Me</div>
        </motion.div>
      </div>
      <Link to="/">
        <Button>{`< `}Back to home</Button>
      </Link>
    </Wrapper>
  );
};
