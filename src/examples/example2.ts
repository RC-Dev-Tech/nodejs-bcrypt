import * as bcrypt from "bcrypt";

export class Example2 {

    run(): void {
      const saltRounds = 10; // 迭代次數.
      const user_password = "qwer1234"  // 使用者密碼.
      var user_hash_password = ""       // 使用者密碼(加密後).

      // 加密.
      user_hash_password = bcrypt.hashSync(user_password, saltRounds);
      console.log(`user_password(${user_password}) => hash code(${user_hash_password})`);

      // 驗證密碼.
      var result = bcrypt.compareSync(user_password, user_hash_password);
      console.log(`compare result is ${result}`);
    }
}