import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="explore" />
        </main>
        <footer className="App-footer">
          Coded by{" "}
          <a href="https://www.linkedin.com/in/abugbee/" target="_blank">
            Adrienne Bugbee
          </a>
          . Open source code available on{" "}
          <a
            href="https://github.com/abugbee11/dictionary-project-FINAL"
            target="_blank"
          >
            GitHub
          </a>{" "}
          and hosted by{" "}
          <a href="https://voluble-peony-76ef74.netlify.app/" target="_blank">
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
