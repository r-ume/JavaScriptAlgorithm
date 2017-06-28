export default class WISHMaker {

    constructor(channel){
        this.parentSheetId = '1WVGcHDnbr_FE7BfN6NeE5tqhBTHWdo6xBA3UPQ3cCM8';
        this.parentSheets = SpreadsheetApp.openById(this.parentSheetId);
        this.url = put_your_token_url;
        this.channel = channel;
    }

    postSlack(message){
        const method = 'post';
        const payload = {
            'channel': `#${this.channel}`,
            'text': message
        }; 
        const params = {
            'method': method,
            'contentType' : 'application/json',
            'payload': JSON.stringify(payload)
        };
        const response = UrlFetchApp.fetch(this.url, params);
        Logger.log(response);
    }

    static getToday(){
        const today = Moment.moment().format('M月DD日');
        return today;
    }

    static getThisMonth(){
        const thisMonth = Moment.moment().format('M');
        return thisMonth;
    }

    getThisMonthSheet(){
        const thisMonthSheet = this.parentSheets.getSheetByName(`${WISHMaker.getThisMonth()}月`);
        return thisMonthSheet;
    }

    getTodaysRAsCellNum(){
        let today = WISHMaker.getToday();
        let thisMonth = WISHMaker.getThisMonth();
        const thisMonthSheet = this.getThisMonthSheet();

        let maxColumn = thisMonthSheet.getLastColumn();

        for(let i = 2; i <= maxColumn; i++){
            let dateOnCell = thisMonthSheet.getRange(2, i).getValue();
            if(dateOnCell == today){
                return i;
            }
        }
    }

    announceTodaysRAs(){
        let getTodaysRAsCellNum = this.getTodaysRAsCellNum();
        const thisMonthSheet = this.getThisMonthSheet();
        let maxRow = thisMonthSheet.getLastRow();

        this.postSlack('今日のSI担当のRAはこちら!');

        for(let j = 3; j <= maxRow; j++){
            let todayRA = thisMonthSheet.getRange(j, getTodaysRAsCellNum).getValue();
            this.postSlack(`<${todayRA}>`);
        }
    }

}