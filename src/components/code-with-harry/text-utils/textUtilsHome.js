import React, { useState } from 'react'

const TextUtilsHome = () => {
    const [inputValue, updateInputValue] = useState("")


    const convertUppercase = () => {

        updateInputValue(inputValue.toUpperCase())

    }

    const convertLowercase = () => {

        updateInputValue(inputValue.toLowerCase())

    }

    const wordCount = inputValue.trim().split(/\s+/).length;
    const charCount = inputValue.length
    const readingTime = Math.round( wordCount / 225)



    return (
        <div>
            <div className='text-white'>
                <textarea value={inputValue} onChange={(event) => updateInputValue(event.target.value)} type="text" className='mx-auto shadow-md mt-4 p-3 bg-gray-100 text-gray-800' />
            </div>
            <div className='text-white'>
                <button className='bg-blue-500 p-3 rounded-lg m-5' onClick={convertUppercase} > Upper case </button>
                <button className='bg-blue-500 p-3 rounded-lg' onClick={convertLowercase}> Lower case </button>
            </div>
            <div>
                <h1 className='text-2xl'>Your Text Summary</h1>
                <p>Words : { wordCount }</p>
                <p>Characters : {charCount }</p>
                <p>Reading Time : {readingTime} min</p>
            </div>
        </div>
    )
}

export default TextUtilsHome