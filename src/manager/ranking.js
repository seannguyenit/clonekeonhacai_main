


'use strict'
const axios = require('axios');

async function get_all_ranking(id = '') {
    try {
        if (!id) {
            id = '';
        }
        const response = await axios.get(`https://api2.asiasport.com/soccerLeague/ranking?leagueIdList=${id}&lang=vi`);
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




module.exports = {
    get_all_rank: async () => {
        var rs = await get_all_ranking();
        return rs;
    },
    get_all_rank_by_league: async (id) => {
        var rs = await get_all_ranking(id);
        return rs;
    },

}