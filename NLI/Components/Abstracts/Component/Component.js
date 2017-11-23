import LoadActions from '../../../Assets/Js/LoadActions'

export default class Component  {
    getHtml(){
        return this.markup;
    }
    onLoad(callback){
        if(typeof callback == 'function')
            LoadActions.add(callback);
    }
}