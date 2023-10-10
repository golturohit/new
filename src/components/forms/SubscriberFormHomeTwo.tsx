"use client"

const SubscriberFormHomeTwo = () => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <div className="footer-widget-newsletter2-input2">
          <input type="email" placeholder="Email" />
          <button type="submit">Subscribe</button>
        </div>
      </form>
    </>
  );
};

export default SubscriberFormHomeTwo;
