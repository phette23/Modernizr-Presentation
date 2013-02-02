function fadeImg ( event ) {
    var frag = event.fragment,
        fragId = frag.id;

    console.log( fragId );

    switch ( fragId ) {
        case "invalid-arg":
            document.getElementById( "many-devices-1" ).className += " fade-img";
            frag.className += " visible";
            break;
        case "did-i-not":
            document.getElementById( "many-devices-2" ).className += " fade-img";
            frag.className += " visible";
            break;
    }

}

Reveal.addEventListener( 'fragmentshown', fadeImg );
