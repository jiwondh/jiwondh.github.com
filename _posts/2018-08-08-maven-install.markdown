---
layout: post
title: "[Spring] 메이븐(Maven) 설치하기 (Windows)"
author: jiwon
date: 2018-08-08
categories: [ Spring ]
image: assets/images/spring2.png
toc: true
featured: true
hidden: true
[//]: # (rating: .5)
---

자바 프로젝트들을 위한 빌드 자동화 도구 아파치 메이븐을 설치해봅시다.

<br/>
# 메이븐(Maven) 설치하기 (Windows)
<br>
## 사전 준비

- JDK 설치 (1.7 이상) 

<br>

## 1. Maven 다운로드

- [여기](https://maven.apache.org/download.cgi#){: target="_blank" } 에서 최신 버전의 메이븐(zip파일)을 다운로드 해주세요.

![메이븐 다운로드 페이지](https://farm2.staticflickr.com/1818/30047344308_2c077270c9_b.jpg)

<br>

## 2. 적절한 위치에 압축 풀기

- 저는 `C:\Users\Jiwon\dev\tools\apache-maven-3.5.4-bin\apache-maven-3.5.4` 경로로 압축을 풀어주었습니다.

![압축해제](https://c1.staticflickr.com/1/930/43199405244_7139a60bec_b.jpg)

<br>

## 3. 환경 변수 설정

- `제어판 > 시스템 > 고급 시스템 설정`에 들어가 `환경 변수`를 클릭하세요.

![고급시스템설정](https://farm1.staticflickr.com/932/43917762251_8c299236d2_o.png)



<br>

- `새로 만들기`를 클릭하고 새 시스템 변수를 입력하세요.
  - `변수 이름` :  `MAVEN_HOME`
  - `변수 값` : 압축 해제한 경로 (ex. `C:\Users\Jiwon\dev\tools\apache-maven-3.5.4-bin\apache-maven-3.5.4`)

![새 시스템 변수](https://farm1.staticflickr.com/929/43014988235_7c2c2c5457_o.png) 



<br>

- 시스템 변수 목록에서 `Path`를 찾아 클릭하고 `편집`을 눌러주세요.
- `변수 값`  맨 앞 부분에 `%MAVEN_HOME%\bin;`을 추가합니다.

![변수 편집](https://farm1.staticflickr.com/940/43201735214_09c182a23b_o.png)

<br>

## 4. Maven 설치 확인

- `cmd` 창을 켜주세요. (기존에 cmd 창이 켜져있었다면 끄고 다시 키세요.)
- `mvn -version` 명령어를 입력했을 때 아래와 같이 뜨면 설치 성공

![mvn -v](https://farm1.staticflickr.com/850/43015300125_0339a1d807_o.png)
