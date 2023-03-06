# 🎯 Level 2

## 조건에 맞는 도서와 저자 리스트 출력하기

### 문제 설명

다음은 어느 한 서점에서 판매중인 도서들의 도서 정보(`BOOK`), 저자 정보(`AUTHOR`) 테이블입니다.

`BOOK` 테이블은 각 도서의 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.

| Column name    | Type       | Nullable | Description                             |
| -------------- | ---------- | -------- | --------------------------------------- |
| BOOK_ID        | INTEGER    | FALSE    | 도서 ID                                 |
| CATEGORY       | VARCHAR(N) | FALSE    | 카테고리 (경제, 인문, 소설, 생활, 기술) |
| AUTHOR_ID      | INTEGER    | FALSE    | 저자 ID                                 |
| PRICE          | INTEGER    | FALSE    | 판매가 (원)                             |
| PUBLISHED_DATE | DATE       | FALSE    | 출판일                                  |

`AUTHOR` 테이블은 도서의 저자의 정보를 담은 테이블로 아래와 같은 구조로 되어있습니다.

| Column name | Type       | Nullable | Description |
| ----------- | ---------- | -------- | ----------- |
| AUTHOR_ID   | INTEGER    | FALSE    | 저자 ID     |
| AUTHOR_NAME | VARCHAR(N) | FALSE    | 저자명      |

### 문제

`'경제'` 카테고리에 속하는 도서들의 도서 ID(`BOOK_ID`), 저자명(`AUTHOR_NAME`), 출판일(`PUBLISHED_DATE`) 리스트를 출력하는 SQL문을 작성해주세요.

결과는 출판일을 기준으로 오름차순 정렬해주세요.

</br>

## 상품 별 오프라인 매출 구하기

### 문제 설명

다음은 어느 의류 쇼핑몰에서 판매중인 상품들의 상품 정보를 담은 `PRODUCT` 테이블과 오프라인 상품 판매 정보를 담은 `OFFLINE_SALE` 테이블 입니다. `PRODUCT` 테이블은 아래와 같은 구조로 `PRODUCT_ID`, `PRODUCT_CODE`, `PRICE`는 각각 상품 ID, 상품코드, 판매가를 나타냅니다.

| Column name  | Type       | Nullable |
| ------------ | ---------- | -------- |
| PRODUCT_ID   | INTEGER    | FALSE    |
| PRODUCT_CODE | VARCHAR(8) | FALSE    |
| PRICE        | INTEGER    | FALSE    |

상품 별로 중복되지 않는 8자리 상품코드 값을 가지며, 앞 2자리는 카테고리 코드를 의미합니다.

`OFFLINE_SALE` 테이블은 아래와 같은 구조로 되어있으며 `OFFLINE_SALE_ID`, `PRODUCT_ID`, `SALES_AMOUNT`, `SALES_DATE`는 각각 오프라인 상품 판매 ID, 상품 ID, 판매량, 판매일을 나타냅니다.

| Column name     | Type    | Nullable |
| --------------- | ------- | -------- |
| OFFLINE_SALE_ID | INTEGER | FALSE    |
| PRODUCT_ID      | INTEGER | FALSE    |
| SALES_AMOUNT    | INTEGER | FALSE    |
| SALES_DATE      | DATE    | FALSE    |

동일한 날짜, 상품 ID 조합에 대해서는 하나의 판매 데이터만 존재합니다.

### 문제

`PRODUCT` 테이블과 `OFFLINE_SALE` 테이블에서 상품코드 별 매출액(판매가 \* 판매량) 합계를 출력하는 SQL문을 작성해주세요. 결과는 매출액을 기준으로 내림차순 정렬해주시고 매출액이 같다면 상품코드를 기준으로 오름차순 정렬해주세요.

---

# 🎯 Level 3

## 없어진 기록 찾기

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

`ANIMAL_OUTS` 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. `ANIMAL_OUTS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `NAME`, `SEX_UPON_OUTCOME`는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. `ANIMAL_OUTS` 테이블의 `ANIMAL_ID`는 `ANIMAL_INS`의 `ANIMAL_ID`의 외래 키입니다.

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_OUTCOME | VARCHAR(N) |  FALSE   |

천재지변으로 인해 일부 데이터가 유실되었습니다. 입양을 간 기록은 있는데, 보호소에 들어온 기록이 없는 동물의 ID와 이름을 ID 순으로 조회하는 SQL문을 작성해주세요.

</br>

## 있었는데요 없었습니다

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

`ANIMAL_OUTS` 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. `ANIMAL_OUTS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `NAME`, `SEX_UPON_OUTCOME`는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. `ANIMAL_OUTS` 테이블의 `ANIMAL_ID`는 `ANIMAL_INS`의 `ANIMAL_ID`의 외래 키입니다.

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_OUTCOME | VARCHAR(N) |  FALSE   |

관리자의 실수로 일부 동물의 입양일이 잘못 입력되었습니다. 보호 시작일보다 입양일이 더 빠른 동물의 아이디와 이름을 조회하는 SQL문을 작성해주세요. 이때 결과는 보호 시작일이 빠른 순으로 조회해야합니다.

</br>

## 오랜 기간 보호한 동물(1)

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

`ANIMAL_OUTS` 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. `ANIMAL_OUTS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `NAME`, `SEX_UPON_OUTCOME`는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. `ANIMAL_OUTS` 테이블의 `ANIMAL_ID`는 `ANIMAL_INS`의 `ANIMAL_ID`의 외래 키입니다.

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_OUTCOME | VARCHAR(N) |  FALSE   |

아직 입양을 못 간 동물 중, 가장 오래 보호소에 있었던 동물 3마리의 이름과 보호 시작일을 조회하는 SQL문을 작성해주세요. 이때 결과는 보호 시작일 순으로 조회해야 합니다.

---

# 🎯 Level 4

## 보호소에서 중성화한 동물

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

`ANIMAL_OUTS` 테이블은 동물 보호소에서 입양 보낸 동물의 정보를 담은 테이블입니다. `ANIMAL_OUTS` 테이블 구조는 다음과 같으며, `ANIMAL_ID`, `ANIMAL_TYPE`, `DATETIME`, `NAME`, `SEX_UPON_OUTCOME`는 각각 동물의 아이디, 생물 종, 입양일, 이름, 성별 및 중성화 여부를 나타냅니다. `ANIMAL_OUTS` 테이블의 `ANIMAL_ID`는 `ANIMAL_INS`의 `ANIMAL_ID`의 외래 키입니다.

|       NAME       |    TYPE    | NULLABLE |
| :--------------: | :--------: | :------: |
|    ANIMAL_ID     | VARCHAR(N) |  FALSE   |
|   ANIMAL_TYPE    | VARCHAR(N) |  FALSE   |
|     DATETIME     |  DATETIME  |  FALSE   |
|       NAME       | VARCHAR(N) |   TRUE   |
| SEX_UPON_OUTCOME | VARCHAR(N) |  FALSE   |

보호소에서 중성화 수술을 거친 동물 정보를 알아보려 합니다. 보호소에 들어올 당시에는 중성화되지 않았지만, 보호소를 나갈 당시에는 중성화된 동물의 아이디와 생물 종, 이름을 조회하는 아이디 순으로 조회하는 SQL 문을 작성해주세요.

</br>

## 그룹별 조건에 맞는 식당 목록 출력하기

### 문제 설명

다음은 식당의 정보를 담은 `REST_INFO`테이블과 식당의 리뷰 정보를 담은 `REST_REVIEW` 테이블입니다. `MEMBER_PROFILE` 테이블은 다음과 같으며 `MEMBER_ID`, `MEMBER_NAME`, `TLNO`, `GENDER`, `DATE_OF_BIRTH`는 회원 ID, 회원 이름, 회원 연락처, 성별, 생년월일을 의미합니다.

|  Column name  |     Type     | Nullable |
| :-----------: | :----------: | :------: |
|   MEMBER_ID   | VARCHAR(100) |  FALSE   |
|  MEMBER_NAME  | VARCHAR(50)  |  FALSE   |
|     TLNO      | VARCHAR(50)  |   TRUE   |
|    GENDER     |  VARCHAR(1)  |   TRUE   |
| DATE_OF_BIRTH |     DATE     |   TRUE   |

`REST_REVIEW` 테이블은 다음과 같으며 `REVIEW_ID`, `REST_ID`, `MEMBER_ID`, `REVIEW_SCORE`, `REVIEW_TEXT`,`REVIEW_DATE`는 각각 리뷰 ID, 식당 ID, 회원 ID, 점수, 리뷰 텍스트, 리뷰 작성일을 의미합니다.

| Column name  |     Type      | Nullable |
| :----------: | :-----------: | :------: |
|  REVIEW_ID   |  VARCHAR(10)  |  FALSE   |
|   REST_ID    |  VARCHAR(10)  |   TRUE   |
|  MEMBER_ID   | VARCHAR(100)  |   TRUE   |
| REVIEW_SCORE |    NUMBER     |   TRUE   |
| REVIEW_TEXT  | VARCHAR(1000) |   TRUE   |
| REVIEW_DATE  |     DATE      |   TRUE   |

### 문제

`MEMBER_PROFIL`E와 `REST_REVIEW` 테이블에서 리뷰를 가장 많이 작성한 회원의 리뷰들을 조회하는 SQL문을 작성해주세요. 회원 이름, 리뷰 텍스트, 리뷰 작성일이 출력되도록 작성해주시고, 결과는 리뷰 작성일을 기준으로 오름차순, 리뷰 작성일이 같다면 리뷰 텍스트를 기준으로 오름차순 정렬해주세요.

</br>

## 특정 기간동안 대여 가능한 자동차들의 대여비용 구하기

### 문제 설명

다음은 어느 자동차 대여 회사에서 대여 중인 자동차들의 정보를 담은 `CAR_RENTAL_COMPANY_CAR` 테이블과 자동차 대여 기록 정보를 담은 `CAR_RENTAL_COMPANY_RENTAL_HISTORY` 테이블과 자동차 종류 별 대여 기간 종류 별 할인 정책 정보를 담은 `CAR_RENTAL_COMPANY_DISCOUNT_PLAN` 테이블 입니다.

`CAR_RENTAL_COMPANY_CAR` 테이블은 아래와 같은 구조로 되어있으며, `CAR_ID`, `CAR_TYPE`, `DAILY_FEE`, `OPTIONS` 는 각각 자동차 ID, 자동차 종류, 일일 대여 요금(원), 자동차 옵션 리스트를 나타냅니다.

| Column name |     Type     | Nullable |
| :---------: | :----------: | :------: |
|   CAR_ID    |   INTEGER    |  FALSE   |
|  CAR_TYPE   | VARCHAR(255) |  FALSE   |
|  DAILY_FEE  |   INTEGER    |  FALSE   |
|   OPTIONS   | VARCHAR(255) |  FALSE   |

자동차 종류는 '세단', 'SUV', '승합차', '트럭', '리무진' 이 있습니다. 자동차 옵션 리스트는 콤마(',')로 구분된 키워드 리스트(예: ''열선시트,스마트키,주차감지센서'')로 되어있으며, 키워드 종류는 '주차감지센서', '스마트키', '네비게이션', '통풍시트', '열선시트', '후방카메라', '가죽시트' 가 있습니다.

`CAR_RENTAL_COMPANY_RENTAL_HISTORY` 테이블은 아래와 같은 구조로 되어있으며, `HISTORY_ID`, `CAR_ID`, `START_DATE`, `END_DATE` 는 각각 자동차 대여 기록 ID, 자동차 ID, 대여 시작일, 대여 종료일을 나타냅니다.

| Column name |  Type   | Nullable |
| :---------: | :-----: | :------: |
| HISTORY_ID  | INTEGER |  FALSE   |
|   CAR_ID    | INTEGER |  FALSE   |
| START_DATE  |  DATE   |  FALSE   |
|  END_DATE   |  DATE   |  FALSE   |

`CAR_RENTAL_COMPANY_DISCOUNT_PLAN` 테이블은 아래와 같은 구조로 되어있으며, `PLAN_ID`, `CAR_TYPE`, `DUTAION_TYPE`, `DISCOUNT_RATE` 는 각각 요금 할인 정책 ID, 자동차 종류, 대여 기간 종류, 할인율(%)을 나타냅니다.

|  Column name  |     Type     | Nullable |
| :-----------: | :----------: | :------: |
|    PLAN_ID    |   INTEGER    |  FALSE   |
|   CAR_TYPE    | VARCHAR(255) |  FALSE   |
| DURAION_TYPE  | VARCHAR(255) |  FALSE   |
| DISCOUNT_RATE |   INTEGER    |  FALSE   |

할인율이 적용되는 대여 기간 종류로는 '7일 이상' (대여 기간이 7일 이상 30일 미만인 경우), '30일 이상' (대여 기간이 30일 이상 90일 미만인 경우), '90일 이상' (대여 기간이 90일 이상인 경우) 이 있습니다. 대여 기간이 7일 미만인 경우 할인정책이 없습니다.

### 문제

`CAR_RENTAL_COMPANY_CAR` 테이블과 `CAR_RENTAL_COMPANY_RENTAL_HISTORY` 테이블과 `CAR_RENTAL_COMPANY_DISCOUNT_PLAN` 테이블에서 자동차 종류가 '세단' 또는 'SUV' 인 자동차 중 2022년 11월 1일부터 2022년 11월 30일까지 대여 가능하고 30일간의 대여 금액이 50만원 이상 200만원 미만인 자동차에 대해서 자동차 ID, 자동차 종류, 대여 금액(컬럼명: `FEE`) 리스트를 출력하는 SQL문을 작성해주세요. 결과는 대여 금액을 기준으로 내림차순 정렬하고, 대여 금액이 같은 경우 자동차 종류를 기준으로 오름차순 정렬, 자동차 종류까지 같은 경우 자동차 ID를 기준으로 내림차순 정렬해주세요.

</br>

## 특정 기간동안 대여 가능한 자동차들의 대여비용 구하기

### 문제 설명

다음은 아이스크림 가게의 상반기 주문 정보를 담은 `FIRST_HALF` 테이블과 7월의 아이스크림 주문 정보를 담은 `JULY` 테이블입니다. `FIRST_HALF` 테이블 구조는 다음과 같으며, `SHIPMENT_ID`, `FLAVOR`, `TOTAL_ORDER`는 각각 아이스크림 공장에서 아이스크림 가게까지의 출하 번호, 아이스크림 맛, 상반기 아이스크림 총주문량을 나타냅니다. `FIRST_HALF` 테이블의 기본 키는 `FLAVOR`입니다. `FIRST_HALF`테이블의 `SHIPMENT_ID`는 `JULY`테이블의 `SHIPMENT_ID`의 외래 키입니다.

|    NAME     |    TYPE    | NULLABLE |
| :---------: | :--------: | :------: |
| SHIPMENT_ID |   INT(N)   |  FALSE   |
|   FLAVOR    | VARCHAR(N) |  FALSE   |
| TOTAL_ORDER |   INT(N)   |  FALSE   |

`JULY` 테이블 구조는 다음과 같으며, `SHIPMENT_ID`, `FLAVOR`, `TOTAL_ORDER`은 각각 아이스크림 공장에서 아이스크림 가게까지의 출하 번호, 아이스크림 맛, 7월 아이스크림 총주문량을 나타냅니다. `JULY` 테이블의 기본 키는 `SHIPMENT_ID`입니다. `JULY`테이블의 `FLAVOR`는 `FIRST_HALF` 테이블의 `FLAVOR`의 외래 키입니다. 7월에는 아이스크림 주문량이 많아 같은 아이스크림에 대하여 서로 다른 두 공장에서 아이스크림 가게로 출하를 진행하는 경우가 있습니다. 이 경우 같은 맛의 아이스크림이라도 다른 출하 번호를 갖게 됩니다.

|    NAME     |    TYPE    | NULLABLE |
| :---------: | :--------: | :------: |
| SHIPMENT_ID |   INT(N)   |  FALSE   |
|   FLAVOR    | VARCHAR(N) |  FALSE   |
| TOTAL_ORDER |   INT(N)   |  FALSE   |

### 문제

7월 아이스크림 총 주문량과 상반기의 아이스크림 총 주문량을 더한 값이 큰 순서대로 상위 3개의 맛을 조회하는 SQL 문을 작성해주세요.

</br>

## 5월 식품들의 총매출 조회하기

### 문제 설명

다음은 식품의 정보를 담은 `FOOD_PRODUCT` 테이블과 식품의 주문 정보를 담은 `FOOD_ORDER` 테이블입니다. `FOOD_PRODUCT` 테이블은 다음과 같으며 `PRODUCT_ID`, `PRODUCT_NAME`, `PRODUCT_CD`, `CATEGORY`, `PRICE`는 식품 ID, 식품 이름, 식품코드, 식품분류, 식품 가격을 의미합니다.

| Column name  |    Type     | Nullable |
| :----------: | :---------: | :------: |
|  PRODUCT_ID  | VARCHAR(10) |  FALSE   |
| PRODUCT_NAME | VARCHAR(50) |  FALSE   |
|  PRODUCT_CD  | VARCHAR(10) |   TRUE   |
|   CATEGORY   | VARCHAR(10) |   TRUE   |
|    PRICE     |   NUMBER    |   TRUE   |

`FOOD_ORDER` 테이블은 다음과 같으며 `ORDER_ID`, `PRODUCT_ID`, `AMOUNT`, `PRODUCE_DATE`, `IN_DATE`, `OUT_DATE`, `FACTORY_ID`, `WAREHOUSE_ID`는 각각 주문 ID, 제품 ID, 주문량, 생산일자, 입고일자, 출고일자, 공장 ID, 창고 ID를 의미합니다.

| Column name  |    Type     | Nullable |
| :----------: | :---------: | :------: |
|   ORDER_ID   | VARCHAR(10) |  FALSE   |
|  PRODUCT_ID  | VARCHAR(5)  |  FALSE   |
|    AMOUNT    |   NUMBER    |  FALSE   |
| PRODUCE_DATE |    DATE     |   TRUE   |
|   IN_DATE    |    DATE     |   TRUE   |
|   OUT_DATE   |    DATE     |   TRUE   |
|  FACTORY_ID  | VARCHAR(10) |  FALSE   |
| WAREHOUSE_ID | VARCHAR(10) |  FALSE   |

### 문제

`FOOD_PRODUCT`와 `FOOD_ORDER` 테이블에서 생산일자가 2022년 5월인 식품들의 식품 ID, 식품 이름, 총매출을 조회하는 SQL문을 작성해주세요. 이때 결과는 총매출을 기준으로 내림차순 정렬해주시고 총매출이 같다면 식품 ID를 기준으로 오름차순 정렬해주세요.

---

# 🎯 Level 5

## 상품을 구매한 회원 비율 구하기

### 문제 설명

다음은 어느 의류 쇼핑몰에 가입한 회원 정보를 담은 `USER_INFO` 테이블과 온라인 상품 판매 정보를 담은 `ONLINE_SALE` 테이블 입니다. `USER_INFO` 테이블은 아래와 같은 구조로 되어있으며 `USER_ID`, `GENDER`, `AGE`, `JOINED`는 각각 회원 ID, 성별, 나이, 가입일을 나타냅니다.

| Column name |    Type    | Nullable |
| :---------: | :--------: | :------: |
|   USER_ID   |  INTEGER   |  FALSE   |
|   GENDER    | TINYINT(1) |   TRUE   |
|     AGE     |  INTEGER   |   TRUE   |
|   JOINED    |    DATE    |  FALSE   |

`GENDER` 컬럼은 비어있거나 0 또는 1의 값을 가지며 0인 경우 남자를, 1인 경우는 여자를 나타냅니다.

`ONLINE_SALE` 테이블은 아래와 같은 구조로 되어있으며 `ONLINE_SALE_ID`, `USER_ID`, `PRODUCT_ID`, `SALES_AMOUNT`, `SALES_DATE`는 각각 온라인 상품 판매 ID, 회원 ID, 상품 ID, 판매량, 판매일을 나타냅니다.

|  Column name   |  Type   | Nullable |
| :------------: | :-----: | :------: |
| ONLINE_SALE_ID | INTEGER |  FALSE   |
|    USER_ID     | INTEGER |  FALSE   |
|   PRODUCT_ID   | INTEGER |  FALSE   |
|  SALES_AMOUNT  | INTEGER |  FALSE   |
|   SALES_DATE   |  DATE   |  FALSE   |

동일한 날짜, 회원 ID, 상품 ID 조합에 대해서는 하나의 판매 데이터만 존재합니다.

### 문제

`USER_INFO` 테이블과 `ONLINE_SALE` 테이블에서 2021년에 가입한 전체 회원들 중 상품을 구매한 회원수와 상품을 구매한 회원의 비율(=2021년에 가입한 회원 중 상품을 구매한 회원수 / 2021년에 가입한 전체 회원 수)을 년, 월 별로 출력하는 SQL문을 작성해주세요. 상품을 구매한 회원의 비율은 소수점 두번째자리에서 반올림하고, 전체 결과는 년을 기준으로 오름차순 정렬해주시고 년이 같다면 월을 기준으로 오름차순 정렬해주세요.
