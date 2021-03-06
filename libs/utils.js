// My module
const path = require('path')
const fse = require('fs-extra')
function Utils() {
    this.name = "utils"
}
Utils.prototype.emitConfig = function emitConfig(savePath,overWrite){
    return new Promise((resolve, reject)=>{
        try{
            require('envkey');
        let template = {
            SLACK_INCOMING_WEBHOOK_URL: process.env.SLACK_INCOMING_WEBHOOK_URL,
            AUTH0_DOMAIN: process.env.AUTH0_DOMAIN,
            AUTH0_CLIENT_SECRET: process.env.AUTH0_CLIENT_SECRET,
            AUTH0_CLIENT_ID: process.env.AUTH0_CLIENT_ID,
            AUTH0_EXCLUDED_RULES: [
                "emptyrule"
            ],
            AUTH0_KEYWORD_REPLACE_MAPPINGS: {
                "EMPTY_RULE": "why must this be here."
            },
            AUTH0_ALLOW_DELETE: overWrite.toString()
        }
        fse.writeJSONSync(path.resolve(savePath),template,{spaces:4})
        resolve(null)
        }
        catch(e){
            reject(e)
        }
    })


}

module.exports = Utils;

