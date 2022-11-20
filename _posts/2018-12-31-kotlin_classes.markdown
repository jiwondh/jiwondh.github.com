---
layout: post
title: "[Kotlin] 클래스(Class)와 생성자(Constructor)"
author: jiwon
date: 2018-12-31
categories: [ Kotlin ]
image: assets/images/kotlin2.png
toc: true
featured: true
hidden: true
[//]: # (rating: .5)
---

Kotlin의 클래스와 생성자에 대하여 알아보아요.

<br/>

# Kotlin 클래스와 생성자

## 클래스

### `class` 키워드

- Kotlin 클래스는 `class` 키워드를 사용하여 선언합니다.

```java
class Person { ... }
```

- **클래스 선언부**는 아래와 같이 구성됩니다.
  - 클래스 <u>이름</u>
  - 클래스 <u>헤더</u>(클래스 타입 파라미터 `<T>`, 기본 생성자 `constructor` 등), 
  - 중괄호`{ }`로 둘러 싸인 클래스 <u>바디</u>
- 클래스 헤더와 바디는 optional이므로, 바디가 없다면 중괄호 `{ }`를 생략할 수 있습니다.

```java
class Empty
```
<br/>
### Kotlin 클래스 생성하기

- Intellij 상단 메뉴에서 `[File] - [New] - [Kotlin File/Class]` 클릭합니다.

![image-20190101001008678](https://farm8.staticflickr.com/7839/31601763357_23d5d95572_o.png)

- `[Class]` 를 선택하고 생성합니다.

![image-20190101001942313](https://farm5.staticflickr.com/4806/45628599865_4421e59c85_o.png)

- `Person.kt` 파일이 생성됩니다. 

```java
// Person.kt
class Person {
    
}
```
<br/>
## 생성자 

### `constructor`  키워드

- **Java와 비교**  - Java는 생성자를 클래스 내부에 선언해야합니다.

```java
// Person.java
public class Person {
    Person(String firstName) {
        ...
    }
}
```

- Kotlin은 `constructor` 키워드를 사용하여 생성자를 **클래스 선언부(기본 생성자)**나 **클래스 내부(보조 생성자)**에 선언할 수 있습니다.

```java
// Person.kt - 기본 생성자
class Person constructor(firstName: String) { 
    ... 
}
```

<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
<ins class="adsbygoogle"
     style="display:block; text-align:center;"
     data-ad-layout="in-article"
     data-ad-format="fluid"
     data-ad-client="ca-pub-8753021586186085"
     data-ad-slot="8878745802">
</ins>
<script>
     (adsbygoogle = window.adsbygoogle || []).push({});
</script>

<br/>
### 기본 생성자(primary constructor)

- 기본 생성자는 클래스 <u>헤더</u>의 한 부분으로, 클래스 이름 뒤(타입 파라미터 `<T>` 가 있다면 그 뒤)에 위치합니다.

```java
class Person constructor(firstName: String) { ... }
```

- 기본 생성자에 **애노테이션(annotations)**[^annotation]이나 **접근 제한자(visibility modifiers)**[^visibility_modifiers]가 없다면 `constructor` 키워드를 생략할 수 있습니다.

```java
// Person.kt - constructor 키워드 생략 가능
class Person(firstName: String) { 
    ... 
}
```

```java
// Customer.kt - constructor 키워드 생략 불가능
class Customer public @Inject constructor(name: String) { 
    ... 
}
```

- 기본 생성자의 파라미터는 클래스 바디에 선언된 **프로퍼티 초기화**에도 사용할 수 있습니다. 

```java
class Customer(name: String) {
    // 프로퍼티 customerKey 초기화에 name 파리미터 사용
    val customerKey = name.toUpperCase()
}
```

- 코틀린은 <u>기본 생성자에서 프로퍼티를 선언하고 초기화</u>하는 간결한 구문을 제공합니다. <br> (`var` 와  `val` [^Defining_variables])

```java
class Person(val firstName: String, val lastName: String, var age: Int) { 
    ... 
}
```
<br/>
### `init` 키워드

- 코틀린에서는 **기본 생성자**가 클래스 선언부에 위치하므로 바디를 가질 수 없는 구조입니다.  
- 대신, `init{}` 함수 안에 초기화 코드를 작성하여 기본 생성자의 인자값을 처리할 수 있습니다.
- 인스턴스가 초기화되는 동안, `init{}` 함수는 프로퍼티 초기화와 함께 **클래스 바디에 선언된 순서**대로 실행됩니다.

```java
class InitOrderDemo(name: String) {
    val firstProperty = "First property: $name".also(::println)
    
    init {
        println("First initializer block that prints ${name}")
    }
    
    val secondProperty = "Second property: ${name.length}".also(::println)
    
    init {
        println("Second initializer block that prints ${name.length}")
    }
}
```

**실행결과**

```bash
First property: hello
First initializer block that prints hello
Second property: 5
Second initializer block that prints 5
```
<br/>
### 보조 생성자(Secondary Constructors)

- 클래스 바디 내부에 보조생성자를 생성할 수 있습니다.

```java
class Person {
    constructor(parent: Person) {
        parent.children.add(this)
    }
}
```

- 클래스에 <u>기본 생성자가 있으면</u>,  각 보조 생성자는 **`this` 키워드**를 사용하여 **직접 기본생성자**에게, 또는 **다른 보조 생성자를 통해 간접적으로 기본생성자**에게 위임을 해야합니다.
- **`this` 키워드**는 <u>기본 생성자의 속성을 상속받아 처리</u>되는 형식입니다.

```java
class Person(val name: String) {
    constructor(name: String, parent: Person) : this(name) {
        parent.children.add(this)
    }
}
```




---

[^annotation]: 코드에 메타데이터를 붙이는 방법 (ex. `@Inject`) <br> [Kotlin Reference - Annotations](https://kotlinlang.org/docs/reference/annotations.html){: target="_blank" }
[^visibility_modifiers]: 코틀린에는 4개의 접근 제한자가 있습니다 <br> (ex.  `private` ,  `protected` ,  `internal` ,  `public` ) <br> [Kotlin Reference - Visibility Modifiers](https://kotlinlang.org/docs/reference/visibility-modifiers.html){: target="_blank" }
[^Defining_variables]: `var` :  수정이 가능한 변수<br>`val` : 수정이 불가능한 변수 <br>[Kotlin Reference - Defining variables](https://kotlinlang.org/docs/reference/basic-syntax.html#defining-variables){: target="_blank" }

