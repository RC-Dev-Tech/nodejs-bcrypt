# ![](https://drive.google.com/uc?id=10INx5_pkhMcYRdx_OO4rXNXxcsvPtBYq) NodeJs - bcrypt
> ##### 理論請自行找，網路上有很多相關的文章，這邊只關注於範例實作的部分.

<br>

<!--ts-->
## 目錄
* [簡介](#簡介)
* [使用套件](#使用套件)
* [操作說明](#操作說明)
* [切換範例](#切換範例)
* [延伸項目](#延伸項目)
* [參考資料](#參考資料)
* [備註](#備註)
<!--te-->

---
<br>

## 簡介
bcrypt是一個用來對密碼進行加密和解密的套件，它可以將明文的密碼轉換成一個散列值，<br>
而這個散列值是無法被還原成明文的原始密碼的，所以可以有效的保護密碼的安全性。<br>
使用bcrypt加密後，即使攻擊者得到了這些散列值，也很難通過破解這些值來得到原始密碼。<br>
因此，bcrypt是非常適合用來對存儲在數據庫中的密碼進行加密的。<br>
> 最常使用的應用都是拿來做會員註冊的密碼加密，避免如果資料庫不小心外洩，也不至於密碼全部被看光.

- saltRounds : 是在密碼學中的加鹽(salt)，加鹽的意思是在要加密的字串中加特定的字符，<br>
               打亂原始的字符串，使其生成的散列結果產生變化，其參數越高加鹽次數多越安全相對的加密時間就越長。<br>
<br>

解析加密字串：
加密後的bcrypt分為四個部分：
- Bcrypt 該字串為 UTF-8 編碼，並且包含一個終止符
- Round  (回合數)每增加一次就加倍雜湊次數，預設10次
- Salt   (加鹽)128 bits 22個字元
- Hash   (雜湊)138 bits 31個字元
![](https://drive.google.com/uc?id=10jWzA9jV0rm2CmDnMaRn8UEGKZSqwUFl)
> 圖片來源：[Node.js打造API - 實作bcrypt將使用者密碼加密](https://andy6804tw.github.io/2018/01/08/user-bcrypt/)

<br>

實作範例:
- [Example1](https://github.com/RC-Dev-Tech/nodejs-bcrypt/blob/main/src/examples/example1.ts) - bcrypt的基本用法(非同步).
- [Example2](https://github.com/RC-Dev-Tech/nodejs-bcrypt/blob/main/src/examples/example2.ts) - bcrypt的基本用法(同步).
- [Example3](https://github.com/RC-Dev-Tech/nodejs-bcrypt/blob/main/src/examples/example2.ts) - bcrypt的應用範例(註冊/登入).

---
<br>

## 使用套件.
- express
- body-parser
- bcrypt

---
<br>

## 操作說明.
#### 1. 安裝套件[^1]
> npm install --save
#### 2. 編譯 & 運行
> npm run start

---
<br>

## 切換範例
> 編輯在app.json中的"exsample_mode"，填入的數字代表第幾個範例.

---
<br>

## 延伸項目
* [NodeJs 系列實作](https://github.com/RC-Dev-Tech/nodejs-index) <br>

---
<br>

## 參考資料
* [Github - node.bcrypt](https://andy6804tw.github.io/2018/01/08/user-bcrypt/) <br>
* [Node.js打造API - 實作bcrypt將使用者密碼加密](https://andy6804tw.github.io/2018/01/08/user-bcrypt/) <br>

---
<!--ts-->
#### [目錄 ↩](#目錄)
<!--te-->
---
## 備註：
[^1]: 在這個範例中我們需要安裝部分套件，指令如下：<br>
`npm install express --save` <br>
`npm install body-parser --save` <br>
`npm install axios --save` <br>
因為這些套件已經有被安裝並整合在package.json中，所以這邊直接下**npm install --save**的指令就好
