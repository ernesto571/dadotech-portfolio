const services = [
    {icon:"☀️", title:"Solar Panel Installation", sub:"Complete solar systems for homes, offices, and industrial facilities. Site assessment, design, and full installation."},
    {icon:"🔋", title:"Inverters & Batteries", sub:"Supply and installation of high-quality inverters and deep-cycle batteries for uninterrupted power supply."},
    {icon:"💡", title:"Solar Street Lights", sub:"Autonomous solar street lighting for estates, schools, roads, and commercial premises."},
    {icon:"🏠", title:"Home & Office Solar", sub:"Tailored solar setups for residential and commercial properties with upgrade and maintenance plans."},
    {icon:"❄️", title:"AC Installation & Repairs", sub:"Air conditioning installation, servicing, and repairs — split units, cassette, and industrial systems."},
    {icon:"⚡", title:"Electrical Installations", sub:"Expert house and industrial wiring, power installations, and fault troubleshooting for all electrical systems."},
];
  
const handleServiceMsg = (title) => {
    const text = `Hello Dadotech! I'm interested in *${title}*. Please send me more information.`;
    window.open(`https://wa.me/2349023744204?text=${encodeURIComponent(text)}`, "_blank");
};
  
export default function Services() {
    return (
      <div className="bg-off py-16 px-4 md:px-10 lg:px-16 max-w-screen overflow-x-hidden">
        <div className="md:w-[75%] lg:w-[40%]">
          <p className="green font-inter tracking-widest text-xs md:text-sm font-semibold">WHAT WE DO</p>
          <h1 className="font-bebas text-[2.2rem] lg:text-[3rem] mt-1 font-bold dark tracking-wide">OUR SERVICES</h1>
          <div className="w-[70px] h-[3px] bg-lemon mt-1"></div>
          <p className="font-inter gray mt-5 text-[0.9rem]">From solar power to electrical installations and air conditioning — we handle it all with certified expertise.</p>
        </div>
  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {services.map((v) => (
            <div
              key={v.title}
              className="bg-white border border-gray-200 py-5 px-6 group hover:border-[#1a6b2f]/40 hover:shadow-md transition-all duration-300 cursor-pointer"
              onClick={() => handleServiceMsg(v.title)}
            >
              <h1 className="text-[1.6rem]">{v.icon}</h1>
              <h3 className="font-inter font-semibold mt-3">{v.title}</h3>
              <p className="gray text-sm font-grotesque font-medium mt-3">{v.sub}</p>
              <p className="text-[#1a6b2f] text-xs font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                💬 Message us about this →
              </p>
            </div>
          ))}
        </div>
      </div>
    );
}