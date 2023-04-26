
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

function get_datetime_format_default() {
    
    let date = new Date();
    let day = date.getDate().toString().padStart(2, '0');
    let month = (date.getMonth() + 1).toString().padStart(2, '0');
    let year = date.getFullYear().toString();
    return `${year}-${month}-${day}`;
}

async function get_news_content(id) {
    try {
        const response = await axios.get(`https://api2.asiasport.com/news/getNewsDetail?newsId=${id}`);
        return response.data.result
    } catch (error) {
        console.log(error);
    }
}




module.exports = {
    get_all_match: async () => {
        var rs = await get_all_match();
        return rs;
    },

}