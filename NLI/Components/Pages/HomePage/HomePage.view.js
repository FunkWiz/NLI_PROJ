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
             <article class="site-page home-page"></article>
            `

		const _printTimeLinePage = function(){
		    $('.home-page').html(new TimeLine().getHtml());
		    $('.timeline-item').off().on('click', function(){
		        _printCategoriesPage({
		            decade: $(this).data('decade')
		        });
		    });
		}
		const _printCategoriesPage = function(data){
		    $('.home-page').html(new Categories(data).getHtml());
		    $('.category-item').off().on('click', function(){
		        $(this).addClass('selected').siblings().removeClass('selected');
		    });
            
		}
		const _printTagsPage = function(data){
		    $('.home-page').html(new Tags(data).getHtml());
            
		}
		const _printPosterPage = function(data){
		    $('.home-page').html(new PosterDetails(data).getHtml());
		}

		this.onLoad(function(){
		    _printTimeLinePage();
		});
	}
}
