import express from "express";
import swaggerUi from "swagger-ui-express";
import swaggerJSDoc from "swagger-jsdoc";
import bodyParser from 'body-parser'
const app = express()
const port = process.env.PORT || 3000

// リクエストボディをjsonに変換する
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// Swagger
const options = {
  swaggerDefinition: {
    info: {
      title: "TODO BackEnd API",
      version: "1.0.0"
    }
  },
  apis: ["app.{ts,js}"]
};
app.use("/spec", swaggerUi.serve, swaggerUi.setup(swaggerJSDoc(options)));

app.get('/task', (req: express.Request, res: express.Response) => {
  res.send('Hello World!')
})
/**
 * @swagger
 * /tasks:
 *   get:
 *     summary: TODO一覧を取得するAPI
 *     description: タスク(TODO)の一覧を取得します
 *     responses:
 *       200:
 *         description: タスクの一覧
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 result:
 *                   type: array
 *                   items: 
 *                     type: object
 *                     properties:
 *                       id:
 *                        type: integer
 *                        example: 1
 *                       done:
 *                        type: boolean
 *                       contents:
 *                        type: string
 *                       created_at:
 *                        type: string
 */
app.get('/tasks', (req: express.Request, res: express.Response) => {
  res.json({
    'result': [{
        id: 1,
        done: true,
        contents: 'テスト',
        created_at: '2022-01-02'
      },
      {
        id: 2,
        done: false,
        contents: 'テスト2',
        created_at: '2022-01-03'
      }
    ]}
  )
})

/**
 * @swagger
 * /tasks:
 *   post:
 *     summary: TODOを登録するAPI
 *     description: タスク(TODO)を登録します
 *     parameters:
 *       - in: query
 *         name: contents
 *         required: true
 *         description: タスク内容
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: created.
 */
app.post('/tasks', (req: express.Request, res: express.Response) => {
  const ts = Date.now();
  const date_ob = new Date(ts);
  const date = date_ob.getDate();
  const month = date_ob.getMonth() + 1;
  const year = date_ob.getFullYear();

  // prints date & time in YYYY-MM-DD format
  const create_at = year + "-" + month + "-" + date;
  res.status(201)
  res.json({
    message: "task created",
    tasks: {
      id: 1,
      contents: req.query.contents,
      create_at: create_at
    }
  })
})

/**
 * @swagger
 * /tasks/{id}:
 *   delete:
 *     summary: 指定したTODOを削除するAPI
 *     description: タスク(TODO)を削除します
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: タスク(TODO)ID
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: OK.
 */
app.delete('/tasks/:id', (req: express.Request, res: express.Response) => {
  res.json({
    message: "task deleted",
    tasks: {
      id: 1,
      contents: 'テスト',
    }
  })
})

/**
 * @swagger
 * /tasks/{id}:
 *   patch:
 *     summary: 指定したTODOを更新するAPI
 *     description: タスク(TODO)の内容を更新します
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: タスク(TODO)ID
 *         schema:
 *           type: integer
 *       - in: query
 *         name: contents
 *         required: true
 *         description: タスク(TODO)内容
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: OK.
 */
app.patch('/tasks/:id', (req: express.Request, res: express.Response) => {
  res.json({
    message: "task updated",
    tasks: {
      id: 1,
      contents: 'テスト',
      create_at: '2022-01-02'
    }
  })
})

app.get('/', (req: express.Request, res: express.Response) =>{
  return res.json({ message: 'Hello World' })
})
app.listen(port, () => {
  console.log(`TODO backend api server listening at http://localhost:${port}`)
})
