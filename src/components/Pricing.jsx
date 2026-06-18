
const prices = [
    {tag:"STARTER", type:"BASIC SOLAR", sub:"Starting price · varies by specs", price:"₦650K+", info:['500W itel power tank', '600W solar panel', 'With all accessories', 'Full wiring & installation', '1-month support'], package:"Basic Solar Package"},
    {tag:"BEST VALUE", type:"HOME SOLAR", sub:"Starting price · varies by specs", price:"₦1.2M+", info:['1.5KVA inverter system', '2–4 solar panels (200–450W)', '2.5KWh lithium battery', 'Full wiring & installation', '2-month support'], package:"Home Solar Package" },
    {tag:"POPULAR", type:"STANDARD SOLAR", sub:"Starting price · varies by specs", price:"₦2.2M+", info:['4.2KVA inverter system', '6pcs 450W mono panels', '2.5KWh lithium battery', 'Full wiring & installation', '3-month support'], package:"Stadard Solar Package"},
    {tag:"PREMIUM", type:"INDUSTRIAL SOLAR", sub:"Starting price · varies by specs", price:"₦4M+", info:['11KVA inverter system', '16KWh lithium battery bank', 'Full panel array included', 'Full wiring & installation', '6-month support'], package:"Industrial Solar Package"},
    {tag:"HVAC", type:"AC INSTALLATION", price:"₦150K+", sub:"Per unit · labour only", info:['Split unit installation', 'Piping & electrical connection', 'Testing & commissioning', 'AC servicing & repairs', 'Industrial AC available'], package:" AC Installation Package" },
    {tag:"ELECTRICAL", type:"WIRING & INSTALLATION", price:"₦100K+", sub:"Starting price · per job", info:['House & apartment wiring', 'Industrial wiring on termination', 'Fault finding & repair', 'Power installation', 'Safety inspection'], package:" Wiring & Installation Package"},
    {tag:"CUSTOM", type:"CUSTOM PROJECT", price:"CONTACT US", sub:"We'll build a package for you", info:['Industrial-scale solar farms', 'Estate solar street lighting', 'Full building electrical setup', 'Solar upgrade & migration', 'Multi-site projects'], package:" Custom Project"}
]

export default function Pricing () {

    // const handleWhatsapp = (package_name) = {

    // }

    return(
        <div className="bg-off py-[4rem] px-4 md:px-10 lg:px-[4rem] max-w-screen overflow-x-hidden">
            {/* heading */}
            <div className="md:w-[75%] lg:w-[40%]">
                <p className="green font-inter tracking-widest text-xs md:text-sm font-semibold">SERVICE PACKAGE</p>
                <h1 className="font-bebas text-[2.2rem] lg:text-[3rem] mt-1 lg:mt-0 font-bold dark tracking-wide">OUR PRICING</h1>
                <div className="w-[70px] h-[3px] bg-lemon mt-1"></div>
                <p className="font-inter gray mt-5 text-[0.9rem]">Transparent pricing for every budget. All packages include installation, testing, and after-service support. Contact us for custom quotes.</p>
            </div>
            {/* content */}
            <div className="grid grid-cols-1 md:grid-cols-2 px-4 md:px-0 lg:grid-cols-4 gap-5 mt-16">
                { prices.slice(0,2).map((p) => (
                    <div key={p} className="bg-white border border-gray-200 px-8 md:px-6 py-9">
                        <p className="w-fit bg-lemon font-inter py-0.5 px-3 text-[0.7rem] tracking-wider text-black font-semibold">{p.tag} </p>
                        <h3 className="font-bebas text-[1.5rem] font-semibold tracking-wide mt-3">{p.type} </h3>
                        <h1 className="green text-[2rem] font-grotesque font-semibold">{p.price}</h1>
                        <p className="font-inter gray text-[0.7rem] mt-1">{p.sub} </p>
                        <ul className="price-feat flex flex-col gap-2 mt-4">
                            {p.info.map((i) => (
                                <li className="flex gap-3 text-sm gray font-inter" key={i}>
                                    {i} 
                                </li>
                            ))}
                        </ul>
                        <button className="bg-green w-full font-grotesque font-semibold text-white  text-[0.85rem] tracking-wider py-2.5 px-4 mt-6">GET QOUTE ON WHATSAPP</button>
                    </div>
                )) }    
                { prices.slice(2,3).map((p) => (
                    <div key={p} className="bg-green  px-6 py-9">
                        <p className="w-fit bg-lemon font-inter py-0.5 px-3 text-[0.7rem] tracking-wider text-white font-semibold">{p.tag} </p>
                        <h3 className="font-bebas text-white text-[1.5rem] font-semibold tracking-wide mt-3">{p.type} </h3>
                        <h1 className="lemon text-[2rem] font-grotesque font-semibold">{p.price}</h1>
                        <p className="font-inter text-gray-100 text-[0.7rem] mt-1">{p.sub} </p>
                        <ul className="price-feat-2 flex flex-col gap-2 mt-4">
                            {p.info.map((i) => (
                                <li className="flex gap-3 text-sm text-white font-inter" key={i}>
                                    {i} 
                                </li>
                            ))}
                        </ul>
                        <button className="bg-lemon w-full font-grotesque font-semibold text-white  text-[0.85rem] tracking-wider py-2.5 px-4 mt-6">GET QOUTE ON WHATSAPP</button>
                    </div>
                )) } 
                { prices.slice(3,6).map((p) => (
                    <div key={p} className="bg-white border border-gray-200 px-6 py-9">
                        <p className="w-fit bg-lemon font-inter py-0.5 px-3 text-[0.7rem] tracking-wider text-black font-semibold">{p.tag} </p>
                        <h3 className="font-bebas text-[1.5rem] font-semibold tracking-wide mt-3">{p.type} </h3>
                        <h1 className="green text-[2rem] font-grotesque font-semibold">{p.price}</h1>
                        <p className="font-inter gray text-[0.7rem] mt-1">{p.sub} </p>
                        <ul className="price-feat flex flex-col gap-2 mt-4">
                            {p.info.map((i) => (
                                <li className="flex gap-3 text-sm gray font-inter" key={i}>
                                    {i} 
                                </li>
                            ))}
                        </ul>
                        <button className="bg-green w-full font-grotesque font-semibold text-white  text-[0.85rem] tracking-wider py-2.5 px-4 mt-6">GET QOUTE ON WHATSAPP</button>
                    </div>
                )) }    
                { prices.slice(6).map((p) => (
                    <div key={p} className="bg-[#0a0f06] px-6 py-9">
                        <p className="w-fit bg-lemon font-inter py-0.5 px-3 text-[0.7rem] tracking-wider text-black font-semibold">{p.tag} </p>
                        <h3 className="font-bebas text-white text-[1.5rem] font-semibold tracking-wide mt-3">{p.type} </h3>
                        <h1 className="text-[2rem] text-white font-bebas font-semibold">{p.price}</h1>
                        <p className="font-inter text-[rgba(255,255,255,0.6)] text-[0.7rem] mt-1">{p.sub} </p>
                        <ul className="price-feat flex flex-col gap-2 mt-4">
                            {p.info.map((i) => (
                                <li className="flex gap-3 text-sm gray font-inter" key={i}>
                                    {i} 
                                </li>
                            ))}
                        </ul>
                        <button className="bg-lemon w-full font-grotesque font-semibold text-white  text-[0.85rem] tracking-wider py-2.5 px-4 mt-6">GET QOUTE ON WHATSAPP</button>
                    </div>
                )) }       
            </div>
            <p className="gray text-[0.83rem] font-inter flex justify-center mt-10">* All prices are starting prices and may vary based on site conditions, distance, and equipment specifications. Contact us for an accurate quote</p>
        </div>
    )
}