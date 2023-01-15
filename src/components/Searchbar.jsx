const Searchbar = () => {
  return (
    <div className={`flex  h-[70px] items-center align-center `}>
      <input placeholder="Search ..." className={`xl:ml-10 xl:w-[50%] md:my-[15px] p-5 w-[70vw] mt-2 rounded-[5px] h-[35px] backdrop-blur-lg z-10  m-auto  bg-transparent focus:bg-blue-900  focus:text-white transition-bg duration-100 focus:outline-none font-[raleway]`}  type="text"  />
    </div>
  )
}

export default Searchbar;
