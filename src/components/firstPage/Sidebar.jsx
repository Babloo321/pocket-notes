import React, { useState } from 'react'
import '../../../public/style/Main.css';
import Popup from '../Popup';

function Sidebar(props) {
  const [createContent, setCreateContent] = useState([]);
  console.log(props.input);
  const [a, setA] = useState(false);
    const handleClick = () => {
      setA(!a);
    }
     function renderFromPopup(input){
       setCreateContent(prev => [...prev, input]);
      }
  return (
    <div className='sidebar'>
        <h2 className='side-head'>Pocket Notes</h2>
        <div className='side-items'>
      {
        createContent.map((group, index) => {
        const a = new String(group);
        return  <div key={index} className='item'>
            <p>{a[0].toUpperCase()}{a[a.length-1].toUpperCase()}</p>
                <h3>{a}</h3>
            </div>
      })
      }
        </div>
       
        <h2 onClick={handleClick}
        className='plus'>+</h2>
        {a && <Popup list={renderFromPopup}/>}
    </div>
  )
}

export default Sidebar