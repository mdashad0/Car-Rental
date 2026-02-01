// import React, { useState } from 'react'
// import Title from '../../components/owner/Title'
// import { assets } from '../../assets/assets'

// const AddCar = () => {

//   const currency = import.meta.env.VITE_CURRENCY

//   const [image, setImage] = useState(null)
//   const [car, setCar] = useState({
//     brand: '',
//     model: '',
//     year: 0,
//     pricePerDay: 0,
//     category: '',
//     transmission: '',
//     fuel_type: '',
//     seating_capacity: 0,
//     location: '',
//     description: '',
//   })

//   const onSubmitHanddler = async(e)=>{
//     e.preventDefault();
//   }

//   return (
//     <div>
//       <Title title='Add New Car' subTitle='Fill in details to list a new car for booking, 
//       including pricing, availability, and car specification.'/>

//       <form onSubmit={onSubmitHanddler} className='flex flex-col gap-5 text-gray-500
//       text-sm m-6 max-w-xl'>

//       {/* Car Image */}
//       <div className='flex items-center gap-3 w-full'>
//         <label htmlFor='car-image'>
//           <img src={image ? URL.createObjectURL(image) : assets.upload_icon} alt=""
//           className='h-14 rounded cursor-pointer' />
//           <input type='file' id='car-image' accept='image/*' hidden onChange={e=>
//             setImage(e.target.files[0])}/>
//         </label>
//         <p className='text-sm text-gray-500'>Upload a Picture of Your Car</p>
//       </div>

//       {/* Car Brand & Model */}

//       <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//         <div>
//           <label>Brand</label>
//           <input type='text' placeholder='e.g. BMW, Mercedes, Audi...' required
//           className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
//           value={car.brand} onChange={e => setCar ({...car, brand: e.target.value})}/>
//         </div>
        
//         <div className='flex flex-col w-full'>
//           <label>model</label>
//           <input type='text' placeholder='e.g. X5, E-Class, M4...' required
//           className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
//           value={car.model} onChange={e => setCar ({...car, model: e.target.value})}/>
//         </div>

//       </div>

//       {/* Car Year, Price, Category */}
//       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6'>
//         <div className='flex flex-col w-full'>
//           <label>year</label>
//           <input type='number' placeholder='2026' required
//           className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
//           value={car.year} onChange={e => setCar ({...car, year: e.target.value})}/>
//         </div>

//         <div className='flex flex-col w-full'>
//           <label>Daily Price {{currency}} </label>
//           <input type='number' placeholder='500' required
//           className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
//           value={car.pricePerDay} onChange={e => setCar ({...car, pricePerDay: e.target.value})}/>
//         </div>

//         <div className='flex flex-col w-full'>
//           <label>Category</label>
//           <select onChange={e => setCar({...car, category: e.target.value})} value={car.category}
//             className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
//             <option value=''>Select a Category</option>
//             <option value='Sedan'>Sedan</option>
//             <option value='SUV'>SUV</option>
//             <option value='Van'>Van</option>
//           </select>
//         </div>
//       </div>

//       {/* Car Transmission, fuel Type, Seating Capacity */}
//       <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
//         <div className='flex flex-col w-full'>
//           <label>Transmission</label>
//           <select onChange={e => setCar({...car, transmission: e.target.value})} value={car.transmission}
//             className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
//             <option value=''>Select a Transmission</option>
//             <option value='Automatic'>Automatic</option>
//             <option value='Manual'>Manual</option>
//             <option value='Semi-Automatic'>Semi-Automatic</option>
//           </select>
//         </div>

//         <div className='flex flex-col w-full'>
//           <label>Fuel Type</label>
//           <select onChange={e => setCar({...car, fuel_type: e.target.value})} value={car.fuel_type}
//             className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
//             <option value=''>Select a fuel_type</option>
//             <option value='Gas'>Gas</option>
//             <option value='Diesel'>Diesel</option>
//             <option value='petrol'>petrol</option>
//             <option value='Elecric'>Elecric</option>
//             <option value='Hybrid'>Hybrid</option>
//           </select>
//         </div>

//         <div className='flex flex-col w-full'>
//           <label>Seating Capacity</label>
//           <input type='number' placeholder='4' required
//           className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
//           value={car.seating_capacity} onChange={e => setCar ({...car, seating_capacity: e.target.value})}/>
//         </div>
//       </div>

//       {/* Car Location */}

//       <div className='flex flex-col w-full'>
//           <label>Location</label>
//           <select onChange={e => setCar({...car, location: e.target.value})} value={car.location}
//             className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'>
//             <option value=''>Select a Location</option>
//             <option value='Pune'>Pune</option>
//             <option value='Mumbai'>Mumbai</option>
//             <option value='Patna'>Patna</option>
//             <option value='Chanpatia'>Chanpatia</option>
//             <option value='Wogholi'>wogholi</option>
//             <option value='Delhi'>Delhi</option>
//             <option value='UP'>UP</option>
//           </select>
//         </div>

//         {/* Car Decription */}
//         <div className='flex flex-col w-full'>
//           <label>Description</label>
//           <textarea rows={5} placeholder='e.g. A luxurious SUV with a spacious interior
//           and a powerful engine.' required
//           className='px-3 py-2 mt-1 border border-borderColor rounded-md outline-none'
//           value={car.description} onChange={e => setCar ({...car, description: e.target.value})}></textarea>
//         </div>

//         <button className='flex items-center gap-2 px-4 py-2.5 mt-4 bg-primary text-white
//         rounded-md font-medium w-max cursor-pointer'>
//           <img src={assets.tick_icon} alt="" />
//           List Your Car
//         </button>

//       </form>
//     </div>
//   )
// }

// export default AddCar


import React, { useState } from 'react'
import Title from '../../components/owner/Title'
import { assets } from '../../assets/assets'
import { UseAppContext } from '../../context/AppContext'
import toast from 'react-hot-toast'

const AddCar = () => {
  const {axios, currency} = UseAppContext()


  const [image, setImage] = useState(null)

  const [car, setCar] = useState({
    brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: 0,
    location: '',
    description: '',
  })

  const [isLoading, setIsLoading] = useState(false)
  const onSubmitHandler = async (e) => {
    e.preventDefault()
    if(isLoading) return null

    setIsLoading(true)
    try {
      const formData = new FormData()
      formData.append('image', image)
      formData.append('carData', JSON.stringify(car))

      const {data} = await axios.post('/api/owner/add-car', formData)

      if(data.success){
        toast.success(data.message)
        setImage(null)
        setCar({
          brand: '',
    model: '',
    year: 0,
    pricePerDay: 0,
    category: '',
    transmission: '',
    fuel_type: '',
    seating_capacity: 0,
    location: '',
    description: '',
        })
      }else{
        toast.error(data.message)
      }
    } catch (error) {
      toast.error(error.message)
    }finally{
      setIsLoading(false)
    }
    console.log('Car Data:', car)
    console.log('Image:', image)
  }

  return (
    <div>
      <Title
        title="Add New Car"
        subTitle={`Fill in details to list a new car for booking,
        including pricing, availability, and car specifications.`}
      />

      <form
        onSubmit={onSubmitHandler}
        className="flex flex-col gap-5 text-gray-500 text-sm m-6 max-w-xl"
      >

        {/* Car Image */}
        <div className="flex items-center gap-3 w-full">
          <label htmlFor="car-image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_icon}
              alt="Upload"
              className="h-14 rounded cursor-pointer"
            />
            <input
              type="file"
              id="car-image"
              accept="image/*"
              hidden
              onChange={e => setImage(e.target.files[0])}
            />
          </label>
          <p>Upload a picture of your car</p>
        </div>

        {/* Brand & Model */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="flex flex-col">
            <label>Brand</label>
            <input
              type="text"
              required
              placeholder="BMW, Audi..."
              className="px-3 py-2 mt-1 border rounded-md outline-none"
              value={car.brand}
              onChange={e => setCar({ ...car, brand: e.target.value })}
            />
          </div>

          <div className="flex flex-col">
            <label>Model</label>
            <input
              type="text"
              required
              placeholder="X5, Q7..."
              className="px-3 py-2 mt-1 border rounded-md outline-none"
              value={car.model}
              onChange={e => setCar({ ...car, model: e.target.value })}
            />
          </div>
        </div>

        {/* Year, Price, Category */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label>Year</label>
            <input
              type="number"
              required
              placeholder="2026"
              className="px-3 py-2 mt-1 border rounded-md outline-none"
              value={car.year}
              onChange={e => setCar({ ...car, year: Number(e.target.value) })}
            />
          </div>

          <div className="flex flex-col">
            <label>Daily Price ({currency})</label>
            <input
              type="number"
              required
              placeholder="500"
              className="px-3 py-2 mt-1 border rounded-md outline-none"
              value={car.pricePerDay}
              onChange={e => setCar({ ...car, pricePerDay: Number(e.target.value) })}
            />
          </div>

          <div className="flex flex-col">
            <label>Category</label>
            <select
              className="px-3 py-2 mt-1 border rounded-md outline-none"
              value={car.category}
              onChange={e => setCar({ ...car, category: e.target.value })}
            >
              <option value="">Select Category</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
              <option value="Van">Van</option>
            </select>
          </div>
        </div>

        {/* Transmission, Fuel, Seating */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col">
            <label>Transmission</label>
            <select
              className="px-3 py-2 mt-1 border rounded-md outline-none"
              value={car.transmission}
              onChange={e => setCar({ ...car, transmission: e.target.value })}
            >
              <option value="">Select Transmission</option>
              <option value="Automatic">Automatic</option>
              <option value="Manual">Manual</option>
              <option value="Semi-Automatic">Semi-Automatic</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label>Fuel Type</label>
            <select
              className="px-3 py-2 mt-1 border rounded-md outline-none"
              value={car.fuel_type}
              onChange={e => setCar({ ...car, fuel_type: e.target.value })}
            >
              <option value="">Select Fuel Type</option>
              <option value="Petrol">Petrol</option>
              <option value="Diesel">Diesel</option>
              <option value="Electric">Electric</option>
              <option value="Hybrid">Hybrid</option>
            </select>
          </div>

          <div className="flex flex-col">
            <label>Seating Capacity</label>
            <input
              type="number"
              required
              placeholder="4"
              className="px-3 py-2 mt-1 border rounded-md outline-none"
              value={car.seating_capacity}
              onChange={e =>
                setCar({ ...car, seating_capacity: Number(e.target.value) })
              }
            />
          </div>
        </div>

        {/* Location */}
        <div className="flex flex-col">
          <label>Location</label>
          <select
            className="px-3 py-2 mt-1 border rounded-md outline-none"
            value={car.location}
            onChange={e => setCar({ ...car, location: e.target.value })}
          >
            <option value="">Select Location</option>
            <option value="Pune">Pune</option>
            <option value="Mumbai">Mumbai</option>
            <option value="Delhi">Delhi</option>
            <option value="Patna">Patna</option>
          </select>
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label>Description</label>
          <textarea
            rows={5}
            required
            placeholder={`A luxurious car with great comfort and performance.`}
            className="px-3 py-2 mt-1 border rounded-md outline-none"
            value={car.description}
            onChange={e => setCar({ ...car, description: e.target.value })}
          />
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="flex items-center gap-2 px-4 py-2 mt-4 bg-blue-500 text-white rounded-md font-medium w-max"
        >
          <img src={assets.tick_icon} alt="tick" />
          {isLoading ? 'Listing...' : 'List Your Car'}
        </button>

      </form>
    </div>
  )
}

export default AddCar
