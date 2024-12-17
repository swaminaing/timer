import { Component } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";

function App() {
  return (
    <main>
      {/* <Input id='name' label='Your name' type="text" />
      <Input id='age' label='Your age' type="text" /> */}

      <p>
        <Button>A Button</Button>
      </p>

      <p>
        <Button href="https://google.com">
          A Link
        </Button>
      </p>

      <p>
        <Container as={Button}>Click</Container>
      </p>
    </main>
  );
}

export default App;
