var mysql = require('mysql')
const multer  = require('multer')
const jwt = require('jsonwebtoken')
const SECRET_KEY = "secretkey"

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'zciea'
});


connection.connect(function(err){
    if(!err) {
        console.log("Database is connected ... nn")
    }else {
        console.log("Error connecting ... nn")
    }
});

//for the image. this can be simplified even better, but i dont have time. im following a tutorial



exports.uploads = function(req, res) {
    const storage = multer.diskStorage({
        destination: './public/uploads/',
        filename: function(req, file, cb){
            cb(null, "IMAGE-" + Date.now() + path.extname(file.originalname))
        }
    })

    const upload = multer({
        storage: storage,
        limits: {fileSize: 1000000},
    }).single(req.body.myImage)
    console.log("REQUEST: ", req.body.myImage);

    console.log(upload);
}




exports.register = function(req, res){
    var today = new Date()
    var email = req.body.email
    var users = {
        "first_name": req.body.first_name,
        "last_name": req.body.last_name,
        "email": req.body.email,
        "password": req.body.password,
        "created": today
    }

connection.query('SELECT * FROM users WHERE email = ?', [email], 
function(error, results, fields) {
    if(results.length >0) {
        res.send({
            "code": 204,
            "success": "Email already exist"
        });
    }else {
        connection.query( 'INSERT INTO users SET ?', users, function(error, results, fields){
            if(error) {
                console.log("Error Occured", error)
                res.send({
                    "code": 400,
                    "failed": "error ocuured"
                })
            }else {
                let usersArr = []
                usersArr.push(users)  //this is important in order to make the results an array just as in the login screen. The jwt is decoding an array there
                jwt.sign({user: usersArr}, SECRET_KEY, (err, token) => {
                    res.json({token})
                })
            }
        })
    }
});
}


exports.login =  function(req, res) {
    var email = req.body.email
    var password = req.body.password

    connection.query('SELECT * FROM users WHERE email = ?', [email], 
        function(error, results, fields) {
           if(error) {
               res.send({
                   "code": 400,
                   "failed": "Error Occured"
               })
           } else {
               if(results.length >0) {
                   if(results[0].password == password) {
                    //    res.send({
                    //        "code": 200,
                    //        "success": "login successful"
                    //    });
                    //console.log(typeof results);
                    
                       jwt.sign({user: results}, SECRET_KEY, (err, token) => {
                           res.json({token})
                       })
                    //    jwt.verify(req.token, SECRET_KEY, (err, authData)=> {
                    //        if(err){
                    //            res.sendStatus(403)
                    //        }else{
                    //             res.json({
                    //                 authData
                    //             })
                    //        }
                    //    })
                   }else {
                       res.send({
                           "code": 204,
                           "success": "Email and password do not match"
                       });
                   }
               }else {
                   res.send({
                       "code": 204,
                       "success": "Email not exist"
                   });
               }
           }
    });
}

exports.verifyToken = function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if(typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ')
        const bearerToken = bearer[1]
        req.token = bearerToken
        next()
    }else{
        res.sendStatus(403)
    }
}


exports.addmember = function(req, res) {
    var member = {
        "name": req.body.name,
        "id_number": req.body.id_number,
        "territory": req.body.territory,
        "gender": req.body.gender,
        "contact": req.body.contact,
        "date_of_birth": req.body.date_of_birth,
        "gender": req.body.gender,
            "trade": req.body.trade,
            "contact": req.body.contact,
            "email": req.body.email,
            "amount_paid": req.body.amount_paid,
            //"profile": req.body.profile,

    }

    connection.query('INSERT INTO members_test SET ?', member, function(error, results, fields){
        if(error) {
            console.log("Error ", error)
            // res.send({
            //     "code": 400,
            //     "failed": "could not add member"
            // })
        }else {
            res.send({
                "code": 200,
                "success": "Member added succesfully"
            })
              
        }
    })
}

//all member report data
exports.reports = function(req, res) {
    connection.query('SELECT * FROM members LIMIT 50', 
        function(error, results, fields) {
           if(error) {
               res.send({
                   "code": 400,
                   "failed": "Error Occured",
                   "request": req
               })
           } else {
               if(results.length >0) {
                   res.send({
                       "code": 200,
                       "members": results
                   })
                   
                   //return results
               }else {
                   res.send({
                       "code": 204,
                       "success": "There is no data to show"
                   });
               }
           }
    });
}

//by gender. var gender is the user selected value
exports.genderReportMale = function(req, res) {
    var gender =  req.body.gender

    connection.query('SELECT territory, COUNT(territory)as population FROM members WHERE gender = "male" GROUP by territory', [gender], 
        function(error, results, fields) {
           if(error) {
               res.send({
                   "code": 400,
                   "failed": error,
               })
           } else {
               if(results.length >0) {
                   res.send({
                       "code": 200,
                       "members": results
                   })
                   //console.log(results);
                   
               }else {
                   res.send({
                       "code": 402,
                       "message": "No data found",
                       "success": fields
                       
                   });
               }
           }
    });

}

exports.genderReportFemale = function(req, res) {
    var gender =  req.body.gender

    connection.query('SELECT territory, COUNT(territory)as population FROM members WHERE gender = "female" GROUP by territory', [gender], 
        function(error, results, fields) {
           if(error) {
               res.send({
                   "code": 400,
                   "failed": error,
               })
           } else {
               if(results.length >0) {
                   res.send({
                       "code": 200,
                       "members": results
                   })
                   
               }else {
                   res.send({
                       "code": 402,
                       "message": "No data found",
                       "success": fields
                       
                   });
               }
           }
    });

}

//age classification by gender
exports.ageReportFemale = function(req, res) {
    try {
        connection.query('CALL genderAgeAnalysis("female")', 
            function(error, results, fields) {
                if(error) {
                    console.log(error.code)
                    res.send({
                        "code": 400,
                        "failed": "Error Occured",
                        "request": req
                    })
                } else {
                    if(results.length >0) {
                        res.send({
                            "code": 200,
                            "members": results
                        })
                        
                        //return results
                    }else {
                        res.send({
                            "code": 204,
                            "success": "There is no data to show"
                        });
                    }
                }
        });
    } catch(err){
        console.log(err);
        
    }
}

//age classification by gender
exports.ageReportMale = function(req, res) {
    try {
        connection.query('CALL genderAgeAnalysis("male")', 
            function(error, results, fields) {
                if(error) {
                    console.log(error.code)
                    res.send({
                        "code": 400,
                        "failed": "Error Occured",
                        "request": req
                    })
                } else {
                    if(results.length >0) {
                        res.send({
                            "code": 200,
                            "members": results
                        })
                        
                        //return results
                    }else {
                        res.send({
                            "code": 204,
                            "success": "There is no data to show"
                        });
                    }
                }
        });
    } catch(err){
        console.log(err);
        
    }
}


exports.totalMale = function(req, res) {
    connection.query('SELECT * FROM members WHERE gender = male'),function(error, results, fields) {
        if(error) {
            res.send({
                "code": 400,
                "error": error
            })
        }else {
            if(results.length >0) {
                res.send({
                    "code": 200,
                    "members": results
                })
                
                return results
            }else {
                res.send({
                    "code": 204,
                    "success": "There is no data to show"
                });
            }
        }
    }
}

exports.territories = function(req, res) {
    connection.query('SELECT DISTINCT territory FROM members'),function(error, results, fields) {
        if(error) {
            res.send({
                "code": 400,
                "error": error
            })
        }else {
            if(results.length >0) {
                res.send({
                    "code": 200,
                    "members": results
                })
                
                return results
            }else {
                res.send({
                    "code": 204,
                    "success": "There is no data to show"
                });
            }
        }
    }
}


