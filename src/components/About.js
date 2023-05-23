import React from 'react';

function About({image = "https://via.placeholder.com/215", about}){
    return (
        <aside className='About'>
            <img src={image} alt="blog logo"></img>
            <p id={about}>{about}</p>
        </aside>
    )
}

export default About;