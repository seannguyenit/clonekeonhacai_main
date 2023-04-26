'use strict';
module.exports = {

    getLoginPage: function(req, res){
        return res.render('login', {
            title: 'Login',
        }) 
    },

}
