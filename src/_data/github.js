const EleventyFetch = require("@11ty/eleventy-fetch");
require('dotenv').config();

module.exports = async function() {
    /*const githubUser = process.env.GITHUB_USER;
    if (!githubUser) {
        throw new Error('Please set a GITHUB_USER environment variable');
    }
    let url = `https://api.github.com/users/${githubUser}`;
    
    This code above is not letting me connect to netlify
    When I copied 'let url' and changed the githubUser to hardcoded it worked
    */
   
    let url = `https://api.github.com/users/Lukas-Johansson`;


    /* This returns a promise */
    return EleventyFetch(url, {
        duration: "1d", // save for 1 day
        type: "json"    // we’ll parse JSON for you
    });
};
