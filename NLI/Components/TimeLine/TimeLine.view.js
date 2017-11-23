import './TimeLine.scss'
import Component from '../Abstracts/Component/Component'
import TimeLineList from './Components/TimeLineList/TimeLineList.view'
import decades from '../../Api/decades.json'

export default class TimeLine extends Component  {
	constructor() {
		super();
		this.markup = 
            `
             <div class="timeline">${new TimeLineList({items:decades.items}).getHtml()}</div>
            `
	}
}
