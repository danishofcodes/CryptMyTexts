import React from 'react'
import EncySelect from './EncySelect'
import {useRef} from "react";
export default function TxtBox({handleChange, text}) {

    return (
        <>
            <div className='mb-4'>
                <textarea className="w-96 p-3 bg-slate-700 text-white" rows="5"  onChange={handleChange} placeholder={"Your Text Here"}  ref={text}></textarea>
            </div>
        </>
    )
}
