import './PosterItem.scss'
import Component from '../../../Abstracts/Component/Component'

export default class PosterItem extends Component  {
	constructor(props) {
	    super();
        this.value = props.value;
        this.markup = 
            `
             <li class="poster-item" data-tag="${this.value}">
             </li>
            `
	}
}
