import { useRef } from "react";
import "./App.css";
import Button from "./components/UI/Button";
import Input from "./components/UI/Input";
import Container from "./components/UI/Container";
import Card from "./components/UI/Card";
import Form, {type FormHandle} from "./components/UI/Form";

function App() {
  const input = useRef<HTMLInputElement>(null);
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown){
    const extractedData = data as {name: string; age: string};
    console.log(extractedData);
    customForm.current?.clear();
  }

  return (
    <main>
      <Input id="name" label="Your name" type="text" ref={input} />
      <Input id="age" label="Your age" type="text" ref={input} />

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
          <button onClick={() => console.log("Button clicked!")}>
            Click Me!
          </button>
        }
      >
        <p>Some content</p>
      </Card>

      <Form onSave={handleSave} ref={customForm}>
        <Input id="name" label="Your name" type="text" />
        <Input id="age" label="Your age" type="text" />
        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
