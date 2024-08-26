import "./Contact.css";
import { useState } from "react";
import { send } from "@emailjs/browser";
import { FiSend } from "react-icons/fi";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
    const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
    const userId = process.env.REACT_APP_EMAILJS_USER_ID!;

    send(serviceId, templateId, formData, userId)
      .then((response) => {
        // console.log("SUCCESS!", response.status, response.text);
      })
      .catch((err) => {
        // console.log("FAILED...", err);
      });
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div id="contact" className="max-w-md mx-auto mb-10">
      <h2 className="text-center font-mono m-10 text-orchid">Contact</h2>
      <form onSubmit={handleSubmit} className="space-y-6 mx-10 sm:mx-0">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="mt-1 py-2 px-3 block w-full rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 py-2 px-3 block w-full rounded-md"
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-white"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="mt-1 py-2 px-3 block w-full rounded-md"
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn w-full flex items-center justify-center bg-lavender text-white font-semibold py-2 px-4 hover:bg-orchid hover:text-black"
        >
          <span className="mr-1">Send</span>
          <FiSend />
        </button>
      </form>
    </div>
  );
}

export default Contact;
