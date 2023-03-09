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