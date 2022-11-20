---
layout: post
title: "[Algorithm] 트리와 트리순회"
author: jiwon
date: 2017-10-15
categories: [ Algorithm ]
image: assets/images/tree.png
toc: true
featured: false
hidden: false
[//]: # (rating: .5)
---

트리의 개념과 트리 순회에 대하여 알아봅시다.

# 이진트리의 순회(traversal)

- 순회 : 이진 트리의 모든 노드를 방문하는 일

<br/>

## 순회를 위한 작업 3가지

1. **`D`** : 현재 노드를 방문하여 **데이터**를 읽는 작업 
2. **`L`** : 현재 노드의 **==왼쪽== 서브트리**로 이동하는 작업
3. **`R`** : 현재 노드의 **==오른쪽== 서브트리**로 이동하는 작업 

<br/>

## 순회 종류 4가지 (노드 방문 순서에 따라)

- **전위 순회 (Preorder Traversal)**
- **중위 순회 (Inorder Traversal)**
- **후위 순회 (Postorder Traversal)**
- **레벨 오더 순회(level-order Traversal)** 

<br/>

### 1. 전위 순회 (Preorder Traversal)

- 현재 노드를 방문하여 **데이터**를 읽는 작업 **`D`** 을 *가장 먼저* 수행하여 **`DLR`** 의 순서로 순회하는 방법 

![5933062B-210F-42B2-9598-48A93C29E100](https://farm5.staticflickr.com/4471/36997203284_83c0782bbc_o.png)

{% highlight vb%}

PREORDER-TREE-WALK(x)
  if x != NIL
  	print key[x] // D
  	PREORDER-TREE-WALK(left[x])  // L
  	PREORDER-TREE-WALK(right[x]) // R

{% endhighlight %}

<br/>

### 2. 중위 순회 (Inorder Traversal)

- 현재 노드를 방문하여 **데이터**를 읽는 작업 **`D`** 을 `L`과 `R`의 사이에 수행하여 **`LDR`** 의 순서로 순회하는 방법 

![C879F19B-4D48-4E1A-B758-DA221FF7DEC6](https://farm5.staticflickr.com/4490/36997208484_0a685c7771_o.png)

{% highlight vb%}

INORDER-TREE-WALK(x)
  if x != NIL
  	INORDER-TREE-WALK(left[x])  // L
  	print key[x] // D
  	INORDER-TREE-WALK(right[x]) // R

{% endhighlight %}

<br/>

### 3. 후위 순회 (Postorder Traversal)

- 현재 노드를 방문하여 **데이터**를 읽는 작업 **`D`** 을 *가장 나중에* 수행하여 **`LRD`** 의 순서로 순회하는 방법

![94A0694C-FC49-438C-9E7B-4C065871A231](https://farm5.staticflickr.com/4445/36997213604_d6b2faa386_o.png)

{% highlight vb%}

POSTORDER-TREE-WALK(x)
  if x != NIL
  	PREORDER-TREE-WALK(left[x])  // L
  	PREORDER-TREE-WALK(right[x]) // R
  	print key[x] // D

{% endhighlight %}

<br/>

### 4. 레벨 오더 순회(level-order Traversal)

- 레벨 순으로 방문, 동일 레벨에서는 왼쪽에서 오른쪽 순서로
- 큐(queue)를 이용하여 구현

![4A70D534-5BF2-41A7-9034-C4A042DB978B](https://farm5.staticflickr.com/4489/36997217194_110aa6c398_o.png)

{% highlight vb%}

LEVEL-ORDER-TREE-TRAVERSAL()
​	visit the root:
​	Q <- root	//Q is a queue
​	while Q is not empty do
   		v <- dequeue(Q);
​    	visit children of v;
​    	enqueue childrenn of v into Q;

{% endhighlight %}

<br/>

### ❗️문제

- 전위, 중위, 후위, 레벨 오더 순회 경로 구하기

![F6EE0838-0312-4738-AF51-12C893B731BE](https://farm5.staticflickr.com/4453/37658441246_056ca3ddd8_o.png)


<br/>

#### 답

<div class="spoiler">
전위 순회 (Preorder Traversal) <br/>
A - B - D - H - I - E - J - K - C - F - L - G <br/>
<br/>
중위 순회 (Inorder Traversal) <br/>
H - D - I - B - J - E - K - A - L - F - C - G <br/>
<br/>
후위 순회 (Postorder Traversal) <br/>
H - I - D - J - K - E - B - L - F - G - C - A <br/>
<br/>
레벨 오더 순회(level-order Traversal) <br/>
A - B - C - D - E - F - G - H - I - J - K - L <br/>
</div>