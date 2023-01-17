export interface IStates {
    id?: string;
    name: string;
    cities: Array<string>;
}

export interface ICountry {
    id?: string;
    name: string;
    states: IStates[];
}

export interface ICountries {
    countries: ICountry[];
}

export const data: ICountry[] = [
        {
            name: "Germany",
            states: [
                {
                    name: "Lower Saxony",
                    cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
                },
                {
                    name: "Bavaria",
                    cities: ["Nuremberg", "Passau", "Munich", "Bamberg"],
                }
            ]
        },
        { 
            name: "Spain", 
            states: [{ name: "B", cities: ["Barcelona"] }] 
        },

        { 
            name: "USA", 
            states: [
                { name: "California", cities: ["Los Angeles", "San Francisco", "San Diego"] },
                { name: "Texas", cities: ["Texas City", "Houston", "Dallas"] }
            ] 
        },

        {
            name: "Mexico",
            states: [{ name: "D", cities: ["Puebla"] }]
        },
        {
            name: "India",
            states: [
                { name: "Punjab", cities: ["Delhi", "Kolkata", "Mumbai", "Bangalore"] }
            ]
        },
        {
            name: 'Nigeria',
            states: [
                { name: "Lagos", cities: ["Ikeja", "Ajah", "Maryland"]},
                { name: "Anambra", cities: ["Awka"]}
            ]
        }
];
