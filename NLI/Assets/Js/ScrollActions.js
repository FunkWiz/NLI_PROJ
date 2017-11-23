let _scrollActions = [];
export default class ScrollActions {
    static get(){
        return _scrollActions;
    }
    static add(action){
        _scrollActions.push(action);
    }
}