const fs = require('fs');
const {employees, clocks} = require('./apertureLabsClocks (2) (1) (3) (2) (1).json');
const labour_hours = [];

/**
 * Storing punching times in a object where employee_id as key 
 * makes it easier to access and improves time complexity for larger dataset
 * Here complexity is linear | O(N) + O(M) where N is number of employees and M is number of clock entries
 * With out creating clockMap complexity would be exponential | O(N) * O(M)
 * because we will have to iterate through each clock entry for every employee
 */
const clocks_map = {};
for(value of clocks){
    if(!clocks_map[value.employee_id]){
        clocks_map[value.employee_id] = [{
            "clock_in_datetime":value.clock_in_datetime,
            "clock_out_datetime":value.clock_out_datetime
        }]
    }else{
        clocks_map[value.employee_id].push({
            "clock_in_datetime":value.clock_in_datetime,
            "clock_out_datetime":value.clock_out_datetime
        })
    }
}

/**
 * 
 * @param {string} date 
 * @param {string} start_time 
 * @param {string} end_time 
 * @returns {Object} 
 */
const calculateLabourByTimePeriod = (date_start, date_end,start_time, end_time) => {
    const labour_by_time_period =   {}
    const start = new Date(`${date_start} ${start_time}`);
    const end = new Date(`${date_end} ${end_time}`);
    const period1 = [new Date(`${date_start} 05:00:00`), new Date(`${date_start} 11:59:59`)] 
    const period2 = [new Date(`${date_start} 12:00:00`), new Date(`${date_start} 17:59:59`)] 
    const period3 = [new Date(`${date_start} 18:00:00`), new Date(`${date_start} 22:59:59`)] 
    const period4 = [new Date(`${date_start} 23:00:00`), new Date(`${date_end} 5:00:00`)] 

    // if(start.getTime() >= new Date(`${date_end} 00:00:00`)){}
    
    const hoursDifference = (time1, time2) => +Math.abs((time1.getTime() - time2.getTime())/ 36e5).toFixed(1)

    // Counting Hours in period1
    if(start.getTime() >= period1[0].getTime() && start.getTime() <= period1[1].getTime()){
        if(end.getTime() <= period1[1].getTime()){
            labour_by_time_period.period1 = hoursDifference(start, end);
        }
        else{
            labour_by_time_period.period1 = hoursDifference(start, period1[1])
        }
    }
    else if(end.getTime() >= period1[0].getTime() && end.getTime() <= period1[1].getTime()){
        console.log("object");
        labour_by_time_period.period1 = hoursDifference(period1[0], end)
    } else if(start.getTime() < period1[0].getTime() && end.getTime() > period1[1].getTime()) {
        console.log("object");
        labour_by_time_period.period1 = hoursDifference(period1[0], period1[1]);
    }

    // Counting Hours in period2
    if(start.getTime() >= period2[0].getTime() && start.getTime() <= period2[1].getTime()){
        if(end.getTime() <= period2[1].getTime()){
            labour_by_time_period.period2 = hoursDifference(start, end);
        }
        else{
            labour_by_time_period.period2 = hoursDifference(start, period2[1])
        }
    }
    else if(end.getTime() >= period2[0].getTime() && end.getTime() <= period2[1].getTime()){
        labour_by_time_period.period2 = hoursDifference(period2[0], end)
    } else if(start.getTime() < period2[0].getTime() && end.getTime() > period2[1].getTime()) {
        console.log("object");
        labour_by_time_period.period2 = hoursDifference(period2[0], period2[1]);
    }

    // Counting Hours in period3
    if(start.getTime() >= period3[0].getTime() && start.getTime() <= period3[1].getTime()){
        if(end.getTime() <= period3[1].getTime()){
            labour_by_time_period.period3 = hoursDifference(start, end);
        }
        else{
            labour_by_time_period.period3 = hoursDifference(start, period3[1])
        }
    }
    else if(end.getTime() >= period3[0].getTime() && end.getTime() <= period3[1].getTime()){
        labour_by_time_period.period3 = hoursDifference(period3[0], end)
    }
    else if(start.getTime() < period3[0].getTime() && end.getTime() > period3[1].getTime()) {
        console.log("object");
        labour_by_time_period.period3 = hoursDifference(period3[0], period3[1]);
    }

    // Counting Hours in period4
    if(start.getTime() >= period4[0].getTime() && start.getTime() < period4[1].getTime()){
        if(end.getTime() <= period4[1].getTime()){
            labour_by_time_period.period4 = hoursDifference(start, end);
        }
        else{
            labour_by_time_period.period4 = hoursDifference(start, period4[1])
        }
    }
    else if(end.getTime() > period4[0].getTime() && end.getTime() <= period4[1].getTime()){
        labour_by_time_period.period4 = hoursDifference(period4[0], end)
    }
    else if(start.getTime() < period3[0].getTime() && end.getTime() > period3[1].getTime()) {
        console.log("object");
        labour_by_time_period.period3 = hoursDifference(period3[0], period3[1]);
    }

    return labour_by_time_period
}


/**
 * Calculates hours of labour by each employee for each clock entry
 * 
 * @param {number} employee_id 
 * @returns {Object} []
 */
const calculateLabour = (employee_id) => {
    const labour = [];
    for (const time_punch of clocks_map[employee_id]) {
        // Get Dates and time for each time punch objects
        const [clock_in_date, clock_in_time] = time_punch.clock_in_datetime.split(' ');
        const [clock_out_date, clock_out_time] = time_punch.clock_out_datetime.split(' ');
            
        // Check if punch_in and punch_out happens on different dates 
        if(clock_in_date === clock_out_date) {
            const hours_by_period = calculateLabourByTimePeriod(clock_in_date,clock_out_date,clock_in_time, clock_out_time)  
            // Prepare the labour object
            labour.push({
                "date": clock_in_date,
                "total": hours_by_period.total,
                "labour_by_time_period": {
                    period1:  hours_by_period.period1 ? hours_by_period.period1 : 0,
                    period2:  hours_by_period.period2 ? hours_by_period.period2 : 0,
                    period3:  hours_by_period.period3 ? hours_by_period.period3 : 0,
                    period4:  hours_by_period.period4 ? hours_by_period.period4 : 0
                }
            })
        }
        else {

                const hours_by_period_day1 = calculateLabourByTimePeriod(clock_in_date,clock_out_date,clock_in_time,"04:59:59"); 
                labour.push({
                    "date": clock_in_date,
                    "total": hours_by_period_day1.total,
                    "labour_by_time_period": {
                        period1:  hours_by_period_day1.period1 ? hours_by_period_day1.period1 : 0,
                        period2:  hours_by_period_day1.period2 ? hours_by_period_day1.period2 : 0,
                        period3:  hours_by_period_day1.period3 ? hours_by_period_day1.period3 : 0,
                        period4:  hours_by_period_day1.period4 ? hours_by_period_day1.period4 : 0
                    }
                });
    
                const hours_by_period_day2 = calculateLabourByTimePeriod(clock_in_date,clock_out_date,"05:00:00", clock_out_time);
                labour.push({
                    "date": clock_out_date,
                    "total": hours_by_period_day2.total,
                    "labour_by_time_period": {
                        period1:  hours_by_period_day2.period1 ? hours_by_period_day2.period1 : 0,
                        period2:  hours_by_period_day2.period2 ? hours_by_period_day2.period2 : 0,
                        period3:  hours_by_period_day2.period3 ? hours_by_period_day2.period3 : 0,
                        period4:  hours_by_period_day2.period4 ? hours_by_period_day2.period4 : 0
                    }
                })
            }
    }
    return labour;
}

for(employee of employees){
    
    labour_hours.push({
        "employee_id": employee.id,
        "first_name": employee.first_name,
        "last_name": employee.last_name,
        "labour": calculateLabour(employee.id)
    })
    
}


fs.writeFile('labour_hours.json', JSON.stringify(labour_hours, null, 4), (err) => {
    if (err) {
        console.error(err.message, '\u2718 ');
    }
    console.log("labour_hours.json is prepared.", '\u2714 ');
});