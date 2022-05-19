import React, { Component } from 'react'

export class AddKeyword extends Component {
  state = {
    keywordCounter : 0,
    value : "",
    aray : []
  }

  addKeyword = (event)=>{
   
    if(event.charCode === 13){
this.setState({

    })
    this.state.aray.push(event.target.value)
    console.log(event.target.value)
    }
    
  }


  render() {
    
    return (
      <div className='text-center p-5'>
        <input type="text" className="border shadow p-3 " placeholder='Add a keyword to add' onKeyPress={this.addKeyword} disabled={this.state.aray.length >= 24}/>
        <p className={`text-${this.state.aray.length >= 24 ? "red-600" : "black"}`}>{this.state.aray.length} / 24</p>
{console.log( + 1)}
      </div>
    )
  }
}

export default AddKeyword