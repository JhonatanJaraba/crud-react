import React, {useEffect, useState} from "react";
import UserForm from "./UserForm";
import {firebase} from '../firebase';

const Links = () =>{

    const [user, setUser] = useState([]);

    const addTask = async (Object) =>{
       const db = firebase.firestore()
       await db.collection('user').add(Object);
    };

    const getUser = async () => {
        const db1 = firebase.firestore()
          db1.collection('user').onSnapshot((querySnapshot) => {
              const docs = [];
            querySnapshot.forEach(element => {
                docs.push({...element.data(), id:element.id});
            });  
            console.log(docs);
            setUser(docs);
        });
    };
/*
    const onDeleteUser = async (id) => {
        if(window.confirm('are you sure you want to delete this user?')) {
         await db.collection('user').doc(id).delete();
        }
    };*/

    useEffect(() => {
      getUser();
    }, []);

    return (
    <div className="d-flex justify-content-between">
        <div className="col-md-4 p-2">
            <UserForm addOrEdit={addTask}/>
        </div>
        <div className="col-md-8 p-2">
            
                <div className="card mb-1">
                    <table className="table">
                        <thead>
                        <tr>
                            <th></th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope="col">Handle</th>
                            <th scope="col">Ir a likedin</th>
                        </tr>
                        </thead>
                        <tbody>
                        {user.map(users => ( 
                            <tr key={users.id}>
                            <td>
                                <i className="material-icons text-danger">
                                    close
                                </i>
                            </td>
                            <td>{users.nombre}</td>
                            <td>{users.description}</td>
                            <td>{users.telefono}</td>
                            <td><a href={users.url} target="blank">Ir a Likedin</a></td>
                            </tr>
                        ))}
                        </tbody>
                        </table>
                </div>
           
        </div>
    </div>);
};

export default Links;