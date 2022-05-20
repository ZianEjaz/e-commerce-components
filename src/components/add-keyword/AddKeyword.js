import React, { Component } from 'react'
import KeywordArrayToBubbles from './keywordArrayToBubbles'



export class AddKeyword extends Component {
  state = {
    value: "",
    keywordArray: ["add", "your", "tags"],
    errorMessage: undefined,
    maxKeywords: 24
  }

  addKeyword = (event) => {
    // check length is greater than 3
    if (event.target.value.length < 3 && event.charCode === 13) {
      this.setState({
        errorMessage: "Minimum 3 Chracters"
      })
    }
    else {
      this.setState({ errorMessage: "" })
      // checking enter key is pressed
      if (event.charCode === 13) {
        this.state.keywordArray.push(event.target.value)
        this.setState({
          value: "",
        })
      }
    }
  }


  // deleting keyword from state array
  handleDeletion = (keyword) => {

    const filteredArray = this.state.keywordArray.filter((item) => {
      return item !== keyword
    })
    this.setState({
      keywordArray: filteredArray
    })
  }

returnComponentValue = ()=>{
  this.props.submitFunction(this.state.keywordArray)
}

  render() {

    return (
      <div className='text-center mx-auto'>

        <input
          type="text"
          className={`border shadow p-3 ${this.state.keywordArray.length === this.state.maxKeywords ? "cursor-not-allowed" : null}`}
          placeholder='Add a keyword to add'
          onKeyPress={this.addKeyword}
          disabled={this.state.keywordArray.length === this.state.maxKeywords}
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })} />
        <div className='text-red-300'>
          {this.state.errorMessage}
        </div>
        <p
          className={`text-${this.state.keywordArray.length >= this.state.maxKeywords ?
            "red-600" :
            "black"}`}>{this.state.keywordArray.length} / {this.state.maxKeywords}
        </p>
        < KeywordArrayToBubbles keywords={this.state.keywordArray} handleDeletion={this.handleDeletion} />
        <div className='text-right'>
          <button className='m-5 p-2 bg-gray-200 rounded-xl shadow' onClick={this.returnComponentValue}>Submit</button>
        </div>

      </div>
    )
  }
}

export default AddKeyword