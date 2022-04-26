import React, {useEffect, useState} from "react";
import UserForm from "./UserForm";
import {firebase} from '../firebase';
import { toast } from 'react-toastify';

const Links = () =>{

    const [user, setUser] = useState([]);
    const [currentId, setCurrentId] = useState('');

    const addOrEdit = async (Object) =>{
       const db = firebase.firestore()
       if(currentId === ''){
        await db.collection('user').add(Object);
        toast('Se agrego un nuevo usuario', {
            type: 'success'
        });
       }else{
          await db.collection('user').doc(currentId).update(Object);
          toast('Se actualizo un usuario', {
            type: 'info'
        });
        setCurrentId('');
       }
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

    const onDeleteUser = async (id) => {
        const db2 = firebase.firestore()
        if(window.confirm('are you sure you want to delete this user?')) {
         await db2.collection('user').doc(id).delete();
         toast('Se elimino un usuario', {
            type: 'error'
        });
        }
    };

    useEffect(() => {
      getUser();
    }, []);

    return (
    <div className="d-flex justify-content-between">
        <div className="col-md-3 p-2">
            <UserForm {...{addOrEdit, currentId, user}}/>
        </div>
        <div className="col-md-10 p-2">
            
                <div className="card mb-1">
                    <table className="table">
                        <thead>
                        <tr>
                            <th></th>
                            <th scope="col">Nombre</th>
                            <th scope="col">Apellido</th>
                            <th scope="col">Telefono</th>
                            <th scope="col">Direccion</th>
                            <th scope="col">Email</th>
                            <th scope="col">descripcion</th>
                            <th scope="col">Ir a likedin</th>
                        </tr>
                        </thead>
                        <tbody>
                        {user.map(users => ( 
                            <tr key={users.id}>
                            <td className="d-flex justify-content-evenly">
                                <i className="material-icons text-danger" onClick={() => onDeleteUser(users.id)}>
                                    close
                                </i>
                                <i className="material-icons text-warning" onClick={() => setCurrentId(users.id)}>
                                    create
                                </i>
                            </td>
                            <td>{users.nombre}</td>
                            <td>{users.apellido}</td>
                            <td>{users.telefono}</td>
                            <td>{users.direccion}</td>
                            <td>{users.email}</td>
                            <td>{users.description}</td>
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