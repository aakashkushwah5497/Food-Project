import React , {useState , useEffect} from 'react'
import Menu from './Menu'
import Categories from './Components/Categories'
import items from './Data'
import logo from './logo.jpg'
import FoodCard from './Components/FoodCard'

import axios from 'axios'

const allCategories = ["all" , ...(items.map((item) => item.category))]

const App = () => {
  const [menuItems , setMenuItems] = useState(items)
  const [activeCategory , setActiveCategory] = useState("")
  const [AllCategories , setAllCategories] = useState([])
  const [AllData,setAllData]=useState("")

    useEffect(async () => {
 
      const {data}=await axios.post("http://63.142.251.101:3000/homepage");
      // console.log("### response data", data.data)
      setAllData(data.data);
 setAllCategories(data.data.cusinie_lists)
    },[]) 

 const filterItems = (category) => {
setActiveCategory(category)
if(category === 'all'){
  setMenuItems(items)
  return
}
const newItems = items.filter((item) => item.category === category)
setMenuItems(newItems)
 }




  return (
   <main>
     <section className='menu section'>
       <div className='title'>
         <img src={logo} alt='logo' className='logo'></img>
         <h2>Menu List</h2>
         <div className='underline'></div>
       </div>
       {/* {console.log("all categories:",AllCategories)} */}
       {AllCategories.map(item =><Categories categories={item} key={item.id}/>)}
     
      <Menu items={menuItems}></Menu>
     </section>
   </main>
  )
}

export default App
