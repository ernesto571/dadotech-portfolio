
const project = [
    {label:"6KVA Inverter with 2pcs 5KWh Lithium Battery + 12pc 450W Panels" , img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1781291194/IMG-20260610-WA0140_w8dxaw.jpg"},
    {label:"500W Itel Power Tank + 600W Panel" , img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1781291188/IMG-20260610-WA0143_dpv85p.jpg"},
    {label:"5KVA Hybrid INverter with 10KWh Lithium Battery + 6pcs 620W Jinko Panel" , img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1781291183/IMG-20260610-WA0139_p6sg02.jpg"},
    {label:"4.KVA Inverter with .5KWh Lithium Battery + 6pcs 450W Panels" , img:"https://res.cloudinary.com/dsljbxkfy/image/upload/v1781291186/IMG-20260610-WA0144_l19xoz.jpg"},
]
export default function Project() {

    return (
        <div className="bg-white py-[4rem] px-4 md:px-10 lg:px-[4rem] max-w-screen overflow-x-hidden">
            {/* heading */}
            <div className="md:w-[75%] lg:w-[40%]">
                <p className="green font-inter tracking-widest text-xs md:text-sm font-semibold">OUR WORK</p>
                <h1 className="font-bebas text-[2.2rem] lg:text-[3rem] mt-1 lg:mt-0 font-bold dark tracking-wide">RECENT PROJECTS</h1>
                <div className="w-[70px] h-[3px] bg-lemon mt-1"></div>
                <p className="font-inter gray mt-5 text-[0.9rem]">Real installations. Real results. Here's a look at some of the projects we've completed for our clients.</p>
            </div>
            {/* grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12">
                {project.map((p) => (
                    <div key={p.img} className="relative overflow-hidden group hover:cursor-pointer">
                        <img src={p.img} className="h-[180px] md:h-[200px] lg:h-[250px] w-full object-cover group-hover:scale-105 transition-transform duration-300 "/>
                        <div className="absolute inset-0 gallery-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300 "></div>
                        <p className="text-white absolute  bottom-3 hidden group-hover:flex px-3 text-xs font-bold font-inter">{p.label}</p>
                    </div>
                ))}
                <div className="flex flex-col items-center justify-center bg-[#1a6b2f] h-[180px] md:h-[200px] lg:h-[250px] w-full">
                    <h1 className="text-[2rem]">📸</h1>
                    <p className="text-white font-inter font-semibold text-[0.83rem] ">More projects available on request</p>
                    <a href="#consult" className="px-5 py-2 font-grotesque text-sm font-semibold tracking-wide bg-lemon mt-3">CONTACT US</a>
                </div>

            </div>
        </div>
    )
}