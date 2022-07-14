import { useState } from "react";

export default function Booking() {
  const [form, setForm] = useState({
    name: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChangeForm = (e) => {
    const { name, value } = e.target;

    setForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBooking = () => {
    console.log(form);
  };

  return (
    <section className="booking">
      <div className="booking-text">
        <h3>Book a table</h3>
        <p>Do it in advance</p>
      </div>
      <form className="booking-form">
        <div className="text-field">
          <label htmlFor="name">Name*</label>
          <input
            type="text"
            placeholder="Your name"
            name="name"
            value={form.name}
            onChange={handleChangeForm}
          />
        </div>
        <div className="text-field">
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            placeholder="Your last name"
            name="lastName"
            value={form.lastName}
            onChange={handleChangeForm}
          />
        </div>
        <div className="text-field">
          <label htmlFor="email">Email*</label>
          <input
            type="email"
            placeholder="Your email address"
            name="email"
            value={form.email}
            onChange={handleChangeForm}
          />
        </div>
        <div className="text-field">
          <label htmlFor="message">Message*</label>
          <textarea
            placeholder="Enter your message"
            rows="3"
            name="message"
            value={form.message}
            onChange={handleChangeForm}
          />
        </div>
      </form>
      <div className="booking-cta" onClick={handleBooking}>
        <button className="btn">Book a table</button>
      </div>
    </section>
  );
}
