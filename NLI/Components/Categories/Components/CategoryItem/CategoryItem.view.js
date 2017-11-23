import './CategoryItem.scss'
import Component from '../../../Abstracts/Component/Component'

export default class CategoryItem extends Component  {
	constructor(props) {
	    super();
	    this.title = props.title;
        this.value = props.value;
        this.markup = 
            `
             <li class="category-item" data-category="${this.value}">
                <div class="category-item-content-wrp">
                    <label class="category-item-title">${this.title}</label>
                </div>
             </li>
            `
	}
}
