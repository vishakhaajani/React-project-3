import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Edit = () => {

    const loc = useLocation()
    const navigate = useNavigate()
    const {record} = loc.state || {}

    const [title, setTitle] = useState(record.title);
    const [des, setDes] = useState(record.des);
    const [date, setDate] = useState(record.date);
    const [location , setLocation] = useState(record.location)
    const [max, setMax] = useState(record.max)
    const [img, setImg] = useState(record.img);

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
            id: record.id,
            title,
            des,
            date,
            location,
            max,
            img 
        };

        const all = JSON.parse(localStorage.getItem('user')) || [];
        const newRecords = all.map(r => (r.id === record.id ? obj : r));
        localStorage.setItem('user', JSON.stringify(newRecords))


        alert("Event edit successfully!");
        setDate('');
        setLocation('');
        setMax('')
        setTitle('')
        setImg(null);
        navigate('/home');
    }

    return (
        <div>
        <div className='d-flex justify-content-center'>
            <div className="col-lg-5 mt-5">
                <form className='p-5 bg-dark text-light' onSubmit={handleSubmit}>
                    <h3 className='text-center mb-4'>Add New Event</h3>
                    <div className="mb-3">
                        <label className="form-label ps-0">Title:</label>
                        <input type="text" className="form-control" value={title || ""}
                            onChange={(e) => setTitle(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label ps-0">Description:</label>
                        <input type="text" className="form-control" value={des || ""}
                            onChange={(e) => setDes(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label ps-0">Location:</label>
                        <input type="text" className="form-control" value={location || ""}
                            onChange={(e) => setLocation(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label ps-0">Date:</label>
                        <input type="date" className="form-control" value={date || ""}
                            onChange={(e) => setDate(e.target.value)} />
                    </div>
                    <div className="mb-3">
                        <label className="form-label ps-0">Max:</label>
                        <input type="text" className="form-control" value={max || ""}
                            onChange={(e) => setMax(e.target.value)} />
                    </div>
                    <div className="mb-4">
                        <label className="form-label ps-0">Input File:</label>
                        <input type="file" className='d-block'
                            onChange={(e) => setImg(URL.createObjectURL(e.target.files[0]))} />
                    </div>
                    <div className="button mt-5">
                        <button type="submit" className="btn w-100 bg-light text-dark">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    )
}

export default Edit;
