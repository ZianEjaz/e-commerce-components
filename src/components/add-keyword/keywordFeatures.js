import React from 'react'

function KeywordFeatures() {
  return (
    <div className='p-5'>
        <h1 className='text-2xl text-left'> Main features of this component</h1>
        <ol className='list-decimal text-left'>
          <li>{`Import < AddKeyword submitFunction = {}/> component and pass fuction which is to be preformed on button click.
          `}<br />
          component returns array of values added
          </li>
            <li>Type a keyword to add and press enter to add it to keyword array in state</li>
            <li>minimum 3 chracter for keyword to add</li>
            <li>print error if keyword length less than 3 </li>
            <li>disable input box when max chracters reached</li>
            <li>click functionality added to remove tags from keyword array in state. </li>
            <li>Sumbit button at the end to return array to </li>
            <li>click functionality added to remove tags from keyword array in state. </li>
        </ol>




    </div>
  )
}

export default KeywordFeatures