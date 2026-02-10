import { useState } from "react";
import { MapPin, Phone, Send } from "lucide-react";
import {
  Mail,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  MessageCircle,
} from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
  const contactLinks = [
    {
      name: "Email",
      icon: Mail,
      href: "mailto:bhairulalteli07@gmail.com",
      color: "bg-red-500 hover:bg-red-600",
      label: "bhairulalteli07@gmail.com",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/bhairulal-teli-99749a375/",
      color: "bg-blue-600 hover:bg-blue-700",
      label: "linkedin.com/in/Bhairulal-Teli",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/Bhairulal-Teli",
      color: "bg-gray-800 hover:bg-gray-900",
      label: "github.com/Bhairulal-Teli",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      href: "https://wa.me/919313217419",
      color: "bg-green-500 hover:bg-green-600",
      label: "+91 9313217419",
    },
  ];
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "bhairulalteli07@gmail.com",
      link: "mailto:bhairulalteli07@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+919313217419",
      link: "tel:+919313217419",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "City, State, India",
      link: null,
    },
  ];

  return (
    <section
      id="contact"
      className="w-full bg-black text-white pt-20 md:pt-28 pb-24"
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mb-4" />
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach
            out!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;

                  const content = (
                    <div className="flex items-start gap-4 p-4 bg-zinc-900 rounded-xl border border-zinc-800 hover:border-zinc-700 transition">
                      <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon className="text-white" size={24} />
                      </div>
                      <div>
                        <p className="text-sm text-gray-400 mb-1">
                          {info.label}
                        </p>
                        <p className="text-white font-medium">{info.value}</p>
                      </div>
                    </div>
                  );

                  return info.link ? (
                    <a key={index} href={info.link} className="block">
                      {content}
                    </a>
                  ) : (
                    <div key={index}>{content}</div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
        <div className="mb-12 md:mb-16 mt-12">
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-6 md:mb-8">
            Connect With <span className="bg-blue-500 text-white px-3">Me</span>
          </h3>
          <div className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-zinc-900 text-white rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex flex-col items-center text-center gap-2 md:gap-4">
                    <div
                      className={`w-12 h-12 md:w-16 md:h-16 ${link.color} rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110`}
                    >
                      <IconComponent className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-xs md:text-lg mb-1">
                        {link.name}
                      </h4>
                      <p className="text-gray-200 text-sm break-all hidden md:block">
                        {link.label}
                      </p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
