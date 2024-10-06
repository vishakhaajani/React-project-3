import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Add = () => {
    const [title, setTitle] = useState("");
    const [des, setDes] = useState("");
    const [date, setDate] = useState("");
    const [location , setLocation] = useState("")
    const [max, setMax] = useState("")
    const [img, setImg] = useState(null);

    // Ensure record is always an array
    const storedData = localStorage.getItem('user');
    const data = storedData ? JSON.parse(storedData) : []; // Safely parse or return empty array
    const [record, setRecord] = useState(Array.isArray(data) ? data : []); // Ensure it's an array

    const navigator = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate fields
        if (!title || !date || !des || !location || !max) {
            alert("Event cannot be empty!");
            return false;
        }

        const obj = {
            id: Math.floor(Math.random() * 1000),
            title,
            des,
            data,
            location,
            max,
            img: img || '', // Ensure img is a string if null
        };

        const all = [...record, obj]; // Spread operator
        localStorage.setItem('user', JSON.stringify(all));
        setRecord(all);

        alert("Event added successfully!");
        setDate('');
        setLocation('');
        setMax('')
        setTitle('')
        setImg(null);
        navigator('/home');
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
                            <button type="submit" className="btn w-100 bg-light text-dark ">Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Add;
