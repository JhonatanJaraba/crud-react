import React from "react";

const UserForm = () =>{

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(e);
    }

    return (
        <form className="card card-body" onSubmit={handleSubmit}>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">insert_link</i>
                </div>
                <input type="text"
                className="form-control" 
                placeholder="https://someurl.com"
                name="url"/>
            </div>
                <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">assignment_ind</i>
                </div>
                <input type="text"
                className="form-control" 
                placeholder="Ingrese el nombre"
                name="nombre"/>
            </div>
                <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">create</i>
                </div>
                <input type="text"
                className="form-control" 
                placeholder="Ingrese el apellido"
                name="apellido"/>
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">call_end</i>
                </div>
                <input type="text"
                className="form-control" 
                placeholder="Ingrese el telefono"
                name="telefono"/>
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">keyboard_return</i>
                </div>
                <input type="text"
                className="form-control" 
                placeholder="Ingrese la direccion"
                name="direccion"/>
            </div>
            <br/>
            <div className="form-group input-group">
                <div className="input-group-text bg-light">
                <i className="material-icons">email</i>
                </div>
                <input type="email"
                className="form-control" 
                placeholder="Ingrese correo electronico"
                name="email"/>
            </div>
            <br/>
            <div className="form-group">
                <textarea name="description" rows="3" className="form-control"
                placeholder="Write a description">
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