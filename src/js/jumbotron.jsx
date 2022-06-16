import React from 'react';

const Jumbotron = (props) => {
    return (
        <div className="jumbotron m-5 bg-light">
            <h1 className="display-4">{props.title}</h1>
            <p className="lead">{props.description}</p>
            <a className="btn btn-primary btn-lg" href="https://reactjs.org/" role="button">Call to action!</a>
        </div>

        
    );
}
export default Jumbotron;