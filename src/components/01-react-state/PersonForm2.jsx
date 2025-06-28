import { useState } from "react";

const PersonForm2 = ()=>{
    const initialState = {
        fullname : '',
        age : ''
    };

    const [person, setPerson] = useState({
        fullname:'',
        age:''
    });

    const handleName = (e)=>{
        setPerson({...person,fullname:e.target.value})
    }
    const handleAge = (e)=>{
        setPerson({...person,age:e.target.value})
    }
    const handleReset = (e)=>{
        e.preventDefault();
        setPerson(initialState);
    }
    return (
        <div>
            <form>
            <div>
                <label className="form-label" htmlFor="nm">Full Name</label>
                <input type="text" className="form-control text-capitalize" id="nm" value={person.fullname} onChange={handleName} placeholder="Username" required/>
            </div>
            <div>
                <label htmlFor="age" className="form-label">Age</label>
                <input type="number" className="form-control" id="age" value={person.age} onChange={handleAge} placeholder="Age" required/>
            </div>
            </form>
            <button className="btn btn-secondary mt-3" type="button" onClick={handleReset}>Reset</button>
            <div className="mt-4">
                <h2 className="text-capitalize">FullName :{person.fullname}</h2>
                <h2>Age: {person.age}</h2>
            </div>
        </div>
    )

}
export default PersonForm2;