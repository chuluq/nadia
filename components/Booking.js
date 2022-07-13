export default function Booking() {
  return (
    <section className="booking">
      <div className="booking-text">
        <h3>Book a table</h3>
        <p>Do it in advance</p>
      </div>
      <form className="booking-form">
        <div className="text-field">
          <label htmlFor="name">Name*</label>
          <input type="text" placeholder="Your name" />
        </div>
        <div className="text-field">
          <label htmlFor="lastName">Last Name</label>
          <input type="text" placeholder="Your last name" />
        </div>
        <div className="text-field">
          <label htmlFor="email">Email*</label>
          <input type="email" placeholder="Your email address" />
        </div>
        <div className="text-field">
          <label htmlFor="message">Message*</label>
          <textarea placeholder="Enter your message" rows="3" />
        </div>
      </form>
      <div className="booking-cta">
        <button className="btn">Book a table</button>
      </div>
    </section>
  );
}
