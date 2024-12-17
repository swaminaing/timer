import { Component, useRef } from "react";
import "./App.css";
import Button from "./components/Button";
import Input from "./components/Input";
import Container from "./components/Container";
import Card from "./components/Card";

function App() {
  const input = useRef<HTMLInputElement>(null);

  return (
    <main>
      <Input id='name' label='Your name' type="text" ref={input} />
      <Input id='age' label='Your age' type="text" ref={input} />

      <p>
        <Button>A Button</Button>
      </p>

      <p>
        <Button href="https://google.com">A Link</Button>
      </p>

      <p>
        <Container as={Button}>Click</Container>
      </p>

      <Card
        title="mycard"
        actions={
          <button onClick={() => console.log("Button clicked!")}>Click Me!</button>
        }
      >
        <p>Some content</p>
      </Card>
    </main>
  );
}

export default App;
