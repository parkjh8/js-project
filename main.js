//랜덤번호 지정
//유저가 번호를 입력한다 그리고 go라는 버튼을 누름
// 만약에 유저가 랜덤번호를 맞추면 맞췄음
//랜덤번호가 < 유저번호 DOWN
//랜덤번호 > 유저번호 UP
//RESET 버튼을 누르면 게임 리셋
//5번의 기회를 다 쓰면 게임이 끝난다.
//유저가 1~100 범위 밖에 숫자를 입력하면 알려준다. 기회를 깍지 않는다.
//유저가 이미 입력한 숫자일경우 알려준다 기회를 깎지 않는다.

let computerNum = 0;
let playbut= document.getElementById("playbutton");
let userinput = document.getElementById("user-input");
let resulta = document.getElementById("result-area");
let resetbut = document.getElementById("reset-button");
let chance = 5;
let gameover = false;
let chancearea = document.getElementById("chance-area");
let history=[]


playbut.addEventListener("click",play) //게임클릭시 함수 설정
resetbut.addEventListener("click",reset)
userinput.addEventListener("focus",function(){userinput.value=""})
console.log("chance",chance)

function pickRandomNum() {
    computerNum = Math.floor(Math.random()*100)+1; //랜덤번호 1~100까지숫자를 지정
    console.log("정답",computerNum)
    
}

function play() {

    let uservalue = userinput.value;
    if(uservalue <1 || uservalue >100){
        resulta.textContent="1과 100사이로 입력해주세요."
        return;
    }
    

    if(uservalue < computerNum){
        resulta.textContent="작습니다."
    }else if(uservalue > computerNum){
        resulta.textContent="큽니다"
    }else{
        resulta.textContent="맞습니다"
        gameover=true;
    }
    if(history.includes(uservalue)){
        resulta.textContent="이미입력한숫자입니다."
        return;
    }


    chance --;
    chancearea.textContent=`남은기회:${chance}번`

    history.push(uservalue)
 
    
    console.log("history값",history)
    if(chance <1){
        gameover=true;
    }

    if(gameover ==true){
        playbut.disabled=true;
    }
}
function reset(){
    //user input창이 정리되고
    userinput.value="";
    //새로운번호를 받아야한다.
    pickRandomNum();
    gameover=false;

    resulta.textContent="결과값이 여기 나옵니다."
}

pickRandomNum();