import React, { SyntheticEvent, useState } from "react";
import { Redirect } from "react-router-dom";

const Register = () => {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [redirect, setRedirect] = useState(false);
    const [error, setError] = useState('');

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault();

        const response = await fetch('http://localhost:3003/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 'login': login, 'password': password })
        });

        const content = await response.status;
        if (content == 200) {
            setRedirect(true);
        }

        else {
            setError('Login already exists')
        }

    }

    if (redirect) {
        return <Redirect to="/login" />
    }

    return (
        <div>
            <div className="prof">
                <h1 className="label">Register</h1>
                <form className="form" onSubmit={submit}>
                    <input type="text" className="form-control" placeholder="Login" required onChange={e => (setLogin(e.target.value), setError(''))} />
                    <input type="password" className="form-control" placeholder="Password" required onChange={e => (setPassword(e.target.value), setError(''))} />
                    <p className="error">{error}</p>
                    <button className="btn" type="submit">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;