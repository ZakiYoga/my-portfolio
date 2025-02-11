import React from 'react'

function Button({ btnClass, title }: Button) {
    return <button className={`btn font-oxanium min-h-10 ${btnClass}`}>{title}</button>
}

export default Button