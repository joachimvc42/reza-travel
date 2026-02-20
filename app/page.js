'use client';
import { useState, useEffect } from 'react';
import { Sparkles, MapPin, Calendar, Users, Search, Star, Phone, Mail, Clock, Facebook, Instagram, Twitter, Award, Shield, Heart, MessageCircle, Waves, Mountain, Ship, Droplet, Home as HomeIcon, Car, FileText, Plane, Bike, Activity } from 'lucide-react';

export default function Home() {
  const [scrolled, setScrolled] = useState(false);
  const [activeTest, setActiveTest] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTest((prev) => (prev + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    { icon: MapPin, title: "Tour Packages", desc: "Customizable tours" },
    { icon: Calendar, title: "Hotel Booking", desc: "Best accommodations" },
    { icon: Users, title: "Fast Boat", desc: "Quick transfers" },
    { icon: Star, title: "Scooter Rental", desc: "Explore at pace" },
    { icon: Phone, title: "Airport Transfer", desc: "Pickup & drop-off" },
    { icon: Clock, title: "24/7 Support", desc: "Always here" }
  ];

  const testimonials = [
    { 
      name: "Bukran Frans", 
      role: "Local Guide • 10 avis", 
      text: "Lombok tour and travel is amazing, I am happy to use it, the price is also affordable and worth it, and the staff is also friendly and fast to respond.", 
      image: null, 
      location: "Google Maps", 
      rating: 5, 
      date: "7 months ago"
    },
    { 
      name: "Oliver Horvei", 
      role: "Local Guide • 13 avis", 
      text: "Great prices, great scooters and great people. Highly recommended!", 
      image: null, 
      location: "Google Maps", 
      rating: 5, 
      date: "5 months ago"
    },
    { 
      name: "Daisy Thomson", 
      role: "3 avis", 
      text: "I travelled with them from Lombok to Bali (DPS) and they were very helpful the whole way. Thank you", 
      image: null, 
      location: "Google Maps", 
      rating: 5, 
      date: "7 months ago"
    },
    { 
      name: "Lea Veit", 
      role: "11 avis", 
      text: "J'ai réservé un voyage de Kuta à Tetebatu. La réservation a été possible très rapidement, très facilement et à un prix relativement bas. Tout était parfait ! Terima Kasih.", 
      image: null, 
      location: "Google Maps", 
      rating: 5, 
      date: "5 months ago"
    }
  ];

  const whyUs = [
    { icon: Award, title: "10+ Years Excellence", desc: "Trusted worldwide" },
    { icon: Shield, title: "Licensed & Insured", desc: "Safety priority" },
    { icon: Heart, title: "Personalized Service", desc: "Tailored experiences" },
    { icon: Users, title: "5000+ Clients", desc: "Satisfied travelers" },
    { icon: Star, title: "4.9 Star Rated", desc: "Excellent reviews" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay:'2s'}}></div>
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay:'4s'}}></div>
      </div>

      {/* Header */}
      <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${scrolled ? 'glass shadow-lg' : 'bg-transparent'}`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow">
                <Sparkles className="text-white" size={24} />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300">Lombok tour and travel</h1>
                <p className="text-xs text-gray-600">Premium Travel</p>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <section id="home" className="relative pt-32 pb-32 min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1920&q=80" 
            alt="Senggigi Beach" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="text-center animate-slide-up">
            <span className="glass px-4 py-2 rounded-full text-white font-semibold text-sm inline-block mb-4 backdrop-blur-md bg-white/20">
              ✨ Explore Lombok's Hidden Gems
            </span>
            <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight text-white drop-shadow-2xl">
              Discover <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-orange-300 to-pink-300">Paradise</span><br/>Beyond Imagination
            </h2>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg mb-8">
              Experience untouched beauty with premium tours
            </p>
            <a href="https://wa.me/6287857096925" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-green-500 text-white px-8 py-4 rounded-full hover:bg-green-600 hover:shadow-2xl transition-all hover:scale-105 font-semibold text-lg shadow-xl">
              <MessageCircle size={24} />
              Book Now
            </a>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-2 sm:px-4">
          <div className="text-center mb-4 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-4">Why Choose <span className="text-gradient">Us</span></h2>
            <p className="text-gray-600 text-sm md:text-lg">Trusted excellence</p>
          </div>
          <div className="grid grid-cols-5 gap-1 sm:gap-2 md:gap-4 min-w-0">
            {whyUs.map((item,i)=>{
              const Icon=item.icon;
              return(
                <div key={i} className="glass p-1.5 sm:p-3 md:p-4 rounded-lg md:rounded-2xl hover:shadow-glow transition hover:-translate-y-2 min-w-0 flex flex-col items-center text-center">
                  <div className="bg-gradient-primary w-7 h-7 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mb-1 sm:mb-2 md:mb-3 shadow-lg flex-shrink-0">
                    <Icon className="text-white w-3 h-3 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                  </div>
                  <h3 className="font-bold text-[9px] sm:text-xs md:text-base mb-0.5 md:mb-1.5 leading-tight">{item.title}</h3>
                  <p className="text-gray-600 text-[8px] sm:text-[10px] md:text-xs hidden sm:block leading-tight">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer Section */}
      <section id="destinations" className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">What We <span className="text-gradient">Offer</span></h2>
      <p className="text-gray-600 text-lg">Comprehensive travel services for your perfect adventure</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
      {[
        { name: "BEACH TOUR", icon: Waves, image: "/Beach Tour.jpg" },
        { name: "RINJANI TREKKING", icon: Mountain, image: "/Rinjani Trekking.jpg" },
        { name: "KOMODO TRIP", icon: Activity, image: "/Komodo Trip.jpg" },
        { name: "FAST BOAT", icon: Ship, image: "/Fast Boat.jpg" },
        { name: "SNORKELING TOUR", icon: Waves, image: "/Snorkeling Tour.jpg" },
        { name: "WATERFALL TOUR", icon: Droplet, image: "/Waterfall Tour.jpg" },
        { name: "SURFING LESSON", icon: Waves, image: "/Surfing Lesson.jpg" },
        { name: "SASAK TOUR", icon: HomeIcon, image: "/Sasak Tour.jpg" },
        { name: "FISHING TRIP", icon: Activity, image: "/Fishing Trip.jpg" },
        { name: "RAFTING", icon: Waves, image: "/Rafting.jpg" },
        { name: "SOFT TREKKING TETE BATU", icon: Mountain, image: "/Soft Trekking Tete Batu.jpg" },
        { name: "SHUTTLE & PRIVATE CAR", icon: Car, image: "/shuttle.jpg" },
        { name: "VISA EXTENSION", icon: FileText, image: "/visa service.jpg" },
        { name: "FLIGHT TICKET", icon: Plane, image: "/Flight Ticket.jpg" },
        { name: "RENT SCOOTER", icon: Bike, image: "/rent scooter.jpg" }
      ].map((service, i) => {
        const Icon = service.icon;
        return (
          <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2 bg-gradient-to-br from-purple-50 to-blue-50">
            <div className="relative h-48 overflow-hidden">
              <img src={service.image} alt={service.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
              <div className="absolute top-3 right-3 bg-gradient-primary w-12 h-12 rounded-full flex items-center justify-center shadow-lg">
                <Icon className="text-white" size={24} />
              </div>
            </div>
            <div className="p-4 bg-gradient-to-br from-yellow-400 to-yellow-500">
              <h3 className="text-black font-bold text-sm md:text-base text-center uppercase leading-tight">{service.name}</h3>
            </div>
          </div>
        );
      })}
    </div>
  </div>
</section>

      <section id="tours" className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
  <div className="max-w-7xl mx-auto px-4">
    <div className="text-center mb-16">
      <h2 className="text-4xl md:text-5xl font-bold mb-4">Beach & Snorkeling Tour <span className="text-gradient">Destinations</span></h2>
      <p className="text-gray-600 text-lg">Discover pristine beaches and crystal clear waters</p>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {[
        { name: "TANJUNG AAN BEACH", image: "/Tanjung aan.webp", color: "bg-red-500" },
        { name: "MAWUN BEACH", image: "/mawun.jpg", color: "bg-amber-700" },
        { name: "SELONG BLANAK BEACH", image: "/selong belanak.webp", color: "bg-blue-800" },
        { name: "GILI LAYAR", image: "/Gili Layar.jpg", color: "bg-yellow-400" },
        { name: "GILI NANGGU", image: "/Gili Nanggu.jpg", color: "bg-pink-400" },
        { name: "GILI GEDE", image: "/Gili Gede.jpg", color: "bg-purple-500" },
        { name: "GILI SUDAK", image: "/Gili Sudak.jpg", color: "bg-green-400" },
        { name: "GILI KEDIS", image: "/Gili Kedis.jpg", color: "bg-purple-300" }
      ].map((destination, i) => (
        <div key={i} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer hover:-translate-y-2">
          <div className="relative h-64">
            <img src={destination.image} alt={destination.name} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
          <div className={`${destination.color} p-3`}>
            <h3 className="text-white font-bold text-sm md:text-base text-center uppercase leading-tight">{destination.name}</h3>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      <section className="py-20 bg-gradient-to-br from-slate-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">What <span className="text-gradient">Travelers Say</span></h2>
            <p className="text-gray-600 text-lg">Real Google Reviews</p>
            <a href="https://www.google.com/maps/place/Lombok+tour+and+travel/@-8.8831514,116.2734593,17z/data=!4m17!1m10!3m9!1s0x2dcda90ae4e5db5f:0x2b0056041b03360e!2sLombok+tour+and+travel!8m2!3d-8.883237!4d116.2734131!10e5!14m1!1BCgIgAQ!16s%2Fg%2F11xg3np_b0!3m5!1s0x2dcda90ae4e5db5f:0x2b0056041b03360e!8m2!3d-8.883237!4d116.2734131!16s%2Fg%2F11xg3np_b0?entry=ttu&g_ep=EgoyMDI2MDExMy4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D" target="_blank" rel="noopener noreferrer" className="text-purple-600 hover:text-purple-700 text-sm underline inline-block mt-2">View all reviews on Google Maps</a>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonials.map((t,i)=>(
                <div key={i} className={`transition-all duration-500 ${i===activeTest?'opacity-100':'opacity-0 absolute inset-0'}`}>
                  <div className="glass p-8 rounded-3xl">
                    <div className="flex items-center mb-6">
                      {[...Array(t.rating || 5)].map((_,j)=>(<Star key={j} size={20} className="text-yellow-400 fill-yellow-400" />))}
                    </div>
                    <p className="text-gray-700 text-lg mb-6 italic">"{t.text}"</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        {t.image && <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full mr-4" />}
                        <div>
                          <div className="font-bold text-lg">{t.name}</div>
                          <div className="text-gray-600">{t.role} {t.date ? `• ${t.date}` : ''}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 text-gray-400">
                        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                        </svg>
                        <span className="text-sm">Google</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_,i)=>(
                <button key={i} onClick={()=>setActiveTest(i)} className={`w-3 h-3 rounded-full transition ${i===activeTest?'bg-purple-600 w-8':'bg-gray-300'}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Floating WhatsApp Button */}
      <a href="https://wa.me/6287857096925" target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition-all hover:scale-110 z-50 flex items-center justify-center group">
        <MessageCircle size={28} />
        <span className="absolute right-full mr-4 bg-gray-900 text-white px-4 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Contactez-nous • Kuta, Lombok 83511
        </span>
      </a>
    </div>
  );
}