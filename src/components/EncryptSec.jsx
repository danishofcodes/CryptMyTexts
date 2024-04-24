
export default function EncryptSec({encryptedText,encyMethod}) {
    // let format = "rot34";


  return (
    <div className="mt-4">
        <h5>Your Encrypted Message in {encyMethod} is : </h5>
        <div>
            <textarea  className="w-96 p-3" rows="6" disabled value={encryptedText}></textarea>
        </div>
        
    </div>

  )
}
