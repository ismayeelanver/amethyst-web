import Header from "../components/Header";
export default function About() {
  return (
    <>
      <Header />
      <div className="crd">
        <h1>Table of context</h1>
        <h1>
          | <a href="#welcome">welcome</a> | <a href="#why">why</a> |{" "}
          <a href="#who">who</a> | <a href="#join">join us</a> |
        </h1>
      </div>
      <div className="crd" id="welcome">
        <h1>Welcome!</h1>
        <p>
          Great to see you young hacker! You have stumbled upon the official
          website of the Amethyst Programming Language's About Page, You were
          lucky to find us!
        </p>
      </div>
      <div className="crd" id="why">
        <h1>Why Amethyst?</h1>
        <p>
          Amethyst is a high-level, statically and strongly typed programming
          language which compiles to machine code for better performance. And it
          has inspiration from Golang, C, C++, etc. It also aims to be the most
          simplest and familiar syntax that beginners and other people could
          adapt.
        </p>
      </div>
      <div className="crd" id="who">
        <h1>Who is Amethyst for?</h1>
        <p>
          Amethyst is a high-level programming language. High-level languages
          and the laguages which make the human easily read code in a syntactic
          way that he/she understands it (the syntax).
        </p>
      </div>
      <div className="crd" id="join">
        <h1>How can you join us?</h1>
        <p>Ask any doubt over here of on the official discord server.</p>
        <p>(Disclaimer) By Joining us you will become a miner!</p>
      </div>
    </>
  );
}
