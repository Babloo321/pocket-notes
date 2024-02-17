import React, { useState } from 'react'

function ContentArea(props) {
  console.log(props.value,"__BABLOO_;'")
  const [message,setMessage] = useState("");
  const [messageArray, setMessageArray] = useState([]);
  const handleClick = () => {
    setMessageArray((prev) => [...prev, message]);
    setMessage('');
  }
  return (
    <div className='contentArea'>
    <header className='header'>
   <p>{props.value}</p> 
    </header>
    <div className='message'>
    <div  className='message_div'>
      {messageArray.map((msg,index) => {
        return (
        <div key={index} className='data'>{msg}
        <p>{new Date().getHours()}:{new Date().getMinutes()}:{new Date().getSeconds()}</p>
        </div>
        )
      })}
      </div>
    </div>
    <div className='input-box'>
     <textarea type='text' placeholder='Enter your text' className='input' value={message} onChange={(e) => setMessage(e.target.value)} />
     <p className='send-btn' onClick={handleClick}>Send</p>
    </div> 
</div>
  )
}

export default ContentArea