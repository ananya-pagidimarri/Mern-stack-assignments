1.Generate package.json
npm init -y
2.Create server.js
3.Install, import "express" and create HTTP server.Assign  port
### Connect MongoDB database
REST API   ----> mongodb native driver---> MongoDB server
REST API   ----> mongodb ODM tool(mongoose)---> MongoDB server
a.Install mongoose and connect to mongodb server
b.Create Schema of Resource
c. Create Model of the Schema
d. Perform DB operations on that model
### CREATE PRODUCT API
Product obj Schema: {pid,productName, price}
1.POST /products
2.GET /products
3.GET /products/<objectid>
4.PUT /products/<objectid>
