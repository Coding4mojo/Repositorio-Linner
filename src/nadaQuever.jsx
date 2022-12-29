import { useState } from "react";


export const CajaPrincipal = (props) => {

    const[username,setName] = useState("");
    const[password,setPassword] = useState("");
    const[ID,setID] = useState("");
    const LoginNameInputs = (u) =>{
            return(
                setPassword(u.target.value)
            )
    }
    // Me gustaria que los inputs se carguen en un array y poder buscar el usuario por su nombre 
    const UserPassword = (p) =>{
                setName(p.target.value);
    }
    const userID = (ID) =>{
        setID(p.target.value);
    }
    return(
        <>
            <h1>Wellcome</h1>
            <div>
                <section>
                    <label>Username:</label><br/>
                    <input type="text" onChange={UserPassword} placeholder="Ingrese su nombre de usuario" value={username}></input> 
                </section>
            </div>
            <if condition={username.length < 4}>
                <p >* Ingrese un nombre de usuario mas largo porfavor *</p>
            </if>
            <div>
                <section>
                    <label>Password:</label><br />
                    <input type="password"  onChange={LoginNameInputs} placeholder="Ingrese su contraseña" value={password}></input>
                </section>
            </div>
            <div>
                <section>
                    <label>ID:</label><br/>
                    <input type="text" onChange={userID} placeholder="Ej:40364598" value={ID}></input> 
                </section>
            </div>
        </>
    );
};