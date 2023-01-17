export const saveDataToStroage = <T>(key: string, data: T) => {
    if(data && key) {
        localStorage.setItem(key, JSON.stringify(data))
    }
    return;
}

export const getDataFromStorage = (key: string) => {
    if(key) {
        const result = localStorage.getItem(key)
        if (result) {
            return JSON.parse(result);
        } 
    }
}
