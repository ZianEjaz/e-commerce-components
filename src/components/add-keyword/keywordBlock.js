import React from 'react';
import { AiOutlineClose } from "react-icons/ai";

const KeywordBlock = (props) => {

    

    const displayKeywords = props.keywords.map((keyword, counter) => {
        return <div key={counter} className="border px-3 m-1 rounded-full shadow flex bg-gray-100">
            <p className="">
                {keyword}
            </p>
            <span className='pl-2 pt-1 hover:text-red-600' onClick={props.handleDeletion.bind(this, keyword)}>
                < AiOutlineClose />
            </span>

        </div>
    })


    return (
        <div className='flex flex-wrap'>

            {displayKeywords}

        </div>
    )
}

export default KeywordBlock