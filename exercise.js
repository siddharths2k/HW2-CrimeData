var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // Return the total number of records
    //-------------------------------------------
    var count = 0;

    function countRecordsCallback(element)
    {
        count++;
    }

    data.forEach(countRecordsCallback);
    return count; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------
    var count = 0;

    function countDistrictCrimesCallback(element)
    {
        if(element[19]===district)
            count++;
    }

    data.forEach(countDistrictCrimesCallback);
    return count; 
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------
    var count = 0;

    function countPrimaryTypeCallback(element)
    {
        if(element[13]===primaryType)
            count++;
    }

    data.forEach(countPrimaryTypeCallback);
    return count; 
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------
    var count = 0;

    function countLocationCallback(element)
    {
        if(element[15]===location)
            count++;
    }

    data.forEach(countLocationCallback);
    return count; 
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // build the point for the given crime
    //------------------------------------------- 
    var point = {};    
    point.latitude = crime[26];
    point.longitude = crime[28];
    return point;    
};




