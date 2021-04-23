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
    name: 'Sarah',
    image: 'https://images.unsplash.com/photo-1465406325903-9d93ee82f613?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2736&q=80', 
    story: {
        title: 'Sarah’s Story',
        paragraphs: [
	        'I graduated from a top university with honours, and was successful and happy in my job.',
            'While at university, I met the love of my life. We married young, soon after we both graduated, and lived happily in our first home together. We were planning on one day starting our own family.',
            'Only 2 years later, my husband’s health suddenly took a turn and he was diagnosed with a cancerous brain tumour. Within months, he was bedridden and passed away in hospital 6 months after his diagnosis.',
            'My mental health began to spiral. I was diagnosed with anxiety and major depression, and attempted to take my own life on a number of occasions. I I cycled through medications and psychologists; nothing worked. Eventually, and in suicidal desperation, I found something that did – injecting heroin.',
            'Manchester Homeless Charity offered me a place to stay and support, and eventually, with the right support and counselling, I was able to make my first steps towards recovery. If it wasn’t for Manchester Homeless Charity, I dread to think where I would be now.'
	    ],
        quotes:  [
            '“I graduated from a top university with an honours degree...and ended up on the streets.”',
            '“Within months, he was bedridden and passed away in hospital 6 months after his diagnosis.”',
            '“Eventually, I ended up on the streets.”',
        ]
    }
});

Story.create({
    name: 'Pheobe',
    image: 'https://images.unsplash.com/photo-1573439234071-e83b75a649c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80', 
    story: {
        title: 'Pheobe’s Story',
        paragraphs: [
	        'He started beating me up for small things, like forgetting to pick up a pint of milk on my way home. Before long, he would take my phone away and stop me from leaving the house to see friends. He didn’t like it when I was out of his sight.',
            'I eventually ended up in hospital with 2 broken bones and a black eye. I went to the police, but they declared that there wasn’t sufficient evidence to charge him. He’s still out there.',
            'The council said that I had made myself homeless by leaving him, even though I had nowhere else to go. I was able to stay in a hostel for homeless people for 5 nights, after which I was on the streets for 6 months.',
            'I mostly slept in doorways. It is scary, especially in winter. You can’t stay safe as a woman on the streets by yourself. You don’t get much sleep; you’re always worried about someone robbing you and beating you up.',
            'Manchester Homeless Charity offered me a place to stay and support, and eventually, with the right support and counselling, I was able to make my first steps towards recovery. If it wasn’t for Manchester Homeless Charity, I dread to think where I would be now.'
	    ],
        quotes:  [
            '“I was living in stockport with a man who I thought was very nice. And then when he started drinking, I saw a very different side to him.”',
            '“The council said that I had made myself homeless by leaving him, even though I had nowhere else to go.”',
            '“You can’t stay safe as a woman on the streets by yourself.”',
        ]
    }
});

Story.create({
    name: 'Amari',
    image: 'https://images.unsplash.com/photo-1509325067210-e6b3643e817a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2552&q=80', 
    story: {
        title: 'Amari’s Story',
        paragraphs: [
	        'I was born into a loving family, and started my life in Manchester. We were definitely not wealthy, but my parents both worked hard and long hours to be able to provide for us. When I was 4 years old, my dad tragically passed away in a car accident.',
            'For years after, my mum struggled immensely with the loss. Her mental health spiralled and she soon lost her job after becoming addicted to drugs to numb her pain.',
            'We were evicted from our small flat, and found ourselves moving between hostels, B&Bs, and other temporary accomodation while my mum begged on the street for money.',
            'When I was 17 years old, my mum lost her battle with addiction and passed away. I had no one to turn to, and found myself on the streets, doing just as my mum had done, and begging for support.',
            'Being on the street wore me down. I slept in car parks, where boy racers threw rubbish at me. You wake up freezing, with no public toilets open.',
            'Manchester Homeless Charity offered me a place to stay and support, and eventually, with the right support and counselling, I was able to make my first steps towards recovery. If it wasn’t for Manchester Homeless Charity, I dread to think where I would be now.'
	    ],
        quotes:  [
            '“I was born into a happy family. I wanted to be a doctor when I grew up. You think it’s never going to happen to you, but it can happen to anyone.”',
            '“My mum struggled immensely with the loss.”',
            '“Being on the streets wore me down.”',
        ]
    }
});

module.exports = app;



