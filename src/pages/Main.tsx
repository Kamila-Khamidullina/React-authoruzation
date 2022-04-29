import React from "react";

const Main = () => {

    return (
        <div className="home">
            <header>
                <img src="https://static.scientificamerican.com/sciam/cache/file/00A865C6-9F1F-4412-A9CA2FC329C15F36_source.jpg?w=590&h=800&08F4EA30-9038-4EB2-8EBF9195D8829B6C" width={100} height={100} />
                <span className="home-title">Secret people</span>
            </header>
            <body>
                <span className="success">You successfully logged in!</span>
                <span className="success">Go to the `Home` tab to see secret people</span>
            </body>
        </div>
    );
};

export default Main;