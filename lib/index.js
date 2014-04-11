

module.exports = function( app ) {

    var coleman = app || null;

    return {
        /**
         * Builds this module in to the correct place
         */
        init: function() {

            console.log( 'Initialising coleman-face' );

            // Put scripts in to coleman public scripts folder

            // Put styles in to coleman public styles folder

            // Put views in to coleman views folder

            // Report any clashes with existing files/folders

        },

        /**
         * The router for this module
         * ---
         * Called to initialise any routes in the correct place
         */
        router: function() {

            coleman.app.get( '/', require( './routes' ) );
        }
    };
};
