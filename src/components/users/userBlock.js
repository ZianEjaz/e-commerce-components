import React from 'react'

function UserBlock(props) {

    const userBlock = props.json.map((item, index) => {
        console.log(item)
        return (
            <div key={index} className="border">
                {item.email}
                {item.id}
                {item.name}
                {item.phone}
                {item.username}
                {item.website}
            </div>
        )
    })

    return (
        <div className='flex flex-wrap'>
            {userBlock}

        </div>
    )
}

export default UserBlock