import React from 'react'

export default function TxtBox({handleChange, text}) {

    return (
        <>
            <div className=''>
                <textarea className=" w-full p-3 bg-slate-700 text-white" rows="5"  onChange={handleChange} placeholder={"Your Text Here"}  ref={text}></textarea>
            </div>
        </>
    )
}
