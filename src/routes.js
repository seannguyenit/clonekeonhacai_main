const express = require('express'); // import module express
let loginPage = require('./controllers/get-view-login');
let homePage = require('./controllers/home-controller');

const router = express.Router();

router.get('/', homePage.news);
router.get('/tin-tuc', homePage.news);
router.get('/tin-tuc/:id', homePage.news_content);
router.get('/lich-am-hom-nay', homePage.get_today_is_info);

router.get('/ket-qua-bong-da/:time', homePage.all_match);
router.get('/lich-bong-da-hom-nay/:time', homePage.all_match_today);
router.get('/ket-qua-bong-da', homePage.all_match);
router.get('/lich-bong-da-hom-nay', homePage.all_match_today);

router.get('/bang-xep-hang', homePage.rank_all);

router.get('/ket-qua-bong-da/:id', homePage.all_match_by_league);
router.get('/bang-xep-hang/:id', homePage.rank_all_by_league);

router.get('/lich-thi-dau/:key/:time', homePage.get_all_match_fixture);
router.get('/lich-thi-dau/:key', homePage.get_all_match_fixture);



router.get('/login', loginPage.getLoginPage);

// export router
module.exports = router;
