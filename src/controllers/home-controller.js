'use strict';

let { menu } = require('../manager/data-menu');
const { get_all_match, get_all_match_today, get_all_match_by_league, get_all_match_fixture } = require('../manager/match');
const { get_news, get_news_content } = require('../manager/news');
const { get_all_rank, get_all_rank_by_league } = require('../manager/ranking');
const { get_today_info } = require('../manager/schedule');


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
    },
    all_match_today: async (req, res) => {
        let LIST_TYPE = menu();
        let dt = await get_all_match_today(req.params.time);
        return res.render('allmatch', {
            title: 'Lịch thi đấu hôm nay',
            menu: LIST_TYPE,
            data: dt || []
        })
    },
    all_match_by_league: async (req, res) => {
        let LIST_TYPE = menu();
        let dt = await get_all_match_by_league(req.params.id);
        let nameLeague = dt?.leagueMatchList[0]?.leagueName
        return res.render('allmatch', {
            title: `Lịch thi đấu ${nameLeague || ''}`,
            menu: LIST_TYPE,
            data: dt || []
        })
    },
    rank_all: async (req, res) => {
        let LIST_TYPE = menu();
        let id = req.params.id;
        if (!id) id = '';
        let dt = await get_all_rank(id);
        let title = 'Bảng xếp hạng các giải';
        if (id && id > 0) {
            title = `Bảng xếp hạng ${dt[0]?.tableName || ''}`
        }
        return res.render('ranking', {
            title: title,
            menu: LIST_TYPE,
            data: dt
        })
    },
    rank_all_by_league: async (req, res) => {
        let LIST_TYPE = menu();
        let id = req.params.id;
        if (!id) id = '';
        let dt = await get_all_rank_by_league(id);
        return res.render('ranking', {
            title: 'Bảng xếp hạng các giải',
            menu: LIST_TYPE,
            data: dt || []
        })
    },
    get_all_match_fixture: async (req, res) => {
        let LIST_TYPE = menu();
        let dt = await get_all_match_fixture(req.params.key,null);
        let nameLeague = dt.leagueName
        return res.render('feature', {
            title: `Lịch thi đấu ${nameLeague || ''}`,
            menu: LIST_TYPE,
            data: dt
        })
    },
    get_today_is_info: async (req, res) => {
        let LIST_TYPE = get_today_info();
        let id = req.params.id;
        if (!id) id = '';
        let dt = await get_today_info();
        return res.render('today_is', {
            title: 'Lịch âm hôm nay',
            menu: LIST_TYPE,
            data: dt || {}
        })
    },
}
