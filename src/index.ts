import { Observable, of, interval, zip, from, fromEvent, fromEventPattern, range, throwError, concat, timer, iif, pipe, forkJoin, merge, race, empty, animationFrameScheduler, observable, Subscriber, } from 'rxjs';
import { map, reduce, filter, take, catchError, mergeMap, count, max, min, buffer, throttleTime, mapTo, delay, bufferCount, bufferTime, bufferToggle, bufferWhen, expand, groupBy, toArray, switchMap, window, takeWhile, startWith, scan, mergeAll, debounce, debounceTime, distinct, elementAt, first, last, ignoreElements, sample, skip, throttle, tap, delayWhen, observeOn, timeInterval, timestamp, timeout, defaultIfEmpty, find, repeatWhen, findIndex, publish, share, }
    from "rxjs/operators";
import { createImportSpecifier } from 'typescript';
import { resolve } from '../webpack.config';
// var observable = Observable.create((observer: any) => {
//     observer.next('Hello World!');
//     observer.next('Welcome to JavaTpoint!');
//     observer.complete();
//     observer.next('Bye');
// })
// observable.subscribe(
//     (x: any) => logItem(x),
//     (error: any) => logItem('Error: ' + error),
//     () => logItem('This is the first Example')
// );
// function logItem(val: any) {
//     var node = document.createElement("li");
//     var textnode = document.createTextNode(val);
//     node.appendChild(textnode);
//     document.getElementById("list").appendChild(node);
// }


// var observer = new Observable(
//     function subscribe(subscriber) {
//         subscriber.next("My First Observable")
//     }
// );
// observer.subscribe(x => console.log(x));

// let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
// let case1 = test1.pipe(
//     filter(x => x % 2 === 0),
//     reduce((acc, one) => acc + one, 0)
// )

// case1.subscribe(x => console.log(x))

// let test = interval(0.1);
// let case2 = test.pipe(take(5));

// case2.subscribe(x => console.log(x))
// const githubUsers = `https://api.github.com/users?per_page=5000`;
// const users = ajax.getJSON(githubUsers)
// const subscribe = users.subscribe(
//     res => console.log(res),
//     err => console.error(err)
// );


// let arr = from(test1)
// arr.subscribe(x => console.log(x))

// const promiseSou = from(new Promise(resolve => resolve("Hello javapoint")))

// const subscripbe = promiseSou.subscribe(val => console.log(val))

// function* gen(spped: any) {
//     let i = spped
//     while (true) {
//         yield i;k
//         i = 2 * i;
//     }
// }

// const itre = gen(3);
// const result = from(itre).pipe(take(3))
// result.subscribe(val => console.log(val))

// const click = fromEvent(document, 'click')
// click.subscribe(x => console.log(x))

// const source = fromEvent(document, 'mouseover');
// const example = source.pipe(map(event => `Event Time: ${event.timeStamp}`))
// const sub = example.subscribe(val => console.log(val))


// function harsh(handl: any) {
//     document.addEventListener('click', handl)
// }

// function harsh2(handle: any) {
//     document.addEventListener('click', handle)

// }

// const clicks = fromEventPattern(
//     harsh,
//     harsh2
// )


// const nodeLikeRequest = (url: string, callback: (arg0: Date) => void) => {
//     setInterval(() => callback(new Date()), 1000)
// }

// const nodeLikeRequestAdaptor = (callback: any) => {
//     nodeLikeRequest('some url', callback)
// }

// fromEventPattern(
//     nodeLikeRequestAdaptor
// ).subscribe(console.log)


// const numbers = interval(1000)
// const getnum = numbers.pipe(take(8))

// getnum.subscribe(x => console.log(x))

// of([1, 2, 3, 4, 5, 6, 7, 8, 9])
//     .subscribe(
//         next => console.log('This is the next', next),
//         err => console.log("this is error", err),


//     )

// const source = of({ name: 'Alexa' }, function hello() {
//     return "Hello"
// })
// const sun = source.subscribe(val => console.log(val))


// const ran = range(1, 5)
// const ren = ran.subscribe(x => console.log(x))


// const errr = concat(of(1, 2, 3, 4, 5, 6, 7, 8, 9), throwError(new Error('Oops! Error is occurred')))
// errr.subscribe(x => console.log(x), e => console.log(e))

// interval(1000).pipe(
//     mergeMap(x => x === 56
//         ? throwError('This is an error message!')
//         : of('a', 'b', 'c')
//     ),
// ).subscribe(x => console.log(x), e => console.log(e))

// const time = timer(1);
// const subv = time.subscribe(val => console.log(val)
// )
// let junk = 0.3

// const source = timer(1000, junk)
// const syb = source.subscribe(x => console.log(x))


// const r$ = of("R")
// const x$ = of("X")
// interval(0.3)
//     .pipe(mergeMap(v => iif(() => v % 4 === 0, r$, x$)))

//     .subscribe(console.log);

// interval(100)
//     .pipe(mergeMap(v => iif(() => !!(v % 100), of(v), of(0))))
//     .subscribe(console.log);


// let nmu = of(1, 3, 5, 6, 12, 13, 24, 28)
// let val = nmu.pipe(count(a => a % 3 === 0))
// val.subscribe(x => console.log("This is your value " + x))

// const list1 = [11, 13, 26, 70, 58, 2, 40]
// const final = from(list1).pipe(min((a, b) => a + b));
// final.subscribe(x => console.log("The min value is " + x))
// let prodcuts: Array<any> = [
//     { id: 'A', price: 10000 },
//     { id: 'B', price: 7500 },
//     { id: 'C', price: 4500 },
//     { id: 'D', price: 5000 },
//     { id: 'E', price: 1000 },
// ]

// let total = from(prodcuts).pipe(reduce((acc, productsdet) => acc + productsdet.price, 0))
// total.subscribe(x => console.log("This is Your Total " + x))




// const clicks$ = fromEvent(document, "click")
// clicks$.pipe(buffer(clicks$.pipe(throttleTime(500))))
//     .subscribe(() => console.log("This is Your double click"))


// const my = interval(1000)
// const bufferva = fromEvent(document, "click")
// const bufferval = my.pipe(buffer(bufferva))
// const snf = bufferval.subscribe(val => console.log("This is your value ", val))

// const myInterval = interval(1000);
// //Create an observable that emits every time document is clicked
// const bufferBy = fromEvent(document, 'click');
// const myBufferedInterval = myInterval.pipe(buffer(bufferBy));
// const snj = myBufferedInterval.subscribe(val =>
//     console.log(' Buffered Values:', val)
// );



// let list2 = of(1, 2, 3, 4, 5)
// let list3 = of(4, 5, 6, 7, 8, 9, 10, 11)
// let fin = race(list2, list3)

// fin.subscribe(x => console.log(x)
// )


// const f = interval(4000)
// const s = interval(3000)
// const t = interval(2000)
// const fa = interval(1000)

// const kl = merge(
//     f.pipe(mapTo("first")),
//     s.pipe(mapTo("second")),
//     t.pipe(mapTo("Third")),
//     fa.pipe(mapTo("fourth"))
// )

// kl.subscribe(x => console.log(x))

// const h = t.pipe()
// const y = h.subscribe(val => console.log(val))


// const example = race(
//     //emit every 1.5s  
//     interval(1500),
//     //emit every 1s  
//     interval(1000).pipe(mapTo('1s won!')),
//     //emit every 2s  
//     interval(2000),
//     //emit every 2.5s  
//     interval(2500)
// );
// const ag = example.subscribe(val => console.log(val));

// const first = of('first').pipe(
//     delay(100),
//     map(_ => {
//         throw 'warning';
//     })
// );
// const second = of('second').pipe(delay(200));
// const third = of('third').pipe(delay(300));
// race(first, second, third).subscribe(val => console.log(val));

// const sourc = interval(1000)
// const bufferThree = sourc.pipe(bufferCount(3, 1))
// const hju = bufferThree.subscribe(val => console.log(val))

// const click1 = interval(2000)
// const bufferd = click1.pipe(bufferTime(1000, 1000))
// bufferd.subscribe(x => console.log(x))



// const sourceInterval = interval(1000);
// //start first buffer after 5s, and every 5s after  
// const startInterval = interval(1000);
// //emit value after 3s, closing corresponding buffer  
// const closingInterval = (val: any) => {
//     console.log(`Value ${val} emitted, starting buffer! Closing in 3s!`);
//     return interval(1000);
// };
// //every 5s a new buffer will start, collecting emitted values for 3s then emitting buffered values  
// const bufferToggleInterval = sourceInterval.pipe(
//     bufferToggle(startInterval, closingInterval)
// );
// const dd = bufferToggleInterval.subscribe(val =>
//     console.log('Emitted Buffer:', val)
// );


// console.clear();
// const getXYCoordinates = pipe(
//     map<[MouseEvent], {}>(e => e.map(v => ({ x: v.clientX, y: v.clientY }))),
//     map(e => JSON.stringify(e))
// )
// const ert = pipe(
//     bufferToggle(
//         fromEvent(document, 'mousedown'),
//         _ => fromEvent(document, 'mouseup')
//     )
// )
// fromEvent(document, 'mousemove')
//     .pipe(
//         ert,
//         getXYCoordinates
// const oneSecondInterval = interval(1000);
// //return an observable that emits value every 3 seconds  
// const threeSecondInterval = () => interval(2000);
// //every three seconds, emit buffered values  
// const bufferWhenExample = oneSecondInterval.pipe(
//     bufferWhen(threeSecondInterval)
// );
// const subscribe = bufferWhenExample.subscribe(val =>
//     console.log('Emitted Buffer values are: ', val)
// );  
//     ).subscribe(console.log);

// const powersOfTwo = of(1, 2, 3, 4, 5).pipe(
//     expand(x => of(x).pipe(delay(5000))),
//     take(10)
// );
// powersOfTwo.subscribe(x => console.log(x));


// const rtu = of(1);
// const yt = rtu.pipe(
//     expand(val => {
//         console.log(`The Passed value is :${val}`)
//         return of(1 + val)
//     }),
//     take(10)
// )

// const kju = yt.subscribe(x => console.log(x))


// const pepole = from([
//     { name: 'Alex', age: 31 },
//     { name: 'Adam', age: 28 },
//     { name: 'Alia', age: 21 },
//     { name: 'David', age: 35 },
//     { name: 'Rhea', age: 28 },
//     { name: 'Samson', age: 31 },
//     { name: 'Dhoni', age: 35 }
// ])

// from(pepole).pipe(
//     groupBy(
//         persone => persone.name,
//         p => p.age
//     ),
//     mergeMap(group => zip(of(group.key), group.pipe(toArray())))
// ).subscribe(x => console.log(x))


// of(
//     { course_id: 1, name: "Java" },
//     { course_id: 2, name: "Vue.js" },
//     { course_id: 2, name: "Angular12" },
//     { course_id: 1, name: "Python" },
//     { course_id: 3, name: "PHP" },
// ).pipe(
//     groupBy(p => p.course_id),
//     mergeMap((group$) => group$.pipe(reduce((acc, cur) => [...acc, cur], [])))
// ).subscribe(p => console.log(p))
// const mapexe = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
// const exem = mapexe.pipe(map(val => val + 20))
// const mapsub = exem.subscribe(x => console.log(x)
// )

// const epop = pepole.pipe(map(({ age }) => age)).subscribe(val => console.log(val))

// const maptoint = interval(3000)
// const maptoexe = maptoint.pipe(mapTo("This is the rxjs")).subscribe(val => console.log(val))

// const id = document.getElementById("button") 

// const maptoint2 = fromEvent(id, "click")
// const maptointexe = maptoint2.pipe(mapTo('This log is by me')).subscribe(val => console.log(val))

// const lettrs = of("a", "b", "c", "d", "e", "f")
// const lettrsexe = lettrs.pipe(mergeMap(x => interval(2000).pipe(map(i => x + i))))
//     .subscribe(x => console.log(x))
// const source$ = interval(1000)

// source$.pipe(mergeMap(val => interval(2000).pipe(take(2)),
//     // resultselectore
//     (oVal, iVal, oIndex, iIndex) => [oIndex, oVal, iIndex, iVal],
//     // concurrent
//     2
// )).subscribe(val => console.log(val))

// const myPromise = (val: string) => new Promise(resolve => resolve(`${val} Welcome To Rxjs`));
// const source$1 = of('Hello World').pipe(mergeMap(val => myPromise(val), (valueFromSource, valueFromPromise) => {
//     return `Source:${valueFromSource} ; Promise${valueFromPromise}`
// })).subscribe(val => console.log(val))

// const api_url = `https://jsonplaceholder.typicode.com/todos/1`
// const click$1 = fromEvent(id, 'mouseover').pipe(mergeMap(() => ajax.getJSON(api_url))).subscribe(x => console.log(x)
// )

// const saveLocation = (location: any) => {
//     return of(location).pipe(delay(500))
// }

// const clicks$3 = fromEvent(document, 'click');
// clicks$3.pipe(mergeMap((e: MouseEvent) => {
//     return saveLocation({
//         x: e.clientX,
//         y: e.clientY,
//         timestamp: Date.now()
//     })
// })
// ).subscribe(x => console.log(x))


// const tett = of("Hello guys i am Harsh")
// const case1 = tett.pipe(mergeMap((value) => of(value + " i am from rxjs"))).subscribe(x => console.log(x))

// timer(0, 5000).pipe(switchMap(
//     _ => interval(2000),
//     (ouetrValue, innerValue, ouetrIndex, innerIndex) => ({
//         ouetrValue,
//         innerValue,
//         ouetrIndex,
//         innerIndex
//     })
// )
// ).subscribe(console.log)

// const switched = of(1, 2, 3, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20).pipe(switchMap((x: number) => of(x, x ** 2, x ** 3)))
// switched.subscribe(x => console.log(x))

// fromEvent(document, "click").pipe(switchMap(() => interval(1000))).subscribe(console.log);

// const cout = 60;
// // elem ref

// const remaininglable = document.getElementById('remaing')
// const pausebutton = document.getElementById('pause')
// const resumebutton = document.getElementById("resume")

// // strem
// const interval$ = interval(1000).pipe(mapTo(-1))
// const pause$ = fromEvent(pausebutton, "click").pipe(mapTo(false));
// const resume$ = fromEvent(resumebutton, "click").pipe(mapTo(true));
// const timer$ = merge(pause$, resume$).pipe(startWith(true),
//     switchMap(val => (val ? interval$ : empty())),
//     scan((acc, curr) => (curr ? curr + acc : acc), cout),
//     takeWhile(v => v >= 0)
// )
//     .subscribe((val: any) => remaininglable.innerHTML = val)

// const source = timer(0, 1000);
// const example = source.pipe(window(interval(5000)));
// const count1 = example.pipe(scan((acc, curr) => acc + 1, 0));
// const subscribe = count1.subscribe(val => console.log(`Window ${val}:`));
// const subscribeTwo = example
//     .pipe(mergeAll())
//     .subscribe(val => console.log(val));
// const click$4 = fromEvent(document, "click")
// click$4.pipe(buffer(click$4.pipe(throttleTime(500))),
//     filter(clickArray => clickArray.length > 1)
// ).subscribe(() => console.log("This is Dounbele click"))


// const example34 = of('This is first example', 'This is second page', 'This is third page', 'This is last page')

// const deexmaple34 = example34.pipe(debounce(() => timer(20000)))
// const desub = deexmaple34.subscribe(val => console.log(val))

// // const btn = document.getElementById('button')
// // const btn_clicks = fromEvent(btn, "click")
// // const yu = btn_clicks.pipe(debounceTime(0.2))
// // yu.subscribe(x => console.log(x))

// // let all_nums = of(1, 2, 3, 4, 5, 6, 7, 8, 9)
// // let final_val = all_nums.pipe(distinct())
// // final_val.subscribe(x => console.log(+ x))

// const obj1 = [
//     { id: 1, name: "harsh" },
//     { id: 2, name: "Alex" },
//     { id: 3, name: "Akia" },
//     { id: 4, name: "Aisha" },
//     { id: 5, name: "harsh23" },
//     { id: 6, name: "java" },
//     { id: 7, name: "javascript" }
// ];
// from(obj1).pipe(distinct(e => e.id)).subscribe(x => console.log(x));


// let result = fromEvent(document, "click")
// result.pipe(elementAt(2)).subscribe(x => console.log(x))

// // const source$t = interval(1000)
// // const pip = source$t.pipe(filter(num => num <= 3)).subscribe(
// //     val => console.log(`This is Your  value : ${val}`)
// // )

// const firstd = from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20])
// firstd.pipe(last(num => num % 25 == 0, 'Nothing to Emit')).subscribe(x => console.log(x))

// const ignore = interval(1000)
// const ignorexe = ignore.pipe(take(6))

// ignorexe.subscribe(
//     val => console.log(`Next : ${val}`),
//     val => console.log(`Error : ${val}`),
//     () => console.log(`The task was Completed`)
// )
// const error3 = ignore.pipe(mergeMap(val => {
//     if (val === 4) {
//         return throwError(`ERROR AT NO ${val}`)
//     } else {
//         ignoreElements()
//     }
// }))
// error3.subscribe(
//     val => console.log(`NEXT : ${val}`),
//     val => console.log(`ERROR : ${val}`),
//     () => console.log(`This is also compleate`)
// )

// const sample1 = zip(
//     from(["harsh", "html", "css", "java", "javascript"]),
//     interval(4000)
// )
// const sample1ex = sample1.pipe(sample(interval(1000)))
// sample1ex.subscribe(x => console.log(x))

// const listener1 = merge(
//     fromEvent(document, 'mousedown').pipe(mapTo(false)),
//     fromEvent(document, "mousemove").pipe(mapTo(true))
// ).pipe(sample(fromEvent(document, 'mouseup')))
//     .subscribe(isDragging => console.log(`Were You Dragging ${isDragging}`))

// const skip1 = interval(1000)
// const skipexe = skip1.pipe(skip(1))
//     .subscribe(x => console.log(x),
//         () => console.log(`Your task was compleated`)
//     )

// const thro = skip1.pipe(throttle(val => interval(2000)))
// thro.subscribe(val => console.log(val))

// const harsh = { id: 1, name: "harsh" }
// harsh.subscribe(
//     x => console.log(harsh.id),
//     e => console.log(e),
//     () => console.log(`Your task was compleated`)
// )

// const source = of(1, 2, 3, 4, 5);
// const example = source.pipe(
//     tap(val => console.log(` Before map : ${val}`)),
//     map(val => val + 10),
//     tap(val => console.log(` After map : ${val}`)),

// )
//     .subscribe(val => console.log(val),
//         x => console.log(x),
//         () => console.log(`Your E-BID is completed`)
//     );

// const example = of(null)
// const message = merge(
//     example.pipe(mapTo("Hello!!!")),
//     example.pipe(mapTo("Hello!!!!!!!"), delay(4000)),
//     example.pipe(mapTo("Hello!!!!!!!!!1!!!"), delay(3000)),
//     example.pipe(mapTo("Hello!!!2@@@@@@@@@@@@@@@"), delay(4000)),
//     example.pipe(mapTo("Hello!!!#################"), delay(5000)),
//     example.pipe(mapTo("Hello!!!$$$$$$$$$$$$$$$$$$$$$$$$$$"), delay(9000)),
// )
// message.subscribe(
//     x => console.log(x)
// )

// const message = interval(1000);

// const delaywait = () => interval(5000)
// const delaywaitex = message.pipe(delayWhen(() => timer(3000)))
//     .subscribe(x => console.log(x))


// const clicks = fromEvent(document, 'click');
// const delayedClicks = clicks.pipe(
//     delayWhen(event => interval(Math.random() * 5000)),
// );
// delayedClicks.subscribe(x => console.log(x));

// const intervals = interval(100)
// let case1 = intervals.pipe(
//     observeOn(animationFrameScheduler)
// ).subscribe(x => console.log)

// const ele = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
// const final_val1 = ele.pipe(timeInterval())
// final_val1.subscribe(x => console.log(x))

// fromEvent(document, "mousedown")
//     .pipe(timeInterval(), tap(console.log))
//     .subscribe(i => (document.body.innerText = `Time since last click (in milisecond) : ${i.interval}`))

// let list123 = of(1, 2, 3, 4, 5, 6, 7, 8, 9)
// let final_val13 = list123.pipe(timestamp());
// final_val13.subscribe(x => console.log(x))


// const time = interval(1000)
// const final_val3 = time.pipe(timeout(new Date("November 09, 2020 19:10:45")))
// final_val3.subscribe(
//     x => console.log(x),
//     e => console.error(e),
//     () => console.log(`Your Task was completed`)
// )

// let list1 = interval(1000);
// let final_val = list1.pipe(timeout(9));
// final_val.subscribe(
//     x => console.log(x),
//     e => console.log(e),
//     () => console.log("Task complete")
// );

// const seconds = interval(900);
// seconds.pipe(timeout(1500))
//     .subscribe(
//         value => console.log(value),
//         err => console.log(err)
//     )
// seconds.pipe(timeout(900))
//     .subscribe(
//         value => console.log(value),
//         err => console.log(err)
//     )

// const array1 = interval(100)
// const arrexe = array1.pipe(take(10), toArray())
// arrexe.subscribe(x => console.log(x))

// const emoty = of().pipe(defaultIfEmpty('Observable is .of() Empty! please try again'))
//     .subscribe(val => console.log(val))
// const status = document.getElementById('status');
// // streams  
// const clicks$ = fromEvent(document, 'click');
// clicks$
//     .pipe(
//         find((event: any) => event.target.id === 'box'),
//         mapTo('You have Found me'),
//         startWith('Hey! Find me'),
//         // reset when click outside box  
//         repeatWhen(() =>
//             clicks$.pipe(filter((event: any) => event.target.id !== 'box'))
//         )
//     )
//     .subscribe(message => (status.innerHTML = message));

// let list1 = of(15, 22, 25, 45, 55, 66, 77, 88, 99);
// let final_val = list1.pipe(findIndex(x => x % 5 === 0),);
// final_val.subscribe(x => console.log(x));

// const source$5 = interval(0.5);
// const example = publish()(source$5.pipe(
//     tap(x => console.log(`Now start ${x}`))
// ))
// const subscribeOne = example.subscribe(val => console.log(`Subscribe One is : ${val}`));


// const subscribeTwo = example.subscribe(val => console.log(`Subscribe Two is : ${val}`))

// setTimeout(() => {
//     example.connect()
// }, 0.5)

// // RxJS v6+


// emit value in 1s

// let observer = timer(1000).pipe(take(5), share())
// const subscri_one = observer.subscribe(
//     x => console.log(`Value from Sub1 : ${x}`)
// )
// const subscri_two = observer.subscribe(
//     x => console.log(`Value from Sub2 : ${x}`)
// )
// setTimeout(() => {
//     const subsc = observer.subscribe(
//         x => console.log(`Value From Sub3 : ${x}`)
//     )
// }, 1000);


// const source = timer(1000)
// const example = source.pipe(
//     tap(() => console.log(`****SIDE EFFECT****`)),
//     mapTo(`***RESULT***`)
// );

// const su = example.subscribe(x => console.log(x))

// const shared = example.pipe(share())
// const subv = shared.subscribe(val => console.log(val))
// const subvc = shared.subscribe(val => console.log(val))
// const subvca = shared.subscribe(val => console.log(val))
// const subvcad = shared.subscribe(val => console.log(val))

// const errorr = throwError("There is an error !!");
// const example345 = errorr.pipe(catchError(val => of(`Aleart Error : ${val}`)));
// const yuii = example345.subscribe(x => console.log(x));

// let al_nums = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13)
// let final_val12 = al_nums.pipe(
//     map(el => {
//         if (el === 8) {
//             throw new Error("This is an error at number error")
//         } else {
//             return el;
//         }
//     }),
//     catchError(err => {
//         console.error(err.message)
//         return of("From Catch error ")
//     })
// ).subscribe(
//     x => console.log(x),
//     err => console.log(err),
//     () => console.log(`congratulation You are completed your daliy task`),
// )

// of(1, 2, 3, 4, 5).pipe(
//     map(n => {
//         if (n === 4) {
//             throw "Four!!"
//         } else {
//             return n;
//         }
//     }),
//     catchError(err => of("|", "||", "|||", "|V", "V"))
// ).subscribe(x => console.log(x),
//     err => console.error(err),
//     () => console.log(`You have compoleted your daliy task plese see agin tommorow`)
// )

// const bad = () => new Promise((resolve, reject) => reject("REJECTED!!"))

// const sourecce = timer(1000)
// const exam = sourecce.pipe(
//     mergeMap(_ => from(bad()).pipe(catchError(err => of(`This is an bad cradanial ${err}`)))
//     )
// );
// const ow = exam.subscribe(
//     x => console.log(x),
//     err => console.error(err),
//     () => console.log(`You haave the right cradatial ang you are aligiablr to log in this page`)
// )



const observer = new Observable(subscriber => {
    subscriber.next(10);
    subscriber.next(20);
    subscriber.next(30);
    setTimeout(() => {
        subscriber.next(40)
        subscriber.complete()
    }, 1000);
})

console.log(`This are value is just before subscribe`);

observer.subscribe(
    x => console.log(`This is Your values : ${x}`),
    err => console.log(`This is Your values : ${err}`),
    () => console.log(`Subscriber was Done successfully`)
)

console.log(`this is values just before subscribe`);