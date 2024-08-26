import Header from "../components/Header";
import icon from "../assets/icon.png";

export default function Home() {
  return (
    <>
      <Header />

      <div className="app">
        <img src={icon} alt="logo" className="logo" />

        <pre className="code">
          <code>
            <span className="keyword">package</span>{" "}
            <span className="id">main</span>;<br />
            <span className="keyword">func</span>{" "}
            <span className="id">main</span>
            <span className="char">()</span>:{" "}
            <span className="keyword">int</span>{" "}
            <span className="char">{"{"}</span>
            <br />
            <div className="indent">
              <span className="keyword">print</span>
              <span className="char">(</span>
              <span className="string">"Hello, world!"</span>
              <span className="char">)</span>;
            </div>
            <div className="indent">
              <span className="keyword">return</span>{" "}
              <span className="id">0</span>;<br />
            </div>
            <span className="char">{"}"}</span>
          </code>
        </pre>

        <h2>Made for simplicity but translates to complexity.</h2>
      </div>
    </>
  );
}
