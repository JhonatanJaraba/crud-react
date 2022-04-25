import React, {useEffect, useState} from "react";
import UserForm from "./UserForm";
import {db} from '../firebase';

const Links = () =>{

    const {user, setUser} = useState([]);

    const addTask = async (Object) =>{
       await db.collection('user').doc().set(Object);
       console.log("Se guardo");
    };

    const getUser = async () => {
        db.collection('user').onSnapshot(
          (querySnapshot) => {
            const docs = [];
            querySnapshot.forEach(element => {
                docs.push({...element.data(), id:element.id});
            });
            setUser(docs);
      });
    }

    const onDeleteUser = id => {

    }

    useEffect(() => {
        getUser();
    }, []);

    return (
    <div>
        <div className="col-md-4 p-2">
            <UserForm addOrEdit={addTask}/>
        </div>
        <div className="col-md-8 p-2">
        {user.map(user => (
                <div className="card mb-1" key={user.id}>
                    <div className="card-body">
                        <div className="d-flex justify-content-between">
                        <h4>{user.nombre} - {user.apellido}</h4>
                        <i className="material-icons text-danger" onClick={() => onDeleteUser(user.id)}>close</i>
                        </div>
                        <p>{user.description}</p>
                        <a href={user.url} target="blank">Ir a linkedin</a>
                    </div>
                </div>
            ))}
        </div>
    </div>);
};

export default Links;