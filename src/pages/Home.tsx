import React, { SyntheticEvent, useEffect, useState } from "react";
import token from './Login'

let id = '';
let name = '';
let email = '';
let avatar = '';
let address = '';
let people: any[] = [];

const Home = (props: { loggedIn: boolean, setLoggedIn: (loggedIn: boolean) => void }) => {

    let content;
    const [reload, setReload] = useState(true);

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:3003/info', {
                    method: 'GET',
                    headers: { Authorization: `${window.name}`, 'Content-Type': 'application/json' },
                });


                const result = await response.json();

                people = [];

                for (var i = 0; i < result.length; i++) {
                    id = result[i]['id'];
                    name = result[i]['name'];
                    email = result[i]['email'];
                    avatar = result[i]['avatar'];
                    address = result[i]['address'];

                    people.push({ 'id': id, 'name': name, 'email': email, 'avatar': avatar, 'address': address, 'description': '' });

                }
            }
        )();
    });


    const descriptionOut = async (id: string) => {
        const response = await fetch(`http://localhost:3003/info/${id}`, {
            method: 'GET',
            headers: { Authorization: `${window.name}`, 'Content-Type': 'application/json' },
        });

        const result = await response.json();
        for (var i = 0; i < people.length; i++) {
            if (people[i]['id'] == id) {
                people[i]['description'] = result['description'];
            }
        }
        if (reload) { setReload(false) }
        else { setReload(true) };
    }

    if (props.loggedIn) {
        content = (
            people.map((person) =>
                <div className="info-card">
                    <div className="card">
                        <img className="avatar" src={person['avatar']} />
                        <div className="info">
                            <span className="name">{person['name']}</span>
                            <div className="info-fields">
                                <div className="titles">
                                    <span className="title">id:</span>
                                    <span className="title">email:</span>
                                    <span className="title">address:</span>
                                </div>
                                <div className="values">
                                    <span className="id">{person['id']}</span>
                                    <span className="email">{person['email']}</span>
                                    <span className="address">{person['address']}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="more" onClick={() => descriptionOut(person['id'])}>More</button>
                    <div className="description">
                        {reload}
                        <div className="card-more">{person['description']}</div>
                    </div>
                </div>
            ))
    }
    else {
        content = (<div className="home-label">You are not logged in</div>);
    };

    return (
        <div className="home">
            <header>
                <img src="https://static.scientificamerican.com/sciam/cache/file/00A865C6-9F1F-4412-A9CA2FC329C15F36_source.jpg?w=590&h=800&08F4EA30-9038-4EB2-8EBF9195D8829B6C" width={100} height={100} />
                <span className="home-title">Secret people</span>
            </header>
            {props.loggedIn}
            {content}
        </div>
    );
};

export default Home;