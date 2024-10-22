### API Calls

```
POST http://localhost:3000/category HTTP/1.1
content-type: application/json

{
    "name": "Telephone",
    "icon": "telephone.png"
}
```

```
POST http://localhost:3000/expense HTTP/1.1
content-type: application/json

{
    "note": "Phone Bill",
    "amount": 1278.41,
    "categoryId": 1
}
```


```
GET http://localhost:3000/category HTTP/1.1
```
```
GET http://localhost:3000/expense HTTP/1.1
```

### sequelize-cli commands

- `npx sequelize-cli model:generate --name Category --attributes name:string,icon`
- `npx sequelize-cli db:migrate`

