---
layout: post
title: "[Node.js] 사용자 정의 모듈 만들기"
date: 2017-01-17
categories:
  - Node.js
description: 사용자 정의 모듈 만들기
image: /assets/images/ade1.jpg
image-sm: /assets/images/ade2.jpg
---

자세한 내용은 [생활코딩 Javascript(nodejs)](https://opentutorials.org/course/2136/12444)
강좌를 참고하세요.

## 사용자 정의 모듈의 필요성
프로젝트가 커짐에 따라서 코드의 **복잡도**를 낮추고 코드의 효율적인 **재사용**을 
위해서 **사용자 정의 모듈**을 만들 필요가 있습니다.

## 기본 코드

{% highlight javascript linenos=table %}
//module.js
var sum=function(a, b){
	return a+b;
}
console.log(sum(1,2));
{% endhighlight %}

### 실행 결과

	node module.js
	> 3

위와 같은 코드가 매우 긴 코드라 가정할 때 이 코드를 여러 곳에서 사용해야 하는 상황이라면
아래와 같이 사용자 정의 모듈을 만드는 것이 효율적일 수 있습니다.

## 사용자 정의 모듈을 만들기

새로운 **`sum.js`** 파일을 아래와 같이 만들어 줍니다.

{% highlight javascript linenos=table %}
//./lib/sum.js
module.exports = function(a, b){
	return a+b;
};
{% endhighlight %}

**`sum.js`**파일을 아래와 같이 require해줍니다.

{% highlight javascript linenos=table %}
//module.js
var sum = require('./lib/sum.js');
console.log(sum(1,2));
{% endhighlight %}

## 여러 개의 함수를 가진 모듈 만들기

{% highlight javascript linenos=table %}
//./lib/calculator.js
module.exports.sum = function(a, b){
	return a+b;
};
module.exports.avg = function(a, b){
	reutnr (a+b)/2;
};
{% endhighlight %}


{% highlight javascript linenos=table %}
//module.js
var cal = require('./lib/calculator.js');
console.log(cal.sum(1, 2));
console.log(cal.avg(1, 3));
{% endhighlight %}

### 실행 결과

	node module.js
	> 3
	> 1.5

