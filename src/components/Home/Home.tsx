import { useEffect, useState } from "react";

import { IHotel, dummyHotelList } from "../../models/hotels";
import HotelList from "../HotelList/HotelList";
import { STORAGEKEY } from "../../utils/constants";
import { getDataFromStorage } from "../../utils/helpers";


const Home: React.FC = () => {
  const [hotelList, setHotelList] = useState(dummyHotelList as IHotel[]);

  const getItem = getDataFromStorage(STORAGEKEY);

  useEffect(() => {
    if(getItem) {
      setHotelList(getItem)
    }
  }, [])


  return (
    <>
      <div className="container mx-auto mt-40" style={{ marginTop: '100px'}}>
          <HotelList list={hotelList} />
      </div>
    </>  
  )
}

export default Home;
