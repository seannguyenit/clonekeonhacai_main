
'use strict'
const axios = require('axios');

async function get_all_match(date_str = null) {
    try {
        if (!date_str) {
            date_str = get_datetime_format_default(date_str);
        }
        const response = await axios.get(`https://api2.asiasport.com/match/getMatchListv4?leagueIdList=&matchDate=${date_str}&liveOnly=false&lang=vi&timeZone=Etc/GMT-7`);
        return response.data.result
    } catch (error) {
        console.log(error);
    }
}

async function get_all_match_by_leagueid(id = 0) {
    try {
        if (!id || id === 0 || id === '0') {
            id = '';
        }
        let date_str = get_datetime_format_default();
        let response = await axios.get(`https://api2.asiasport.com/match/getMatchListv4?leagueIdList=${id}&matchDate=${date_str}&lang=vi&timeZone=Etc/GMT-7`);
        let rs = response.data.result;
        if (!rs) {
            date_str = get_datetime_format_tomorow();
            response = await axios.get(`https://api2.asiasport.com/match/getMatchListv4?leagueIdList=${id}&matchDate=${date_str}&lang=vi&timeZone=Etc/GMT-7`);
            rs = response.data.result;
        }
        return rs;
    } catch (error) {
        console.log(error);
    }
}


async function get_all_match_today(date_str = null) {
    try {
        if (!date_str) {
            date_str = get_datetime_format_default(date_str);
        }
        const response = await axios.get(`https://api2.asiasport.com/match/getMatchListv4?leagueIdList=&matchDate=${date_str}&lang=vi&timeZone=Etc/GMT-7`);
        return response.data.result
    } catch (error) {
        console.log(error);
    }
}

async function get_all_match_fixture(key, date_str = null) {
    try {
        if (!date_str) {
            date_str = get_datetime_format_default(date_str);
        }
        const response = await axios.get(`https://api2.asiasport.com/match/getFixtureByLeague?leagueKey=${key}&type=1&matchDate=&timeZone=Etc/GMT-7&isCallInterval=false&lang=vi`);
        return response.data.result
    } catch (error) {
        console.log(error);
    }
}


function get_datetime_format_default() {
    let date = new Date();
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString();
    return `${year}-${month}-${day}`;
}

function get_datetime_format_tomorow() {
    let date = new Date();
    date.setDate(date.getDate() + 1);
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString();
    return `${year}-${month}-${day}`;
}

function get_datetime_format_default() {
    let date = new Date();
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString();
    return `${year}-${month}-${day}`;
}




module.exports = {
    get_all_match: async (time) => {
        var rs = await get_all_match(time);
        return rs;
    },
    get_all_match_by_league: async (id) => {
        var rs = await get_all_match_by_leagueid(id);
        return rs;
    },
    get_all_match_today: async (time) => {
        var rs = await get_all_match_today(time);
        return rs;
    },
    get_all_match_fixture: async (key, time) => {
        var rs = await get_all_match_fixture(key, time);
        return rs;
    },
    get_all_nearly_day: async () => {
        // Get today's date
        // get current date and time
        let currentDate = new Date();
        // set time to 00:00:00 to get the start of the day
        currentDate.setHours(0, 0, 0, 0);

        // create an array to store the 5 days
        let daysArray = [];

        // loop 5 times to get the next 5 days
        for (let i = -1; i <= 3; i++) {
            // create a new date object for the current day
            let day = new Date(currentDate);
            // add the number of days to the current day
            day.setDate(day.getDate() + i);

            // format the date as "yyyy-MM-dd"
            let formattedDate = day.toISOString().split('T')[0];
            let d = day.getDay() - 1;
            if (d < 0) d = 6;
            // get the day of the week in Vietnamese
            let dayOfWeek = ['Chủ nhật', 'Thứ hai', 'Thứ ba', 'Thứ tư', 'Thứ năm', 'Thứ sáu', 'Thứ bảy'][d];

            // add the formatted date and day of the week to the array
            daysArray.push({ date: formattedDate, dayOfWeek: dayOfWeek });
        }

        // output the daysArray for testing
        return daysArray;

    },
}