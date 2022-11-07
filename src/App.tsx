import { useState } from "react";
import styled from "@emotion/styled";
import QRCode from "qrcode.react";

function App() {
  const [value, setValue] = useState("");
  const [back, setBack] = useState("#FFFFFF");
  const [fore, setFore] = useState("#000000");
  const [size, setSize] = useState(256);

  const Container = styled.div`
      width : 100wh  ;
      background : red;
      input{

      }
  `
  return (
    <Container className="App">
      <div>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value of Qr-code"
        />
        {value && (
          <QRCode
            title="GeeksForGeeks"
            value={value}
            bgColor={back}
            fgColor={fore}
            size={size === null ? 0 : size}
          />
        )}
      </div>
    </Container>
  );
}

export default App;
