'use strict';

let { menu } = require('../manager/data-menu');
const { get_all_match } = require('../manager/match');
const { get_news, get_news_content } = require('../manager/news');


module.exports = {

    home: async (req, res) => {
        let LIST_TYPE = menu();
        return res.render('home', {
            title: 'Trang chủ',
            menu: LIST_TYPE
        })
    },
    news: async (req, res) => {
        let LIST_TYPE = menu();
        let dt = await get_news();
        return res.render('news', {
            title: 'Tin tức',
            menu: LIST_TYPE,
            data: dt
        })
    },
    news_content: async (req, res) => {
        let LIST_TYPE = menu();
        let dt = await get_news_content(req.params.id);
        return res.render('news-details', {
            title: 'Tin tức chi tiết',
            menu: LIST_TYPE,
            data: dt
        })
    },
    all_match: async (req, res) => {
        let LIST_TYPE = menu();
        let dt = await get_all_match(req.params.time);
        return res.render('allmatch', {
            title: 'Kết quả trận đấu',
            menu: LIST_TYPE,
            data: dt
        })
    }

}
