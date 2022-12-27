import { useState, FormEvent } from 'react';
import { useNavigate } from 'react-router-dom';
import { URL } from '../variavel/URL';

import '../App.css';


const Cadastro = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [confPass, setConfPass] = useState<string>("");
    const [err, setErr] = useState<boolean>(false);

    const navigate = useNavigate();

    const register = async () => {
        
        const obj = {
            id: Math.floor(Math.random() * 10),
            name,
            password
        }

        const resp = await fetch(`${URL}`, {
            method: 'POST',            
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj),
        })
            .then(response => response.json())
            .catch((err) => console.log(err));

            setName("")
            setPassword("")

            navigate('/')

            console.log(resp)
            
    };  

    const validateLogin = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if(password !== confPass){
            setErr(true);
        }else{
            register();
            setErr(false)
            setName("")
            setPassword("")
            setConfPass("")            
        }       
    }

    return (
        <div className="App">
            <main className="App-header">
                <h1>LOGIN</h1>
                <form onSubmit={validateLogin} className="container-login">
                    <div className="name">
                        <label>
                            Nome:
                            <input type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Informe seu nome"
                            />
                        </label>
                    </div>
                    <div className="password">
                        <label>
                            Senha:
                            <input type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="Digite sua senha"
                            />
                        </label>
                    </div>
                    <div className="conf-password">
                        <label>
                            Confirme a senha:
                            <input type="password"
                                value={confPass}
                                onChange={(e) => setConfPass(e.target.value)}
                                placeholder="Confirme a senha"
                            />
                        </label>
                    </div>
                    <button type='submit' className='btn'>Cadastrar</button>
                </form>
                {err ? <p><span style={{ color: "red" }}>Senha digitada não é igual</span></p> : <p></p>}
            </main>
        </div>
    )  
};
export default Cadastro