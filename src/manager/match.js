
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
        const response = await axios.get(`https://api2.asiasport.com/match/getFixtureByLeague?leagueKey=${key}&type=1&matchDate=&timeZone=Etc/GMT-7&isCallInterval=true&lang=vi`);
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
        let today = new Date();

        // Create an array to store the names of the days of the week in Vietnamese
        let dayOfWeek = ['CN', 'Thứ 2', 'Thứ 3', 'Thứ 4', 'Thứ 5', 'Thứ 6', 'Thứ 7'];

        // Create an array to store the 7 days
        let daysArray = [];

        // Loop through the next 7 days, starting from today
        for (let i = 0; i < 7; i++) {
            let date = new Date(today.getTime() + (i * 24 * 60 * 60 * 1000));
            let dow = dayOfWeek[date.getDay()];
            let formattedDate = date.toISOString().substring(0, 10);
            let show_date = formattedDate.split('-')[2] + '/' + formattedDate.split('-')[1]
            daysArray.push({ date: formattedDate, show_date: show_date, dayOfWeek: dow });
        }
        return daysArray;

    },
}