import './TimeLineList.scss'
import Component from '../../../Abstracts/Component/Component'
import TimeLineItem from '../TimeLineItem/TimeLineItem.view'

export default class TimeLineList extends Component  {
	constructor(props) {
	    super();
	    this.items = props.items;

	    this.markup = `<ul class="timeline-list">${this.items.map(i => new TimeLineItem(i).getHtml()).join('')}</ul>`;
	}
}
