import './Categories.scss'
import Component from '../Abstracts/Component/Component'
import CategoryList from './Components/CategoryList/CategoryList.view'
import categories from '../../Api/categories.json'
import decades from '../../Api/decades.json'

export default class Categories extends Component  {
	constructor(props) {
	    super();
	    const _decade = decades.items.find(d => d.value == props.decade); 
	    const decadeSum = categories.items.map(c => c.analytics[props.decade].count).reduce(function(a, b) {return a+b;});

	    this.markup = 
            `
             <div class="categories">
                <div class="categories-heading">
                    <div class="categories-decade-info-wrp">
                        <div class="categories-decade-info">
                            <h4 class="categories-decade-title">${_decade.title}</h4>
                            <h4 class="categories-decade-count">${decadeSum}</h4>
                        </div>
                    </div>
                    <div class="categories-content-wrp">${new CategoryList({items: categories.items, decade: props.decade}).getHtml()}</div>
                </div>
             </div>
            `
	}
}
