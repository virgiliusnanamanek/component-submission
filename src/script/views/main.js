import '../components/search-bar';
import '../components/weather-display'
import DataSource from '../components/data-source';

const main = ()=>{
    const searchBar = document.querySelector('search-bar');
    const weather = document.querySelector('weather-display');

    const onButtonSearchClick = async () => {
        try {
            const display = await DataSource.SearchCity(searchBar.value)
            renderResult(display);
        }catch(message) {
            fallbackResult(message);
        }
    };
    const renderResult = result => {
        weather.weathers = result;
    }
    const fallbackResult = message => {
        weather.renderError(message);
    }
    search.clickEvent = onButtonSearchClick;
}
export default main;