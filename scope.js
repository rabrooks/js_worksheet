function foo() {
    var foo_var = "Foo var is in scope";
    console.log("Starting Function Foo")
    console.log(foo_var);
    if ( typeof bar_var === 'undefined') {
        console.log('no bar var here');
    } else {
        console.log(bar_var);
    }
    console.log("==================================")
    
    function bar () {
        var bar_var = "Bar var is in scope";
        console.log("Starting Function Bar")
        console.log(foo_var);
        console.log(bar_var);
        console.log("==================================")
        
        
        function baz() {
            var baz_var = "Baz var is in scope";
            console.log("Starting Function Baz")
            console.log(foo_var);
            console.log(bar_var);
            console.log(baz_var);
            console.log("==================================")
        }
        
        baz();
    }
    
     bar();
}

foo();
