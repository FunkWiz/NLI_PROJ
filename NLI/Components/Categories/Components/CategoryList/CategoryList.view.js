import './CategoryList.scss'
import Component from '../../../Abstracts/Component/Component'
import CategoryItem from '../CategoryItem/CategoryItem.view'

export default class CategoryList extends Component  {
	constructor(props) {
	    super();
	    this.items = props.items;
	    this.markup = `<ul class="category-list">${this.items.map(i => new CategoryItem(i).getHtml()).join('')}</ul>`;
	}
}
