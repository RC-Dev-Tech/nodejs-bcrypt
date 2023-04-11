import * as bcrypt from "bcrypt";

/*
在 bcrypt.hash() 方法中，第二個參數是稱為 salt rounds（鹽回合）的值。
這個值決定了產生哈希值時要運行的迭代次數，也就是加密的強度。
值越高，產生哈希值所需的時間就越長，加密強度也越高，但也會對伺服器的效能產生一定的影響。
一般建議的 salt rounds 值是10到12之間。
另外，也請確認第一個參數password是一個字串或Buffer，如果不是的話會拋出錯誤訊息。
*/

var user_hash_password: string = "";     // 使用者密碼(加密後).
export class Example1 {
    async run() {
      const saltRounds: number = 10;              // 迭代次數.
      const user_password: string = "qwer1234"    // 使用者密碼.

      // 加密.
      await bcrypt.hash(user_password, saltRounds)
      .then(function(hash) {
        // 將user_password將行加密雜湊，這個加密過後的hash code必須記起來，後面驗證會需要用到.
        user_hash_password = hash;
        console.log(`user_password(${user_password}) => hash code(${hash})`);
      });

      // 驗證密碼.
      await bcrypt.compare(user_password, user_hash_password)
      .then(function(res){
        console.log(`compare result is ${res}`);
      });

      console.log('run example done.')
    }
}