const express = require('express')
const router = express.Router();
const usersController = require("../../controllers/usersController");
const User = require('../../models/user')
const passport = require('../../passport')

router.get('/', (req, res) => {
  console.log('user signup');

const { username, password } = req.body
// ADD VALIDATION
User.findOne({ username: username }, (err, user) => {
    if (err) {
        console.log('User.js post error: ', err)
    } else if (user) {
        res.json({
            error: `Sorry, already a user with the username: ${username}`
        })
    }
    else {
        const newUser = new User({
            username: username,
            password: password
        })
        newUser.save((err, savedUser) => {
            if (err) return res.json(err)
            res.json(savedUser)
        })
    }
})
})

router.post(
'/login',
function (req, res, next) {
    console.log('routes/user.js, login, req.body: ');
    console.log(req.body)
    next()
},
passport.authenticate('local'),
(req, res) => {
    console.log('logged in', req.user);
    var userInfo = {
        username: req.user.username
    };
    res.send(userInfo);
}
)

router.get('/', (req, res, next) => {
console.log('===== user!!======')
console.log(req.user)
if (req.user) {
    res.json({ user: req.user })
} else {
    res.json({ user: null })
}
})

router.post('/logout', (req, res) => {
if (req.user) {
    req.logout()
    res.send({ msg: 'logging out' })
} else {
    res.send({ msg: 'no user to log out' })
}
})

router.post('/signup', (req, res) => {
	const { username, password } = req.body
	// ADD VALIDATION
	User.findOne({ 'local.username': username }, (err, userMatch) => {
		if (userMatch) {
			return res.json({
				error: `Sorry, already a user with the username: ${username}`
			})
		}
		const newUser = new User({
			'local.username': username,
			'local.password': password
		})
		newUser.save((err, savedUser) => {
			if (err) return res.json(err)
			return res.json(savedUser)
		})
	})
})



// Matches with "/api/users"
router.route("/")
  .post(usersController.create);

// Matches with "/api/users/:id"
router
  .route("/:id")
  .get(usersController.findById)
  .put(usersController.update)

module.exports = router;
