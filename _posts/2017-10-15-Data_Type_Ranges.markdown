---
layout: post
title: "[C++] 데이터 형식 범위"
author: jiwon
date: 2017-10-15
categories: [ Algorithm ]
image: assets/images/c++.png
toc: false
featured: false
hidden: false
[//]: # (rating: .5)
---

c++ 데이터 형식 범위를 알아보아요.

**MSDN 원문**으로 이동하려면 [여기](https://msdn.microsoft.com/ko-kr/library/s3f49ktz.aspx){: target="_blank" }를 클릭하세요.

  



| 형식 이름                | 바이트        | 기타 이름                        | 값의 범위                                    |
| -------------------- | ---------- | ---------------------------- | ---------------------------------------- |
| `int`                | 4          | signed                       | –2,147,483,648 ~ 2,147,483,647           |
| `unsigned int`       | 4          | unsigned                     | 0 ~ 4,294,967,295                        |
| `bool`               | 1          | 없음                           | false 또는 true                            |
| `char`               | 1          | 없음                           | –128~127(기본값) [/J](https://msdn.microsoft.com/ko-kr/library/0d294k5z.aspx)를 사용하여 컴파일된 경우 0~255 |
| `unsigned char`      | 1          | 없음                           | 0 ~ 255                                  |
| `short`              | 2          | short int, signed short int  | –32,768 ~ 32,767                         |
| `unsigned short`     | 2          | unsigned short int           | 0 ~ 65,535                               |
| `long`               | 4          | long int, signed long int    | –2,147,483,648 ~ 2,147,483,647           |
| `unsigned long`      | 4          | unsigned long int            | 0 ~ 4,294,967,295                        |
| `long long`          | 8          | 없음(그러나 __int64와 동일)          | –9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807 |
| `unsigned long long` | 8          | 없음(그러나 unsigned __int64와 동일) | 0 ~ 18,446,744,073,709,551,615           |
| `float`              | 4          | 없음                           | 3.4E+/-38(7개의 자릿수)                       |
| `double`             | 8          | 없음                           | 1.7E+/-308(15개의 자릿수)                     |
| `long double`        | double과 동일 | 없음                           | double과 동일                               |


