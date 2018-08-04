const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const routes = require("./routes");
const app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server)
const morgan = require('morgan')
const user = require('./routes/api/users')
const session = require('express-session')
const passport = require('./passport')
const MongoStore = require('connect-mongo')(session)



const PORT = process.env.PORT || 3002;



// Configure middleware
app.use(morgan('dev'))

// Use body-parser for handling form submissions
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(routes)

app.use(
  session({
  secret: 'fraggle-rock', //pick a random string to make the hash that is generated secure
  store: new MongoStore({ mongooseConnection: mongoose.connection }),
  resave: false, //required
  saveUninitialized: false //required
  })
)

if (process.env.NODE_ENV === "production"){
  // Use express.static to serve the client/build folder as a static directory
  app.use(express.static("client/build")); 
}
// Connect to the Mongo DB

if (process.env.NODE_ENV === "production"){
  // Use express.static to serve the client/build folder as a static directory
  app.use(express.static("client/build")); 
}


// Connect to the Mongo DB


// Set mongoose to leverage built in JavaScript ES6 Promises
// Connect to the Mongo DB
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URL);


let users = {}

getUsers = () => {
    return Object.keys(users).map(function(key){
        return users[key].username
    });
};

createSocket = (user) => {
    let cur_user = users[user.uid],
        updated_user = {
            [user.uid] : Object.assign(cur_user, {sockets : [...cur_user.sockets, user.socket_id]})
        };
    users = Object.assign(users, updated_user);
};

createUser = (user) => {
    users = Object.assign({
        [user.uid] : {
            username : user.username,
            uid : user.uid,
            sockets : [user.socket_id]
        }
    }, users);
};

removeSocket = (socket_id) => {
    let uid = '';
    Object.keys(users).map(function(key){
        let sockets = users[key].sockets;
        if(sockets.indexOf(socket_id) !== -1){
            uid = key;
        }
    });
    let user = users[uid];
    if(user.sockets.length > 1){
        // Remove socket only
        let index = user.sockets.indexOf(socket_id);
        let updated_user = {
            [uid] : Object.assign(user, {
                sockets : user.sockets.slice(0,index).concat(user.sockets.slice(index+1))
            })
        };
        users = Object.assign(users, updated_user);
    }else{
        // Remove user by key
        let clone_users = Object.assign({}, users);
        delete clone_users[uid];
        users = clone_users;
    }
};

app.use(passport.initialize())
app.use(passport.session()) // calls serializeUser and deserializeUser

// this is the post route
app.use('/auth', user)




// Start the server
server.listen(PORT, () => {
  console.log('Running server on 127.0.0.1:' + PORT);
});

io.on('connection', (socket) => {
  let query = socket.request._query,
      user = {
          username : query.username,
          uid : query.uid,
          socket_id : socket.id
      };

  if(users[user.uid] !== undefined){
      createSocket(user);
      socket.emit('updateUsersList', getUsers());
  }
  else{
      createUser(user);
      io.emit('updateUsersList', getUsers());
  }

  socket.on('message', (data) => {
      console.log(data);
      socket.broadcast.emit('message', {
          username : data.username,
          message : data.message,
          uid : data.uid
      });
  });

  socket.on('disconnect', () => {
      removeSocket(socket.id);
      io.emit('updateUsersList', getUsers());
  });
});