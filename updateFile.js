#!/usr/bin/env node

module.exports = function(ctx) {
    var replace = require('replace'),
		fs = ctx.requireCordovaModule('fs'),
        path = ctx.requireCordovaModule('path');

	var configFile = path.join(ctx.opts.projectRoot, "config", "pluginUpdateFile.json");

	if (!fs.existsSync(configFile)) {
		return;
	}

    var configobj = JSON.parse(fs.readFileSync(configFile, 'utf8'));
	
	for(var attributename in configobj){
		var filePath = path.join(ctx.opts.projectRoot, attributename);

		if (fs.existsSync(filePath)) {
			for(var searchText in configobj[attributename]){

				replace({
					regex: searchText,
					replacement: configobj[attributename][searchText],
					paths: [filePath],
					recursive: true,
					silent: false,
				});
			}
		}
	}
};