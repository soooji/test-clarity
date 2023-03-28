import { FC } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../components/Button";
import { Card } from "../components/Card";

const Grid = styled.div`
  padding: 32px;
  display: grid;
  gap: 16px;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  height: 100vh;
  min-height: 1000px;
  div:nth-child(1) {
    grid-area: 1 / 1 / 3 / 3;
  }
  div:nth-child(3) {
    grid-area: 3 / 3 / 5 / 4;
  }
`;

export const Home: FC = () => {
  return (
    <Grid>
      <Card>
        <h2>This is a React project ot test</h2>
      </Card>
      <Card>
        <h4>Simple page with /tournament url</h4>
        <Link to="/tournament">
          <Button>Tournament</Button>
        </Link>
      </Card>
      <Card>
        <h5>Page with param in url</h5>
        <Link to="/param">
          <Button>Pagram</Button>
        </Link>
      </Card>
      <Card>
        <h5>But maybe another tool</h5>
      </Card>
      <Card>
        <h6>Can be usefull for us</h6>
      </Card>
      <Card></Card>
      <Card>
        <h6>Can be usefull for us</h6>
      </Card>
      <Card>
        <h6>Can be usefull for us</h6>
      </Card>
      <Card>
        <h6>Can be usefull for us</h6>
      </Card>
      <Card></Card>
      <Card>
        <h6>Can be usefull for us</h6>
      </Card>
      <Card>
        <h6>Can be usefull for us</h6>
      </Card>
      <Card>
        <h6>Can be usefull for us</h6>
      </Card>
      <Card>
        <h6>Can be usefull for us</h6>
      </Card>
      <Card>
        <h6>Can be usefull for us</h6>
      </Card>
      <Card>
        <h6>Can be usefull for us</h6>
      </Card>
    </Grid>
  );
};
