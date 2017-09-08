# Triptao 憩桃 - 企業端網頁
 
## Installation
```bash
# 安裝 yarn
$ npm install yarn

# 安裝 nodemon
$ npm install nodemon

# 安裝此專案需要的套件
$ yarn install

# 啟動專案(開發模式)
$ yarn start
```
## File Tree
```bash
.
├─ node_modules/          # 套件所置處
├─ public/                # 輸出區
├─ src/                   # 原始檔
│  ├─ components/           # 元件區
│  │  └─ Dashboard/           # Dashboard 的元件
│  ├─ routes/               # 路由
│  │  ├─ Login/               # 登入頁面
│  │  └─ Register/            # 註冊頁面
│  └─ index.js              # 路由進入點
├─ index.js               # 此專案進入點
├─ config-overrides.js    # 複寫 react-script 的檔案
├─ README.md              # 此檔案
├─ Notes.md               # 筆記區
├─ package.json           # 此專案的詳細資料
├─ yarn.lock              # 此專案的依賴包
└─ .gitignore             # 版控排除檔
```