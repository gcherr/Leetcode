/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function(turnedOn) {
    let result = [];

    for(let hour = 0; hour < 12; hour++) {
        for(let minute = 0; minute < 60; minute++){
            let currTimeToBinary = ((hour * 64) + minute).toString(2);
            let countLEDs = currTimeToBinary.split("1").length - 1;
            //console.log(`${currTimeToBinary} : ${countLEDs}`);

            if(countLEDs == turnedOn){
                result.push(minute >= 10 ? `${hour}:${minute}` : `${hour}:0${minute}`);
            }
        }
    }

    return result;
};