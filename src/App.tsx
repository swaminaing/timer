import { useRef } from "react";
import AddTimer from "./components/AddTimer.tsx";
import Header from "./components/Header.tsx";
import Timers from "./components/Timers.tsx";
import Button from "./components/UI/Button.tsx";
import Container from "./components/UI/Container.tsx";
import Input from "./components/UI/Input.tsx";
import Form, {type FormHandle} from "./components/UI/Form.tsx";

function App() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown){
    const extractedData = data as {name: string, age: string};
    console.log(extractedData)
    customForm.current?.clear();
  }
  return (
    // <>
    //   <Header />
    //   <main>
    //     <AddTimer />
    //     <Timers />
    //   </main>
    // </>
    // <main>
    //   <Input id="name" label="Username: " type="text" ref={input} />
    //   <Input id="password" label="Password: " type="text" />

    //   <p>
    //     <Button href="google.com">Click</Button>
    //   </p>
    //   <p>
    //     <Button>Submit</Button>
    //   </p>
    // </main>
    // <>
    //   <Container as="div">
    //     <h1>Hello I'm a wrapper.</h1>
    //   </Container>

    //   <Container as={Button}>Click Me</Container>
    // </>
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input id='name' label="Username: " />
        <Input id='age' label="Age: " />

        <p>
          <Button>Save</Button>
        </p>
      </Form>
    </main>
  );
}

export default App;
