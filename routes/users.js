let express = require( 'express' );

let router = express.Router();

/* GET users listing. */
const defaultFunction = ( req, res, next ) => {
  res.send( 'respond with a resource' );
}

router.get( '/', defaultFunction )

module.exports = router;
