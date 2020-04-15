var express = require("express")
var login   = require('./routes/loginroutes')
var bodyParser = require('body-parser')

var app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json() )


app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*")
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept")
    next()
});

var router = express.Router()

//test rooute
router.get('/', function(req, res) {
    res.json(
        {
            message: "Hello world"
        }
    )
})


router.post('/register', login.register)
router.post('/login', login.login)
router.post('/addmember', login.addmember)
router.get('/reports', login.reports)
router.get('/genderReportMale', login.genderReportMale)
router.get('/genderReportFemale', login.genderReportFemale)
router.get('/ageReportFemale', login.ageReportFemale)
router.get('/ageReportMale', login.ageReportMale)
router.get('/territories', login.territories)
//router.get('/totalMale', login.totalMale)
//router.get('/totalFemale', login.totalFemale)
router.post('/uploads', login.uploads)
app.use('/api', router)
app.listen(5000)