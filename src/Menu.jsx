import React , {useState} from 'react'
import './menu.css'

const Menu = ({ category, item}) => {

    const [filteredCategory, setFilteredCategory] = useState(category)
    const [filteredItem, setFilteredItem] = useState(item)

    const filterRecord = (cat) => {
        if(cat == "all"){
            setFilteredItem(item);
        }
        else{
          let filterItem = item.filter((menu) => menu.category === cat)
          setFilteredItem(filterItem);
        } 
    }

    return ( 
        <div align="center">
            <button onClick={() => filterRecord("all")} className='py-2 px-4 mb-5 mt-3  text-light mx-3'>All</button>
            {
                filteredCategory.map((val)=>{
                    return(
                        <button onClick={() => filterRecord(val.name)} key={val.id} className='m-3 py-2 px-4  text-light'>{val.name}</button>  
                    )
                })
            }
            <div className="row">
            {
                filteredItem.map((val)=>{
                    return(
                            <div className="col-lg-3" key={val.id}>
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
