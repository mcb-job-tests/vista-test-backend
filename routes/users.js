var express = require('express');
var router = express.Router();
var mongoose = require( 'mongoose' ); // access MongoDB

// mongoose instance url connection
mongoose.Promise = global.Promise;
mongoose.connect( 'mongodb://127.0.0.1/vistaDb', { useNewUrlParser: true } );

var Schema = mongoose.Schema;
var UserSchema =  new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    emailAddress: {
        type: String,
        required: true
    }
});

var User = mongoose.model( 'User', UserSchema );

let db = mongoose.connection;
db.on( 'error', console.error.bind( console, 'MongoDB connection error' ) );

router.post('/submit', function(req, res, next){
    console.log("POST request received!");
    console.log(req.body);

    let user = new User( req.body );

    let validationError = user.validateSync();

    if ( validationError ) {
        res.status( 400 ).send( validationError )
    } else {
        user.save( (err, user) => {
            if (err) {
                console.error(err);
            } else {
                res.json( { message: "user details saved", user } );
            }
        });
    }
});

router.get('/', function(req, res, next) {


    User.find( {}, function( err, users ){
        if ( err ) {
            res.send( err );
        } else {
            res.json( users );
        }
    });

});

module.exports = router;
