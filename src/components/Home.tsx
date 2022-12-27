import { useState, FormEvent } from 'react';
import { URL } from '../variavel/URL';
import { Link } from 'react-router-dom';

const Home = () => {
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [err, setErr] = useState<boolean>();

    const valid = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const response = await fetch(`${URL}`)
            .then((data) => data.json())
            .catch((err) => console.log(err));

        // eslint-disable-next-line array-callback-return
        await response.map((valor: { name: string, password: string }) => {
            if (valor.name === name && password === valor.password) {
                setErr(true)
                setName("");
                setPassword("");
                
            } else if (valor.name !== name || password !== valor.password) {
                setErr(false)
                setName("");
                setPassword("");
                
            }
        });


    }

    return (
        <div className="App">
            <main className="App-header">
                <h1>LOGIN</h1>
                <form onSubmit={valid} className="container-login">
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
                    <Link style={{ color: 'white' }} to='/cadastro'>Cadastre-se</Link>
                    <button type="submit" className='btn'>Logar</button>
                    {err !== undefined &&
                        (err ? <p>Sucesso!</p> : <p>usuário ou senha incorreto!</p>)
                    }
                </form>

            </main>
        </div>
    )
}

export default Home