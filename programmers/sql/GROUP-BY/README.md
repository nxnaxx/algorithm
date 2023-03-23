# 🎯 Level 2

## 자동차 종류 별 특정 옵션이 포함된 자동차 수 구하기

### 문제 설명

다음은 어느 자동차 대여 회사에서 대여중인 자동차들의 정보를 담은 `CAR_RENTAL_COMPANY_CAR` 테이블입니다. `CAR_RENTAL_COMPANY_CAR` 테이블은 아래와 같은 구조로 되어있으며, `CAR_ID`, `CAR_TYPE`, `DAILY_FEE`, `OPTIONS`는 각각 자동차 ID, 자동차 종류, 일일 대여 요금(원), 자동차 옵션 리스트를 나타냅니다.

| Column name | Type         | Nullable |
| ----------- | ------------ | -------- |
| CAR_ID      | INTEGER      | FALSE    |
| CAR_TYPE    | VARCHAR(255) | FALSE    |
| DAILY_FEE   | INTEGER      | FALSE    |
| OPTIONS     | VARCHAR(255) | FALSE    |

자동차 종류는 '세단', 'SUV', '승합차', '트럭', '리무진' 이 있습니다. 자동차 옵션 리스트는 콤마(',')로 구분된 키워드 리스트(옵션 리스트 값 예시: '열선시트', '스마트키', '주차감지센서')로 되어있으며, 키워드 종류는 '주차감지센서', '스마트키', '네비게이션', '통풍시트', '열선시트', '후방카메라', '가죽시트' 가 있습니다.

### 문제

`CAR_RENTAL_COMPANY_CAR` 테이블에서 '통풍시트', '열선시트', '가죽시트' 중 하나 이상의 옵션이 포함된 자동차가 자동차 종류 별로 몇 대인지 출력하는 SQL문을 작성해주세요. 이때 자동차 수에 대한 컬럼명은 CARS로 지정하고, 결과는 자동차 종류를 기준으로 오름차순 정렬해주세요.

</br>

## 진료과별 총 예약 횟수 출력하기

### 문제 설명

다음은 종합병원의 진료 예약정보를 담은 `APPOINTMENT` 테이블 입니다.
`APPOINTMENT` 테이블은 다음과 같으며 `APNT_YMD`, `APNT_NO`, `PT_NO`, `MCDP_CD`, `MDDR_ID`, `APNT_CNCL_YN`, `APNT_CNCL_YMD`는 각각 진료예약일시, 진료예약번호, 환자번호, 진료과코드, 의사ID, 예약취소여부, 예약취소날짜를 나타냅니다.

|  Column name  |    Type     | Nullable |
| :-----------: | :---------: | :------: |
|   APNT_YMD    |  TIMESTAMP  |  FALSE   |
|    APNT_NO    |  NUMBER(5)  |  FALSE   |
|     PT_NO     | VARCHAR(10) |  FALSE   |
|    MCDP_CD    | VARCHAR(6)  |  FALSE   |
|    MDDR_ID    | VARCHAR(10) |  FALSE   |
| APNT_CNCL_YN  | VARCHAR(1)  |   TRUE   |
| APNT_CNCL_YMD |    DATE     |   TRUE   |

### 문제

`APPOINTMENT` 테이블에서 2022년 5월에 예약한 환자 수를 진료과코드 별로 조회하는 SQL문을 작성해주세요. 이때, 컬럼명은 '진료과 코드', '5월예약건수'로 지정해주시고 결과는 진료과별 예약한 환자 수를 기준으로 오름차순 정렬하고, 예약한 환자 수가 같다면 진료과 코드를 기준으로 오름차순 정렬해주세요.

</br>

## 성분으로 구분한 아이스크림 총 주문량

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

상반기 동안 각 아이스크림 성분 타입과 성분 타입에 대한 아이스크림의 총주문량을 총주문량이 작은 순서대로 조회하는 SQL 문을 작성해주세요. 이때 총주문량을 나타내는 컬럼명은 TOTAL_ORDER로 지정해주세요.

</br>

## 고양이와 개는 몇 마리 있을까

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

동물 보호소에 들어온 동물 중 고양이와 개가 각각 몇 마리인지 조회하는 SQL문을 작성해주세요. 이때 고양이를 개보다 먼저 조회해주세요.

</br>

## 동명 동물 수 찾기

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

동물 보호소에 들어온 동물 이름 중 두 번 이상 쓰인 이름과 해당 이름이 쓰인 횟수를 조회하는 SQL문을 작성해주세요. 이때 결과는 이름이 없는 동물은 집계에서 제외하며, 결과는 이름 순으로 조회해주세요.

</br>

## 입양 시각 구하기(1)

### 문제 설명

`ANIMAL_OUTS` 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. `ANIMAL_OUTS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `NAME`, `SEX_UPON_OUTCOME`는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다.

|      NAME       |    TYPE    | NULLABLE |
| :-------------: | :--------: | :------: |
|    ANIMAL_ID    | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE   | VARCHAR(N) |  FALSE   |
|    DATETIME     |  DATETIME  |  FALSE   |
|      NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_INTAKE | VARCHAR(N) |  FALSE   |

보호소에서는 몇 시에 입양이 가장 활발하게 일어나는지 알아보려 합니다. 09:00부터 19:59까지, 각 시간대별로 입양이 몇 건이나 발생했는지 조회하는 SQL문을 작성해주세요. 이때 결과는 시간대 순으로 정렬해야 합니다.

</br>

## 가격대 별 상품 개수 구하기

### 문제 설명

다음은 어느 의류 쇼핑몰에서 판매중인 상품들의 정보를 담은 `PRODUCT` 테이블입니다. `PRODUCT` 테이블은 아래와 같은 구조로 되어있으며, `PRODUCT_ID`, `PRODUCT_CODE`, `PRICE`는 각각 상품 ID, 상품코드, 판매가를 나타냅니다.

| Column name  |    Type    | Nullable |
| :----------: | :--------: | :------: |
|  PRODUCT_ID  |  INTEGER   |  FALSE   |
| PRODUCT_CODE | VARCHAR(8) |  FALSE   |
|    PRICE     |  INTEGER   |  FALSE   |

상품 별로 중복되지 않는 8자리 상품코드 값을 가지며 앞 2자리는 카테고리 코드를 나타냅니다.

### 문제

`PRODUCT` 테이블에서 만원 단위의 가격대 별로 상품 개수를 출력하는 SQL 문을 작성해주세요. 이때 컬럼명은 각각 컬럼명은 PRICE_GROUP, PRODUCTS로 지정해주시고 가격대 정보는 각 구간의 최소금액(10,000원 이상 ~ 20,000 미만인 구간인 경우 10,000)으로 표시해주세요. 결과는 가격대를 기준으로 오름차순 정렬해주세요.

---

# 🎯 Level 3

## 즐겨찾기가 가장 많은 식당 정보 출력하기

### 문제 설명

다음은 식당의 정보를 담은 `REST_INFO` 테이블입니다. `REST_INFO` 테이블은 다음과 같으며 `REST_ID`, `REST_NAME`, `FOOD_TYPE`, `VIEWS`, `FAVORITES`, `PARKING_LOT`, `ADDRESS`, `TEL`은 식당 ID, 식당 이름, 음식 종류, 조회수, 즐겨찾기수, 주차장 유무, 주소, 전화번호를 의미합니다.

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

### 문제

`REST_INFO` 테이블에서 음식종류별로 즐겨찾기수가 가장 많은 식당의 음식 종류, ID, 식당 이름, 즐겨찾기수를 조회하는 SQL문을 작성해주세요. 이때 결과는 음식 종류를 기준으로 내림차순 정렬해주세요.

</br>

## 대여 횟수가 많은 자동차들의 월별 대여 횟수 구하기

### 문제 설명

다음은 어느 자동차 대여 회사의 자동차 대여 기록 정보를 담은 `CAR_RENTAL_COMPANY_RENTAL_HISTORY` 테이블입니다. `CAR_RENTAL_COMPANY_RENTAL_HISTORY` 테이블은 아래와 같은 구조로 되어있으며, `HISTORY_ID`, `CAR_ID`, `START_DATE`, `END_DATE` 는 각각 자동차 대여 기록 ID, 자동차 ID, 대여 시작일, 대여 종료일을 나타냅니다.

| Column name |  Type   | Nullable |
| :---------: | :-----: | :------: |
| HISTORY_ID  | INTEGER |  FALSE   |
|   CAR_ID    | INTEGER |  FALSE   |
| START_DATE  |  DATE   |  FALSE   |
|  END_DATE   |  DATE   |  FALSE   |

### 문제

`CAR_RENTAL_COMPANY_RENTAL_HISTORY` 테이블에서 대여 시작일을 기준으로 2022년 8월부터 2022년 10월까지 총 대여 횟수가 5회 이상인 자동차들에 대해서 해당 기간 동안의 월별 자동차 ID 별 총 대여 횟수(컬럼명: `RECORDS`) 리스트를 출력하는 SQL문을 작성해주세요. 결과는 월을 기준으로 오름차순 정렬하고, 월이 같다면 자동차 ID를 기준으로 내림차순 정렬해주세요. 특정 월의 총 대여 횟수가 0인 경우에는 결과에서 제외해주세요.

</br>

## 카테고리 별 도서 판매량 집계하기

### 문제 설명

다음은 어느 한 서점에서 판매중인 도서들의 도서 정보(`BOOK`), 판매 정보(`BOOK_SALES`) 테이블입니다.

`BOOK` 테이블은 각 도서의 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.

|  Column name   |    Type    | Nullable |               Description               |
| :------------: | :--------: | :------: | :-------------------------------------: |
|    BOOK_ID     |  INTEGER   |  FALSE   |                 도서 ID                 |
|    CATEGORY    | VARCHAR(N) |  FALSE   | 카테고리 (경제, 인문, 소설, 생활, 기술) |
|   AUTHOR_ID    |  INTEGER   |  FALSE   |                 저자 ID                 |
|     PRICE      |  INTEGER   |  FALSE   |               판매가 (원)               |
| PUBLISHED_DATE |    DATE    |  FALSE   |                 출판일                  |

`BOOK_SALES` 테이블은 각 도서의 날짜 별 판매량 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.

| Column name |  Type   | Nullable | Description |
| :---------: | :-----: | :------: | :---------: |
|   BOOK_ID   | INTEGER |  FALSE   |   도서 ID   |
| SALES_DATE  |  DATE   |  FALSE   |   판매일    |
|    SALES    | INTEGER |  FALSE   |   판매량    |

### 문제

`2022년 1월`의 카테고리 별 도서 판매량을 합산하고, 카테고리(`CATEGORY`), 총 판매량(`TOTAL_SALES`) 리스트를 출력하는 SQL문을 작성해주세요.
결과는 카테고리명을 기준으로 오름차순 정렬해주세요.

</br>

## 자동차 대여 기록에서 대여중 / 대여 가능 여부 구분하기

### 문제 설명

다음은 어느 자동차 대여 회사의 자동차 대여 기록 정보를 담은 `CAR_RENTAL_COMPANY_RENTAL_HISTORY` 테이블입니다. `CAR_RENTAL_COMPANY_RENTAL_HISTORY` 테이블은 아래와 같은 구조로 되어있으며, `HISTORY_ID`, `CAR_ID`, `START_DATE`, `END_DATE` 는 각각 자동차 대여 기록 ID, 자동차 ID, 대여 시작일, 대여 종료일을 나타냅니다.

| Column name |  Type   | Nullable |
| :---------: | :-----: | :------: |
| HISTORY_ID  | INTEGER |  FALSE   |
|   CAR_ID    | INTEGER |  FALSE   |
| START_DATE  |  DATE   |  FALSE   |
|  END_DATE   |  DATE   |  FALSE   |

### 문제

`CAR_RENTAL_COMPANY_RENTAL_HISTORY` 테이블에서 2022년 10월 16일에 대여 중인 자동차인 경우 '대여중' 이라고 표시하고, 대여 중이지 않은 자동차인 경우 '대여 가능'을 표시하는 컬럼(컬럼명: `AVAILABILITY`)을 추가하여 자동차 ID와 `AVAILABILITY` 리스트를 출력하는 SQL문을 작성해주세요. 이때 반납 날짜가 2022년 10월 16일인 경우에도 '대여중'으로 표시해주시고 결과는 자동차 ID를 기준으로 내림차순 정렬해주세요.

</br>

## 조건에 맞는 사용자와 총 거래금액 조회하기

### 문제 설명

다음은 중고 거래 게시판 정보를 담은 `USED_GOODS_BOARD` 테이블과 중고 거래 게시판 첨부파일 정보를 담은 `USED_GOODS_FILE` 테이블입니다. `USED_GOODS_BOARD` 테이블은 다음과 같으며 `BOARD_ID`, `WRITER_ID`, `TITLE`, `CONTENTS`, `PRICE`, `CREATED_DATE`, `STATUS`, `VIEWS`는 게시글 ID, 작성자 ID, 게시글 제목, 게시글 내용, 가격, 작성일, 거래상태, 조회수를 의미합니다.

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

`USED_GOODS_USER` 테이블은 다음과 같으며 `USER_ID`, `NICKNAME`, `CITY`, `STREET_ADDRESS1`, `STREET_ADDRESS2`, `TLNO`는 각각 회원 ID, 닉네임, 시, 도로명 주소, 상세 주소, 전화번호를 를 의미합니다.

|   Column name   |     Type     | Nullable |
| :-------------: | :----------: | :------: |
|     USER_ID     | VARCHAR(50)  |  FALSE   |
|    NICKANME     | VARCHAR(100) |  FALSE   |
|      CITY       | VARCHAR(100) |  FALSE   |
| STREET_ADDRESS1 | VARCHAR(100) |  FALSE   |
| STREET_ADDRESS2 | VARCHAR(100) |   TRUE   |
|      TLNO       | VARCHAR(20)  |  FALSE   |

### 문제

`USED_GOODS_BOARD`와 `USED_GOODS_USER` 테이블에서 완료된 중고 거래의 총금액이 70만 원 이상인 사람의 회원 ID, 닉네임, 총거래금액을 조회하는 SQL문을 작성해주세요. 결과는 총거래금액을 기준으로 오름차순 정렬해주세요.

---

# 🎯 Level 4

## 식품분류별 가장 비싼 식품의 정보 조회하기

### 문제 설명

다음은 식품의 정보를 담은 `FOOD_PRODUCT` 테이블입니다. `FOOD_PRODUCT` 테이블은 다음과 같으며 `PRODUCT_ID`, `PRODUCT_NAME`, `PRODUCT_CD`, `CATEGORY`, `PRICE`는 식품 ID, 식품 이름, 식품코드, 식품분류, 식품 가격을 의미합니다.

| Column name  |    Type     | Nullable |
| :----------: | :---------: | :------: |
|  PRODUCT_ID  | VARCHAR(10) |  FALSE   |
| PRODUCT_NAME | VARCHAR(50) |  FALSE   |
|  PRODUCT_CD  | VARCHAR(10) |   TRUE   |
|   CATEGORY   | VARCHAR(10) |   TRUE   |
|    PRICE     |   NUMBER    |   TRUE   |

### 문제

`FOOD_PRODUCT` 테이블에서 식품분류별로 가격이 제일 비싼 식품의 분류, 가격, 이름을 조회하는 SQL문을 작성해주세요. 이때 식품분류가 '과자', '국', '김치', '식용유'인 경우만 출력시켜 주시고 결과는 식품 가격을 기준으로 내림차순 정렬해주세요.

</br>

## 저자 별 카테고리 별 매출액 집계하기

### 문제 설명

다음은 어느 한 서점에서 판매중인 도서들의 도서 정보(`BOOK`), 저자 정보(`AUTHOR`) 테이블입니다.

`BOOK` 테이블은 각 도서의 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.

|  Column name   |    Type    | Nullable |               Description               |
| :------------: | :--------: | :------: | :-------------------------------------: |
|    BOOK_ID     |  INTEGER   |  FALSE   |                 도서 ID                 |
|    CATEGORY    | VARCHAR(N) |  FALSE   | 카테고리 (경제, 인문, 소설, 생활, 기술) |
|   AUTHOR_ID    |  INTEGER   |  FALSE   |                 저자 ID                 |
|     PRICE      |  INTEGER   |  FALSE   |               판매가 (원)               |
| PUBLISHED_DATE |    DATE    |  FALSE   |                 출판일                  |

`AUTHOR` 테이블은 도서의 저자의 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.

| Column name |    Type    | Nullable | Description |
| :---------: | :--------: | :------: | :---------: |
|  AUTHOR_ID  |  INTEGER   |  FALSE   |   저자 ID   |
| AUTHOR_NAME | VARCHAR(N) |  FALSE   |   저자명    |

`BOOK_SALES` 테이블은 각 도서의 날짜 별 판매량 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.

| Column name |  Type   | Nullable | Description |
| :---------: | :-----: | :------: | :---------: |
|   BOOK_ID   | INTEGER |  FALSE   |   도서 ID   |
| SALES_DATE  |  DATE   |  FALSE   |   판매일    |
|    SALES    | INTEGER |  FALSE   |   판매량    |

### 문제

`2022년 1월`의 도서 판매 데이터를 기준으로 저자 별, 카테고리 별 매출액(`TOTAL_SALES = 판매량 * 판매가`) 을 구하여, 저자 ID(`AUTHOR_ID`), 저자명(`AUTHOR_NAME`), 카테고리(`CATEGORY`), 매출액(`SALES`) 리스트를 출력하는 SQL문을 작성해주세요.
결과는 저자 ID를 오름차순으로, 저자 ID가 같다면 카테고리를 내림차순 정렬해주세요.

</br>

## 년, 월, 성별 별 상품 구매 회원 수 구하기

### 문제 설명

다음은 어느 의류 쇼핑몰에 가입한 회원 정보를 담은 `USER_INFO` 테이블과 온라인 상품 판매 정보를 담은 `ONLINE_SALE` 테이블 입니다. `USER_INFO` 테이블은 아래와 같은 구조로 되어있으며 `USER_ID`, `GENDER`, `AGE`, `JOINED`는 각각 회원 ID, 성별, 나이, 가입일을 나타냅니다.

| Column name |    Type    | Nullable |
| :---------: | :--------: | :------: |
|   USER_ID   |  INTEGER   |  FALSE   |
|   GENDER    | TINYINT(1) |   TRUE   |
|     AGE     |  INTEGER   |   TRUE   |
|   JOINED    |    DATE    |  FALSE   |

`GENDER` 컬럼은 비어있거나 0 또는 1의 값을 가지며 0인 경우 남자를, 1인 경우는 여자를 나타냅니다.

`ONLINE_SALE` 테이블은 아래와 같은 구조로 되어있으며, `ONLINE_SALE_ID`, `USER_ID`, `PRODUCT_ID`, `SALES_AMOUNT`, `SALES_DATE`는 각각 온라인 상품 판매 ID, 회원 ID, 상품 ID, 판매량, 판매일을 나타냅니다.

|  Column name   |  Type   | Nullable |
| :------------: | :-----: | :------: |
| ONLINE_SALE_ID | INTEGER |  FALSE   |
|    USER_ID     | INTEGER |  FALSE   |
|   PRODUCT_ID   | INTEGER |  FALSE   |
|  SALES_AMOUNT  | INTEGER |  FALSE   |
|   SALES_DATE   |  DATE   |  FALSE   |

동일한 날짜, 회원 ID, 상품 ID 조합에 대해서는 하나의 판매 데이터만 존재합니다.

### 문제

`USER_INFO` 테이블과 `ONLINE_SALE` 테이블에서 년, 월, 성별 별로 상품을 구매한 회원수를 집계하는 SQL문을 작성해주세요. 결과는 년, 월, 성별을 기준으로 오름차순 정렬해주세요. 이때, 성별 정보가 없는 경우 결과에서 제외해주세요.

</br>
