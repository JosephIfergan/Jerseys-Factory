import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <>
            <div className="text-center">
        <h1 className="my-5">
            OUPS ! Cette page n'existe pas.
        </h1>
            <img
                className="error404 d-block"
                src="../../404.gif"
                alt="First slide"
            />

            <Link className='btn btn-info rounded my-5' to='/'>
                Retour
            </Link>
            </div>
        </>
    );
};

export default NotFound;