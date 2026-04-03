import React from "react";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-gray-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Let's work together.</h2>
        <p className="text-gray-400 text-lg mb-10">
          Have a project in mind? Looking for a new team member? 
          Send me an email and let's discuss how I can help.
        </p>
        
        <a 
          href="mailto:your.email@example.com" 
          className="inline-flex items-center gap-2 px-8 py-4 bg-white text-gray-900 rounded-full font-bold hover:bg-gray-100 transition mb-12"
        >
          <Mail size={20} />
          Say Hello
        </a>

        <div className="border-t border-gray-800 pt-8 flex justify-between items-center text-gray-500 text-sm">
          <p>&copy; 2025 Your Name. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition"><Github size={20} /></a>
            <a href="#" className="hover:text-white transition"><Linkedin size={20} /></a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;