import './HomePage.scss'
import Component from '../../Abstracts/Component/Component'
import ApiService from '../../../Services/ApiService'
import TimeLine from '../../TimeLine/TimeLine.view'
import Categories from '../../Categories/Categories.view'
import Tags from '../../Tags/Tags.view'
import PosterDetails from '../../PosterDetails/PosterDetails.view'

export default class HomePage extends Component  {
	constructor() {
		super();
		this.markup = 
            `
             <article class="site-page home-page"></article>
            `
		let _sharedInfo = {};
		const _printTimeLinePage = function(){
		    $('#root').attr('class', 'timeline-page');
		    $('.home-page').html(new TimeLine().getHtml());
		    $('.timeline-item').off().on('click', function(){
		        const decade = $(this).data('decade');
		        _sharedInfo = {
		            decade: decade
		        };
		        _printCategoriesPage({
		            decade: decade
		        });

		    });
		    $(window).scrollTop(0);
		}
		const _printCategoriesPage = function(data){
		    $('#root').attr('class', 'categories-page');
		    $('.home-page').html(new Categories(data).getHtml());
		    $('.category-item').off().on('click', function(){
		        $(this).addClass('selected').siblings().removeClass('selected');

		        const categoryId = $(this).data('category');
		        _printTagsPage({
		            category: categoryId,
                    decade: _sharedInfo.decade
		        });
		        _sharedInfo = {
                    decade: _sharedInfo.decade,
		            category: categoryId
		        };
		    });
		    $(window).scrollTop(0);
		    $('.site-header-arrow-back').off().on('click', function(){
		        _printTimeLinePage();
		    });
		}
		const _printPosterPage = function(data){
		    $('#root').attr('class', 'poster-page');
		    $('.home-page').html(new PosterDetails(data).getHtml());
		    $(window).scrollTop(0);
		    $('.site-header-arrow-back').off().on('click', function(){
		        _printTagsPage(_sharedInfo);
		    });
		}
		const _printTagsPage = function(data) {
		    $('#root').attr('class', 'tags-page');
		    $('.home-page').html(new Tags(data).getHtml());
		    $(window).scrollTop(0);
		    $('.tag-item').on('click', function(){
		        $(this).addClass('selected').siblings().removeClass('selected');
		        $('.tag-main-title').html($(this).data('tag'));
		    }).first().trigger('click');
		    $('.poster-item').on('click', function(){
		        _printPosterPage();
		    });

		    $('.site-header-arrow-back').off().on('click', function(){
		        _printCategoriesPage({decade: _sharedInfo.decade});
		    });
		}


		this.onLoad(function(){
		    _printTimeLinePage();
		});
	}
}
