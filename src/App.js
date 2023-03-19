import Dictionary from "./Dictionary";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary App Test</header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Adrienne Bugbee. Open source code available on GitHub and
            hosted by Netlify.
          </small>
        </footer>
      </div>
    </div>
  );
}
