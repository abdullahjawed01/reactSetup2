import {useState} from "react"
import Card from "./Card"
import restaurants from "../data/restraunt"


function Body() {
  const [reslist, setRestlist] = useState(restaurants);
  // let reslist = restaurants
  return (
    <>
    <div>




    <div className='h-30 p-10 flex justify-center'>  

    <button className="bg-green-500 text-white px-4 py-2 rounded-md  " onClick={()=>{
      let filters = reslist.filter((res)=> res.avgRating>4)
      setRestlist(filters);
      // console.log(filters);
    }}>Filter</button>


      <button className="bg-green-500 text-white px-4 py-2 rounded-md ml-10 " onClick={()=>{
      let sorted = [...reslist].sort((a,b)=> a.name.localeCompare(b.name));
      setRestlist(sorted);
      // console.log(sorted); 
    }}>A-Z</button>


    <button className="bg-green-500 text-white px-4 py-2 rounded-md ml-10 " onClick={()=>{
      let sorted = [...reslist].sort((a,b)=> b.name.localeCompare(a.name));
      setRestlist(sorted);
      // console.log(sorted); 
    }}>Z-A</button>

         {/* <button className="bg-green-500 text-white px-4 py-2 rounded-md  " onClick={()=>{
      let filters = reslist.sort()
      setRestlist(filters);
      // console.log(filters);
    }}>A-Z</button> */}







    </div>
    <div className='flex flex-wrap  justify-center'>

    {reslist.map((restaurants,index)=>(
      <Card key={index} resData={restaurants} />
    ))}



   
    {/* <Card name={"Taj restarunt"} price={"₹180"} rate={"3.5"}   add={"44 street Mehdipatnam-80101"} desc={"Biryani"} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/1a8dfa8b2a73ddf7c6193465ab24c898"}/>
    <Card name={"Raahi"}  price={"₹100"} rate={"5.0"}  add={"champaasari, siliguri-73200"} desc={"Aloo paratha"} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/eqjzqem69jeifzbbmvnh"}/>
    <Card name={"Pista house"}  rate={"4.1"} add={"Gandhi Maidan , Patna-90404"}  price={"₹70"} desc={"sandwhich"} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/1/bf06132d-ddc8-44e3-923d-18e73bfc8901_609a95f5-f052-4539-88db-4b1f7ab04388.jpg_compressed"}/>
    <Card name={"Niloufer"} rate={"3.1"}  add={"Vijay Nagar, Hyderabad-10002"}  price={"₹40"} desc={"Coffee"}src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/1/14/cfdd3abe-d5d8-4f28-b971-4dd2fc6d798b_17ee5e7b-1995-4e51-9c18-1e65aedbe55d.JPG"}/>
    <Card name={"Arabiana"} rate={"3.2"}  add={"Masab Tank , Hyderabad-37493"}  price={"₹80"} desc={"Juice"} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/d1f7de838c6e05384934f97ed06e081e"}/>
    <Card name={"Mandi 36"} rate={"2.7"}   add={"Market, siliguri-34234"} price={"₹250"} desc={"Mandi "} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/1473dec8197eeb64772f9bb01ee51bac"}/> 
    <Card name={"Al Baik"} rate={"4.1"}  add={"Fulwari Sharif, Patna-64325"}  price={"₹200"} desc={"Shawarma"} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2025/6/11/206de737-e3d1-4f1b-a6b8-e9e703fa96a2_feaedbde-e6ea-44b7-ae4e-60be92b6517d.jpeg"}/>
    <Card name={"Al Romania"} rate={"3.1"}  add={"18 street Check Post, Siliguri-452325"}  price={"₹30"} desc={"Biscuit"} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/270fd274b46825c3739adc62ccd10825"}/>
    <Card name={"Mandi King"} rate={"4.2"}  add={"Vijay Nagar, Hyderabad-32452"} price={"₹190"} desc={"Mandi"} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/09e896f5eb8fe35d92d29fc2af1d5aff"}/>
    <Card name={"65 Corner"} rate={"5.0"}  add={"Salugara, Darjeeling-24525"}  price={"₹70"} desc={"Chicken fried rice"} src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/FOOD_CATALOG/IMAGES/CMS/2024/4/1/dca0148a-fe77-400b-81cc-2d9ad064b128_781854d1-05e8-4d35-afdf-349a9a680f36.jpg_compressed"}/> */}


    </div>







    </div>

    </>
  )
}

export default Body