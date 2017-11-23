import apiUrls from '../Api/urls.json'
import queryString from 'query-string'
import UrlService from '../Services/UrlService'

const _toggleLoader = (loader, flag) => {
    if(loader && loader.length)
    loader.toggleClass('active', flag);
}
export default class ApiService {
    static get(data) {
        var url = UrlService.GetUrl(apiUrls[data.method].url);
        var params = data.params ? `?${queryString.stringify(data.params)}` : '';
        _toggleLoader(data.loaderElem, true)

        return fetch(`${url}${params}`).then(result => result.json())
                                       .then(result => { _toggleLoader(data.loaderElem, false);  return result;});
    }
}