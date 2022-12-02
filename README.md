# BINOTIFY PREMIUM APP

Aplikasi ini dibuat untuk pemenuhan Tugas Besar 2 IF3110 Web Based Development tahun 2022/2023.
Aplikasi ini digunakan sebagai Frontend Premium App.

## Requirement
- Docker-compose 3.9
- NPM / Yarn

## Installation
1. Install docker dan docker-compose pada komputer. Panduan instalasi docker dan docker compose pada repo binotify-config
2. Clone repository dan masuk ke folder
```
git clone https://gitlab.informatika.org/if3110-2022-k01-02-20/binotify-premium-app.git
cd binotify-premium-app
```

#### Development
```
npm install
npm start
# client started in http://localhost:3001
```

## Screenshots
Login Page
![Login Page](/screenshot/login.jpg)
Register Page
![Register Page](/screenshot/admin.jpg)
Admin Subscribe Page
![Admin Subscribe Page](/screenshot/admin.jpg)
List Song Page
![List Song Page](/screenshot/listlagu.jpg)
Add Song Page
![Add Song Page](/screenshot/tambahlagu.jpg)
Edit Song Page
![Edit Song Page](/screenshot/editlagu.jpg)

## Route
```
URL : `http://localhost:3001/`
# User
Login /
Register /register
Subscription Page /subscribe
Premium Song Management /kelola-lagu
```

## Pembagian Kerja

### Frontend Binotify Premium
Feature | NIM
--- | ---
List Song | 13520057
List Penyanyi | 13520057
Login| 13520057
Register | 13520057
List Subscription | 13520057

Integrasi | NIM
--- | ---
List Song | 13520058
List Penyanyi | 13520087 13520057
Login| 13520058
Register | 13520058
Song Management | 13520087

```
P.S : NIM Pertama pada tabel merupakan penanggung jawab serta pembuat fitur utama
```

## Bagian Bonus
- Responsive (13520057)
- Docker (13520087)

## Author
NIM | NAMA
--- | ---
13520057 | Marcellus Michael Herman Kahari
13520058 | Kristo Abdi Wiguna
13520087 | Dimas Shidqi Parikesit