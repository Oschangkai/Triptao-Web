# 筆記區

## Plugin 介紹

- `react-app-rewired`: 複寫 `react-script` 的設定，檔案 `config-overrides.js`
- `babel-plugin-import`: 會分辨 import 的東西哪些需要被 bundle 起來，減少 App 大小

## experimental decorators 解決辦法

### 原
```javascript
@withstyle(styles)
class App extends React.Compoments {
  // ...
}
export default App;
```

## 改
```javascript
class App extends React.Compoments {
  // ...
}
App = withstyle(style)(App);
export default App;
```
