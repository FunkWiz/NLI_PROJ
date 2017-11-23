import queryString from 'query-string'
import UrlService from './UrlService'
export default class ImageService {
    static GetUrl(data) {
        return UrlService.GetUrl('action/image?' + queryString.stringify({
            Page: data.page || 1,
            Href: data.href,
            Ext: data.pvext,
            Kind: 'preview'
        }));
    }
}