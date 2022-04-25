import React, {useState} from "react";

const UserForm = (props) =>{

   const initialStateValues = {
    url: '',
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    email: '',
    description: ''
   }

   const [values, setValues] = useState(initialStateValues);

   const handleInputChange = e =>{
       const {name, value} = e.target;
       setValues({...values, [name]: value});
   }

    const handleSubmit = e =>{
        e.preventDefault();
        props.addOrEdit(values);
    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">insert_link</i>
                </div>
                <input 
                type="text"
                className="form-control" 
                placeholder="https://someurl.com"
                name="url"
                onChange={handleInputChange}/>
            </div>
                <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">assignment_ind</i>
                </div>
                <input 
                type="text"
                className="form-control" 
                placeholder="Ingrese el nombre"
                name="nombre"
                onChange={handleInputChange}/>
            </div>
                <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">create</i>
                </div>
                <input 
                type="text"
                className="form-control" 
                placeholder="Ingrese el apellido"
                name="apellido"
                onChange={handleInputChange}/>
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">call_end</i>
                </div>
                <input 
                type="text"
                className="form-control" 
                placeholder="Ingrese el telefono"
                name="telefono"
                onChange={handleInputChange}/>
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">keyboard_return</i>
                </div>
                <input 
                type="text"
                className="form-control" 
                placeholder="Ingrese la direccion"
                name="direccion"
                onChange={handleInputChange}/>
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">email</i>
                </div>
                <input 
                type="email"
                className="form-control" 
                placeholder="Ingrese correo electronico"
                name="email"
                onChange={handleInputChange}/>
            </div>
            <br/>
            <div className="form-group">
                <textarea name="description" rows="3" className="form-control"
                placeholder="Write a description" onChange={handleInputChange}>
                </textarea>
            </div>
            <br/>
            <button className="btn btn-primary btn-block">
                save
            </button>
        </form>
    )
}

export default UserForm;