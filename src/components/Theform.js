import React, { useState } from 'react';

const Theform = (props) => {
    const [userName, setUserName] = useState('');
    const handleSubmint = (event)=> {
        event.preventDefault();
        props.updateTheList(userName);
        setUserName('');
    };

    return (
        <form onSubmit={handleSubmint}>
        <input type="text" placeholder="GitHub username" value={userName} required onChange={e => setUserName(e.target.value)}/>
        <button type="submit">Add card</button>
        </form>
    );
};

export default Theform;