import './PosterList.scss'
import Component from '../../../Abstracts/Component/Component'
import PosterItem from '../PosterItem/PosterItem.view'

export default class PosterList extends Component  {
	constructor(props) {
	    super();
	    this.items = props.items;
	    this.markup = `<ul class="poster-list">${this.items.map(i => new PosterItem(i).getHtml()).join('')}</ul>`;
	}
}
