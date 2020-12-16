import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import MarkdownRender from "../../utils/react-markdown-mathjax.js";
import eccPath from "../../docs/elliptic_curve_cryptography.md";

function Test() {
  const [state, setState] = useState({
    description: "Empty"
  });
  
  useEffect(() => {
    const fetchDescription = async () => {
      await fetch(eccPath)
        .then(res => res.text())
        .then(text => {
          setState(prevState => ({
            ...prevState,
            description: text
          }));
        },
        err => {
          setState(prevState => ({
            ...prevState,
            description: "failed"
          }));
        });
    };
    fetchDescription();
  }, []);

  return (
    <div>
      <div class="container">
        <MarkdownRender source={state.description} />
      </div>
    </div>
  );
}

export default Test;
