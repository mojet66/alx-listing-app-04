const BookingForm = () => (
  <div className="bg-white shadow-md p-6 rounded-lg">
    <h2 className="font-semibold text-xl">Contact Detail</h2>
    <form>
      {/* Contact Information */}
      <div className="gap-4 grid grid-cols-2">
        <div>
          <label>First Name</label>
          <input type="text" className="mt-2 p-2 border w-full" />
        </div>
        <div>
          <label>Last Name</label>
          <input type="text" className="mt-2 p-2 border w-full" />
        </div>
      </div>
      <div className="gap-4 grid grid-cols-2 mt-4">
        <div>
          <label>Email</label>
          <input type="email" className="mt-2 p-2 border w-full" />
        </div>
        <div>
          <label>Phone Number</label>
          <input type="text" className="mt-2 p-2 border w-full" />
        </div>
      </div>

      {/* Payment Information */}
      <h2 className="mt-6 font-semibold text-xl">Pay with</h2>
      <div className="mt-4">
        <label>Card Number</label>
        <input type="text" className="mt-2 p-2 border w-full" />
      </div>
      <div className="gap-4 grid grid-cols-2 mt-4">
        <div>
          <label>Expiration Date</label>
          <input type="text" className="mt-2 p-2 border w-full" />
        </div>
        <div>
          <label>CVV</label>
          <input type="text" className="mt-2 p-2 border w-full" />
        </div>
      </div>

      {/* Billing Address */}
      <h2 className="mt-6 font-semibold text-xl">Billing Address</h2>
      <div className="mt-4">
        <label>Street Address</label>
        <input type="text" className="mt-2 p-2 border w-full" />
      </div>
      <div className="gap-4 grid grid-cols-2 mt-4">
        <div>
          <label>City</label>
          <input type="text" className="mt-2 p-2 border w-full" />
        </div>
        <div>
          <label>State</label>
          <input type="text" className="mt-2 p-2 border w-full" />
        </div>
      </div>
      <div className="gap-4 grid grid-cols-2 mt-4">
        <div>
          <label>Zip Code</label>
          <input type="text" className="mt-2 p-2 border w-full" />
        </div>
        <div>
          <label>Country</label>
          <input type="text" className="mt-2 p-2 border w-full" />
        </div>
      </div>

      {/* Submit Button */}
      <button className="bg-green-500 mt-6 px-4 py-2 rounded-md w-full text-white">
        Confirm & Pay
      </button>
    </form>
  </div>
);

export default BookingForm;
