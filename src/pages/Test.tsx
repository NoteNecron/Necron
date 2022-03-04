import React from "react";
import "../Styles/Test.css";

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
    </div>
  );
}

export default Test;
