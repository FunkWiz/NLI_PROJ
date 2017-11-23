import './TagList.scss'
import Component from '../../../Abstracts/Component/Component'
import TagItem from '../TagItem/TagItem.view'

export default class TagList extends Component  {
	constructor(props) {
	    super();
	    this.items = props.items;
	    this.markup = `<ul class="tag-list">${this.items.map(i => new TagItem(i).getHtml()).join('')}</ul>`;
	}
}
