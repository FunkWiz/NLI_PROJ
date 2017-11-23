import './HomePage.scss'
import Component from '../../Abstracts/Component/Component'
import ApiService from '../../../Services/ApiService'
import TimeLine from '../../TimeLine/TimeLine.view'
import Categories from '../../Categories/Categories.view'
import Tags from '../../Tags/Tags.view'

export default class HomePage extends Component  {
	constructor() {
		super();
		//ApiService.get({
		//    method: 'Search',
		//    params:{
		//        Query:'lsr41,exact,yes',
		//        Index: 1,
        //        BulkSize: 25
		//    },
		//}).then(console.log)
		this.markup = 
            `
             <article class="site-page home-page">
                ${new Tags().getHtml()}
             </article>
            `
	}
}
