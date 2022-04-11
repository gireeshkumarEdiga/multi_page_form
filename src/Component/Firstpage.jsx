import { useState } from "react";

const Firstpage =  () => {
    const[data,setData] = useState({
        name,
        email,
        age,
    })

    const changeHandler = () => {
        
    }
    return (
        <div>
                <form onSubmit={submitHandler}>
                Name : <br />
                <input type="text" placeholder="name" name="name" value={name} onChange={changeHandler} /><br />
                age : <br />
                <input type="number" placeholder="age" name="email" value={email} onChange={changeHandler} /><br />
                date of birth : <br />
                <input type="number" placeholder="date of birth" name="age" value={age} onChange={changeHandler} /><br />
                <br />
                <input type="submit" name="submit"/>
            </form>
        </div>
    )
}

export default Firstpage;