import React from 'react';
import './App.css'
class App extends React.Component {

  render() {
    return (
      <div>
        <div className="editorWrap">
          <div class="toolbar"></div>
          <Editor />
        </div>
        <Preview />
      </div>
    );
  }
}

const Editor = props => {
  return (
    <textarea
      id='editor'
      onChange={props.onChange}
      type='text'
      value={props.markdown}
    />
  )
}

const Preview = props => {
  return (
    <div
      id="preview"
    />
  )
}

export default App;
