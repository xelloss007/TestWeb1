/**
 * 기본 데이터 타입 예제
 */



var num = 10;

// 동적 타입 : 자바에선 int를 선언하면 무조건 int지만, 자바스크립트는 값을 넣을 때 그 타입이 결정된다.
console.log('num : ' + num);

//타입 of 함수
num = 12.45;
console.log('num type : ' + typeof(num));
//타입 of 연산자
num = 'korea';
console.log('num type : ' + typeof num);

num = 3.4;
console.log('num : ' + num);

num = 3;


if(num = 4 ){ //num == 4 : js도 같냐는 == 를 사용한다! //  num = 4  : semi boolean (0 거짓, 그외의 값 참)
	console.log('같음');
}else{
	console.log('다름');
}
console.log('num : ' + num);

//while(1){ // true 대신  semi boolean이 지원되서 참일시 1을 넣어줌.
//	
//}

var tot;

console.log(tot);
console.log('dddddddddddd');

//var a = 'korea';
var a;
//var a = null;

//console.log(a);

// 거짓은 0, null , undefind 거짓
if( a ){ //num == 4 : js도 같냐는 == 를 사용한다! //  num = 4  : semi boolean (0 거짓, 그외의 값 참)
	console.log('같음1');
}else{
	console.log('다름1');
}
