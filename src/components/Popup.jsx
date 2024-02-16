import React, { useState } from "react";

import "../../public/style/Main.css";

function Popup(props) {
    const [input, setInput] = useState("");

    function handleChange(event){
        setInput(event.target.value);
    }

    function handleSubmit(){
        // window.alert(input);
        setInput('');
        props.list(input);
    }

  return (
    <div className="form">
      <p className="form-text">Create new group</p>
      <div>
        <label className="form-text">
          Group name
        </label>
        <input
        onChange={handleChange}
        value={input}
          type="text"
          id="fname"
          // name="fname"
          placeholder="enter group name"
        />
      </div>

      <div className="choose-color">

          <p className="form-text">Choose colour</p>

        <span style={{position:"relative", bottom:"52px", left:"180px"}}>
            <span style={{display:"inline-block", borderRadius:"50%", height:"28px", width:"28px", backgroundColor:"pink", marginLeft:"6px"}} />
            <span style={{display:"inline-block", borderRadius:"50%", height:"28px", width:"28px", backgroundColor:"blue", marginLeft:"6px"}} />
            <span style={{display:"inline-block", borderRadius:"50%", height:"28px", width:"28px", backgroundColor:"orangered", marginLeft:"6px"}} />
            <span style={{display:"inline-block", borderRadius:"50%", height:"28px", width:"28px", backgroundColor:"purple", marginLeft:"6px"}} />
            <span style={{display:"inline-block", borderRadius:"50%", height:"28px", width:"28px", backgroundColor:"gray", marginLeft:"6px"}} />
            <span style={{display:"inline-block", borderRadius:"50%", height:"28px", width:"28px", backgroundColor:"violet", marginLeft:"6px"}} />
        </span>
        
      </div>

      <button 
      onClick={handleSubmit}
      className="submit" type="submit">
        Create
      </button>
    </div>
  );
}

export default Popup;
