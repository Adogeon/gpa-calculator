import React from 'react';
import InputArea from "./components/InputArea";
import ScoreArea from "./components/ScoreArea";
import Jumbotron from "react-bootstrap/Jumbotron"
import { StudentScoreProvider} from "./utils/GlobalState";

import Container from "react-bootstrap/Container";


function App() {
  return (
    <StudentScoreProvider>
      <Container>
        <Jumbotron>
          <h1>GPA Calculator</h1>
        </Jumbotron>
        <InputArea />
        <ScoreArea />
      </Container>
    </StudentScoreProvider>
  );
}

export default App;
