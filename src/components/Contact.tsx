import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { useForm, ValidationError } from "@formspree/react";

const Contact = () => {
  // Formspree Hook — replace "myzkoydk" with your Form ID
  const [state, handleSubmit] = useForm("myzkoydk");

  const contactInfo = [
    {
      icon: <FaEnvelope className="text-purple-600" size={24} />,
      title: "Email",
      value: "jpmonika3004@gmail.com",
      link: "mailto:jpmonika3004@gmail.com",
    },
    {
      icon: <FaPhone className="text-purple-600" size={24} />,
      title: "Phone",
      value: "+91 8778957646",
      link: "tel:+918778957646",
    },
    {
      icon: <FaLinkedin className="text-purple-600" size={24} />,
      title: "LinkedIn",
      value: "Monika P",
      link: "https://www.linkedin.com/in/monika-p-30b32a22a/",
    },
    {
      icon: <FaGithub className="text-purple-600" size={24} />,
      title: "GitHub",
      value: "Monikaips",
      link: "https://github.com/Monikaips",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left: Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Contact Information
              </h3>

              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <a
                    key={index}
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start p-4 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                  >
                    <div className="mt-1 mr-4">{contact.icon}</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {contact.title}
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:w-1/2"
          >
            <div className="bg-white dark:bg-gray-700 rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900 dark:text-white">
                Send Me a Message
              </h3>

              {/* Formspree Form */}
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
                    rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                    bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                    placeholder="Your name"
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="email"
                    className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
                    rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                    bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                    placeholder="your.email@example.com"
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                <div className="mb-6">
                  <label
                    htmlFor="message"
                    className="block text-gray-700 dark:text-gray-300 mb-2 font-medium"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 
                    rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent 
                    bg-white dark:bg-gray-600 text-gray-900 dark:text-white"
                    placeholder="Your message here..."
                  ></textarea>
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className={`w-full py-3 px-4 rounded-lg font-medium text-white transition-all ${
                    state.submitting
                      ? "bg-purple-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700"
                  }`}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </button>

                {state.succeeded && (
                  <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    Message sent successfully! I'll get back to you soon.
                  </div>
                )}
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
