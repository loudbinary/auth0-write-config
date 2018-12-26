#!/usr/bin/env node
let App = require('./libs/index.js');
let app = new App();
//const templateDirectory="/Users/charles.russell/droneup1/com.dartfleet.auth0/tenant_template"
//const saveDirectory="/Users/charles.russell/Loudbinary/saveDirectoryAuth0Templates"

app.processArgs(()=>{
    savePath = app.options.output
    overWrite = app.options.remove
    app.utils.emitConfig(savePath,overWrite)
    .catch(e =>{
        app.options.help()
    })
})
