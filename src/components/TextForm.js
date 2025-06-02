import React, { useState } from 'react';

export default function TextForm(props) {
  const [text, setText] = useState('');

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert('Converted to UPPERCASE!', 'success');
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert('Converted to lowercase!', 'success');
  };

  const handleClearClick = () => {
    setText('');
    props.showAlert('Text cleared!', 'success');
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    props.showAlert('Copied to clipboard!', 'success');
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/[ ]+/).join(' ');
    setText(newText);
    props.showAlert('Extra spaces removed!', 'success');
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control"
          value={text}
          onChange={handleOnChange}
          style={{
            backgroundColor: props.mode === 'dark' ? '#343a40' : 'white',
            color: props.mode === 'dark' ? 'white' : 'black'
          }}
          id="myBox"
          rows="8"
        ></textarea>
      </div>

      <button disabled={text.length === 0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick}>
        Convert to Uppercase
      </button>
      <button disabled={text.length === 0} className="btn btn-secondary mx-1 my-1" onClick={handleLoClick}>
        Convert to Lowercase
      </button>
      <button disabled={text.length === 0} className="btn btn-warning mx-1 my-1" onClick={handleClearClick}>
        Clear Text
      </button>
      <button disabled={text.length === 0} className="btn btn-success mx-1 my-1" onClick={handleCopy}>
        Copy Text
      </button>
      <button disabled={text.length === 0} className="btn btn-info mx-1 my-1" onClick={handleExtraSpaces}>
        Remove Extra Spaces
      </button>

      <div className="my-3">
        <h2>Your Text Summary</h2>
        <p>
          {text.split(/\s+/).filter((element) => element.length !== 0).length} words, {text.length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((e) => e.length !== 0).length} minutes to read</p>

        <h2>Preview</h2>
        <p>{text.length > 0 ? text : 'Nothing to preview!'}</p>
      </div>
    </div>
  );
}
