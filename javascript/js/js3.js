window.onload = () => {
    
}

let a = function() {
    console.log("a 함수 호출");
}

a();

console.log(typeof a);
// js에서는 변수에 함수 가능 -> callback함수

let b = (f) => {
    console.log("테스트가 프린트 되기 전에 무조건 실행")
    f();
}

b(a);

b(function(){console.log("test")});

(function(){console.log("test2")}());