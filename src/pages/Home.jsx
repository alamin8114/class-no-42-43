
const Home = () => {
  return (
    <>
    <div className="home bg-[#C9E6F0] h-screen w-full">
        <div className="container">
            <div className="row flex justify-between items-center">
            <div className="head">
                <h1 className="text-6xl font-serif font-bold text-[#F96E2A] p-3 text-center"><span className="text-8xl text-[#6A1E55]">Hi</span> I am Alamin islam</h1>
                <h2 className="text-3xl font-serif font-bold text-[#3D3BF3] p-3 text-center">Front end Developer</h2>
            </div>
            <div className="img mt-[80px] ">
            <img className="w-[500px] rounded" src="./my-images.jpg" alt="my images" />
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home