import { useState } from "react";

function App() {
  return (
    <div className="App">
      <Folder name="Desktop">
        <Folder name="Music">
          <Files name="Obinasom.mp3" />
          <Files name="Celestial.mp3" />
        </Folder>
        <Files name="Assignment1.docx" />
        <Files name="vacation.jpeg" />
      </Folder>
      <Folder name="Downloads" />
      <Folder name="Documents" />
      <Folder name="Applications" />
    </div>
  );
}

const Folder = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const arrowDirection = isOpen ? "down" : "right";

  const openFolder = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <span onClick={openFolder}>
        <i className="blue folder icon" style={{ cursor: "pointer" }}></i>
        <i
          className={`caret ${arrowDirection} icon`}
          style={{ cursor: "pointer" }}
        ></i>
        {props.name}
      </span>
      <div style={{ marginLeft: "17px" }}>{isOpen ? props.children : null}</div>
    </div>
  );
};

const Files = ({ name }) => {
  const fileExtension = name.split(".")[1];

  const fileIcons = {
    mp3: "headphones",
    docx: "file word outline",
    jpeg: "file image",
  };

  return (
    <div>
      <i className={`${fileIcons[fileExtension]} icon`}></i>
      {name}
    </div>
  );
};

export default App;
