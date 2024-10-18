import { useState } from 'react'
import { X } from 'lucide-react'

export default function PropertyValuationForm({ onClose }: { onClose: () => void }) {
  const [lookingTo, setLookingTo] = useState<string>('')

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <X size={24} />
        </button>
        <h2 className="text-3xl font-bold mb-6 text-gray-800">Get your property valued</h2>
        <form className="space-y-4">
          <div>
            <p className="mb-2 font-semibold">I'm looking to:</p>
            <div className="flex space-x-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="lookingTo"
                  value="sell"
                  checked={lookingTo === 'sell'}
                  onChange={(e) => setLookingTo(e.target.value)}
                  className="mr-2"
                />
                Sell my property
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="lookingTo"
                  value="rent"
                  checked={lookingTo === 'rent'}
                  onChange={(e) => setLookingTo(e.target.value)}
                  className="mr-2"
                />
                Rent my property
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="lookingTo"
                  value="curious"
                  checked={lookingTo === 'curious'}
                  onChange={(e) => setLookingTo(e.target.value)}
                  className="mr-2"
                />
                Just curious
              </label>
            </div>
          </div>
          <div>
            <p className="mb-2 font-semibold">Address and Area?</p>
            <input
              type="text"
              placeholder="Enter City"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Enter Area"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Address Line 1"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Address Line 2"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Nearby Location"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <p className="mb-2 font-semibold">And your details?</p>
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="email"
              placeholder="Email Address *"
              className="w-full p-2 border rounded mb-2"
              required
            />
            <input
              type="tel"
              placeholder="Phone *"
              className="w-full p-2 border rounded mb-2"
              required
            />
            <textarea
              placeholder="Message (optional)"
              className="w-full p-2 border rounded h-24"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
          >
            Request Valuation
          </button>
        </form>
        <div className="mt-6 text-center text-sm text-gray-600">
          Avenue5 International will make sure that your property gets seen.
        </div>
      </div>
    </div>
  )
}