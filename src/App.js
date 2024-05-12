import Menu from './Menu'
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {

  const [menu, setMenu] = useState([])

  const category = [
    {
      id : 1,
      name : "Brackfast",
      reciep : ""
    },
    {
      id : 2,
      name : "Lunch"
    },
    {
      id : 3,
      name : "Dinner"
    },
    {
      id : 4,
      name : "Snacks"
    }
  ]

  const Item = [
    {
      id : 1,
      img : "https://modinatheme.com/foodking/wp-content/uploads/2024/04/product-12.png",
      name : "PASTA",
      category : "Snacks"
    },
    {
      id : 2,
      img : "https://modinatheme.com/foodking/wp-content/uploads/2024/03/french-fry.png",
      name : "FRENCH FREIES",
      category : "Snacks"
    },
    {
      id : 3,
      img : "https://modinatheme.com/foodking/wp-content/uploads/2024/03/pizza-2.png",
      name : "PIZZA",
      category : "Dinner"
    },
    {
      id : 4,
      img : "https://modinatheme.com/foodking/wp-content/uploads/2024/03/burger-2.png",
      name : "BURGER",
      category : "Dinner"
    },
    {
      id : 5,
      img : "https://modinatheme.com/foodking/wp-content/uploads/2024/03/beef-ruti.png",
      name : "ROTI SUBJI",
      category : "Lunch"
    },
    {
      id : 6,
      img : "https://demo2.wpopal.com/fazfood/wp-content/uploads/2023/10/product_14-600x600.png",
      name : "LOADED FRIES",
      category : "Brackfast"
    },
    {
      id : 7,
      img : "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-6-1-180x180.png",
      name : "BIRYANI",
      category : "Lunch"
    },
    {
      id : 8,
      img : "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-7-180x180.png",
      name : "NOODLES",
      category : "Snacks"
    },
    {
      id : 8,
      img : "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2022/12/image-31.png",
      name : "ALOO PARATHA",
      category : "Brackfast"
    },
    {
      id : 8,
      img : "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/03/product_coffee_6.png",
      name : "ORGANICE TEA",
      category : "Brackfast"
    },
    {
      id : 8,
      img : "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-8-180x180.png",
      name : "MAGII",
      category : "Dinner"
    },
    {
      id : 8,
      img : "https://themeholy.com/wordpress/pizzan/wp-content/uploads/2023/06/Image-5-180x180.png",
      name : "CHICKEN",
      category : "Lunch"
    }
  ]

  const filterRecord = (val) => {
    if(val == "all"){
      setMenu(Item)
    }
    else{
      console.log(menu);
      let filterItem = Item.filter(v => v.category == val)
      setMenu(filterItem)
    } 
}

  return (
    <div className="App">
      <Menu  category={category}  item={menu} filterRecord={filterRecord}/>
    </div>
  );
}

export default App;
