# 🎯 Level 1

## 조건에 맞는 회원수 구하기

### 문제 설명

다음은 어느 의류 쇼핑몰에 가입한 회원 정보를 담은 `USER_INFO` 테이블입니다. `USER_INFO` 테이블은 아래와 같은 구조로 되어있으며 `USER_ID`, `GENDER`, `AGE`, `JOINED`는 각각 회원 ID, 성별, 나이, 가입일을 나타냅니다.

| Column name | Type       | Nullable |
| ----------- | ---------- | -------- |
| USER_ID     | INTEGER    | FALSE    |
| GENDER      | TINYINT(1) | TRUE     |
| AGE         | INTEGER    | TRUE     |
| JOINED      | DATE       | FALSE    |

`GENDER` 컬럼은 비어있거나 0 또는 1의 값을 가지며 0인 경우 남자를, 1인 경우는 여자를 나타냅니다.

### 문제

`USER_INFO` 테이블에서 2021년에 가입한 회원 중 나이가 20세 이상 29세 이하인 회원이 몇 명인지 출력하는 SQL문을 작성해주세요.

</br>

## 상위 n개 레코드

### 문제 설명

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| INTAKE_CONDITION | VARCHAR(N) | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_INTAKE  | VARCHAR(N) | FALSE    |

동물 보호소에 가장 먼저 들어온 동물의 이름을 조회하는 SQL 문을 작성해주세요.

</br>

## 여러 기준으로 정렬하기

### 문제 설명

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

| NAME             | TYPE       | NULLABLE |
| ---------------- | ---------- | -------- |
| ANIMAL_ID        | VARCHAR(N) | FALSE    |
| ANIMAL_TYPE      | VARCHAR(N) | FALSE    |
| DATETIME         | DATETIME   | FALSE    |
| INTAKE_CONDITION | VARCHAR(N) | FALSE    |
| NAME             | VARCHAR(N) | TRUE     |
| SEX_UPON_INTAKE  | VARCHAR(N) | FALSE    |

동물 보호소에 들어온 모든 동물의 아이디와 이름, 보호 시작일을 이름 순으로 조회하는 SQL문을 작성해주세요. 단, 이름이 같은 동물 중에서는 보호를 나중에 시작한 동물을 먼저 보여줘야 합니다.

</br>

## 동물의 아이디와 이름

### 문제 설명

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
| INTAKE_CONDITION | VARCHAR(N) |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_INTAKE  | VARCHAR(N) |  FALSE   |

동물 보호소에 들어온 모든 동물의 아이디와 이름을 ANIMAL_ID순으로 조회하는 SQL문을 작성해주세요. SQL을 실행하면 다음과 같이 출력되어야 합니다.

| ANIMAL_ID |     NAME     |
| :-------: | :----------: |
|  A349996  |    Sugar     |
|  A350276  |    Jewel     |
|  A350375  |     Meo      |
|  A352555  |    Harley    |
|  A352713  |     Gia      |
|  A352872  | Peanutbutter |
|  A353259  |      Bj      |

((이하 생략))

</br>

## 어린 동물 찾기

### 문제 설명

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
| INTAKE_CONDITION | VARCHAR(N) |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_INTAKE  | VARCHAR(N) |  FALSE   |

동물 보호소에 들어온 동물 중 젊은 동물1의 아이디와 이름을 조회하는 SQL 문을 작성해주세요. 이때 결과는 아이디 순으로 조회해주세요.

</br>

## 아픈 동물 찾기

### 문제 설명

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
| INTAKE_CONDITION | VARCHAR(N) |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_INTAKE  | VARCHAR(N) |  FALSE   |

동물 보호소에 들어온 동물 중 아픈 동물의 아이디와 이름을 조회하는 SQL 문을 작성해주세요. 이때 결과는 아이디 순으로 조회해주세요.

</br>

## 역순 정렬하기

### 문제 설명

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
| INTAKE_CONDITION | VARCHAR(N) |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_INTAKE  | VARCHAR(N) |  FALSE   |

동물 보호소에 들어온 모든 동물의 이름과 보호 시작일을 조회하는 SQL문을 작성해주세요. 이때 결과는 ANIMAL_ID 역순으로 보여주세요. SQL을 실행하면 다음과 같이 출력되어야 합니다.

|  NAME  |      DATETIME       |
| :----: | :-----------------: |
| Rocky  | 2016-06-07 09:17:00 |
| Shelly | 2015-01-29 15:01:00 |
| Benji  | 2016-04-19 13:28:00 |
| Jackie | 2016-01-03 16:25:00 |
| \*Sam  | 2016-03-13 11:17:00 |

..이하 생략

</br>

## 모든 레코드 조회하기

### 문제 설명

`ANIMAL_INS` 테이블은 동물 보호소에 들어온 동물의 정보를 담은 테이블입니다. `ANIMAL_INS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `INTAKE_CONDITION`, `NAME`, `SEX_UPON_INTAKE`는 각각 동물의 아이디, 생물 종, 보호 시작일, 보호 시작 시 상태, 이름, 성별 및 중성화 여부를 나타냅니다.

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
| INTAKE_CONDITION | VARCHAR(N) |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_INTAKE  | VARCHAR(N) |  FALSE   |

동물 보호소에 들어온 모든 동물의 정보를 ANIMAL_ID순으로 조회하는 SQL문을 작성해주세요. SQL을 실행하면 다음과 같이 출력되어야 합니다.

| ANIMAL_ID | ANIMAL_TYPE |      DATETIME       | INTAKE_CONDITION |  NAME  | SEX_UPON_INTAKE |
| :-------: | :---------: | :-----------------: | :--------------: | :----: | :-------------: |
|  A349996  |     Cat     | 2018-01-22 14:32:00 |      Normal      | Sugar  |  Neutered Male  |
|  A350276  |     Cat     | 2017-08-13 13:50:00 |      Normal      | Jewel  |  Spayed Female  |
|  A350375  |     Cat     | 2017-03-06 15:01:00 |      Normal      |  Meo   |  Neutered Male  |
|  A352555  |     Dog     | 2014-08-08 04:20:00 |      Normal      | Harley |  Spayed Female  |

..이하 생략

</br>

## 강원도에 위치한 생산공장 목록 출력하기

### 문제 설명

다음은 식품공장의 정보를 담은 `FOOD_FACTORY` 테이블입니다. `FOOD_FACTORY` 테이블은 다음과 같으며 `FACTORY_ID`, `FACTORY_NAME`, `ADDRESS`, `TLNO`는 각각 공장 ID, 공장 이름, 주소, 전화번호를 의미합니다.

| Column name  |     Type     | Nullable |
| :----------: | :----------: | :------: |
|  FACTORY_ID  | VARCHAR(10)  |  FALSE   |
| FACTORY_NAME | VARCHAR(50)  |  FALSE   |
|   ADDRESS    | VARCHAR(100) |  FALSE   |
|     TLNO     | VARCHAR(20)  |   TRUE   |

### 문제

`FOOD_FACTORY` 테이블에서 강원도에 위치한 식품공장의 공장 ID, 공장 이름, 주소를 조회하는 SQL문을 작성해주세요. 이때 결과는 공장 ID를 기준으로 오름차순 정렬해주세요.

</br>

## 조건에 맞는 도서 리스트 출력하기

### 문제 설명

다음은 어느 한 서점에서 판매중인 도서들의 도서 정보(`BOOK`) 테이블입니다.

`BOOK` 테이블은 각 도서의 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.

|  Column name   |    Type    | Nullable |               Description               |
| :------------: | :--------: | :------: | :-------------------------------------: |
|    BOOK_ID     |  INTEGER   |  FALSE   |                 도서 ID                 |
|    CATEGORY    | VARCHAR(N) |  FALSE   | 카테고리 (경제, 인문, 소설, 생활, 기술) |
|   AUTHOR_ID    |  INTEGER   |  FALSE   |                 저자 ID                 |
|     PRICE      |  INTEGER   |  FALSE   |               판매가 (원)               |
| PUBLISHED_DATE |    DATE    |  FALSE   |                 출판일                  |

</br>

## 조건에 부합하는 중고거래 댓글 조회하기

### 문제 설명

다음은 중고거래 게시판 정보를 담은 `USED_GOODS_BOARD` 테이블과 중고거래 게시판 첨부파일 정보를 담은 `USED_GOODS_REPLY` 테이블입니다. `USED_GOODS_BOARD` 테이블은 다음과 같으며 `BOARD_ID`, `WRITER_ID`, `TITLE`, `CONTENTS`, `PRICE`, `CREATED_DATE`, `STATUS`, `VIEWS`은 게시글 ID, 작성자 ID, 게시글 제목, 게시글 내용, 가격, 작성일, 거래상태, 조회수를 의미합니다.

| Column name  |     Type      | Nullable |
| :----------: | :-----------: | :------: |
|   BOARD_ID   |  VARCHAR(5)   |  FALSE   |
|  WRITER_ID   |  VARCHAR(50)  |  FALSE   |
|    TITLE     | VARCHAR(100)  |  FALSE   |
|   CONTENTS   | VARCHAR(1000) |  FALSE   |
|    PRICE     |    NUMBER     |  FALSE   |
| CREATED_DATE |     DATE      |  FALSE   |
|    STATUS    |  VARCHAR(10)  |  FALSE   |
|    VIEWS     |    NUMBER     |  FALSE   |

`USED_GOODS_REPLY` 테이블은 다음과 같으며 `REPLY_ID`, `BOARD_ID`, `WRITER_ID`, `CONTENTS`, `CREATED_DATE`는 각각 댓글 ID, 게시글 ID, 작성자 ID, 댓글 내용, 작성일을 의미합니다.

| Column name  |     Type      | Nullable |
| :----------: | :-----------: | :------: |
|   REPLY_ID   |  VARCHAR(10)  |  FALSE   |
|   BOARD_ID   |  VARCHAR(5)   |  FALSE   |
|  WRITER_ID   |  VARCHAR(50)  |  FALSE   |
|   CONTENTS   | VARCHAR(1000) |   TRUE   |
| CREATED_DATE |     DATE      |  FALSE   |

### 문제

`USED_GOODS_BOARD`와 `USED_GOODS_REPLY` 테이블에서 2022년 10월에 작성된 게시글 제목, 게시글 ID, 댓글 ID, 댓글 작성자 ID, 댓글 내용, 댓글 작성일을 조회하는 SQL문을 작성해주세요. 결과는 댓글 작성일을 기준으로 오름차순 정렬해주시고, 댓글 작성일이 같다면 게시글 제목을 기준으로 오름차순 정렬해주세요.

</br>

## 인기있는 아이스크림

### 문제 설명

`FIRST_HALF` 테이블은 아이스크림 가게의 상반기 주문 정보를 담은 테이블입니다. `FIRST_HALF` 테이블 구조는 다음과 같으며, `SHIPMENT_ID`, `FLAVOR`, `TOTAL_ORDER`는 각각 아이스크림 공장에서 아이스크림 가게까지의 출하 번호, 아이스크림 맛, 상반기 아이스크림 총주문량을 나타냅니다.

|    NAME     |    TYPE    | NULLABLE |
| :---------: | :--------: | :------: |
| SHIPMENT_ID |   INT(N)   |  FALSE   |
|   FLAVOR    | VARCHAR(N) |  FALSE   |
| TOTAL_ORDER |   INT(N)   |  FALSE   |

### 문제

상반기에 판매된 아이스크림의 맛을 총주문량을 기준으로 내림차순 정렬하고 총주문량이 같다면 출하 번호를 기준으로 오름차순 정렬하여 조회하는 SQL 문을 작성해주세요.

</br>

## 평균 일일 대여 요금 구하기

### 문제 설명

다음은 어느 자동차 대여 회사에서 대여중인 자동차들의 정보를 담은 `CAR_RENTAL_COMPANY_CAR` 테이블입니다. `CAR_RENTAL_COMPANY_CAR` 테이블은 아래와 같은 구조로 되어있으며, `CAR_ID`, `CAR_TYPE`, `DAILY_FEE`, `OPTIONS` 는 각각 자동차 ID, 자동차 종류, 일일 대여 요금(원), 자동차 옵션 리스트를 나타냅니다.

| Column name |     Type     | Nullable |
| :---------: | :----------: | :------: |
|   CAR_ID    |   INTEGER    |  FALSE   |
|  CAR_TYPE   | VARCHAR(255) |  FALSE   |
|  DAILY_FEE  |   INTEGER    |  FALSE   |
|   OPTIONS   | VARCHAR(255) |  FALSE   |

자동차 종류는 '세단', 'SUV', '승합차', '트럭', '리무진' 이 있습니다. 자동차 옵션 리스트는 콤마(',')로 구분된 키워드 리스트(예: '열선시트', '스마트키', '주차감지센서')로 되어있으며, 키워드 종류는 '주차감지센서', '스마트키', '네비게이션', '통풍시트', '열선시트', '후방카메라', '가죽시트' 가 있습니다.

### 문제

`CAR_RENTAL_COMPANY_CAR` 테이블에서 자동차 종류가 'SUV'인 자동차들의 평균 일일 대여 요금을 출력하는 SQL문을 작성해주세요. 이때 평균 일일 대여 요금은 소수 첫 번째 자리에서 반올림하고, 컬럼명은 `AVERAGE_FEE` 로 지정해주세요.

</br>

## 흉부외과 또는 일반외과 의사 목록 출력하기

### 문제 설명

다음은 종합병원에 속한 의사 정보를 담은DOCTOR 테이블입니다. `DOCTOR` 테이블은 다음과 같으며 `DR_NAME`, `DR_ID`, `LCNS_NO`, `HIRE_YMD`, `MCDP_CD`, `TLNO`는 각각 의사이름, 의사ID, 면허번호, 고용일자, 진료과코드, 전화번호를 나타냅니다.

| Column name |    Type     | Nullable |
| :---------: | :---------: | :------: |
|   DR_NAME   | VARCHAR(20) |  FALSE   |
|    DR_ID    | VARCHAR(10) |  FALSE   |
|   LCNS_NO   | VARCHAR(30) |  FALSE   |
|  HIRE_YMD   |    DATE     |  FALSE   |
|   MCDP_CD   | VARCHAR(6)  |   TRUE   |
|    TLNO     | VARCHAR(50) |   TRUE   |

### 문제

`DOCTOR` 테이블에서 진료과가 흉부외과(CS)이거나 일반외과(GS)인 의사의 이름, 의사ID, 진료과, 고용일자를 조회하는 SQL문을 작성해주세요. 이때 결과는 고용일자를 기준으로 내림차순 정렬하고, 고용일자가 같다면 이름을 기준으로 오름차순 정렬해주세요.

</br>

## 12세 이하인 여자 환자 목록 출력하기

### 문제 설명

다음은 종합병원에 등록된 환자정보를 담은 `PATIENT` 테이블입니다. `PATIENT` 테이블은 다음과 같으며 `PT_NO`, `PT_NAME`, `GEND_CD`, `AGE`, `TLNO`는 각각 환자번호, 환자이름, 성별코드, 나이, 전화번호를 의미합니다.

| Column name |    Type     | Nullable |
| :---------: | :---------: | :------: |
|    PT_NO    | VARCHAR(10) |  FALSE   |
|   PT_NAME   | VARCHAR(20) |  FALSE   |
|   GEND_CD   | VARCHAR(1)  |  FALSE   |
|     AGE     |   INTEGER   |  FALSE   |
|    TLNO     | VARCHAR(50) |   TRUE   |

### 문제

`PATIENT` 테이블에서 12세 이하인 여자환자의 환자이름, 환자번호, 성별코드, 나이, 전화번호를 조회하는 SQL문을 작성해주세요. 이때 전화번호가 없는 경우, 'NONE'으로 출력시켜 주시고 결과는 나이를 기준으로 내림차순 정렬하고, 나이 같다면 환자이름을 기준으로 오름차순 정렬해주세요.

</br>

## 과일로 만든 아이스크림 고르기

### 문제 설명

다음은 아이스크림 가게의 상반기 주문 정보를 담은 `FIRST_HALF` 테이블과 아이스크림 성분에 대한 정보를 담은 `ICECREAM_INFO` 테이블입니다. `FIRST_HALF` 테이블 구조는 다음과 같으며, `SHIPMENT_ID`, `FLAVOR`, `TOTAL_ORDER` 는 각각 아이스크림 공장에서 아이스크림 가게까지의 출하 번호, 아이스크림 맛, 상반기 아이스크림 총주문량을 나타냅니다. `FIRST_HALF` 테이블의 기본 키는 `FLAVOR`입니다.

|    NAME     |    TYPE    | NULLABLE |
| :---------: | :--------: | :------: |
| SHIPMENT_ID |   INT(N)   |  FALSE   |
|   FLAVOR    | VARCHAR(N) |  FALSE   |
| TOTAL_ORDER |   INT(N)   |  FALSE   |

`ICECREAM_INFO` 테이블 구조는 다음과 같으며, `FLAVOR`, `INGREDITENT_TYPE` 은 각각 아이스크림 맛, 아이스크림의 성분 타입을 나타냅니다. `INGREDIENT_TYPE`에는 아이스크림의 주 성분이 설탕이면 `sugar_based`라고 입력되고, 아이스크림의 주 성분이 과일이면 `fruit_based`라고 입력됩니다. `ICECREAM_INFO`의 기본 키는 `FLAVOR`입니다. `ICECREAM_INFO`테이블의 `FLAVOR`는 `FIRST_HALF` 테이블의 `FLAVOR`의 외래 키입니다.

|      NAME       |    TYPE    | NULLABLE |
| :-------------: | :--------: | :------: |
|     FLAVOR      | VARCHAR(N) |  FALSE   |
| INGREDIENT_TYPE | VARCHAR(N) |  FALSE   |

### 문제

상반기 아이스크림 총주문량이 3,000보다 높으면서 아이스크림의 주 성분이 과일인 아이스크림의 맛을 총주문량이 큰 순서대로 조회하는 SQL 문을 작성해주세요.

---

# 🎯 Level 2

## 3월에 태어난 여성 회원 목록 출력하기

### 문제 설명

다음은 식당 리뷰 사이트의 회원 정보를 담은 `MEMBER_PROFILE` 테이블입니다. `MEMBER_PROFILE` 테이블은 다음과 같으며 `MEMBER_ID`, `MEMBER_NAME`, `TLNO`, `GENDER`, `DATE_OF_BIRTH`는 회원 ID, 회원 이름, 회원 연락처, 성별, 생년월일을 의미합니다.

|  Column name  |     Type     | Nullable |
| :-----------: | :----------: | :------: |
|   MEMBER_ID   | VARCHAR(100) |  FALSE   |
|  MEMBER_NAME  | VARCHAR(50)  |  FALSE   |
|     TLNO      | VARCHAR(50)  |   TRUE   |
|    GENDER     |  VARCHAR(1)  |   TRUE   |
| DATE_OF_BIRTH |     DATE     |   TRUE   |

### 문제

`MEMBER_PROFILE` 테이블에서 생일이 3월인 여성 회원의 ID, 이름, 성별, 생년월일을 조회하는 SQL문을 작성해주세요. 이때 전화번호가 NULL인 경우는 출력대상에서 제외시켜 주시고, 결과는 회원ID를 기준으로 오름차순 정렬해주세요.

</br>

## 재구매가 일어난 상품과 회원 리스트 구하기

### 문제 설명

다음은 어느 의류 쇼핑몰의 온라인 상품 판매 정보를 담은 `ONLINE_SALE` 테이블 입니다. `ONLINE_SALE` 테이블은 아래와 같은 구조로 되어있으며 `ONLINE_SALE_ID`, `USER_ID`, `PRODUCT_ID`, `SALES_AMOUNT`, `SALES_DATE`는 각각 온라인 상품 판매 ID, 회원 ID, 상품 ID, 판매량, 판매일을 나타냅니다.

|  Column name   |  Type   | Nullable |
| :------------: | :-----: | :------: |
| ONLINE_SALE_ID | INTEGER |  FALSE   |
|    USER_ID     | INTEGER |  FALSE   |
|   PRODUCT_ID   | INTEGER |  FALSE   |
|  SALES_AMOUNT  | INTEGER |  FALSE   |
|   SALES_DATE   |  DATE   |  FALSE   |

동일한 날짜, 회원 ID, 상품 ID 조합에 대해서는 하나의 판매 데이터만 존재합니다.

### 문제

`ONLINE_SALE` 테이블에서 동일한 회원이 동일한 상품을 재구매한 데이터를 구하여, 재구매한 회원 ID와 재구매한 상품 ID를 출력하는 SQL문을 작성해주세요. 결과는 회원 ID를 기준으로 오름차순 정렬해주시고 회원 ID가 같다면 상품 ID를 기준으로 내림차순 정렬해주세요.

---

# 🎯 Level 4

## 서울에 위치한 식당 목록 출력하기

### 문제 설명

다음은 식당의 정보를 담은 `REST_INFO` 테이블과 식당의 리뷰 정보를 담은 `REST_REVIEW` 테이블입니다. `REST_INFO` 테이블은 다음과 같으며 `REST_ID`, `REST_NAME`, `FOOD_TYPE`, `VIEWS`, `FAVORITES`, `PARKING_LOT`, `ADDRESS`, `TEL`은 식당 ID, 식당 이름, 음식 종류, 조회수, 즐겨찾기수, 주차장 유무, 주소, 전화번호를 의미합니다.

| Column name |     Type     | Nullable |
| :---------: | :----------: | :------: |
|   REST_ID   |  VARCHAR(5)  |  FALSE   |
|  REST_NAME  | VARCHAR(50)  |  FALSE   |
|  FOOD_TYPE  | VARCHAR(20)  |   TRUE   |
|    VIEWS    |    NUMBER    |   TRUE   |
|  FAVORITES  |    NUMBER    |   TRUE   |
| PARKING_LOT |  VARCHAR(1)  |   TRUE   |
|   ADDRESS   | VARCHAR(100) |   TRUE   |
|     TEL     | VARCHAR(100) |   TRUE   |

`REST_REVIEW` 테이블은 다음과 같으며 `REVIEW_ID`, `REST_ID`, `MEMBER_ID`, `REVIEW_SCORE`, `REVIEW_TEXT`, `REVIEW_DATE`는 각각 리뷰 ID, 식당 ID, 회원 ID, 점수, 리뷰 텍스트, 리뷰 작성일을 의미합니다.

| Column name  |     Type      | Nullable |
| :----------: | :-----------: | :------: |
|  REVIEW_ID   |  VARCHAR(10)  |  FALSE   |
|   REST_ID    |  VARCHAR(10)  |   TRUE   |
|  MEMBER_ID   | VARCHAR(100)  |   TRUE   |
| REVIEW_SCORE |    NUMBER     |   TRUE   |
| REVIEW_TEXT  | VARCHAR(1000) |   TRUE   |
| REVIEW_DATE  |     DATE      |   TRUE   |

### 문제

`REST_INFO`와 `REST_REVIEW` 테이블에서 서울에 위치한 식당들의 식당 ID, 식당 이름, 음식 종류, 즐겨찾기수, 주소, 리뷰 평균 점수를 조회하는 SQL문을 작성해주세요. 이때 리뷰 평균점수는 소수점 세 번째 자리에서 반올림 해주시고 결과는 평균점수를 기준으로 내림차순 정렬해주시고, 평균점수가 같다면 즐겨찾기수를 기준으로 내림차순 정렬해주세요.

</br>

## 오프라인/온라인 판매 데이터 통합하기

### 문제 설명

다음은 어느 의류 쇼핑몰의 온라인 상품 판매 정보를 담은 `ONLINE_SALE` 테이블과 오프라인 상품 판매 정보를 담은 `OFFLINE_SALE `테이블 입니다. `ONLINE_SALE` 테이블은 아래와 같은 구조로 되어있으며 `ONLINE_SALE_ID`, `USER_ID`, `PRODUCT_ID`, `SALES_AMOUNT`, `SALES_DATE`는 각각 온라인 상품 판매 ID, 회원 ID, 상품 ID, 판매량, 판매일을 나타냅니다.

|  Column name   |  Type   | Nullable |
| :------------: | :-----: | :------: |
| ONLINE_SALE_ID | INTEGER |  FALSE   |
|    USER_ID     | INTEGER |  FALSE   |
|   PRODUCT_ID   | INTEGER |  FALSE   |
|  SALES_AMOUNT  | INTEGER |  FALSE   |
|   SALES_DATE   |  DATE   |  FALSE   |

동일한 날짜, 회원 ID, 상품 ID 조합에 대해서는 하나의 판매 데이터만 존재합니다.

`OFFLINE_SALE` 테이블은 아래와 같은 구조로 되어있으며 `OFFLINE_SALE_ID`, `PRODUCT_ID`, `SALES_AMOUNT`, `SALES_DATE`는 각각 오프라인 상품 판매 ID, 상품 ID, 판매량, 판매일을 나타냅니다.

|   Column name   |  Type   | Nullable |
| :-------------: | :-----: | :------: |
| OFFLINE_SALE_ID | INTEGER |  FALSE   |
|   PRODUCT_ID    | INTEGER |  FALSE   |
|  SALES_AMOUNT   | INTEGER |  FALSE   |
|   SALES_DATE    |  DATE   |  FALSE   |

동일한 날짜, 상품 ID 조합에 대해서는 하나의 판매 데이터만 존재합니다.

### 문제

`ONLINE_SALE` 테이블과 `OFFLINE_SALE` 테이블에서 2022년 3월의 오프라인/온라인 상품 판매 데이터의 판매 날짜, 상품ID, 유저ID, 판매량을 출력하는 SQL문을 작성해주세요. `OFFLINE_SALE` 테이블의 판매 데이터의 `USER_ID` 값은 NULL 로 표시해주세요. 결과는 판매일을 기준으로 오름차순 정렬해주시고 판매일이 같다면 상품 ID를 기준으로 오름차순, 상품ID까지 같다면 유저 ID를 기준으로 오름차순 정렬해주세요.
