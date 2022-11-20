---
layout: post
title: "jade 문법 정리"
author: jiwon
date: 2017-01-14
categories: [ Jade ]
image: assets/images/jade.png
toc: true
featured: false
hidden: false
[//]: # (rating: .5)
---

> Jade 문법에 대하여 알아봅시다.

<br/>

jade에 관한 자세한 문법은 [Jade Language Reference](http://jade-lang.com/){: target="_blank" }를 참고하세요.

## 조건문(conditionals)

```jade
- var user = { description: 'foo bar baz' }
- var authorised = false
#user
	if user.description
		h2 Description
		p.description= user.description
	else if authorised
		h2 Description
		p.description.
			User has no description,
			why not add one...
	else
		h1 Description
		p.description User has no description
```

### 결과

```html
<div id="user">
	<h2>Description</h2>
	<p class="description">foo bar baz</p>
</div>
```

<br/>

## 부정문

```Jade
unless user.isAnonymous
	You're logged in as #{user.name}
```

```Jade
if !user.isAnonymous
	p You're logged in as #{user.name}
```

