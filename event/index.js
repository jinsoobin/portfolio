
function corp(no){
    // 공정거래 위원회 API 서버 동기화
    window.open("http://www.ftc.go.kr/bizCommPop.do?wrkr_no="+no,"","width=600 height=600");
}

function event1(){
    var user = document.getElementById("user");
    var email = document.getElementById("email");
    var tel = document.getElementById("tel");
    var number = document.getElementById("number");
    var check = document.getElementById("check");

    if(user.value==""){
        alert("참여자 이름을 입력하세요.");
        user.focus();
    }
    else if(email.value==""){
        alert("이메일을 입력하세요.");
        email.focus();
    }
    else if(tel.value==""){
        alert("휴대폰번호를 입력하세요.");
        tel.focus();
    }
    else if(number.value==""){
        alert("티켓번호를 입력하세요.");
        number.focus();
    }
    else if(check.checked==false){
        alert("이용약관에 동의해주세요.");
    }
    else{
        if(isNaN(tel.value)==true){
            alert(" 휴대폰번호는 숫자만 입력하세요.");
            user.focus();
        }
        else if(tel.value.length < 10){
            alert("휴대폰번호는 10자리 이상 입니다.");
            tel.focus();
        }
        else if(isNaN(number.value)==true){
            alert("티켓번호는 숫자만 입력하세요.");
            number.focus();
        }
        else if(number.value.length < 8){
            alert("티켓번호는 8자리 입니다.");
            number.focus();
        }
        else{
            alert("이벤트 신청이 완료되었습니다.");
            main.submit();
        }
    }
}

function cgv(){
    // window.location.reload();
    location.href="https://m.cgv.co.kr/";
}
function cgv_movie(){
    location.href="https://m.cgv.co.kr/WebAPP/MovieV4/movieList.aspx?mtype=now&iPage=1";
}
function cgv_movieaa(){
    location.href="https://m.cgv.co.kr/WebApp/TheaterV4/";
}
function cgv_reserve(){
    location.href="https://m.cgv.co.kr/WebApp/Reservation/QuickResult.aspx";
}
function cgv_event(){
    location.href="https://m.cgv.co.kr/WebApp/EventNotiV4/eventMain.aspx";
}















function jsb(){
    var jsb = document.getElementById("jsb");
    alert("010-3257-8851");
}