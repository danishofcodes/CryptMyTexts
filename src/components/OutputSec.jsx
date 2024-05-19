
import EncySelect from './EncySelect';
import { CopyToClipboard } from 'react-copy-to-clipboard';
export default function OutputSec({ textoutput,title, decryptSec, err}) {
    // let format = "rot34";


  return (
    <div className="mt-4 bg-slate-700 outputsec-card w-96">
        <h5>Your {title} Message is : </h5>
        
        <div className="flex justify-between px-2 items-center">
        {/* {showEncryptSec && <EncySelect encryptionMethodSelected={encryptionMethodSelected} handleEncySelect={handleEncySelect}/>} */}
        {decryptSec && <h6 className='text-white'>{err}</h6>}
        <CopyToClipboard text={textoutput}>
        <button className="copyBtn">Copy</button>
        </CopyToClipboard>
        </div>
        <div>
            <div  className="w-full p-3 text-output"><span>{textoutput}</span></div>
        </div>
        
    </div>

  )
}
