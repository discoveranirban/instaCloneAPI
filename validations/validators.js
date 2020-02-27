const {body} = require('express-validator');

exports.hasName = body("name")
    .isLength({min:5})
    .withMessage("Min length is 5 chars");