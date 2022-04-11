import { useState } from "react";
import React from "react";

const Secondpage =  () => {
    const[data,setData] = useState({
        state,
        address,
        pincode
    });

    const {state, address, pincode} = data;

    const changeHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div>
                <form onSubmit={submitHandler}>
                state of residence : <br />
                <input type="text" placeholder="state of residence" name="state" value={state} onChange={changeHandler} /><br />
                address : <br />
                <input type="text" placeholder="address" name="address" value={address} onChange={changeHandler} /><br />
                pin code : <br />
                <input type="number" placeholder="pin code" name="pincode" value={pincode} onChange={changeHandler} /><br />
                <br />
                <input type="submit" name="submit"/>
            </form>
        </div>
    )
}

export default Secondpage;