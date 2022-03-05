import React from "react";
import "../sass/test.sass";
import test from "../assets/test.svg";

function Test() {
  return (
    <div className="test">
      <header className="test-header">
        <div className="test-navbar">
          <ul>
            <li>
              <a href="https://nwko.github.io/Nox/test">Test link</a>
            </li>
          </ul>
        </div>
        Hello, this is a test "page" so, you should probably move along :D
        <p>
          There's nothing really to see here so, you should probably go check
          out the other "pages"
        </p>
      </header>
      <div className="test-content">
        This is a test don't mind me and this works just fine nice
        <img src={test} className="App-logo" alt="test" />
        <video
          src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
          autoPlay
          loop
          muted
        />
        <pre>
          <code className="language-html">
            {`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Test</title>
            </head>
            <body>
                <h1>Testing!</h1>
            </body>
            </html>
            `}
          </code>
        </pre>
      </div>
    </div>
  );
}

export default Test;
