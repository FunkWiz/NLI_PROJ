import ScrollActions from '../Assets/Js/ScrollActions'
import Useful from '../Assets/Js/useful'

export default class PagingService {
    constructor(props) {
        this.resultService = props.resultService;
        this.onFirstRequestFinished = props.onFirstRequestFinished || function(){};
        this.request = {
            name: props.requestName,
            data: props.requestData,
            isBusy: false
        }

        this.paging = {
            skip: 0,
            pageSize: props.pageSize || 25 
        }
        this.resultService.container.html('');
    }
    Init() {
        this.Next().then(this.onFirstRequestFinished.bind(this));
    }
    Next() {
        if(this.request.isBusy || this.paging.skip >= this.paging.totalItems) return false;

        this._onRequestStart();

        Object.assign(this.request.data, {Skip: this.paging.skip});
        const promise = this.resultService.FetchItems({
            request:{
                name: this.request.name,
                data: this.request.data
            }
        }).then(this._handleResults.bind(this));

        this.paging.skip += this.paging.pageSize;

        return promise;
    }

    _onRequestStart() {
        this.request.isBusy = true;
    }
    _onRequestEnd() {
        this.request.isBusy = false;
    }
    _handleResults(data) {
        this._onRequestEnd();
        Object.assign(this.paging, {
            totalPages: data.pagecount,
            totalItems: data.total,
            current: data.pageindex
        });
    }
}