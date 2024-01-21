const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const fs = require('fs')

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

server.use(jsonServer.rewriter({
    '/api/*': '/$1',
    '/blog/:resource/:id/show': '/:resource/:id'
}))

// Add custom routes before JSON Server router
server.get('/reset', (req, res) => {
    let dbBackup = {
        "mugs": [
            {
                "id": 1,
                "name": "Dragon Ball Super",
                "sub_name": "Goku Ultra Instict",
                "image": "https://res.cloudinary.com/dz9smi3nc/image/upload/v1666261753/shop-mugs/items/dbs_yu4xoj.png",
                "description": "lorem Ipsum is Lorem Ipsum but I love Lorem Ipsum but I don't like Lorem Ipsum and I don't like Lorem Ipsum",
                "type": "Magic",
                "price": 6.25
            },
            {
                "id": 2,
                "name": "Dragon Ball Super",
                "sub_name": "Goku Ultra Instict",
                "image": "https://res.cloudinary.com/dz9smi3nc/image/upload/v1666261753/shop-mugs/items/dbs_yu4xoj.png",
                "description": "lorem Ipsum is Lorem Ipsum but I love Lorem Ipsum but I don't like Lorem Ipsum and I don't like Lorem Ipsum",
                "type": "Magic",
                "price": 6.25
            },
            {
                "id": 3,
                "name": "Dragon Ball Super",
                "sub_name": "Goku Ultra Instict",
                "image": "https://res.cloudinary.com/dz9smi3nc/image/upload/v1666261753/shop-mugs/items/dbs_yu4xoj.png",
                "description": "lorem Ipsum is Lorem Ipsum but I love Lorem Ipsum but I don't like Lorem Ipsum and I don't like Lorem Ipsum",
                "type": "Magic",
                "price": 6.25
            },
            {
                "id": 4,
                "name": "Dragon Ball Super",
                "sub_name": "Goku Ultra Instict",
                "image": "https://res.cloudinary.com/dz9smi3nc/image/upload/v1666261753/shop-mugs/items/dbs_yu4xoj.png",
                "description": "lorem Ipsum is Lorem Ipsum but I love Lorem Ipsum but I don't like Lorem Ipsum and I don't like Lorem Ipsum",
                "type": "Magic",
                "price": 6.25
            },
            {
                "id": 5,
                "name": "Dragon Ball Super",
                "sub_name": "Goku Ultra Instict",
                "image": "https://res.cloudinary.com/dz9smi3nc/image/upload/v1666261753/shop-mugs/items/dbs_yu4xoj.png",
                "description": "lorem Ipsum is Lorem Ipsum but I love Lorem Ipsum but I don't like Lorem Ipsum and I don't like Lorem Ipsum",
                "type": "Magic",
                "price": 6.25
            }
        ],

        "users": [
            {
                "id": 1,
                "firs_name": "Facu",
                "last_name": "Alvarez",
                "user": "facuneutral",
                "pass": "test1234",
                "photo": "https://res.cloudinary.com/dz9smi3nc/image/upload/v1666261189/shop-mugs/users-profile-photo/20211103_142018_iggujc.png"
            }
        ],
        "cart": [
            {
                "id": 1,
                "id_user": 1,
                "items": [1, 2, 3],
                "price": 20
            }
        ],
        "orders": [
            {
                "id": 1,
                "id_user": 1,
                "id_cart": 1,
                "status": "process",
                "address": "Argentina, Buenos Aires, Mendonza, Gualmayen, Caña 920"
            }
        ]
    };
    
    const pass = req.query.pass;

    if (pass === "xd") {
        dbBackup = JSON.stringify(dbBackup);
        fs.writeFileSync('db.json', dbBackup);
        res.status(200).json("BD reset...");
    } else {
        res.status(400).json("error in admin pass...");
    }
})

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server

const port = process.env.PORT || 3001;

// Use default router
server.use(router)
server.listen(port, () => {
    console.log('JSON Server is running')
})

// Export the Server API
module.exports = server
