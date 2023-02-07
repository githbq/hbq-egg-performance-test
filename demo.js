console.log('1');   //同步代码
 
setTimeout(function () {
 	console.log('2');  //宏任务里的同步代码
		process.nextTick(function () {
		console.log('3');  //宏任务里的微任务
	})
 new Promise(function (resolve) {
 console.log('4');  //宏任务里同步代码
	resolve();
	}).then(function () {
	console.log('5')  //宏任务里的微任务
	})
});
 
process.nextTick(function () {
 console.log('6');    //微任务
});
 
new Promise(function (resolve) {
 console.log('7');  //同步代码
 resolve();
}).then(function () {
 console.log('8')  //微任务
})
 
setTimeout(function () {
 console.log('9');   //宏任务里的同步代码
 process.nextTick(function () {
 console.log('10');  //宏任务里的微任务
 });
 new Promise(function (resolve) {
 console.log('11');  //宏任务里的同步代码
 resolve();
 }).then(function () {
 console.log('12')  //宏任务里的微任务
 })
});   
 
// 1 7 6 8 2 4 3 5 9 11 10 12