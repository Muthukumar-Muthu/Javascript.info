/*

https://javascript.info/call-apply-decorators#spy-decorator


function work(a, b) {
  alert( a + b ); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}

*/
function work(a, b) {
  alert( a + b ); // work is an arbitrary function or method
}

function spy(fun){
    
     function wrapper(...value){
          wrapper.calls.push(value)
          fun.apply( null,value)
        }
        wrapper.calls = []
    return(
       wrapper
        )
}
 work = spy(work)

work(1, 2); // 3
work(4, 5); // 9


for (let args of work.calls) {
  alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
}
