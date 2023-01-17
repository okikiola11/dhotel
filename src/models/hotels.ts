export interface IHotel {
    id: string;
    name: string;
    city: string;
    state: string;
    country: string;
    address: string;
    // rating?: number;
}

export const dummyHotelList: IHotel[] = [
    {
        id: new Date().toJSON().toString(),
        name: 'AirBNB',
        country: 'USA',
        state: 'Miami',
        city: 'Los Angeles',
        address: '32, utah road, johnson drive',
        //rating: 4,
    }
]
