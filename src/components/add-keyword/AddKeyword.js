import React, { Component } from 'react'
import KeywordBlock from './keywordBlock'

export class AddKeyword extends Component {
  state = {
    value: "",
    keywordArray: ["add", "your", "tags"],
    errorMessage : undefined
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

  render() {

    return (
      <div className='text-center p-5'>
        <input
          type="text"
          className={`border shadow p-3`}
          placeholder='Add a keyword to add'
          onKeyPress={this.addKeyword}
          disabled={this.state.keywordArray.length >= 24}
          value={this.state.value}
          onChange={(event) => this.setState({ value: event.target.value })} />
        <div className='text-red-300'>
          {this.state.errorMessage}
        </div>
        <p
          className={`text-${this.state.keywordArray.length >= 24 ?
            "red-600" :
            "black"}`}>{this.state.keywordArray.length} / 24
        </p>
        < KeywordBlock keywords={this.state.keywordArray} handleDeletion={this.handleDeletion} />
      </div>
    )
  }
}

export default AddKeyword