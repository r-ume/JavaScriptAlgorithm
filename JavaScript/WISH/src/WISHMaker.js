export default class WISHMaker {

    constructor(channel){
        this.parentSheetId = '1WVGcHDnbr_FE7BfN6NeE5tqhBTHWdo6xBA3UPQ3cCM8';
        this.parentSheets = SpreadsheetApp.openById(this.parentSheetId);
        this.url = 'https://slack.com/api/chat.postMessage'
        this.botToken = 'xoxb-195688839411-OdiQX9bEYH7Jm1JR3qGieBMm';
        this.channel = channel;
    }

    announceTodaysRA(){
        const method = 'post';
        const payload = {
            'token': token,
            'channel': this.channel,
            'text': '今日のSI担当のRAはこちら!'
        } 
        const params = {
            'method': method,
            'payload': payload
        }
        const response = UrlFetchApp.fetch(this.url, params);
    }

}