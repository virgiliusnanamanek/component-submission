import weathers from '../weathers';
class DataSource{
    static SearchCity(keyword){
        return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${keyword}&appid=11720c2e75d4009abd43c1f558204b7d`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            if(responseJson.weather){
                return Promise.resolve(responseJson.weather);
            }else{
                return Promise.reject(`${keyword} tidak ditemukan`);
            }
        })
    }
}

export default DataSource;