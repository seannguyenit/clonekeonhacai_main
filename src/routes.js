const express = require('express'); // import module express
let loginPage = require('./controllers/get-view-login');
let homePage = require('./controllers/home-controller');

const router = express.Router();

router.get('/', homePage.home);
router.get('/tin-tuc', homePage.news);
router.get('/tin-tuc/:id', homePage.news_content);

router.get('/ket-qua-bong-da', homePage.all_match);


router.get('/login', loginPage.getLoginPage);

// export router
module.exports = router;
