/* this is our car, it does things */
var car = {
    // the car object
    attrs: {
        tires: 4,
        wipers: 2,
        doors: 5,
        gas: 'empty'
    },
    horn: function() {
        //do stuff
        return "honk";
    },
    "turn left": function() {
        return "turn left";
    },
    "turn right": function() {
        return "turn left three times";
    },
    turn: function(direction) {
        var rtn;
        
        if ( typeof direction !== 'undefined' && direction.length > 0 ) {
            rtn = "turn " +  direction;
        } else {
            rtn = "You didn't provide a direction";
        
        }
        return rtn;
    },
    showAttrs: function() {
        return this.attrs;
    }
};

console.log(car.horn());

console.log(car["turn right"]());

console.log(car.turn('drifty ways'));

console.log(car.turn());

console.log(car.showAttrs());