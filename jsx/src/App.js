import Card from "./Card";
import "bulma/css/bulma.css";
import AlexaImage from "./img/alexa.png";
import CortanaImage from "./img/cortana.png";
import SiriImage from "./img/siri.png";

function App() {
  return (
    <div className="card-component">
      <div className="card-header">
        <h1>Header</h1>
      </div>
      <div className="card-container">
        <Card title="Susan" sub="@susan22" img={AlexaImage} />
        <Card title="James" sub="@jamey22" img={CortanaImage} />
        <Card title="Dave" sub="@dave2" img={SiriImage} />
      </div>
    </div>
  );
}

export default App;
