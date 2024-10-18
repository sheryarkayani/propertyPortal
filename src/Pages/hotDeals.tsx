import { useState } from 'react'
import { X, Building2, Home, Warehouse, Phone } from 'lucide-react'

export default function HotDealsForm({ onClose }: { onClose: () => void }) {
  const [dealType, setDealType] = useState('invest')
  const [propertyType, setPropertyType] = useState('residential')

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
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          To learn about the Hot deals, submit the details below and our Advisor will get in touch with you shortly:
        </h2>
        <div className="flex justify-center space-x-8 mb-6">
          {['invest', 'buy', 'rent'].map((type) => (
            <button
              key={type}
              onClick={() => setDealType(type)}
              className={`flex flex-col items-center ${dealType === type ? 'text-green-600' : 'text-gray-400'}`}
            >
              {type === 'invest' && <Building2 size={24} />}
              {type === 'buy' && <Home size={24} />}
              {type === 'rent' && <Warehouse size={24} />}
              <span className="mt-1 capitalize">{type}</span>
              {dealType === type && <div className="w-full h-0.5 bg-green-600 mt-1" />}
            </button>
          ))}
        </div>
        <form className="space-y-4">
          <div>
            <p className="mb-2 font-semibold">Type of Property</p>
            <div className="flex space-x-4">
              {['residential', 'plot', 'commercial'].map((type) => (
                <label key={type} className="flex items-center">
                  <input
                    type="radio"
                    name="propertyType"
                    value={type}
                    checked={propertyType === type}
                    onChange={(e) => setPropertyType(e.target.value)}
                    className="mr-2"
                  />
                  <span className="capitalize">{type}</span>
                </label>
              ))}
            </div>
          </div>
          <select className="w-full p-2 border rounded">
            <option>All Residential</option>
          </select>
          <div>
            <p className="mb-2 font-semibold">Location and Area?</p>
            <input
              type="text"
              placeholder="Enter City"
              className="w-full p-2 border rounded mb-2"
            />
            <input
              type="text"
              placeholder="Enter Area"
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <p className="mb-2 font-semibold">Details about your wanted listing</p>
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Size"
                className="w-full p-2 border rounded"
              />
              <select className="w-1/4 p-2 border rounded">
                <option>ft²</option>
              </select>
            </div>
            <div className="flex space-x-2 mb-2">
              <input
                type="text"
                placeholder="Min Price"
                className="w-1/2 p-2 border rounded"
              />
              <input
                type="text"
                placeholder="Max Price"
                className="w-1/2 p-2 border rounded"
              />
            </div>
            <textarea
              placeholder="Description"
              className="w-full p-2 border rounded h-24"
            ></textarea>
          </div>
          <div>
            <p className="mb-2 font-semibold">Contact Information</p>
            <input
              type="text"
              placeholder="Full Name *"
              className="w-full p-2 border rounded mb-2"
              required
            />
            <div className="relative">
              <input
                type="tel"
                placeholder="Phone *"
                className="w-full p-2 pl-10 border rounded"
                required
              />
              <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}