/* dayuki_JS 2014.10.30 마크업 테스트를 위한 개인 파일 */

/*************************************************************************************************
용도 :	파일 경로로 접근하였을 때, 서버 경로로 리다이렉트 시킵니다.
변수 :	curl - 현재 브라우저에서 보여지는 화면의 주소
 	spstr - 현재 브라우저에서 보여지는 화면의 주소를 분리할 기준 루트폴더 명
	host -  리다이렉트 하고싶은 도메인주소나 본인 ip(localhost)
********************************/
var spstr = "htdocs";	
var host = "localhost";
var curl = location.href;

if(curl.indexOf(spstr) > -1){
	var temp = curl.split(spstr);
	var nurl = "http://"+host+temp[1];
	location.replace(nurl);

}else{
	console.log("You are already exist in domain or IP host.");
}



/*************************************************************************************************
용도 :	 include 함수.
인자 :	el - 소스가 삽입될 요소의 ID값
	url - 요소 안에 삽입될 소스가 포함된 파일

사용법 : imptHr("cont","template_test.html")
********************************/
function imptHr(el, url){
	var xhr = new XMLHttpRequest(); 
	xhr.open("GET", url, true); 
	xhr.onreadystatechange = function () { 
	  if (xhr.readyState == 4 && xhr.status == 200) { 
		document.getElementById(el).innerHTML = xhr.responseText; 
	  } 
	}; 
	xhr.send();
}

