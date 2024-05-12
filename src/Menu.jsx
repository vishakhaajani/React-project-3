import React from 'react'
import './menu.css'

const Menu = ({ category, item, filterRecord }) => {

    return (
        <div align="center">
            <button onClick={() => filterRecord("all")} className='py-2 px-4 mb-5 mt-3  text-light mx-3'>All</button>
            {
                category.map((val)=>{
                    return(
                        <button onClick={() => filterRecord(val.name)} key={val.id} className='m-3 py-2 px-4  text-light'>{val.name}</button>  
                    )
                })
            }
            <div className="row">
            {
                item.map((val)=>{
                    return(
                            <div className="col-lg-3">
                            <div className="card" style={{width: '18rem'}}>
                                <div className="img">
                                <img src={val.img} className="card-img-top" alt="..." width={244} height={244} style={{objectFit:'cover'}}/>
                                </div>
                            <div className="card-body">
                                <h5 className="card-title">{val.name}</h5>
                                <p className="card-text">{val.category}</p>
                            </div>
                            </div>
                        </div>   
                    )
                })
            }
           </div>
       </div>
    )
}

export default Menu
