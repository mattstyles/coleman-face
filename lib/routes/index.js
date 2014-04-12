
module.exports = function( coleman ) {

    return function( req, res ) {

        res.send( coleman.app.get( 'index-tmpl' ).render( {
            title: 'Coleman ♥'
        }));
    }

}
