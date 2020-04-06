require('dotenv').config()
const app = require('./app')
require('./database')

async function main(){
    // app.listen(4000, () => console.log('Server Connected 👽'))
    await app.listen(app.get('port'))
    console.log('Server Connected 👽')
}

main()