import React from 'react'
import '../../../public/style/Main.css';
function Sidebar() {
    const handleClick = () => {

    }
  return (
    <div className='sidebar'>
        <h2 className='side-head'>Pocket Notes</h2>
        <div className='side-items'>
            <div className='item'>
            <p>MN</p>
                <h3>My Notes</h3>
            </div>

            <div className='item'>
            <p>PG</p>
            <h3>My Personal Group</h3>
            </div>

            <div className='item'>
            <p>HG</p>
            <h3>HTML Group</h3>
            </div>

            <div className='item'>
            <p>JG</p>
            <h3>Javascript Group</h3>
            </div>

            <div className='item'>
            <p>SN</p>
            <h3>SQL Notes</h3>
            </div>

            <div className='item'>
            <p>CN</p>
            <h3>CSS Notes</h3>
            </div>

            <div className='item'>
            <p>PN</p>
            <h3>Pythone Notes</h3>
            </div>

            <div className='item'>
            <p>PN</p>
            <h3>Pythone Notes</h3>
            </div>

           
        </div>
       
        <h2 onClick={handleClick}
        className='plus'>+</h2>
    </div>
  )
}

export default Sidebar