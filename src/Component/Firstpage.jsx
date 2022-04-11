import { useState } from "react";
import React from "react";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Nav from "./Nav";
import Secondpage from "./Secondpage";

const Firstpage =  () => {
    const[data,setData] = useState({
        name,
        age,
        dob
    });

    const {name,age,dob} = data;

    const changeHandler = (e) => {
        setData({...data,[e.target.name]:e.target.value});
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(e);
    }

    return (
        <div>
            <form autoComplete="off" onSubmit={submitHandler}>
                Name : <br />
                <input type="text" placeholder="name" name="name" value={name} onChange={changeHandler} /><br />
                age : <br />
                <input type="number" placeholder="age" name="age" value={age} onChange={changeHandler} /><br />
                date of birth : <br />
                <input type="number" placeholder="date of birth" name="dob" value={dob} onChange={changeHandler} /><br />
                <br />
                <input type="submit" name="submit"/>
            </form>
            <div>
                <BrowserRouter>
                <Nav />
                <Routes>
                    <Route path="/secondpage" element={<Secondpage/>}></Route>
                </Routes>
                </BrowserRouter>
            </div>
        </div>
    )
}

export default Firstpage;