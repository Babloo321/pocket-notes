import React, { useState } from 'react'
import '../../public/style/MainPage.css';
import Popup from './Popup';
import ContentArea from './ContentArea';
function MainPage() {
  const [a, setA] = useState(false);
  const [b, setB] = useState(false);
  const [value, setvalue] = useState();
  const [createContent, setCreateContent] = useState([]);
  function renderFromPopup(input){
    setCreateContent(prev => [...prev, input]);
   }

   function handelsinglestate(a,index){
    console.log(a,"dsafert")
     setB(!b)
     setvalue(a)
   }

  return (
    <div className='mainPage'>
        <div className='sidebar'>

               <div>
               <h2 className='side-head'>Pocket Notes</h2>
               <div className='side-items'>
      {
        createContent.map((group, index) => {
        const a = new String(group);
        return  <div key={index} className='item' onClick={()=>handelsinglestate(a,index)}>
            <p>{a[0].toUpperCase()}{a[a.length-1].toUpperCase()}</p>
                <h3>{a}</h3>
            </div>
      })
      }
        </div>
               <h2 className='plus'
               onClick={() => setA(!a)}
               >+</h2>
               {a && <Popup list={renderFromPopup}/>}
               <div>{b && <ContentArea value={value} setvalue={setvalue} />}</div>
               </div>

        </div>
        <div className='content'>
        <h1>Pocket Notes</h1>
        <div className='para'>
            <p style={{padding:"4px"}}>Send and receive messages without keeping your phone online.</p>
            <p style={{padding:"2px"}}>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
            <p className='e-to-e'>end-to-end encrypted</p>
        </div>
        </div>
    </div>
  )
}

export default MainPage