let _loadActions = [];
export default class LoadActions {
    static get(){
        return _loadActions;
    }
    static add(action){
        _loadActions.push(action);
    }
}