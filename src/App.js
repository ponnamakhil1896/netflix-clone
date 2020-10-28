
import './App.css';
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Netflix-clone front end</h1>
      <Row title="NETFLIX ORGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
    </div>
  );
}

export default App;
