import React from 'react';
import './App.css';

let marked = require("marked");

const text = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. But the list goes on...
- Even if you use dashes or asterisks.
* And last but not least, let's not forget embedded images:

![React Logo](https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/200px-React-icon.svg.png)`;

var markdownText = marked(text);

const bodyStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  margin: 20
}

const editorSectionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
  width: 500,
  maxWidth: "90%",
  margin: 20
}

const previewSectionStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "stretch",
  justifyContent: "center",
  width: 800,
  maxWidth: "90%",
  margin: 20
}

const previewStyle = {
  borderStyle: "solid",
  borderWidth: 1,
  padding: 20,
  background: "lightsteelblue"
}

const headingStyle = {
  borderStyle: "solid",
  borderWidth: 1,
  margin: 0,
  background: "lightslategray",
  paddingLeft: 20
}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {markdown: text};
  }
  updateMarkdown(markdown) {
    this.setState({markdown});
    markdownText = marked(markdown);
    console.log(markdownText);
    this.forceUpdate();
  }
  render() {
    document.body.style.background = "steelblue";
    return (
      <div style={bodyStyle}>
        <section style={editorSectionStyle}>
          <h3 style={headingStyle}>Editor</h3>
          <textarea
            id="editor"
            rows="15"
            cols="75"
            style={{background: "lightsteelblue"}}
            value={this.state.markdown}
            onChange = {e => {this.updateMarkdown(e.target.value);}}
          ></textarea>
        </section>
        <section style={previewSectionStyle}>
          <h3 style={headingStyle}>Previewer</h3>
          <div id="preview" style={previewStyle} dangerouslySetInnerHTML={{__html: markdownText}}></div>
        </section>
      </div>
    )
  }
}

function App() {
  return (
    <Previewer />
  );
}

export default App;
