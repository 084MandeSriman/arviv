import { Link, useNavigate } from "react-router-dom"
const services = [
  {
    title: "Artificial Intelligence",
    desc: "From generative AI to predictive analytics, our AI solutions help enterprises innovate faster.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712109.png",
    slug: "artificial-intelligence"
  },
  {
    title: "Digital Experience",
    desc: "Providing solutions to connect the entire customer journey by optimizing operations.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712035.png",
    slug: "digital-experience"
  },
  {
    title: "Data Analytics",
    desc: "Providing BI solutions that deliver actionable insights for strategic and tactical decisions.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712027.png",
    slug: "data-analytics"
  },
  {
    title: "Enterprise Applications",
    desc: "Best-of-breed solutions enabling application-driven business transformation.",
    icon: "https://cdn-icons-png.flaticon.com/512/4712/4712040.png",
    slug: "enterprise-application"
  },
  {
    title: "Microsoft Dynamics 365",
    desc: "ERP and CRM solutions that improve operational efficiency.",
    icon: "https://cdn-icons-png.flaticon.com/512/732/732221.png",
    slug: "microsoft-dynamics-365"
  },
  {
    title: "Intelligent IT & Cloud",
    desc: "Cloud-first strategies for scalable and secure IT operations.",
    icon: "https://cdn-icons-png.flaticon.com/512/4149/4149653.png",
    slug: "intelligent-it-and-cloud"
  },
  {
    title: "Quality Engineering",
    desc: "Advanced testing frameworks ensuring product reliability.",
    icon: "https://cdn-icons-png.flaticon.com/512/942/942748.png",
    slug: "quality-engineering"
  },
  {
    title: "ServiceNow Platform",
    desc: "Digital workflows that simplify enterprise service management.",
    icon: "https://cdn-icons-png.flaticon.com/512/5968/5968342.png",
    slug: "servicenow-platform"
  },
]

export default function Services() {
  const navigate = useNavigate();
  
  return (
    <section className="py-16 xs:py-20 sm:py-24 md:py-28 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 relative overflow-hidden">
      {/* Premium Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/20 to-purple-100/20"></div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-10 xs:top-16 sm:top-20 left-4 xs:left-6 sm:left-10 w-16 xs:w-24 sm:w-32 h-16 xs:h-24 sm:h-32 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-10 xs:bottom-16 sm:bottom-20 right-4 xs:right-6 sm:right-10 w-20 xs:w-32 sm:w-40 h-20 xs:h-32 sm:h-40 bg-gradient-to-br from-emerald-400/10 to-teal-400/10 rounded-full blur-xl animate-float-delayed"></div>

      {/* ===== Premium Header Section ===== */}
      <div className="text-center max-w-5xl mx-auto mb-12 xs:mb-16 sm:mb-20 md:mb-24 relative z-10 px-4 xs:px-6">
        <div className="inline-block mb-4 xs:mb-6 sm:mb-8">
          <span className="text-xs xs:text-sm font-semibold text-blue-600 uppercase tracking-wider bg-blue-50 px-3 xs:px-4 py-1.5 xs:py-2 rounded-full border border-blue-200">
            Our Expertise
          </span>
        </div>

        <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 mb-4 xs:mb-6 sm:mb-8 leading-tight">
          Premium Services for
          <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 bg-clip-text text-transparent">
            Digital Excellence
          </span>
        </h2>

        {/* Premium Decorative Line */}
        <div className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 mb-6 xs:mb-8 sm:mb-10">
          <div className="w-12 xs:w-16 sm:w-24 h-0.5 bg-gradient-to-r from-transparent to-blue-400"></div>
          <div className="w-2 xs:w-3 sm:w-4 h-2 xs:h-3 sm:h-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full animate-pulse"></div>
          <div className="w-12 xs:w-16 sm:w-24 h-0.5 bg-gradient-to-r from-blue-400 to-transparent"></div>
        </div>

        {/* Enhanced Description */}
        <p className="text-sm xs:text-base sm:text-lg md:text-xl text-slate-600 leading-relaxed mb-8 xs:mb-12 sm:mb-16 max-w-4xl mx-auto font-light px-2 xs:px-0">
          We deliver cutting-edge technology solutions that transform businesses and drive sustainable growth.
          Our comprehensive suite of services combines innovation, expertise, and proven methodologies to deliver
          exceptional results across diverse industries and geographies.
        </p>

        {/* Premium Certifications */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 xs:gap-8 sm:gap-12 mb-8 xs:mb-12 sm:mb-16">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
            <img
              src="https://mma.prnewswire.com/media/1078433/CMMIDEV_5.jpg?p=facebook"
              alt="CMMI Dev 5"
              className="h-12 xs:h-14 sm:h-16 object-contain"
            />
            <p className="text-xs xs:text-sm text-slate-600 mt-2 font-medium">CMMI Level 5 Certified</p>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-xl xs:rounded-2xl p-4 xs:p-6 shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvCHrfUH2bxpX1ijlWV6UWXhGEwXup996shw&s"
              alt="Microsoft Gold Partner"
              className="h-12 xs:h-14 sm:h-16 object-contain"
            />
            <p className="text-xs xs:text-sm text-slate-600 mt-2 font-medium">Microsoft Gold Partner</p>
          </div>
        </div>
      </div>

      {/* ===== Premium Services Grid ===== */}
      <div className="grid grid-cols-1 xs:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 xs:gap-5 sm:gap-6 md:gap-8 max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 relative z-10">
        {services.map((s, i) => (
          <div
            key={i}
            className="group relative bg-white/90 backdrop-blur-sm px-4 xs:px-6 sm:px-8 pt-8 xs:pt-10 sm:pt-12 pb-10 xs:pb-12 sm:pb-16 shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/50 hover:border-blue-200/50 rounded-2xl xs:rounded-3xl overflow-hidden flex flex-col"
          >
            {/* Premium Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white via-blue-50/30 to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            {/* Floating Icon */}
            <div className="relative z-10 flex justify-center mb-4 xs:mb-6 sm:mb-8">
              <div className="w-14 xs:w-16 sm:w-20 h-14 xs:h-16 sm:h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl xs:rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                <img
                  src={s.icon}
                  alt={s.title}
                  className="w-6 xs:w-8 sm:w-10 h-6 xs:h-8 sm:h-10 filter brightness-0 invert"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="text-lg xs:text-xl sm:text-2xl font-bold text-slate-900 mb-3 xs:mb-4 text-center relative z-10 group-hover:text-blue-900 transition-colors duration-300 leading-tight">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-slate-600 text-sm xs:text-base leading-relaxed mb-6 xs:mb-8 text-center relative z-10 flex-grow">
              {s.desc}
            </p>

            {/* Premium Learn More Button */}
            <div className="text-center relative z-10 mt-auto">
              <Link
                to={`/services/${s.slug}`}
                className="relative inline-block font-semibold text-blue-600 px-4 xs:px-5 sm:px-6 py-2 xs:py-2.5 sm:py-3 rounded-full border border-blue-200 overflow-hidden group transition-all duration-300 hover:scale-105 hover:shadow-lg transform active:scale-95 text-sm xs:text-base"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-blue-500 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                <span className="absolute top-0 right-0 w-0.5 h-full bg-gradient-to-b from-purple-400 to-blue-400 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 delay-150 origin-top"></span>
                <span className="relative z-10 group-hover:text-white transition-colors duration-300">Explore Service</span>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA Section */}
      <div className="text-center mt-12 xs:mt-16 sm:mt-20 md:mt-24 relative z-10 px-4 xs:px-6">
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-emerald-600 rounded-2xl xs:rounded-3xl p-6 xs:p-8 sm:p-12 max-w-4xl mx-auto shadow-2xl">
          <h3 className="text-xl xs:text-2xl sm:text-3xl font-bold text-white mb-3 xs:mb-4 leading-tight">Ready to Transform Your Business?</h3>
          <p className="text-blue-100 mb-6 xs:mb-8 text-sm xs:text-base sm:text-lg">Let's discuss how our premium services can drive your digital success.</p>
          <button 
            onClick={() => navigate('/contact')}
            className="bg-white text-blue-600 font-bold px-6 xs:px-7 sm:px-8 py-3 xs:py-3.5 sm:py-4 rounded-full hover:bg-blue-50 transition-colors duration-300 shadow-lg hover:shadow-xl text-sm xs:text-base"
          >
            Start Your Journey
          </button>
        </div>
      </div>
    </section>
  )
}