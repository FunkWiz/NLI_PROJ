import './TagItem.scss'
import Component from '../../../Abstracts/Component/Component'

export default class TagItem extends Component  {
    constructor(props) {
        super();
        this.title = props.title;
        this.value = props.value;
        this.markup = 
            `
             <li class="tag-item" data-tag="${this.value}">
                <div class="tag-item-image"></div>
                <div class="tag-item-content-wrp">
                    <label class="tag-item-title">#${this.title}</label>
                </div>
             </li>
            `
    }
}