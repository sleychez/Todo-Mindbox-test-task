import React from 'react'
import {useHistory} from 'react-router-dom'

const About: React.FC = () => {
    const history = useHistory();

    return (
        <main className='about'>
            <h1>About</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque corporis, cumque dolor eius excepturi
                expedita inventore, ipsum, praesentium quod repellendus sunt tempore temporibus voluptatibus? Dolore ea
                eligendi modi odio perspiciatis.</p>
            <button className='btn waves-effect waves-light purple darken-1' onClick={() => history.push('/')}>Back</button>
        </main>
    )
}


export default About