const {body} = require('express-validator');

exports.hasDescription = body("description")
    .isLength({min:5})
    .withMessage("Min length is 5 chars");