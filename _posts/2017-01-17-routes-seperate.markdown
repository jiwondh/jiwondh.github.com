---
layout: post
title: "[Node.js] 라우터 분리하기"
author: jiwon
date: 2017-01-17
categories: [ Nodejs ]
image: assets/images/nodejs.png
toc: true
featured: false
hidden: false
[//]: # (rating: .5)
---

NodeJs 라우터 분리하는 방법을 알아봅시다.

<br/>

자세한 내용은 [생활코딩 Javascript(nodejs)](https://opentutorials.org/course/2136/12445)
강좌와 [Express - Using middleware](http://expressjs.com/ko/guide/using-middleware.html)를 참고하세요.

## 라우터 분리의 필요성
라우팅 작업이 늘어남에 따라서 아래와 같이 라우팅을 **애플리케이션 레벨의 미들웨어** 로서 관리하기에는
어려움이 생길 수 있습니다. 이에 따라 **서로 연관되어 있는 라우터끼리 쪼개서 파일로 분가** 시킬
필요가 있습니다.

<br/>

## 애플리케이션 레벨의 미들웨어

``` javascript
//app.js
var express = require('express');
var app = express();

app.get('/p1/r1', function(req, res){
	res.send('Hello /p1/r1');		
});

app.get('/p1/r2', function(req, res){
	res.send('Hello /p1/r2');		
});

app.get('/p2/r1', function(req, res){
	res.send('Hello /p2/r1');		
});

app.get('/p2/r2', function(req, res){
	res.send('Hello /p2/r2');		
});
```

<br/>

## 라우터 레벨의 미들웨어

### 기본적인 원리(파일로 분할하기 전)

p1으로 들어오는 모든 요청은 라우터에 위임하므로 아래와 같이
인자 값을 **`'/p1/r1'`** 에서 **`'/r1'`** 로 간략화할 수 있습니다.

```javascript
//app.js
var express = require('express');
var app = express();

var p1 = express.Router();
p1.get('/r1', function(req, res){
	res.send('Hello /p1/r1');		
});

p1.get('/r2', function(req, res){
	res.send('Hello /p1/r2');		
});
app.use('/p1', p1);

var p2 = express.Router();
p2.get('/r1', function(req, res){
	res.send('Hello /p2/r1');		
});

p2.get('/r2', function(req, res){
	res.send('Hello /p2/r2');		
});
app.use('/p2', p2);

app.listen(3000, function(){
	console.log('connected');		
});
```

위와 같은 코드는 언뜻 보기에도 이전보다 단순해지지 않았음을 알 수 있습니다.
이것의 효용은 라우터를 파일로 분할함으로써 나타납니다.

### 라우터를 파일로 분할하기

라우터를 모듈로 만들어 줍니다.

``` javascript
//app.js
var express = require('express');
var app = express();

var p1 = require('./routes/p1.js');
app.use('/p1', p1);

var p2 = require('./routes/p2.js');
app.use('/p2', p2);

app.listen(3000, function(){
	console.log('connected');		
});
```

``` javascript
//./routes/p1.js
var express = require('express');
var router = express.Router();
router.get('/r1', function(req, res){
	res.send('Hello /p1/r1');		
});

router.get('/r2', function(req, res){
	res.send('Hello /p1/r2');		
});
module.exports = router;
```

``` javascript
//./routes/p2.js
var express = require('express');
var router = express.Router();
router.get('/r1', function(req, res){
	res.send('Hello /p2/r1');		
});

router.get('/r2', function(req, res){
	res.send('Hello /p2/r2');		
});
module.exports = router;
```

### 확장

위의 코드에서 **`p1.js`** 와 **`p2.js`** 는 완전히 고립되어 있습니다.
물론 고립되어 있다는 것은 어떤 문제 발생의 여지를 줄여주기도 하지만
**`app.js`** 에서 생성된 데이터는 사용하지 못한다는 단점이 있습니다.  

이는 아래와 같이 **`require`**에서 **`app`**이란 객체를 전달함으로써 해결 할 수 있습니다.

``` javascript
//app.js
var express = require('express');
var app = express();

var p1 = require('./routes/p1.js')(app); //객체 app을 전달
app.use('/p1', p1);

var p2 = require('./routes/p2.js');
app.use('/p2', p2);

app.listen(3000, function(){
	console.log('connected');		
});
```

함수로 만들어져 객체 **`app`** 을 전달받고 **라우터를 리턴**합니다.

``` javascript
//./routes/p1.js
module.exports = function(app){//함수로 만들어 객체 app을 전달받음
	var express = require('express');
	var router = express.Router();
	router.get('/r1', function(req, res){
		res.send('Hello /p1/r1');		
	});

	router.get('/r2', function(req, res){
		res.send('Hello /p1/r2');		
	});
	return router;	//라우터를 리턴
};
```
