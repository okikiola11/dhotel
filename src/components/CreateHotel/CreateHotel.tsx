import React, { ChangeEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { createFormSchema } from "../../validations/FormValidation";
import { IHotelDetails } from "../../interface/hotelInterface";
import { data } from "../../models/country";
import { IHotel } from "../../models/hotels";
import { STORAGEKEY } from "../../utils/constants";
import { getDataFromStorage, saveDataToStroage } from "../../utils/helpers";
import { ratingOptions } from "../../models/rating"; 

import './CreateHotel.css';

// Both edit and create form
const CreateHotel: React.FC<{hotelData?: IHotelDetails}> = ({hotelData}) => {
  const [name, setName] = useState<string>(hotelData?.name ?? '');
  const [selectedCountry, setSelectedCountry] = useState<string>(hotelData?.country ?? '');
  const [selectedState, setSelectedState] = useState<string>(hotelData?.state ?? '');
  const [selectedCity, setSelectedCity] = useState<string>(hotelData?.city ?? '');
  const [address, setAddress] = useState<string>(hotelData?.address ?? '');
  // const [selectedRating, setSelectedRating] = useState()
  const hotelListInStorage = getDataFromStorage(STORAGEKEY);

  const [hotelList, setHotelList] = useState<Array<IHotelDetails>>([]);

  let uuid = crypto.randomUUID();

  useEffect(() => {
    if(hotelListInStorage) {
      setHotelList(hotelListInStorage);
    }
  }, []);

  const navigate = useNavigate();

  const onClickBack = () => navigate(-1);

  const nameChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const countryChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value)
  }

  const stateChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedState(event.target.value);
  }

  const cityChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCity(event.target.value);
  }

  const addressChangeHandler = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setAddress(event.target.value);
  }

  const ratingChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    //setSelectedRating(event.target.value)
  }

  const availableState = data.find((country) => country.name === selectedCountry);
  const availableCities = availableState?.states?.find((s) => s.name === selectedState);
  
  const onSubmitHandler = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();

    const data: IHotel = {
      id: hotelData ? hotelData?.id : uuid,
      name,
      city: selectedCity,
      state: selectedState,
      country: selectedCountry,
      address,
      //rating: selectedRating,
    };

    console.log(data);
    
    saveDataToStroage(STORAGEKEY, [data, ...hotelList])
    navigate('/')


    setName('');
    setAddress('');
    setSelectedCity('');
    setSelectedState('')
    setSelectedCity('');
  }

  return (
    <div className='container mx-auto mt-32'>
      <h3 className='text-center'>{hotelData ? 'Edit Hotel' : 'Create Hotel'}</h3>

      <form className='mx-auto w-1/2' onSubmit={onSubmitHandler}>
        <div className="mb-6">
          <label htmlFor="Name" className="block mb-2 text-md font-medium text-gray-900">Hotel name</label>
          <input 
            type="text" 
            id="name" 
            value={name}
            className="formInput" 
            placeholder="Hotel name"
            onChange={nameChangeHandler}
            required 
          />
        </div>

        <div className="mb-6">
          <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
          <select 
            id="country" 
            className="formInput"
            placeholder="Country"
            value={selectedCountry}
            onChange={countryChangeHandler}
          >
                <option>--Choose Country--</option>
                {data.map((value, key) => {
                  return (
                    <option value={value.name} key={key}>
                      {value.name}
                    </option>
                  );
                })}
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="State" className="block mb-2 text-sm font-medium text-gray-900">state</label>
          <select 
            id="state" 
            className="formInput"
            placeholder="Select state"
            value={selectedState}
            onChange={stateChangeHandler}
          >
            <option>--- Choose State ---</option>
            {
              availableState?.states.map((e, key) => {
                return (
                  <option value={e.name} key={key}>{e.name}</option>
                )
              })
            }
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="City" className="block mb-2 text-sm font-medium text-gray-900">City</label>
          <select 
            id="city" 
            className="formInput"
            placeholder="City"
            value={selectedCity}
            onChange={cityChangeHandler}
          >
            <option>--Choose City--</option>
            {
              availableCities?.cities.map((city, key) => {
                return (
                  <option value={city} key={key}>{city}</option>   
                );
              })
            }
          </select>
        </div>

        <div className="mb-6">
          <label htmlFor="Hotel Rating" className="block mb-2 text-sm font-medium text-gray-900">Country</label>
          <select 
            id="rating" 
            className="formInput"
            placeholder="Hotel Rating"
            //value={selectedRating}
            onChange={ratingChangeHandler}
          >
                <option>--Choose Hotel Rating--</option>
                {ratingOptions.map((value) => {
                  return (
                    <option value={value.value} key={value.label}>
                      {value.value}
                    </option>
                  );
                })}
          </select>
        </div>
      
        <div className="mb-6">
          <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Hotel Address</label>
          <textarea 
            id="address" 
            rows={4} 
            value={address}
            onChange={addressChangeHandler}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
            placeholder="Enter Hotel Address...">
          </textarea>
        </div>
        
        <div className="flex justify-between">
          <button 
            className="text-white bg-red-400 hover:bg-red-400 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800" 
            onClick={onClickBack}>Back</button>
          <button 
            type="submit" 
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {hotelData ? 'Edit' : 'Save' }</button>
        </div>
      </form>
    </div>
  )
}

export default CreateHotel
