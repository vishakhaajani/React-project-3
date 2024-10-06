import React, { useState, useEffect } from 'react'
import './menu.css'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const Menu = () => {


    let item = []




    const [filteredItem, setFilteredItem] = useState([])

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('user')) || [];
        if (data.length === 0) {
            localStorage.setItem('user', JSON.stringify(item));
            setFilteredItem(item);
        } else {
            const combine = [...data, ...item.filter(i => !data.find(d => d.id === i.id))];
            setFilteredItem(combine);
        }
    }, []);


    const handleDelete = (id) => {
        const remove = filteredItem.filter(val => val.id !== id);
        localStorage.setItem('user', JSON.stringify(remove));
        setFilteredItem(remove);
        alert("Event deleted sucessfully");
    };

    const navigate = useNavigate()

    const handleEdit = (record) => {
        navigate('/edit', { state: { record } });
    };

    return (

        <div align="center">
            <nav className="navbar navbar-expand-lg navbar-light bg-dark" style={{ height: "70px" }}>
                <div className="container">
                    <Link className="navbar-brand  text-light">Event Handler</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link active  text-light" aria-current="page" to={'/home'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-light" to={'/add'}>Add</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <div className="container mt-5">
                <div className="row">
                    {
                        filteredItem.map((val) => {
                            return (
                                <div className="col-lg-3" key={val.id}>
                                    <div className="card bg-dark text-light" style={{ width: '18rem' }}>
                                        <div className="img">
                                            <img src={val.img} className="card-img-top" alt="..." width={244} height={244} style={{ objectFit: 'cover' }} />
                                        </div>
                                        <div className="card-body">
                                            <h5 className="card-title">Title:{val.title}</h5>
                                            <p className="card-text">Description:{val.des}</p>
                                            <p className="card-text">Date:{val.date}</p>
                                            <p className="card-text">Location:{val.location}</p>
                                            <p className="card-text">Max:{val.max}</p>
                                            <button className=' delete py-2 me-3' onClick={() => handleDelete(val.id)}>Delete</button>
                                            <button className='edit py-2' onClick={() => handleEdit(val)}>Edit</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Menu
