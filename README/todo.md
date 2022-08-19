## Level Database

1. Schema table / ERD  [DONE]
2. Terdapat entitas wajib yaitu Users [DONE]
     dengan attribute wajib-nya : 
     - email 
     - password
     - role
3. Memiliki 2 asosiasi yang berbeda :  [2/2]

- -  One to One  1:1  ✅
    
         User - Profile 
         Product - ProductDetail
         Country - Capital
    

       -  One to Many 1:N
       -  Many to Many M:N

4. Membuat migrasi tambahan [DONE]

### Routes

1. Minimal terdapat 2 route get dan 1 route post [DONE]
2. Terdapat route untuk logout [...]

### Level Aplikasi

1. Terdapat fitur Search atau Sort [...]
2. Terdapat Static method & Instance method [...]
3. Menggunakan berbagai macam Validasi dari Sequelize [...]
4. Menggunakan method-method sequelize yang bertujuan untuk CRUD [DONE]
5. Hooks [DONE]
6. Helper [DONE]

### Pages

1. Landing Page (menggambarkan project) [...]
2. Register & Login Page [DONE]
3. Memiliki 1 halaman view yang menampilkan [...]
    data gabungan dari 2 tabel atau lebih.

### Explore

1. Membuat sistem login dengan Middleware, Session & Bcryptjs. [...]
2. Membuat MVP  (minimal 1 package lain) [...]
    sebagai fitur tambahan dalam web-app pair projectmu.
3. Mendeploy pair project ke cloud (pakai Heroku) [...]