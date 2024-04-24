import CryptoJS from "crypto-js";
import TripleDES from "crypto-js/tripledes";

import { useState, useEffect } from "react";
import { useRef } from "react";
import "./App.css";
import DecryptSec from "./components/DecryptSec";
import EncryptSec from "./components/EncryptSec";

function App() {
  const textEncy = useRef();
  const encyMethSelected = useRef();

  // Text that needs to be encrypted
  const [textToEncrypt, setTextToEncrypt] = useState('');

  // After Encryption
  const [encryptedText, setIsEncrypted] = useState(null);
  // Encryption Method
  const [encyMethod, setEncyMethod] = useState("AES");

  //  Decrypt 
  const [textDecrypted, setTextDecrypted] = useState('');
  const [showDecyptedText, setShowDecryptedText] = useState(false);


  function handleEncySelect(e) {
    setEncyMethod(e.target.value);
  }

  console.log(encyMethod);

  // function encryptText() {
  //   console.log("encrypting....");
  //   console.log(textEncy.current.value);
  //   const text = textEncy.current.value; // Assuming textEncy is a ref to an input element
  //   setTextToEncrypt(text);
  // }
  function clearAll() {
    // textEncy.current.value = "";
    setTextToEncrypt('')
    setIsEncrypted('')
  }
  useEffect(() => {
    if (textToEncrypt) {
      let encrypted;
      if (encyMethod == "AES") {
        encrypted = CryptoJS.AES.encrypt(textToEncrypt, "Secret Passphrase");
        setIsEncrypted(encrypted.toString());
      } else if (encyMethod === "TDES") {
        encrypted = TripleDES.encrypt(textToEncrypt, "Secret Passphrase");
        setIsEncrypted(encrypted.toString());
      } else {
        console.error("Invalid encryption method:", encyMethod);
      }
    }
  }, [textToEncrypt, encyMethod]);




  console.log(encryptedText);
  function decryptEncyText() {
    setShowDecryptedText(prev => !prev)
    let decrypted = '';
    console.log("decrypting....");
    if (encyMethod == "AES") {
      decrypted = CryptoJS.AES.decrypt(encryptedText, "Secret Passphrase");
      setTextDecrypted(decrypted)
    } else if (encyMethod === "TDES") {
      decrypted = TripleDES.decrypt(encryptedText, "Secret Passphrase");
      setTextDecrypted(decrypted)
    } else {
      console.error("Invalid encryption method:", encyMethod);
    }
  }
  function textChange(e) {
    setTextToEncrypt(e.target.value);
    if (textToEncrypt == '') {
      setIsEncrypted('')
    }
  }


  return (
    <>
      <div>
        <h5>Type Message To Encrypt</h5>
        <div>
          <textarea className="w-96 p-3" rows="5" value={textToEncrypt} onChange={textChange}></textarea>
        </div>
        <div>
          <label>Ency Method :</label>
          <select ref={encyMethSelected} value={encyMethod} onChange={handleEncySelect}>
            <option value="AES">AES</option>
            <option value="TDES">TripleDES</option>
          </select>
        </div>

        <div>
          {/* <button onClick={encryptText}>Encrypt</button> */}
          <button onClick={clearAll} className="clear-btn">Clear</button>
          <button onClick={decryptEncyText} className="decrypt-btn">Decrypt</button>
        </div>
      </div>

      <div>
        {textToEncrypt&&<EncryptSec encryptedText={encryptedText} encyMethod={encyMethod} />}
        {showDecyptedText && <DecryptSec onClick={decryptEncyText} decryptedText={textDecrypted.toString(CryptoJS.enc.Utf8)} />}
      </div>
    </>
  );
}

export default App;
