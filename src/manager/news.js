'use strict'
const axios = require('axios');

async function get_all_news() {
    try {
        const response = await axios.get('https://api2.asiasport.com/news/getAllNewsList?language=vi');
        return response.data.result
    } catch (error) {
        console.log(error);
    }
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
    get_news: async () => {
        var rs = await get_all_news();
        return rs;
    },
    get_news_content: async (id) => {
        var rs = await get_news_content(id);
        return rs;
    }

}