import React from "react";
import UserForm from "./UserForm";
import {db} from '../firebase';

const Links = () =>{

    const addTask = (Object) =>{
        db.collection('user').doc().set(Object);
    }

    return <div>
        <UserForm addOrEdit={addTask}/>
        <h1>Links</h1>
    </div>
};

export default Links;