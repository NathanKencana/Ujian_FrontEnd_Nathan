import React from 'react';

const Daftar = props =>
    <div className="list-container">
        <h4 className="card text-white bg-primary">{`${props.strPlayer} (${props.strPosition})`}</h4>
        <div>
            <img src={props.strThumb} alt={props.strPlayer}/>
            <p>{props.strDescriptionEN}</p>
        </div>
    </div>

export default Daftar;