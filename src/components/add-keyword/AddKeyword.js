import React, { Component } from 'react'
import KeywordBlock from './keywordBlock'

export class AddKeyword extends Component {
  state = {
    value: "",
    keywordArray: [1, 2, 3, 5, 4, 6, 7, 8, 9, 10]
  }

  addKeyword = (event) => {

    if (event.charCode === 13) {
      this.setState({

      })
      this.state.keywordArray.push(event.target.value)
    }

  }

  handleDeletion = (keyword) => {

    const filteredArray = this.state.keywordArray.filter((item) => {
      return item !== keyword
    })
    console.log(filteredArray)
    this.setState({
      keywordArray : filteredArray
    })
  }


  render() {

    return (
      <div className='text-center p-5'>
        <input
          type="text"
          className="border shadow p-3 "
          placeholder='Add a keyword to add'
          onKeyPress={this.addKeyword}
          disabled={this.state.keywordArray.length >= 24} />

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