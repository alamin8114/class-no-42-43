import { useEffect, useState } from "react"

const Api = () => {

    const [data,setdata]=useState([])

    useEffect(()=>{
      fetch(' https://api.escuelajs.co/api/v1/products')
          .then(response => response.json())
          .then(json => setdata(json))
    },[])
      console.log(data)
      
  return (
    <>
    <div className="main flex gap-2 flex-wrap justify-center items-center">
      {
        data.map((item)=>{
          console.log(item)
          return(
          <div key={"id"} className="single-card flex flex-col gap-1 flex-shrink  py-4 ">
            <div className="img">
              <img className="w-[300px]" src={item.category.image} alt="" />
            </div>
            <h1 className="text-2xl text-black font-sans ">{item.price}$</h1>
            <h1 className="text-[24px] w-[300px] py-3 text-black font-sans font-bold">{item.title}</h1>
            <h1 className="text-2xl text-black font-sans font-bold">{item.name}</h1>
          </div>
            
          )
        })
      }
    </div>
    
    </>
  )
}

export default Api