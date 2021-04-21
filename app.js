const express = require('express');
const app = express();
const cors = require('cors');
const router = require('./routes/api.router');

const mongoose = require('mongoose');
const Story = require('./models/story');

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/project_pollen", {
    useNewUrlParser: true,
    useUnifiedTypology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(cors());
app.use(express.json());
app.use('/api', router);

Story.create({
    name: 'Jane Doe',
    image: 'https://images.unsplash.com/photo-1616596894549-36d1fc6a9b3b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1234&q=80', 
    story: {
        title: 'How Jane ended up on the streets',
        paragraphs: [
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam rutrum nunc odio, vel lacinia elit ullamcorper ac. Suspendisse eu quam in est porttitor scelerisque fringilla nec ex. Curabitur eget massa sit amet orci iaculis interdum eu sed magna. Nam aliquam orci commodo quam imperdiet fringilla. Praesent congue, libero rutrum suscipit fringilla, mauris justo vestibulum purus, quis interdum dolor magna a ex. Fusce venenatis odio ut dictum mollis. Aenean sed libero id neque accumsan tincidunt. Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elementum venenatis porta.', 
            'Donec congue auctor nulla nec commodo. Morbi ultricies scelerisque tincidunt. Donec rutrum massa vitae pretium elementum. Phasellus sagittis nec mauris sit amet pretium. Donec sed hendrerit mauris. Nunc sit amet velit sed sem euismod auctor imperdiet eu tellus. Phasellus vitae congue nunc. Duis ipsum diam, malesuada sit amet eleifend eget, vehicula sit amet felis. Duis quis libero lorem. Suspendisse ac nisi a erat eleifend gravida.',
            'Donec vitae massa feugiat, dignissim tellus eu, mattis nisi. Vivamus ultricies ipsum commodo urna iaculis lacinia. Fusce elementum ante at metus ultrices, nec tincidunt urna porta. Fusce ipsum lacus, venenatis vitae arcu et, porta dapibus enim. Curabitur egestas, lectus quis dapibus consectetur, risus ligula maximus justo, eu elementum lacus sapien quis nulla. Nullam blandit dictum mi, sit amet tempor risus vehicula vitae. Morbi vel purus vitae enim fermentum aliquam molestie eu est. Praesent a cursus diam. Maecenas magna risus, congue vel mauris id, scelerisque imperdiet risus. Suspendisse sed cursus nulla, eu vestibulum tortor. Donec ac posuere metus. Mauris auctor suscipit risus id tristique. In hac habitasse platea dictumst. Ut vestibulum molestie diam, nec blandit massa semper quis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ultricies velit a lorem laoreet, in eleifend diam ornare.',
            'Duis efficitur justo blandit rutrum imperdiet. Sed ac risus finibus, dapibus neque ut, rhoncus quam. Etiam ut quam metus. Proin nec lacus magna. Cras lobortis leo ligula, in porttitor ligula viverra sed. Sed viverra semper nulla, et vehicula neque bibendum quis. Nunc sollicitudin odio tincidunt felis scelerisque, vel gravida magna vehicula. Integer sollicitudin leo id nulla malesuada, non vestibulum augue consequat.',
            'Aliquam rhoncus vulputate luctus. Donec lobortis, lacus vulputate viverra congue, nulla neque euismod nisi, sit amet vehicula purus nunc ut massa. Aliquam condimentum, mi vel consectetur interdum, nunc felis ornare felis, et fringilla felis neque at tortor. Curabitur aliquam, augue vitae consequat bibendum, turpis mauris iaculis quam, nec rutrum leo felis eu urna. Sed aliquet fermentum mollis. Maecenas quis orci non metus mattis pharetra. Fusce at mollis nunc. Proin dignissim non ex tincidunt luctus. Quisque et nisi et sapien ultrices pulvinar finibus sit amet eros. Quisque ac nulla ut ipsum vehicula cursus nec id nunc.'
        ],
        quotes:  [
            'Duis ipsum diam, malesuada sit amet eleifend eget, vehicula sit amet felis. Duis quis libero lorem. Suspendisse ac nisi a erat eleifend gravida.',
            'Curabitur egestas, lectus quis dapibus consectetur, risus ligula maximus justo, eu elementum lacus sapien quis nulla.',
            'Sed viverra semper nulla, et vehicula neque bibendum quis. Nunc sollicitudin odio tincidunt felis scelerisque, vel gravida magna vehicula.'
        ],
        author: 'John Doe'
    }
});

module.exports = app;