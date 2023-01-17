import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import SearchHotel from "../SeachHotel/SearchHotel";
import { IHotel } from "../../models/hotels";
import { getDataFromStorage } from "../../utils/helpers";
import { STORAGEKEY } from "../../utils/constants";

interface IProps {
  list: IHotel[];
}

const HotelList: React.FC<IProps> = (props: IProps) => {
  const [search, setSearch] = useState<IHotel[]>([]);
  const [searchList, setSearchList] = useState([] as IHotel[]);

  const navigate = useNavigate();
  const { list } = props;

  let searchResult;

  useEffect(() => {
    searchResult = searchList ?? list;
    setSearch(searchResult)
  }, [searchList]);

  
  const handleDelete = (id) => {
    const hotelListInStorage = getDataFromStorage(STORAGEKEY);

    const newList = hotelListInStorage.filter(li => li.id !== id);
    
    localStorage.setItem(STORAGEKEY, JSON.stringify(newList))
  };

  return (
    <div className="flex flex-col justify-center mx-auto">
        <SearchHotel setSearchList={setSearchList} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {
            search.length > 0 && search?.map((hotel) => {
              return (
                <div key={hotel?.name}  className="flex justify-center" >
                  <div className="max-w-sm rounded overflow-hidden shadow-lg">
                    <img className="rounded-t-lg" src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" alt=""/>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{hotel?.name} </div>
                      <p className="text-gray-700 text-base">
                        {hotel?.address}
                      </p>
                      <p className="pt-8">{`${hotel?.country},  ${hotel?.city}`}</p>
                    </div>
                    <div className="px-6 pt-1 pb-4 flex justify-between">
                      <button 
                        type="button" 
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={() => navigate(`/hotels/${hotel.id}`)}
                      >
                        View
                      </button>
                      <button 
                        type="button" 
                        className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                        onClick={() => handleDelete(hotel.id)}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              )
            })
          }
      </div>
      
    </div>
  )
}

export default HotelList
