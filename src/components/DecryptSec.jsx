
export default function DecryptSec({decryptedText}) {
  return (
    <div>
    <h5>Decrypted Text :
        
    </h5>
    <div>
        <textarea  className="decrypt-textarea" rows="6" disabled>{decryptedText}</textarea>
    </div>
</div>
  )
}
