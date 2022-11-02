import { useState } from "react";
import QRCode from "qrcode.react";

function App() {
  const [value, setValue] = useState("");
  const [back, setBack] = useState("#FFFFFF");
  const [fore, setFore] = useState("#000000");
  const [size, setSize] = useState(256);
  return (
    <div className="App">
      <div>
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Value of Qr-code"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setBack(e.target.value)}
          placeholder="Background color"
        />
        <br />
        <br />
        <input
          type="text"
          onChange={(e) => setFore(e.target.value)}
          placeholder="Foreground color"
        />
        <br />
        <br />
        <input
          type="number"
          onChange={(e) =>
            setSize(parseInt(e.target.value === "" ? "0" : e.target.value, 10))
          }
          placeholder="Size of Qr-code"
        />
        <br />
        <br />
        <br />
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
    </div>
  );
}

export default App;
