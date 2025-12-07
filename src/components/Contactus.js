const Contactus = () =>{
    return (
        <div>
            <h1 className="font-bold text-2xl p-4 m-4">Contact Us Page</h1>
            <form>
                <input type="text" className="border border-black p-2 m-2" placeholder="Name"/>
                <input type="text" className="border border-black p-2 m-2" placeholder="Message"/>
                <button className="bg-red-400 border border-black p-2 m-2">Submit</button>
            </form>
        </div>
    )
}
export default Contactus;