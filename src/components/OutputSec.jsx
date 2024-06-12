import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function OutputSec({ textoutput,title, decryptSec, err}) {

  return (
    <div className="mt-4 bg-slate-700 outputsec-card">
        <h5>Your <span className={title === "Encrypted" ? "text-teal-400" : "text-rose-500"}>{title}</span> Message is : </h5>
        
        <div className="flex justify-end px-2 items-center p-2">
        {/* {showEncryptSec && <EncySelect encryptionMethodSelected={encryptionMethodSelected} handleEncySelect={handleEncySelect}/>} */}
        <CopyToClipboard text={textoutput}>
        <button className="copyBtn">Copy</button>
        </CopyToClipboard>
        {/* {decryptSec ? <h6 className='text-white'> {err}</h6>*/}

        </div>
        <div>
            <div className="w-full p-3 text-output">{textoutput ? <span>{textoutput}</span> : <span className='text-stone-700'>Type in something above for an output</span> }</div>
        </div>
        
    </div>

  )
}
