
const info = [
    { id:"01", title:"CAC Certified & Registered", sub:"Officially incorporated under CAMA 2020. CRN: 9359229. Registered Feb 23, 2026." },
    { id:"02", title:"Experienced Technical Team", sub:"Years of hands-on experience across solar, HVAC, and electrical for residential and industrial clients." },
    { id:"03", title:"Fortutech Solar Collaboration", sub:"Strategic partnership ensuring access to premium solar equipment and industry-standard practices." },
    { id:"04", title:"Fast Response & Reliable", sub:"We show up, we deliver, and we stand behind our work. Available Mon–Sat, 8AM–6PM." }
]

export default function About () {

    return(
        <div className="bg-white py-[4rem] px-4 md:px-10 lg:px-[4rem] max-w-screen overflow-x-hidden">
            {/* heading */}
            <div className="md:w-[75%] lg:w-[40%]">
                <p className="green font-inter tracking-widest text-xs md:text-sm font-semibold">WHY CHOOSE US </p>
                <h1 className="font-bebas text-[2.2rem] lg:text-[3rem] mt-1 lg:mt-0 font-bold dark tracking-wide">BUILT ON TRUST & EXPERTISE </h1>
                <div className="w-[70px] h-[3px] bg-lemon mt-1"></div>
                <p className="font-inter gray mt-5 text-[0.9rem]">Dadotech Consultant Solar-HVAC Company Ltd is a CAC-registered engineering firm serving clients across Osun State and beyond.</p>
            </div>
            {/* content */}
            <div className="grid  items-center justify-center grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
                <div className="flex flex-col gap-6">
                    { info.map((i) => (
                        <span className="flex gap-5 border border-gray-200 hover:border-[rgba(26,107,47,0.3)] px-4 py-5 bg-white hover:bg-[#f6faf0] " key={i.id}>
                            <h2 className="lemon font-bebas text-[1.8rem] tracking-wide ">{i.id} </h2>
                            <div>
                                <strong className="font-inter text-gray-900 text-[0.93rem] ">{i.title} </strong>
                                <p className="font-inter gray text-[0.83rem] ">{i.sub} </p>
                            </div>
                        </span>
                    )) }
                </div>
                <img src="https://res.cloudinary.com/dsljbxkfy/image/upload/v1781292345/Screenshot_2026-06-12_at_20-01-14_CERTIFICATE_-_DADOTECH_CONSULTANT_SOLAR-HVAC_COMPANY_LTD.pdf-removebg-preview_fhdzlg.png" alt="Cert" className=" w-fit object-cover mx-auto "/>
            </div>
        </div>
    )
}