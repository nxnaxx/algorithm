### ๐ก H-Index
***

#### ๋ฌธ์  ์ค๋ช
H-Index๋ ๊ณผํ์์ ์์ฐ์ฑ๊ณผ ์ํฅ๋ ฅ์ ๋ํ๋ด๋ ์งํ์๋๋ค. ์ด๋ ๊ณผํ์์ H-Index๋ฅผ ๋ํ๋ด๋ ๊ฐ์ธ h๋ฅผ ๊ตฌํ๋ ค๊ณ  ํฉ๋๋ค. ์ํค๋ฐฑ๊ณผ์ ๋ฐ๋ฅด๋ฉด, H-Index๋ ๋ค์๊ณผ ๊ฐ์ด ๊ตฌํฉ๋๋ค.</br>

์ด๋ค ๊ณผํ์๊ฐ ๋ฐํํ ๋ผ๋ฌธ `n`ํธ ์ค, `h`๋ฒ ์ด์ ์ธ์ฉ๋ ๋ผ๋ฌธ์ด `h`ํธ ์ด์์ด๊ณ  ๋๋จธ์ง ๋ผ๋ฌธ์ด h๋ฒ ์ดํ ์ธ์ฉ๋์๋ค๋ฉด `h`์ ์ต๋๊ฐ์ด ์ด ๊ณผํ์์ H-Index์๋๋ค.</br>

์ด๋ค ๊ณผํ์๊ฐ ๋ฐํํ ๋ผ๋ฌธ์ ์ธ์ฉ ํ์๋ฅผ ๋ด์ ๋ฐฐ์ด citations๊ฐ ๋งค๊ฐ๋ณ์๋ก ์ฃผ์ด์ง ๋, ์ด ๊ณผํ์์ H-Index๋ฅผ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.

#### ์ ํ ์กฐ๊ฑด
* ๊ณผํ์๊ฐ ๋ฐํํ ๋ผ๋ฌธ์ ์๋ 1ํธ ์ด์ 1,000ํธ ์ดํ์๋๋ค.
* ๋ผ๋ฌธ๋ณ ์ธ์ฉ ํ์๋ 0ํ ์ด์ 10,000ํ ์ดํ์๋๋ค.

#### ์์ถ๋ ฅ ์
|citations|return|
|:---|:---|
|[3, 0, 6, 1, 5]|3|
