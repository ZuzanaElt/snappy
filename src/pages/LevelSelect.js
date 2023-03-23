import React, { useState } from "react";
import '../scss/pages/level-select.scss';

const LevelSelect = ({ level, setLevel }) => {

    return (
        <div className='container'>
            <h1 className='level-select'>Select a level!</h1>
            <div className='level-links'>
                <button onClick={setLevel}>Easy</button>
                <button onClick={setLevel}>Medium</button>
                <button onClick={setLevel}>Hard</button>
            </div>
        </div>
    );
};

export default LevelSelect;
