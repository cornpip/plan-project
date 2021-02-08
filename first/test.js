function first(a,b,callback){
	let v=a*b;
	callback(v);
}

first(1,2,function(e){
    console.log(e);
    console.log('gi');
})