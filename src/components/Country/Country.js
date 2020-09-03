import React from 'react';
import './Country.css';
const Country = (props) => {
    // console.log(props);

    const { name, flag, region, population, capital } = props.country;
    return (
        <div className="country-container">
            <div className="country-body">
                <img src={flag} alt="" />
                <h3>{name}</h3>
                <h4>Capital : {capital}</h4>
                <p>Region : {region}</p>
                <p>Population : {population}</p>
            </div>
        </div>
    );
};

export default Country;