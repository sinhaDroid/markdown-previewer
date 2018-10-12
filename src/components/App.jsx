import React, { Component } from 'react';
import Preview from "./Preview";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      markdown: "# Markdown Examples\n---\n## Headings\nCreate headings by placing up to 6 `#` symbols and a space before your text.\n\n### Example:\n```\n# H1 (Largest Heading)\n## H2\n### H3\n#### H4\n##### H5\n###### H6 (Smallest Heading)\n```\n### Result:\n# H1 (Largest Heading)\n## H2\n### H3\n#### H4\n##### H5\n###### H6 (Smallest Heading)\n\n---\n## Text Styling\nText can be styled with bold, italics, and strikethrough text.\n\nStyle | Syntax | Example | Result\n--- | --- | --- | ---\nBold | `** **` or `__ __` | `**Bold Text**` | **Bold Text**\nItalic | `* *` or `_ _` | `*Italicized Text*` | *Italicized Text* \nStrikethrough | `~~ ~~` | `~~Strikethrough Text~~` | ~~Strikethrough Text~~ \nBold & Italic | `** **` and `_ _` | `**Bold _and_ Italicized**`| **Bold _and_ Italicized**\n\n---\n## Block Quotes\nBlocks of text can be quoted with a `>`.\n\n### Example:\n```\n> Not everything that can be counted counts,\n> and not everything that counts can be counted.\n> -- Albert Einstein\n``` \n\n### Result:\n> Not everything that can be counted counts,\n> and not everything that counts can be counted.\n> -- Albert Einstein\n\n---\n## Code & Commands\nCode and commands can be called out inline by wrapping them in backticks (```````)\n\n### Example:\n```\nUse `git status` to list all new or modified files that haven't been committed.\n```\n\n### Result:\nUse `git status` to list all new or modified files that haven't been committed.\n\nA block of code can be written by placing triple backticks (``` ``````) before and after the block of code\n\n---\n## Links\nLinks can be provided by placing the link text in brackets (`[]`) followed by the link url in parentheses. The url may be followed by an optional string that will be used for the link `title` attribute.\n\n### Example:\n```\n[FreeCodeCamp.org](https://www.freecodecamp.org \"Learn to Code Today!\")\n```\n\n### Result:\n[FreeCodeCamp.org](https://www.freecodecamp.org \"Learn to Code Today!\")\n(Hover over the link to see the title text)\n\n\n---\n## Images\nImages can be placed in a similar manner to links, except an exclamation point (`!`) is placed before the brackets.  The text in the brackets will used for the `alt` attribute of the image.\n\n### Example:\n```\n![Profile Picture](https://s19.postimg.cc/4c5sakssz/profile.jpg \"Smiling on vacation!\")\n```\n\n### Result:\n![Profile Picture](https://s19.postimg.cc/4c5sakssz/profile.jpg \"Smiling on vacation!\")\n(Hover over the picture to see the title text)\n\n\n---\n## Lists\nOrdered lists can be created by placing a number followed by a period and a space before your text.\n\n### Example:\n1. Item 1\n2. Item 2\n3. Item 3\n\nUnordered lists can be created by placing a `-`, `+` or `*` followed by a space before your text.\n\n### Example:\n```\n- Unordered item\n+ Unordered item\n* Unordered Item\n```\n\n### Result:\n- Unordered item\n+ Unordered item\n* Unordered Item\n\nSub-lists can be created by indenting the items in the list.  Sub-lists can be ordered or unordered\n\n### Example:\n```\n- First Item\n- Second Item\n  - First Sub-Item\n  - Second Sub-Item\n    1. First Sub-Sub-Item\n    2. And so on...\n- Third Item\n```\n\n### Result:\n- First Item\n- Second Item\n  - First Sub-Item\n  - Second Sub-Item\n    1. First Sub-Sub-Item\n    2. And so on...\n- Third Item"
    };

    this.updateMarkdown = this.updateMarkdown.bind(this);
  }

  updateMarkdown(event) {
    this.setState({
      markdown: event.target.value
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Markdown Previewer</h1>
        <div className="rows">
          <div className="wrapper">
            <p className="header">Editor</p>
            <textarea id="editor" value={this.state.markdown} onChange={this.updateMarkdown}></textarea>
          </div>
          <div className="wrapper">
            <p className="header">Preview</p>
            <Preview markdown={this.state.markdown} />
          </div>
        </div>
        <footer>
          <p>Coded by <a href="http://www.deepanshusinha.me" target="_blank" rel="noopener noreferrer">Deepanshu Sinha</a></p>
        </footer>
      </div>
    );
  }
}

export default App;
