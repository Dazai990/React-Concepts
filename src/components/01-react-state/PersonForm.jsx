import { useState } from "react";

const PersonForm1 = ()=>{
 const [person, setPerson] = useState('');

 return(
    <div>
        <label className="form-label" htmlFor="nm">Enter Your Name:</label>
        <input className="text-capitalize form-control" type="text" id="nm" placeholder="Username" value={person} onChange={(e)=>setPerson(e.target.value)}/>
      {person &&  <p className="text-capitalize">Hello,&nbsp; {person }&nbsp; How are you?</p> }
    </div>
 )

}

export default PersonForm1;