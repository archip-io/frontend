import { Button } from "../components/button/Button.tsx";
import { HeaderText, PlainText } from "../components/text/Text.tsx";
import "./App.css";

export default function App() {
  return (
    <>
      <p>
        <HeaderText
          config={{
            size: 40,
            text: "Hello",
          }}
        />
      </p>
      <p>
        <PlainText
          config={{
            size: 20,
            text: "How are you?",
          }}
        />
      </p>
      <p>
        <Button
          config={{
            size: 20,
            text: "Click",
          }}
        />
      </p>
    </>
  );
}
