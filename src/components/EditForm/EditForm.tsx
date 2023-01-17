import { useEffect, useState } from "react";
import { STORAGEKEY } from "../../utils/constants";
import { getDataFromStorage } from "../../utils/helpers";
import { IHotelDetails } from "../../interface/hotelInterface";

const EditForm = ({hotelData}) => {
    console.log(hotelData)
  
    const [editDetail, setDetailEdit] = useState<IHotelDetails>();
    const hotelListInStorage = getDataFromStorage(STORAGEKEY);

    useEffect(() => {
        setDetailEdit(hotelData)
    }, [hotelData])

    const onUpdateHandler = () => {
        console.log('hello')
    }

    return (
        <form className="w-full max-w-lg mt-40">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Name    
                    </label>
                    <input 
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" 
                    id="grid-password" 
                    type="text"
                    name="name"
                    defaultValue={(editDetail as IHotelDetails)?.name} />
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                        Address
                    </label>
                    <textarea 
                        id="address" 
                        rows={4} 
                        defaultValue={(editDetail as IHotelDetails)?.address}
                        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
                    >
                    </textarea>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                        Country
                    </label>
                    <div className="relative">
                        <select
                            defaultValue={(editDetail as IHotelDetails)?.country}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>{(editDetail as IHotelDetails)?.country}</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-state">
                        State
                    </label>
                    <div className="relative">
                        <select
                            defaultValue={(editDetail as IHotelDetails)?.state}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option >{(editDetail as IHotelDetails)?.state}</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
                <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-zip">
                        City
                    </label>
                    <div className="relative">
                        <select
                            defaultValue={(editDetail as IHotelDetails)?.city}
                            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                            <option>{(editDetail as IHotelDetails)?.city}</option>
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                    </div>
                </div>
            </div>

            <button type="submit" onClick={onUpdateHandler}>Update</button>
        </form>

    )
}

export default EditForm;
