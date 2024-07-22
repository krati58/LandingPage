import Image from 'next/image';
// import planetLogo from '/images/plant.jpg';

export default function Planet() {
    return (
        <>

            {/* <div class="max-w-7xl mx-auto border-t-2 border-black my-4"></div> */}
            <div className="flex flex-col items-center justify-center min-h-screen py-2">
                {/* Header Section */}
                <div class="border-t border-gray-300 my-4"></div>

                <div className=" max-w-7xl flex flex-wrap justify-around w-full py-10">
                    {Array(6).fill().map((_, i) => (
                        <div key={i} className="flex justify-center w-1/3 md:w-1/6 p-4">
                            <Image src="/images/plant.jpg" alt="Planet Logo" width={100} height={100} />
                        </div>
                    ))}
                </div>



                <div className=" mx-auto px-4 py-12 flex flex-wrap lg:flex-nowrap items-center">

                    <div className="w-full lg:w-1/2 lg:pr-8">
                        <h1 className="text-3xl font-bold mb-5">Full development cycle</h1>
                        <p className="mb-5">We use proven technologies</p>
                        <div className=" gap-4 text-left">
                            <div>
                                <h2 className="text-xl font-semibold">Web</h2>
                                <p>PHP / Javascript / Node.JS / Web Socket / Socket.io / Vue.js / Nuxt / MySQL / Laravel / GO lang / django / Python</p>
                            </div>
                        </div>

                        <div className="gap-4 text-left">
                            <div>
                                <h2 className="text-xl font-semibold">Mobile</h2>
                                <p>Swift / Kotlin / Alamofire / Firebase / CoreData / Room / Realm / Coroutine / RxJava / RxSwift / Unit Test / Navigation</p>
                            </div>

                        </div>
                    </div >
                    {/* Footer Section */}

                    < div className="w-full lg:w-1/2 lg:pr-8" >
                        <ul className="w-full md:w-1/2  p-4">
                            <li><a href="#" className="text-green-500 ">iOS development</a></li>

                            <li><a href="#" className="text-green-500">Android development</a></li>

                            <li><a href="#" className="text-green-500">Web development</a></li>
                            <li><a href="#" className="text-green-500">UI/UX design</a></li>
                            <li><a href="#" className="text-green-500">Testing</a></li>
                            <li><a href="#" className="text-green-500">Launch</a></li>
                            <li><a href="#" className="text-green-500">IT consulting</a></li>
                        </ul>
                    </ div>






                </div>
            </div >
        </>
    );
}
