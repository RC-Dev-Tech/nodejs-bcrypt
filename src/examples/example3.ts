import * as express from "express";
import * as bodyParser from "body-parser"
import * as bcrypt from "bcrypt";
import { Config } from "../config";

const users:any[] = []; // 使用者資料庫(模擬).
export class Example3 {

    run(): void {
      const httpconf = Config.getInstance().get()["portal"];
      const port : number = httpconf ["port"];
      const app = express();
      // setup body-parser.
      app.use(bodyParser.text({type: '*/*'}));

      /*
       註冊帳號.
       測試curl如下:
       curl -X POST \
          http://localhost:3002/register \
          -H 'Content-Type: application/json' \
          -d '{
             "username": "ricky",
             "password": "1234"
          }'
      */
      app.post('/register', async (req, res) => {
         try {
           // 從請求中取得帳號和密碼.
           var registrant = JSON.parse(req.body);
           const username = registrant.username;
           const password = registrant.password;
      
           // 檢查帳號是否已被註冊.
           const user = users.find(user => user.username === username);
           if (user) {
              return res.status(409).send('User already exists');
           }
      
           // 將密碼轉換成雜湊值.
           const hashedPassword = await bcrypt.hash(password, 10);
      
           // 儲存使用者資料到資料庫中.
           users.push({ username, hashedPassword });
           console.log(users);

           res.status(201).send('User registered successfully');
         } catch (error) {
           console.error(error);
           res.status(500).send('Internal Server Error');
         }
      });

      /*
       登入.
       測試curl如下:
       curl -X POST \
          http://localhost:3002/login \
          -H 'Content-Type: application/json' \
          -d '{
             "username": "ricky",
             "password": "1234"
          }'
      */
      app.post('/login', async (req, res) => {
         try {
         // 從請求中取得帳號和密碼.
         var registrant = JSON.parse(req.body);
         const username = registrant.username;
         const password = registrant.password;
      
         // 檢查帳號是否存在.
         const user = users.find(user => user.username === username);
         if (!user) {
            return res.status(401).send('Invalid username or password');
         }
      
         // 比對密碼是否正確.
         console.log(`{${password}, ${user.hashedPassword}}`);
         const isValidPassword = await bcrypt.compare(password, user.hashedPassword);
         if (!isValidPassword) {
            return res.status(401).send('Invalid username or password');
         }
      
         res.status(200).send('Login successful');
         } catch (error) {
         console.error(error);
         res.status(500).send('Internal Server Error');
         }
      });

      // start  listen server.
      app.listen(port, function () {
         console.log(`Example app listening on port ${port}!`)
       })
    }
}