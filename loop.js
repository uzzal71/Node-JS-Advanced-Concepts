// node myFile.js
myFile.runContents();

function shuldContinue() {
    // Check one: Any pending setTimeout, setInterval, setImmediate?
    // Checkout two: Any pending OS tasks? (Like server listening to port)
    // Check three: Any pending long running operations? (Like fs module)
}

// Entire body executes in one 'tick'
while(shouldContinue()) {

}


// exist back to terminal