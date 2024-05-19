import React from 'react'

export default function EncySelect({encryptionMethodSelected,handleEncySelect}) {
  return (
    <div>
    <label>Ency Method :</label>
    <select value={encryptionMethodSelected} onChange={handleEncySelect}>
        <option value="AES">AES</option>
        <option value="TDES">TripleDES</option>
    </select>
</div>
  )
}
