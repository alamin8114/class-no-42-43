import { useDispatch, useSelector } from "react-redux"
import { decrement, increment } from "../slice/counterSlice"

const Count = () => {
    const Count=useSelector((state)=>state.data.value)
    const Dispatch=useDispatch()

    const handelAdd=()=>{
        Dispatch(increment())
    }
    const handelRemove=()=>{
        Dispatch(decrement())
    }


  return (
    <div className="flex justify-center items-center h-screen w-full bg-[#4CC9FE]">
        <div className="flex flex-col gap-5 justify-center items-center">
        <div className="count text-8xl text-[#FF77B7]">{Count}</div>
        <div className="flex gap-4">
            <button onClick={handelAdd}  className="text-[24px] bg-green-600 px-3 py-1 rounded-md text-red-600 hover:text-green-600 hover:bg-red-600">Add</button>
            <button onClick={handelRemove}  className="text-[24px] bg-green-600 px-3 py-1 rounded-md text-red-600 hover:text-green-600 hover:bg-red-600">Remove</button>
        </div>
        </div>
    </div>
  )
}

export default Count