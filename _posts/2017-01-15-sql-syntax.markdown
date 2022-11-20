---
layout: post
title: "Sql 기본적인 문법 정리"
author: jiwon
date: 2017-01-15
categories: [ SQL ]
image: assets/images/sql.png
toc: true
featured: false
hidden: false
[//]: # (rating: .5)
---

> SELECT, INSERT, UPDATE, DELETE

<br/>

## 테이블 생성

```sql
CREATE TABLE student (
	id INTEGER, 
	name TEXT,
	age INTEGER
);
```



위와 같이 테이블을 생성하면 아래와 같은 스키마가 형성됩니다.

| id    | INTEGER	|
| name	| TEXT		|
| age   | INTEGER |
  
<br/>

## 삽입

```sql
INSERT INTO student (id, name, age) VALUES (1, 'Jane', 20);
INSERT INTO student (id, name, age) VALUES (2, 'Ami', 21);
```

<br/>

## 조회

```sql
SELECT * FROM student;
```

| id | name | age|
| :---: | :---: | :---: |
| 1 | Jane | 20 |
| 2 | Ami | 21 |

<br/>

## 변경

```sql
UPDATE student
SET age=22
WHERE id=1;

SELECT * FROM student;
```

| id | name | age|
| :---: | :---: | :---: |
| 1 | Jane | 22 |
| 2 | Ami | 21|

<br/>

## colume 추가

```sql
ALTER TABLE student ADD COLUMN
major TEXT;

SELECT * FROM student;
```

| id | name | age| major |
| :---: | :---: | :---: | :---:|
| 1 | Jane | 22 | NULL |
| 2 | Ami | 21 | NULL |

<br/>

```sql
UPDATE student 
SET major='Computer engineering'
WHERE id=1;

SELECT * FROM student;
```

| id | name | age| major |
| :---: | :---: | :---: | :---:|
| 1 | Jane | 22 | Computer engineering |
| 2 | Ami | 21 | NULL |

<br/>

## 삭제

```sql
DELETE FROM student WHERE major IS NULL;

SELECT * FROM student;
```

| id | name | age| major |
| :---: | :---: | :---: | :---:|
| 1 | Jane | 22 | Computer engineering |

<br/>
