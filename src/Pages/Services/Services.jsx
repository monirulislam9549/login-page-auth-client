import React, { useEffect, useState } from 'react';
import './Services.css'
import { Link } from 'react-router-dom';

const Services = () => {
    const [servicesData, setServicesData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const url = `http://localhost:5000/allData`
            try {
                const res = await fetch(url)
                const data = await res.json()
                setServicesData(data)
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData()
    }, [])
    return (
        <div>
            <div><h1>Hello services</h1></div>
            <div className='services'>
                {servicesData[0]?.services?.map((service) => (
                    <div key={service?.id} className="service-card">
                        <h2>{service?.name}</h2>
                        <p>{service?.description}</p>
                        <ul>
                            {service?.items?.map((item) => (
                                <li key={item?.id}>
                                    {item?.name} - ${item?.price}
                                </li>
                            ))}
                        </ul>
                        <p>Price: ${service?.price}</p>
                        <p>Duration: {service?.duration}</p>
                        <Link to={`/services/${service?.id}`}>
                            <button>Details</button>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Services;