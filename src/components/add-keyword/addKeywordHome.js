import React from 'react'
import AddKeyword from './addKeyword'
import KeywordFeatures from './keywordFeatures'

const AddKeywordHome = () => {

  const updateKeyword = (value) => {
    console.log(value)

  }




  return (
    <div className='flex flex-wrap justify-center'>
      <div className='w-full'>
      < KeywordFeatures />
      </div>
     
      <div className='m-8 shadow-md w-full md:w-1/2'>
        < AddKeyword submitFunction = {updateKeyword}/>
      </div>
     
    </div>
  )
}

export default AddKeywordHome