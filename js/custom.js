function fadeImg ( event ) {
    var frag = event.fragment,
        fragId = frag.id,
        getEl = function ( id ) {
            return document.getElementById( id );
        };

    console.log( fragId );

    switch ( fragId ) {
        case "invalid-arg":
            getEl( "many-devices-1" ).className += " fade-img";
            frag.className += " visible";
            break;
        case "did-i-not":
            getEl( "many-devices-2" ).className += " fade-img";
            frag.className += " visible";
            break;
    }

}

Reveal.addEventListener( 'fragmentshown', fadeImg );
