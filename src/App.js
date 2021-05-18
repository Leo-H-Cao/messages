import "./css/App.css";
import Header from "./components/Header";
import MessageSpace from "./components/MessageSpace";
import "stream-chat-react/dist/css/index.css";

function App() {
  return (
    <div className="App">
      <Header />
      <MessageSpace />
    </div>
  );
}

export default App;
