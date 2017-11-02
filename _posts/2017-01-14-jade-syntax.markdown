---
layout: post
title: "jade 문법 정리"
date: 2017-01-14
categories:
  - Jade
description: jade
image: /assets/images/fw1.jpg
image-sm: /assets/images/fw2.jpg
---

## jade
jade에 관한 자세한 문법은 [Jade Language Reference](http://jadelang.net/reference/){: target="_blank" }를 참고하세요.

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

## 부정문

```Jade
unless user.isAnonymous
	You're logged in as #{user.name}
```

```Jade
if !user.isAnonymous
	p You're logged in as #{user.name}
```

