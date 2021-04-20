const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/project_pollen", {
    useNewUrlParser: true,
    useUnifiedTypology: true,
    useFindAndModify: false,
    useCreateIndex, true
});