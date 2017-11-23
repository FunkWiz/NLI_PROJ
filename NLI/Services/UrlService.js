export default class UrlService {
    static GetUrl(path) {
        return window.basePath + path;
    }
    static SetHash(name){
        history.pushState(null, null, `#${name}`);
    }
    static RemoveHash() {
        history.pushState("", document.title, window.location.pathname);
        window.onhashchange();
    }
}