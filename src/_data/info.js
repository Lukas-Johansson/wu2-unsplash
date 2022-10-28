const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function() {
    let url = `https://dinosaur-facts-api.shultzlab.com/dinosaurs`;
    /* This returns a promise */
    return EleventyFetch(url, {
        duration: "1d", // save for 1 day
        type: "json"    // we’ll parse JSON for you
    });
};