const express = require('express')
const bodyParser = require('body-parser')
const config = require('./config/app')

module.exports = {
    start() {
        const app = express();

        app.use(bodyParser.urlencoded({ extended: false }));
        app.use(bodyParser.json())

        // cài đặt bảo mật cho ứng dụng
        // var helmet = require('helmet');
        // app.use(helmet())
        // app.use(
        //     helmet.contentSecurityPolicy({
        //         directives: {
        //             'default-src': ["'self'"],
        //             'base-uri': ["'self'"],
        //             'block-all-mixed-content': [],
        //             'font-src': ["'self'", 'https:', 'data:'],
        //             'frame-ancestors': ["'self'"],
        //             'img-src': ["'self'", 'data:'],
        //             'object-src': ["'none'"],
        //             'script-src': ["'self'"],
        //             'script-src-attr': ["'none'"],
        //             // "style-src" だけデフォルトから'unsafe-inline'を削除
        //             'style-src': ["'self'", ' https:'],
        //             'upgrade-insecure-requests': [],
        //         },
        //     })
        // )
        // add route
        const routes = require('./src/routes')
        app.use('/', routes)

        // ----------------//
        // add view template engine
        app.set('view engine', 'pug')
        // serve static files from the `public` folder
        app.use(express.static(__dirname + '/public'))
        // ----------------//


        // start listen serve
        app.listen(config.port, () => {
            console.log('Listen server on port: ' + config.port)
        })
    }
}
