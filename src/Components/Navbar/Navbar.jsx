import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <>
    <div className="px-2 py-2 bg-green-600">
        <div className="container">
        <div className="flex justify-around items-center">
            <div className="logo">
                <h1 className="text-[24px] font-semibold text-red-600">Alamin Islam</h1>
            </div>
            <div >
                <ul className="flex gap-4">
                    <li><Link to={"/"} className="text-[18px] font-bold text-[#1C325B]">Home</Link></li>
                    <li><Link to={"/Count"} className="text-[18px] font-bold text-[#1C325B]">Count</Link></li>
                    <li><Link to={"/Api"} className="text-[18px] font-bold text-[#1C325B]">Api</Link></li>
                </ul>
                </div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Navbar