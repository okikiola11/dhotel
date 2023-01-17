import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IHotelDetails } from "../../interface/hotelInterface";
import { STORAGEKEY } from "../../utils/constants";
import { getDataFromStorage } from "../../utils/helpers";
import CreateHotel from "../CreateHotel/CreateHotel";

const HotelDetails: React.FC = () => {
  const { id } = useParams();
  const [hotelDetails, setHotelDetails] = useState<IHotelDetails | {}>({});

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const hotelListInStorage = getDataFromStorage(STORAGEKEY);
  
  useEffect(() => {
    if(id) {
      const details = hotelListInStorage.filter((item: IHotelDetails) => item.id === id);
      if (details.length) {
        setHotelDetails(details[0])
      }
    }
  }, [id]);

  return (
    <>
      { 
        isEditing ? <CreateHotel hotelData={hotelDetails as IHotelDetails} /> : 
        <>
        <div className="flex justify-center">
          {Object.keys(hotelDetails).length > 0 && (
            <section className="container mx-auto px-6 p-10 mt-20">
              <h2 className="text-4xl font-bold text-center text-gray-800 mb-8">
                {(hotelDetails as IHotelDetails)?.name}
              </h2>
              <div className="flex items-center flex-wrap mb-20">
                <div className="w-full md:w-1/2">
                  <h4 className="text-3xl text-gray-800 font-bold mb-3">Hotel Metric</h4>
                  <p className="text-gray-600 mb-8">Our Smart Hotel Monitoring Website is able to capture the hotels in your city while you search. You can create different category of exercises and can track your vitals on the go.</p>
                  <h4 className="text-3xl text-gray-800 font-bold mb-3">{(hotelDetails as IHotelDetails)?.address}</h4>
                  <p className="text-gray-600 mb-8">
                    {(hotelDetails as IHotelDetails)?.country}, {(hotelDetails as IHotelDetails)?.city}
                  </p>
                  <div className="px-6 pt-1 pb-4">
                    <button 
                      type="button" 
                      className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                      onClick={() => setIsEditing(true)}
                    >Edit
                    </button>
                  </div>
                </div>
                <div className="w-full md:w-1/2">
                  <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                </div>
              </div>
            </section>
          )})
      
        </div>
        </>
      }
    </>
  )
}

export default HotelDetails;
