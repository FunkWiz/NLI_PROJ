import './CategoryList.scss'
import Component from '../../../Abstracts/Component/Component'
import CategoryItem from '../CategoryItem/CategoryItem.view'

export default class CategoryList extends Component  {
	constructor(props) {
	    super();
	    const statistics = {
	        politics: props.items.find(c => c.value == 'politics').analytics[props.decade],
	        culture: props.items.find(c => c.value == 'culture').analytics[props.decade],
	        music: props.items.find(c => c.value == 'music').analytics[props.decade],
	        sport: props.items.find(c => c.value == 'sport').analytics[props.decade]
	    };
	    this.markup = `<ul class="category-list">${props.items.map(i => new CategoryItem(Object.assign({},i, {analytics: statistics[i.value]})).getHtml()).join('')}</ul>`;
	}
}
