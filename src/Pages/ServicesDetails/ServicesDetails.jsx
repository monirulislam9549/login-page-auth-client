import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ServicesDetails = () => {
    const { id } = useParams()

    useEffect(() => {
        fetch(`http://localhost:5000/allData/${id}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }, [])
    return (
        <div>
            <h1>Services Details</h1>
        </div>
    );
};

export default ServicesDetails;