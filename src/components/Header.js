import React from 'react';

function Header({name}){
    return (
        <header className={name}>
            <h1>{name}</h1>
        </header>
    )
}

export default Header