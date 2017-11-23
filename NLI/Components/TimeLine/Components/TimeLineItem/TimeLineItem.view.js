import './TimeLineItem.scss'
import Component from '../../../Abstracts/Component/Component'
export default class TimeLineItem extends Component  {
	constructor(props) {
	    super();
	    this.title = props.title;
	    this.count = props.count;
	    this.value = props.value;

	    this.markup = 
            `
             <div class="timeline-item" data-value="${this.value}">
                <h2 class="timeline-item-title">${this.title}</h2>
                <h4 class="timeline-item-count">${this.count}</h4>
             </div>
            `
	}
}
