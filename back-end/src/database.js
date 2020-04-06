const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URI ? process.env.MONGODB_URI : 'mongodb://localhost/test',{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false
})
    .then(() => console.log('DB Connected 💫'))
    .catch(err => console.log(err))