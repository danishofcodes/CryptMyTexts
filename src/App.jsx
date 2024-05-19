import CryptoJS from "crypto-js";
import TripleDES from "crypto-js/tripledes";
import { useState, useEffect, useRef } from "react";
import TxtBox from "./components/TxtBox";
import OutputSec from "./components/OutputSec"


function App() {
  const text = useRef();

  // const [output , setOutput] = useState(null);
  const [encryptedOutput, setEncryptedOutput] = useState(null);
  const [decryptedOutput, setDecryptedOutput] = useState(null);
  const [err, setErr] = useState('');
  const [decryptSec, setDecryptSec] = useState(false)
  const [encryptSec, setEncryptSec] = useState(true)

  function handleEncryptBtn() {
    openEncryptSec()
  }

  function handleDecryptBtn() {
    openDecryptSec()
  }
  // function clearAll() {
  // }



  function openEncryptSec() {
    setEncryptSec(true);
    setDecryptSec(false);
    text.current.value = '';
    console.log('encrypt on')
    setDecryptedOutput('');

  }

  function openDecryptSec() {
    setEncryptSec(false);
    setDecryptSec(true);
    text.current.value = '';
    console.log('decrypt on')
    // setDecryptedOutput('');
    setEncryptedOutput('');


  }


  function handleChange(e) {
    let val = e.target.value;
    if (val != '' && encryptSec == true) {
      try {
        let encrypted = CryptoJS.AES.encrypt(val, "Secret Passphrase");
        setEncryptedOutput(encrypted.toString());
      }
      catch (error) {
        console.log(error.message)
      }
    } else if (decryptSec == true) {
      try {
        let decrypted = CryptoJS.AES.decrypt(val, "Secret Passphrase").toString(CryptoJS.enc.Utf8);
        console.log(decrypted)
        setDecryptedOutput(decrypted);
      } catch (error) {
        console.log(error.message)
        setErr("Error :" + error.message)
      }

    } else {
      setEncryptedOutput(e.target.val)
      console.log("unknown error neither selected")
    }
  }

  return (
    <>
    <nav className=" h-20 mb-5">&#123;CryptMyTexts&#125;</nav>
    <div className="main-container pt-5">

      <div className="mx-auto flex justify-center">
        <div>
          <button className={!encryptSec ? "bg-stone-600 text-stone-400" : "bg-[#00c142] text-white"} onClick={handleEncryptBtn}>Encrypt</button>
          <button className={!decryptSec ? "bg-stone-600 text-stone-400" : "bg-[#00c142] text-white"} onClick={handleDecryptBtn}>Decrypt</button>
          <TxtBox handleChange={handleChange} text={text} />
        </div>
      </div>
      {/* <button onClick={clearAll}>clear All</button> */}

      {encryptSec && <OutputSec textoutput={encryptedOutput} title={'encrypted'} />}
      {decryptSec && <OutputSec textoutput={decryptedOutput} title={'decrypted'} err={err} decryptSec={decryptSec} />}
    </div>
    </>
  )
}

export default App;