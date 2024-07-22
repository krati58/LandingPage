const Discuss = () => {
    return (
        <>
            <div className="pt-4" style={{ backgroundColor: "yellow", transform: "0.0.0.2" }}>
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row lg:space-x-8">
                    <div className="lg:w-1/2 pt-12">
                        <h1 className="text-3xl gap-2 font-bold mb-4 text-white">Let's Discuss <br /> Your Project</h1>
                        <p className="text-white pt-5">Let's figure out hwo to create an efficient application, its cost and terms of its development</p>
                    </div>
                    <div className="lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0">
                        <div className="space-x-4 flex">
                           
                            <div className="bg-white p-6 rounded-lg shadow-md">
                              
                                <form className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="col-span-1">
                                        <label className="block text-gray-700">Full name</label>
                                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="My Name" />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-gray-700">Phone number</label>
                                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="+91 0000000000" />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-gray-700">Business name</label>
                                        <input type="text" className="w-full mt-1 p-2 border rounded-md" placeholder="ABC Technologies PVT LTD" />
                                    </div>
                                    <div className="col-span-1">
                                        <label className="block text-gray-700">Business mail</label>
                                        <input type="email" className="w-full mt-1 p-2 border rounded-md" placeholder="demoaccount@gmail.com" />
                                    </div>
                                    <div className="col-span-2 text-end">
                                        <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
                                            Discuss the project
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Discuss;