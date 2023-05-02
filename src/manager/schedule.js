'use strict'

const axios = require('axios');
const cheerio = require('cheerio');
const url = 'https://www.xemlicham.com/';
module.exports = {
    get_today_info: async () => {
        try {
            let response = await axios.get(url)
            // Load the HTML content into a Cheerio instance
            const $ = cheerio.load(response.data);

            const mainBody = $('.main-body');

            // Remove any <style> or <script> tags from the selected element
            mainBody.find('style, script, iframe').remove();
            mainBody.find('.col-lg-4').remove();
            mainBody.find('.vncal-header-next').remove();
            mainBody.find('.vncal-header-preview').remove();
            mainBody.find('a').removeAttr('href');
            // Get the inner HTML of the selected element
            const innerHTML = mainBody.html();
            return innerHTML.replaceAll('col-lg-8','col-lg-12');

            // Do something with the extracted element(s)
        } catch (error) {
            console.log(error);
            return error;
        }
    }
}




