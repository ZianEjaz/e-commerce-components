import React, { Component } from "react";

class RemoveSpaces extends Component {
  state = {
    filteredString: "Enter data to remove spaces",
  };
  inputChange = (event) => {
    let string = event.target.value;
    let filteredString = string.replace(/\s/g, "");
    this.setState({ filteredString });
  };
  //copy code to clipboard
  copyCodeToClipboard = () => {
    const el = this.textArea;
    el.select();
    document.execCommand("copy");
    this.setState({ filteredString: "" });
  };
  render() {
    return (
      <div className='w-11/12 mx-auto'>
          <div className='w-full mx-auto'>
        <textarea className='w-full mx-auto shadow-md mt-4 p-3 bg-gray-100 text-gray-800'
          onChange={this.inputChange}
          ref={(textarea) => (this.textArea = textarea)}
          value={this.state.filteredString}
        />
        </div>
        <div className='w-full mx-auto'>
        <button className='w-full mx-auto bg-gray-800 p-3 my-2 text-white shadow-md' onClick={() => this.copyCodeToClipboard()}>
          Click To Copy to Clipboard Spaces Removed And Clear Text Box 
        </button>
        </div>
        <p>total Numnber or Chracters : {this.state.filteredString.length} </p>
      </div>
    );
  }
}

export default RemoveSpaces;
