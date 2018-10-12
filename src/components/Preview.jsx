import React, { Component } from "react";
import "./Preview.css";

// const marked = require("marked");
const renderer = new window.marked.Renderer();

renderer.link = (href, title, text) => {
  return `<a href="${href}"${title && title.length ? `title="${title}" ` : ""} target="_blank">${text}</a>`;
}

window.marked.setOptions({
  renderer,
  breaks: true
});

class Preview extends Component {
  markdown() {
    return {
      __html: window.marked(this.props.markdown)
    };
  }

  render() {
    return (
      <div id="preview" dangerouslySetInnerHTML={ this.markdown() }></div>
    );
  }
}

export default Preview;
