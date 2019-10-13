function myReplace(query) {
    var datesArray = {};
    datesArray.YYYYMMDD   = '20170618';
    datesArray["YYYY-MM-DD"] = '2017-06-18';

    var splitQuery = query.split("@");
    var length = splitQuery.length;

    var queryWithDates = "";

    for (var cnt = 0; cnt < length; cnt++) {
    	console.log(splitQuery[cnt]);
    	console.log(splitQuery[cnt] in datesArray);
    	console.log(datesArray[splitQuery[cnt]]);
        if (splitQuery[cnt] in datesArray) {
            queryWithDates += datesArray[splitQuery[cnt]];
        }else {
        		queryWithDates += splitQuery[cnt];  
        }
    }
    return queryWithDates;
}

var sql = 'system.old_famm_access_@YYYYMMDD@) system.famm_access_@YYYYMMDD@';

sql = myReplace(sql);

console.log(sql);