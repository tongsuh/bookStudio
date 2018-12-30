var par = document.querySelector('par');
var par2 = document.querySelector('par2');
var par3 = document.querySelector('par3');
var par4 = document.querySelector('par4');
//从网上获取json，转化为js
//在IE上显示不出
  var requestURL = 'https://raw.githubusercontent.com/tongsuh/bookstudio/master/project/myjson.json';

  var request = new XMLHttpRequest();

  request.open('GET', requestURL);
  request.responseType = 'json';
  request.send();
//loadJSON
request.onload = function() {
var neirong = request.response;
populateHeader(neirong);
showHeroes(neirong);
}

//JSONObj转化JSON代码
//appendChild在子目录下新建内容
//textContent提取内容
function populateHeader(jsonObj) {
var myp1 = document.createElement('p');
myp1.textContent = jsonObj['xiaoshuo'];
par.appendChild(myp1);
//par par2 par3之类是js和html中连接的枢纽
var myp2 = document.createElement('p');
myp2.textContent = jsonObj['sanwen'];
par2.appendChild(myp2);

var myp3 = document.createElement('p');
myp3.textContent = jsonObj['zhuanji'];
par3.appendChild(myp3);

var myp4 = document.createElement('p');
myp4.textContent = jsonObj['mingzhu'];
par4.appendChild(myp4);


}
