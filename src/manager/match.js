
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
    get_all_match: async () => {
        var rs = await get_all_match();
        return rs;
    },
    get_all_match_by_league: async (id) => {
        var rs = await get_all_match_by_leagueid(id);
        return rs;
    },
    get_all_match_today: async () => {
        var rs = await get_all_match_today();
        return rs;
    },
    get_all_match_fixture: async (key, time) => {
        var rs = await get_all_match_fixture(key, time);
        return rs;
    },

}