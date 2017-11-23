import dates from '../../Api/dates.json';
import general from '../../Api/general.json';
import moment from 'moment'

const _defFormat = "YYYY-MM-DD";
export default class DateHelper {
    static getDayName(date){
        return dates.days[date.getDay()];
    }
    static getMonthName(date){
        return dates.months[date.getMonth()];
    }
    static getYearList() {
        let list = [];
        for (var i = general["firstPublishYear"]; i <= new Date().getFullYear(); i++) {
            list.push(i);
        }
        return list;
    }
    static parseStringToFormat(dateStr, oldFormat, newFormat){
        return moment(dateStr, oldFormat).format(newFormat);
    }
    static parseFullDate(date) {
        return `${DateHelper.getDayName(date)}, ${date.getDate()} ב${DateHelper.getMonthName(date)} ${date.getFullYear()}`;
    }
    static formatDate(date, format) {
        return moment(date).format(format);
    }
    static parseDate(date, format){
        return moment(date, format).toDate();
    }
    static stringify(date, format){
        return moment(date, format).format();
    }
    static getToday(format) {
        return moment().format(format || _defFormat);
    }
    static subtractMonths(date, months) {
        return moment(date).subtract(months, 'months').format(_defFormat);
    }
    static subtract(date, count, type, format) {
        return moment(date).subtract(count, type).format(format || _defFormat);
    }
}