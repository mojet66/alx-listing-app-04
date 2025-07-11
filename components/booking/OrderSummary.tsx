const OrderSummary: React.FC<{ bookingDetails: any }> = ({
  bookingDetails,
}) => (
  <div className="bg-white shadow-md p-6 rounded-lg">
    <h2 className="font-semibold text-xl">Review Order Details</h2>
    <div className="flex items-center mt-4">
      <img
        src="https://example.com/property.jpg"
        alt="Property"
        className="rounded-md w-32 h-32 object-cover"
      />
      <div className="ml-4">
        <h3 className="font-semibold text-lg">{bookingDetails.propertyName}</h3>
        <p className="text-gray-500 text-sm">4.76 (345 reviews)</p>
        <p className="text-gray-500 text-sm">
          {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
        </p>
      </div>
    </div>

    {/* Price Breakdown */}
    <div className="mt-6">
      <div className="flex justify-between">
        <p>Booking Fee</p>
        <p>${bookingDetails.bookingFee}</p>
      </div>
      <div className="flex justify-between mt-2">
        <p>Subtotal</p>
        <p>${bookingDetails.price}</p>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <p>Grand Total</p>
        <p>${bookingDetails.bookingFee + bookingDetails.price}</p>
      </div>
    </div>
  </div>
);

export default OrderSummary;
