import './Categories.scss'
import Component from '../Abstracts/Component/Component'
import PosterDetails from './Components/CategoryList/CategoryList.view'

export default class PosterDetails extends Component  {
	constructor() {
		super();
		this.markup = 
            `
             <div class="poster-details">
                <div class="poster-details-heading">
                    <div class="poster-details-image"></div>
                </div>
                <div class="poster-details-content-wrp">
                    <div class="poster-details-info">
                        <h4 class="poster-details-info-title">מידע על הכרזה</h4>
                        <div>
                            <ul class="poster-details-info-list">
                                <li class="poster-details-info-item">
                                    <label class="poster-details-info-item-title">מוציא לאור</label>
                                    <label class="poster-details-info-item-value">Yossi Trabeklin YoYo</label>
                                </li>
                                <li class="poster-details-info-item">
                                    <label class="poster-details-info-item-title">מוציא לאור</label>
                                    <label class="poster-details-info-item-value">Yossi Trabeklin YoYo</label>
                                </li>
                                <li class="poster-details-info-item">
                                    <label class="poster-details-info-item-title">מוציא לאור</label>
                                    <label class="poster-details-info-item-value">Yossi Trabeklin YoYo</label>
                                </li>
                                <li class="poster-details-info-item">
                                    <label class="poster-details-info-item-title">מוציא לאור</label>
                                    <label class="poster-details-info-item-value">Yossi Trabeklin YoYo</label>
                                </li>
                                <li class="poster-details-info-item">
                                    <label class="poster-details-info-item-title">מוציא לאור</label>
                                    <label class="poster-details-info-item-value">Yossi Trabeklin YoYo</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
            `
	}
}
