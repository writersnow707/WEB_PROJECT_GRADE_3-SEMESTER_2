const express = require('express');
const path = require('path');
const app = express();

const http = require('http').createServer(app);
http.listen(8080, function() {
    console.log('listening in 8080');
});

app.use(express.static( path.join(__dirname, '/build')));

app.get('/', function(request, response){
    response.sendFile( path.join(__dirname, '/build/index.html') )
});

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const { readSync } = require('fs');
mongoose.set('strictQuery', true);

const db_uri = 'mongodb+srv://root:1234@logindb.68zxkcn.mongodb.net/?retryWrites=true&w=majority';

mongoose
  .connect(db_uri,
    {
      // useNewUrlPaser: true,
      // useUnifiedTofology: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.log(err);
});

/*
let UserSchema = new mongoose.Schema ({
  name: String,
  email: String,
  password: String,
})

let Users = mongoose.model('users', UserSchema);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ limit: '1gb', extended: false}));

app.post('/modals/SignUpModal', (req, res) => {
  let new_user = new Users(req.body);

  new_user.save((err) => {
    if (err) return res.status(500).json({ message: '저장 실패! '});
    else return res.status(200).json({ message: '저장 성공!', data: new_user});
  })
});

app.post('/modals/SingInModal', (req, res) => {
  Users.findOne({ id: req.body.id, password: req.body.password}, (err, user) => {
    if (err) return res.status(500).json({ message: '에러!'});
    else if (user) return res.status(200).json({ message: '유저 찾음!', data: user});
    else return res.status(404).json({ message: '유저 없음!' })
  });
});
*/