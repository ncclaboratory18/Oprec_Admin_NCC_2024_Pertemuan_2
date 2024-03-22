# Materi 2 - API

## Daftar Isi
1. [Application Programming Interface (API)](#1-application-programming-interface-(api))
2. [REST API](#2-rest-api)
3. [Penerapan Javascript untuk Backend API](#3-penerapan-javascript-untuk-backend-api)
4. [Deploy Project ke Azure VM](#4-deploy-project-ke-azure-vm)
5. [Postman](#5-postman)

## 1. Application Programming Interface (API)
API merupakan kepanjangan dari Application Programming Interface (Antarmuka Pemrograman Aplikasi). Kata Aplikasi pada API merujuk pada perangkat lunak dengan fungsi yang berbeda. Kata Antarmuka dapat diartikan sebagai kontrak layanan antara dua aplikasi. Kontrak ini menjelaskan cara keduanya saling berkomunikasi dengan menggunakan permintaan (request) dan respons (response). Dokumentasi API keduanya berisi informasi cara developer menyusun permintaan dan respons tersebut.

Beberapa contoh API populer adalah sebagai berikut : 
1. API SOAP
   <br> API ini menggunakan Simple Object Access Protocol. Klien dan server saling bertukar pesan menggunakan XML. API yang kurang fleksibel ini populer di masa lalu.<br><br>
2. API RPC
   <br> API ini disebut sebagai Panggilan Prosedur Jarak Jauh (Remote Procedure Calls) Klien menjalankan fungsi (atau prosedur) pada server, dan server akan mengirimkan output kembali ke klien.<br><br>
3. API Websocket
   <br> API Websocket adalah pengembangan API web modern lain yang menggunakan objek JSON untuk meneruskan data. API WebSocket mendukung komunikasi dua arah antara aplikasi klien dan server. Server dapat mengirimkan pesan callback ke klien yang terhubung, menjadikannya lebih efisien daripada API REST.<br><br>
4. REST API
   <br> API REST merupakan API yang paling populer dan fleksibel di web saat ini. Klien akan mengirimkan permintaan ke server sebagai data. Server akan menggunakan input klien untuk memulai fungsi internal dan mengembalikan data output ke klien. Lihat API REST selengkapnya di bawah ini.<br><br>


## 2. REST API
REST merupakan kepanjangan dari Representational State Transfer. REST mendefinisikan fungsi-fungsi seperti GET, PUT, DELETE, dll. yang dapat digunakan klien untuk mengakses data server. Klien dan server saling bertukar data dengan menggunakan HTTP.<br><br>
Fitur utama API REST adalah sifat stateless-nya. Bersifat stateless berarti server tidak menyimpan data klien di antara permintaan. Permintaan klien ke server mirip dengan URL yang Anda ketik di peramban untuk mengunjungi sebuah situs web. Respons dari server berupa data plain tanpa rendering grafis umum halaman web.<br><br>

Terdapat bebapa protokol komunikasi dalam RESTFUL API yang populer digunakan:
- GET > menerima data
- POST > mengirim data, biasanya untuk create sesuatu
- PUT > memperbarui keseluruhan object data
- PATCH > memperbarui sebagian (parsial) object data
- DELETE > menghapus data

Referensi lain: https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

## 3. Penerapan Javascript untuk Backend API
Dalam proyek nyata, jarang program dibuat dari scratch. Biasanya framework dan library digunakan sebagai alat bantu.

Framework javascript untuk backend ada banyak, yaitu:
- [Express](https://expressjs.com/)
- [hapi](https://hapi.dev/)  
- [Next.js](https://expressjs.com/) 
- dan lain-lain

Pada kesempatan ini, kita akan membuat sistem backend menggunakan framework `Express`.

### Install Node.js dan NPM
Sebelum mulai, kita perlu koneksi ke sisi server menggunakan Node.js. Installer bisa didapat di https://nodejs.org/en/download.
Pilih installer sesuai OS anda. Instalasi Node.js sudah include `npm`, yaitu package manager milik javascript untuk mengunduh library yang nanti dibutuhkan.

### Ngoding Backend-nya
1. Buat folder baru sebagai folder project
2. Masukkan command `npm init -y` untuk men-generate file package.json. Kalian bisa edit langsung field di package.json sesuai kebutuhan project kalian.  
![image](https://user-images.githubusercontent.com/78243059/227727264-3308587e-90b5-41f9-93a3-526334cdcaf4.png)

3. Install library Express dengan command `npm i express`
4. Buat file index.js pada root project dan tuliskan kode di bawah ini  
![image](https://user-images.githubusercontent.com/78243059/227727512-ef8ae3ed-fe90-408b-af9e-317e8468579c.png)

- Pada line 1, kita meng-import library Express dan disimpan pada variabel express
- Pada line 2, kita menjalankan fungsi express dan mendapatkan kembalian sebuah interface dari core.express lalu disimpan ke variabel app
- Pada line 4, kita mendefinisikan port di mana sistem nanti akan berjalan
- Pada line 6, kita mendefinisikan sebuah protokol GET [lihat penjelasan protokol RESTFUL API](#penjelasan-restful-api) yang akan mengembalikan string `Hello World`
- Pada line 10, kita memerintahkan server untuk mendengar pada port yang kita definisikan sebelumnya. Jika console log pada callback berjalan, berarti server berhasil berjalan.
5. Akses http://localhost:3000 pada browser dan kalian akan mendapati hasil sebagai berikut  
![image](https://user-images.githubusercontent.com/78243059/227727818-8649e1b5-67b3-4a35-a70d-14751eb3da87.png)

**Akses url pada browser semacam ini menggunakan protokol GET secara default**

6. Untuk mematikan server, tekan ctrl+c pada terminal

### Memodifikasi Backend
1. Install library `nodemon` dengan command `npm i -D nodemon`. Library ini akan me-reload program secara otomatis setiap kita melakukan save pada file sehingga kita tidak perlu repot menyalakan/mematikan server setiap kali ada perubahan.
2. Setelah menginstall, tambahkan script `start` pada package.json supaya kita bisa jalankan server melalui npm command
![image](https://user-images.githubusercontent.com/78243059/227728560-c236d38a-d8c6-4bfd-bd9f-7bc3cee51888.png)

3. Jalankan server dengan command `npm run start` pada terminal

4. Dari kode program sebelumnya, tambahkan variabel `db` bernilai array kosong yang akan diumpamakan sebagai sumber data (seperti database-nya).
5. Modifikasi juga protokol GET supaya mengembalikan variabel data dalam bentuk json. Kode program akan jadi seperti berikut.
![image](https://user-images.githubusercontent.com/78243059/227729007-7eb601b2-0842-439a-b202-c4b8cf5d908b.png)

*Jangan lupa save file untuk me-restart server*

6. Akses kembali http://localhost:3000 dan kalian akan mendapati server mengembalikan sebuah array kosong  
![image](https://user-images.githubusercontent.com/78243059/227728720-655de2f5-27d2-4f10-8a7b-08b6f64ffc45.png)

7. Coba isi variabel db dengan sebuah object berisi field name, origin, dan role pada variabel data. Lalu restart server dan akses kembali localhost tadi. Kalian akan mendapati hasil sebagai berikut.  
![image](https://user-images.githubusercontent.com/78243059/227729202-488be16f-6da7-4e2d-9351-dfc1f182a4e8.png)

![image](https://user-images.githubusercontent.com/78243059/227729216-707dda36-9769-4f40-8d4c-875dc744549c.png)

*Selamat! Kalian sudah berhasil membuat satu endpoint API untuk mengembalikan semua data*

### Hubungkan ke MySQL

### Push Project ke Repository
*Kita perlu mem-push project ke repository untuk nanti bisa di-pull dari server*

1. Sebelum itu, modifikasi script pada package.json menjadi sebagai berikut  
![image](https://user-images.githubusercontent.com/78243059/227746533-47c0f22c-7238-4212-8e07-a1adf38e1b1f.png)

2. Buat sebuah repository di github (dibuat public saja saat ini untuk memudahkan)
3. Inisialisasi git pada project dengan menjalankan `git init` di terminal
4. Tambahkan sebuah file `.gitignore` pada root project dan isi `node_modules" untuk dikecualikan agar tidak di push ke repository
5. Simpan perubahan pada proyek dengan menjalankan `git add .` lalu `git commit -m "<pesan>"` pada terminal
6. Ubah nama branch utama dari master menjadi main dengan menjalankan command `git branch -M main`
7. Tambahkan remote repository dengan menjalankan `git remote add origin <url repo kalian>`
8. Push proyek ke repo dengan command `git push -u origin main`
9. Cek repository kalian, seharusnya project kalian sudah terupload ke sana

## 4. Deploy Project ke Azure VM
1. Buat VM seperti di pertemuan lalu  
![image](https://user-images.githubusercontent.com/78243059/227730667-4e1c7add-0b40-42e2-8cf0-28a69ee32d86.png)  
2. Pilih server dengan OS Ubuntu versi 20.04LTS

![image](https://user-images.githubusercontent.com/78243059/227730699-5800222e-524a-4eaa-90f3-8d56da511bea.png)  
Pilih akses melalui SSH. Jangan lupa buka akses port untuk ssh (22) dan http (80) supaya API bisa diakses oleh publik.

3. Setelah itu, kalian akan ditunjukkan sebuah pop up untuk mendapatkan key pair ssh. Pilih opsi `Download private key and create resource`.  
![image](https://user-images.githubusercontent.com/78243059/227730892-477da301-fbaa-4524-bd68-9c698618e926.png)

*Kalian akan menerima file berformat .pem. Simpan file (rahasia hanya milik anda) tersebut untuk akses ssh nanti*

4. Setelah instance berhasil dibuat, masuk ke resource dan masuk lagi ke `connect` pada navbar untuk melihat tata cara akses ssh-nya.
5. Jalankan `chmod 400 <keyname>.pem` untuk mengubah permission file.
*Khusus windows, bisa refer ke sini https://superuser.com/questions/1296024/windows-ssh-permissions-for-private-key-are-too-open#answer-1406582*

6. Akses ssh pada terminal dengan command `ssh -i <private key path> <username>@<public ip>` 
7. Buat folder src `mkdir -p src` lalu pindah ke folder tersebut `cd src`
8. Clone project `git clone <url repo kalian>` lalu pindah ke folder project tersebut `cd <folder project kalian>`
9. Kita perlu menginstall dependecies pada project, namun kita perlu menginstall nodejs dan npm dahulu pada server. Jalankan command berikut
```
sudo apt update
sudo apt install nodejs
sudo apt install npm
```
Cek apakah nodejs dan npm sudah terinstall dengan melihat versinya
```
node -v
npm -v
```
10. Setelah itu, jalankan `npm i` untuk install dependency

### Set Up port dengan Nginx
Sebenarnya, project kalian tadi sudah bisa dijalankan dengan command `npm start`, maka server akan mendengar pada port 3000. Namun, pada praktiknya, tidak lazim kita membuka port secara custom. Biasanya port yang dibuka untuk akses api ada pada port 80 (http) atau 443 (https).
Oleh karena itu, kita akan melakukan port forwarding dari prot 80 ke port 3000 di mana project kita akan berjalan.

1. Install nginx
```
sudo apt update
sudo apt install nginx
```
2. Aktifkan firewall untuk nginx dan ssh
```
sudo ufw app list
sudo ufw allow 'Nginx HTTP'
sudo ufw allow 22
```
Aktifkan ufw dengan `sudo ufw enbale`
Cek dengan menjalankan `sudo ufw status`
3. Cek apakah nginx sudah berjalan `systemctl status nginx`. Jika belum, berikut merupakan command untuk nginx
```
sudo systemctl start nginx // running nginx
sudo systemctl stop nginx // menghentikan nginx
sudo systemctl restart nginx // restart nginx
```
4. Akses ip public kalian, maka kalian akan mendapati halaman sebagai berikut yang menandakan bahwa nginx sudah aktif  
![image](https://user-images.githubusercontent.com/78243059/227747502-dd2a722a-0c60-430a-a9c6-c5df8388ab1b.png)

*Saatnya set up nginx supaya mem-forward port 80 ke port 3000 di mana project kita akan berjalan"
5. Buat salinan konfigurasi server dengan command `cp /etc/nginx/sites-available/default /etc/nginx/sites-available/backup`
6. Modifikasi file /etc/nginx/sites-available/default menjadi sebagai berikut
```
server {
    listen 80;

    location / {
        proxy_set_header   X-Forwarded-For $remote_addr;
        proxy_set_header   Host $http_host;
        proxy_pass         "http://127.0.0.1:3000";
    }
}
```
7. Aktifkan konfigurasi dengan command `sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled`, lalu restart nginx `sudo systemctl restart nginx.`
8. Running project kalian dan akses kembali public ip  
![image](https://user-images.githubusercontent.com/78243059/227747886-6affd1b0-5f7d-4c57-88cd-ad3d802fb6da.png)

*Selamat! API server kalian sudah berhasil diakses oleh publik"

### Running Backend as a Service
Kita tidak mungkin menjalankan server setiap saat. Maka, kita perlu menjalankan server as a service supaya berjalan pada background. Dengan demikian, walau komputer kita matikan, server tetap menyala dan bisa diakses kapanpun.

1. Buat systemd file `sudo nano /lib/systemd/system/server.service` dan isi sebagai berikut
```
[Unit]
Description=Backend server service
After=network.target

[Service]
Type=simple
User=marcelm
ExecStart=/usr/bin/node /home/marcelm/src/backend-express
Restart=on-failure

[Install]
WantedBy=multi-user.target
```
2. Restart daemon dan jalankan service server
```
sudo systemctl daemon-reload
sudo systemctl start server
```
Cek apakah service server berjalan dengan command `sudo systemctl status server`

3. Akses kembali public ip. Kalian akan mendapati bahwa server berjalan walaupun kalian tidak mengeksekusi `npm start` pada root project. Dengan demikian, project kalian sudah berjalan pada background.

*Selamat! Kalian sudah berhasil mengatur systemd untuk menjalankan server kalian!*

## 5. Postman
