// http://qiita.com/snaka/items/7f4e5653496689077ce5

$(function(){

    function debug(obj){
        console.log(obj);
    }

    // getting user_id from the form
    // using the api 
    $("#form").on("submit", function(event){
        $("#btn-submit").prop("disabled", true);
        var user_id = $("#user_id").val();

        $.ajax({
            type: "GET",
            url: "http://qiita.com/api/v2/users/" + user_id + "/items?page=1&per_page=100",
            success: onSucceed
        });
    
        // If the event being executed can be stopped, preventDefault cancels the event.
        event.preventDefault();
    });

    // date format
    var format = d3.time.format("%Y-%m-%d");

    function onSucceed(data){
        var item_dates = {};
        $.each(data, function(index, value){
            var created_at = format(d3.time.day.floor(new Date(value['created_at'])));
            if (created_at in item_dates){
                item_dates[created_at]++;
            } else{
                item_dates[created_at] = 1;
            }
        });

        drawCalendar(item_dates);
        $("#btn-submit").prop("disabled", false);
    }

    // a function that draws a calendar
    var drawCalendar = (function(){

        // constant variables
        var CELL_SIZE = 15;
        var LABEL_HEIGHT = 11;
        var MARGIN_LEFT = 25;
        var MARGIN_TOP = 15;

        // The range of dates displayed on the front ends (one year)
        var rangeBegin = d3.time.day.offset(new Date, -365);
        var rangeEnd = new Date;
        var dateRange = d3.time.days(rangeBegin, rangeEnd);
        var monthRange = d3.time.months(rangeBegin, rangeEnd);

        // A function that shows the amount of offset, following the x-cooridate of the rectangular
        var offsetX = (function(){
            var firstYearOffset = d3.time.weekOfYear(rangeBegin) * -1;
            var boundryDate = d3.time.years(rangeBegin, rangeEnd)[0];
            var lastDayOfFirstYear = d3.time.day.offset(boundryDate, -1);
            var lastWeekOfFirstYear = d3.time.weekOfYear(lastDayOfFirstYear);
            var lastYearOffset = d3.time.weekOfYear(lastDayOfFirstYear) + firstYearOffset;

            return function(sourceDate){
                if(sourceDate.getFullYear() == rangeBegin.getFullYear())
                    return firstYearOffset;
                return lastYearOffset;
            } 
        })();
    
        // main in drawCalendar function
        return function(originalDataset){

            function objectFilter(obj, predicate){
                var result = {}, key;

                for(key in obj){
                    // need to ask someone familiar with javascript
                    // no idea what predicate function is coming from
                    if(obj.hasOwnProperty(key) && predicate(key, obj[key])){
                        result[key] = obj[key];
                    }
                }
                return result;  
            }

            var dataset = objectFilter(originalDataset, function(k, v){
                var aDay = new Date(k);
                return rangeBegin <= aDay && aDay <= d3.time.day.offset(rangeEnd, 1);
            });

            // A function that changes the depth of green color, 
                // depending on the number of commits
            var countScale = d3.scale.linear()
                                .domain([1, d3.max(d3.values(dataset))])
                                .rangeRound([1, 3])
                                .clamp(true);

            var colorScale = d3.scale.ordinal()
                                .domain([1, 2, 3])
                                .range(["#f7fcb9", "#addd8e", "#31a354"]);

            var color = function(f){
                return colorScale(countScale(f));
            }

            var svg = d3.select(".weed");
            svg.selectAll("*").remove();
            svg.append("g");

            // creating a daily rectangular 
            var rect = svg.selectAll(".day")
                        .data(dateRange)
                        .enter()
                        .append("rect")
                          .attr("class", "day")
                          .attr("width", CELL_SIZE - 1)
                          .attr("height", CELL_SIZE - 1)
                          .attr("x", function(d){ return (d3.time.weekOfYear(d) + offsetX(d)) * CELL_SIZE + MARGIN_LEFT; })
                          .attr("y", function(d){ return d.getDay() * CELL_SIZE + MARGIN_TOP; })
                          .attr("fill", "#e6e6e6")
                          .datum(format);

            rect.filter(function(d){ return d in dataset; })
                .attr("fill", function(d){ return colorScale(countScale(dataset[d])); })
                .append("title")
                    .text(function(d) { return d + " (投稿: " + dataset[d] + "件)"; });

            // a label of dates
            dayLabels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            svg.selectAll(".dayLabel")
                .data(d3.range(7))
                .enter()
                .append("text")
                    .attr("class", "dayLabel")
                    .attr("x", 0)
                    .attr("y", function(d) { return d * CELL_SIZE + LABEL_HEIGHT + MARGIN_TOP; }) 
                    .attr("font-size", LABEL_HEIGHT)
                    .attr("fill", "gray")
                    .text(function(d) { return dayLabels[d]; });

            // a label of months
            monthLabels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
            svg.selectAll(".monthLabel")
                .data(monthRange)
                .enter()
                .append("text")
                .attr("class", "monthLabel")
                .attr("x", function(d){ return (d3.time.weekOfYear(d) + offsetX(d)) * CELL_SIZE + MARGIN_LEFT; })
                .attr("y", LABEL_HEIGHT)
                .attr("font-size", LABEL_HEIGHT)
                .attr("fill", "gray")
                .text(function(d) { return monthLabels[d.getMonth()]; });
          }
    })(); // drawCalendar

});