### ๐ก ๋ชจ์๊ณ ์ฌ
***

#### ๋ฌธ์  ์ค๋ช
์ํฌ์๋ ์ํ์ ํฌ๊ธฐํ ์ฌ๋์ ์ค๋ง์๋๋ค. ์ํฌ์ ์ผ์ธ๋ฐฉ์ ๋ชจ์๊ณ ์ฌ์ ์ํ ๋ฌธ์ ๋ฅผ ์ ๋ถ ์ฐ์ผ๋ ค ํฉ๋๋ค. ์ํฌ์๋ 1๋ฒ ๋ฌธ์ ๋ถํฐ ๋ง์ง๋ง ๋ฌธ์ ๊น์ง ๋ค์๊ณผ ๊ฐ์ด ์ฐ์ต๋๋ค.</br>

1๋ฒ ์ํฌ์๊ฐ ์ฐ๋ ๋ฐฉ์: 1, 2, 3, 4, 5, 1, 2, 3, 4, 5, ...</br>
2๋ฒ ์ํฌ์๊ฐ ์ฐ๋ ๋ฐฉ์: 2, 1, 2, 3, 2, 4, 2, 5, 2, 1, 2, 3, 2, 4, 2, 5, ...</br>
3๋ฒ ์ํฌ์๊ฐ ์ฐ๋ ๋ฐฉ์: 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, 3, 3, 1, 1, 2, 2, 4, 4, 5, 5, ...</br>

1๋ฒ ๋ฌธ์ ๋ถํฐ ๋ง์ง๋ง ๋ฌธ์ ๊น์ง์ ์ ๋ต์ด ์์๋๋ก ๋ค์ ๋ฐฐ์ด answers๊ฐ ์ฃผ์ด์ก์ ๋, ๊ฐ์ฅ ๋ง์ ๋ฌธ์ ๋ฅผ ๋งํ ์ฌ๋์ด ๋๊ตฌ์ธ์ง ๋ฐฐ์ด์ ๋ด์ return ํ๋๋ก solution ํจ์๋ฅผ ์์ฑํด์ฃผ์ธ์.</br>
์๋ฅผ ๋ค์ด a = 3, b = 5์ธ ๊ฒฝ์ฐ, 3 + 4 + 5 = 12์ด๋ฏ๋ก 12๋ฅผ ๋ฆฌํดํฉ๋๋ค.

#### ์ ํ ์กฐ๊ฑด
* ์ํ์ ์ต๋ 10,000 ๋ฌธ์ ๋ก ๊ตฌ์ฑ๋์ด์์ต๋๋ค.
* ๋ฌธ์ ์ ์ ๋ต์ 1, 2, 3, 4, 5์ค ํ๋์๋๋ค.
* ๊ฐ์ฅ ๋์ ์ ์๋ฅผ ๋ฐ์ ์ฌ๋์ด ์ฌ๋ฟ์ผ ๊ฒฝ์ฐ, returnํ๋ ๊ฐ์ ์ค๋ฆ์ฐจ์ ์ ๋ ฌํด์ฃผ์ธ์.

#### ์์ถ๋ ฅ ์
|answers|return|
|:---:|:---:|
|[1,2,3,4,5]|[1]|
|[1,3,2,4,2]|[1,2,3]|
