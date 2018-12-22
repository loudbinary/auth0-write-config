#!/usr/bin/env node
let App = require('./libs/index.js');
let app = new App();
//const templateDirectory="/Users/charles.russell/droneup1/com.dartfleet.auth0/tenant_template"
//const saveDirectory="/Users/charles.russell/Loudbinary/saveDirectoryAuth0Templates"

app.processArgs(()=>{
    savePath = app.options.output
    app.utils.emitConfig(savePath)
    .catch(e =>{
        console.log(e)
    })
})
