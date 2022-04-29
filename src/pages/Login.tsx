import React, { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router-dom";

const Login = (props: { setLoggedIn: (loggedIn: boolean) => void }) => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3003/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'login': login, 'password': password })
        });

        const result = await response.json().then(value => { return value });

        if (result['message'] == undefined) {
            setRedirect(true);
            props.setLoggedIn(true);
            window.name = result['token'];
        }

        else {
            setError(result['message']);
        }
    }

    if (redirect) {
        return <Redirect to="/main" />
    }

    return (
        <div>
            <div className="prof">
                <h1 className="label">Sign in</h1>
                <form className="form" onSubmit={submit}>
                    <input type="text" className="form-control" placeholder="Login" required onChange={e => (setLogin(e.target.value), setError(''))} />
                    <input type="password" className="form-control" placeholder="Password" required onChange={e => (setPassword(e.target.value), setError(''))} />
                    <p className="error">{error}</p>
                    <button className="btn" type="submit">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;