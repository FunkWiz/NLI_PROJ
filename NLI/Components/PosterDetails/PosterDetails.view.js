import './PosterDetails.scss'
import Component from '../Abstracts/Component/Component'

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
                                    <label class="poster-details-info-item-title">שם האוסף</label>
                                    <label class="poster-details-info-item-value">Yossi Trabeklin</label>
                                </li>
                                <li class="poster-details-info-item">
                                    <label class="poster-details-info-item-title">תאריך</label>
                                    <label class="poster-details-info-item-value">13.12.2003</label>
                                </li>
                                <li class="poster-details-info-item">
                                    <label class="poster-details-info-item-title">מוציא לאור</label>
                                    <label class="poster-details-info-item-value">התזמורת הקאמרית</label>
                                </li>
                                <li class="poster-details-info-item">
                                    <label class="poster-details-info-item-title">אנשים</label>
                                    <label class="poster-details-info-item-value">דורון סלומון</label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
             </div>
            `
	}
}
