
/*
 * GET home page.
 */
"use strict";

module.exports = function(app){

	app.get('/problems' , problems.fetchAll);
};