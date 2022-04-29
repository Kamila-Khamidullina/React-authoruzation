import React from "react";

const Footer = () => {
    return (
        <div className="page-footer">
            <div className="container">
                <div className="row"></div>
                <p className="col">
                    &copy;{new Date().getFullYear()} c.hamidullina@innopolis.university | All rights reserved
                </p>
            </div>
        </div>
    );
}

export default Footer;

