# 海棠範本 #
 前端開發 Foundation 6.4.3 版本 

### 日期紀錄 ###
```
2019/07 Edit by Vivi - Gulp 環境建置
```

### 版控檔案相關 ###

* [foundation 6.4.3](https://foundation.zurb.com) - 使用框架 The web framework used
* [foundation XY Grid](https://foundation.zurb.com/sites/docs/xy-grid.html) - XY Grid / Flex Grid
* [JQuery 3.2.1](https://code.jquery.com/jquery/) - Jquery Verison
>如有需要特別添加之方式，在填寫於此

### 啟動 ###
* Gulp啟動與建構
* 啟動資訊
1.使用HTML生成（HTML架構）：Html-extend
2.可使用自製 iconFont，詳細運用見Gulpfile.js
<br>
(參考iconfont生成後的html，請在網址列後加入/fonts/icons/)
範例：http://localhost:3000/fonts/icons/
```diff
// Gulp.js 2019/02修正列表
// Node version v10.15.1
// NPM version V6.4.1
// Gulp version v3.9.1
// Gulp CLI version v3.9.1
// -------------------------
1.棄用gulp-ruby-sass，改使用gulp-sass
+	新增gulp-sass^4.0.2
-	移除gulp-ruby-sass(作者即將棄用；並不再更新)
2.JS檔案，支援ES5 , ES6 , ES7的寫法支援
+	新增gulp-babel，兼容各個ES寫法
+ 更新gulp-babel最新套件
3.JS vendor 檔案格式重新建構
+	調整JS/vendor放置檔案，自動輸出js.min檔讓結構更簡單明瞭
4.CSS min 的source map支援
+	dist檔案載入css.min檔案，也支援sourcemap了！
5.更新gulp-imagemin的套件
+	將圖片壓縮套件全部更新，支援全檔案壓縮
6.將browserSync更新，語法更新
+	現在有更快的HTML/CSS/JS的編譯了，檔案修改存檔後會直接快速的reload
-	移除每次存檔的網頁重新reload時間
7.重新架構新版本foundation framwork , bootstrap framwork
+	框架版本更新至官方最新版本
8.PUG支援
+	支援哈巴狗了ಠ_ಠ
// -------------------------
// 問題列表
- 1.windows環境下，pngquant圖片壓縮會有 libpng 未下載錯誤訊息，並無法壓縮png檔案
- 2.SASS編譯如果發生格式錯誤，目前只會顯示在終端機不會顯示在編譯後的網頁畫面（正在進行撰寫像ruby-sass的錯誤訊息）
```


### 使用外掛列表 ###
>請將有使用的外掛套件撰寫於此

### 注意事項 ###

```diff
尚未解決之問題
//---------------------------
+問題解決
-新增問題
```


### 檔案說明 ###
##### --------------------  SCSS -------------------- ##### 
* componer：為放置各個別頁面SCSS
* 主要網頁breakpoint：
尺寸請看sass/foundation/setting/setting.scss

* 整體項目設定包含：h1-h6字體、字級、顏色、breakpoint、主要顯示寬度範圍...等基礎設定，整體設置顏色與字體大小放在_layout.scss
* 如果想要增減foundation的項目開啟，請使用sass/foundation/foundation.scss
* 通用元素，一律放置於layout.sass or layout.scss，請參考layout/_layout.scss
* 各別頁面內的通用元素，一樣置頂
* [切版規範](https://drive.google.com/open?id=0B-95R-GtK6XNM1dVZlVlS2xnSEVTS0Z5YnRJZllwa1d1LUJv) - 其他整體事項請參考



##### -------------------- JS -------------------- #####
* JS資料夾外層請放置各個頁面檔案配合JS
* JS > vendor 裡頭請放置專案用的外掛或是套件檔案
（沒壓縮或有壓縮檔皆可放置，Gulp編譯會自動判斷並產出.min檔案，所以js頁面載入時請統一載入壓縮.min檔）
* JS檔案已兼容 ES6 以及 ES5 可在檔案內撰寫，Gulp編譯後會自動產生 ES5 語法


### 海棠相關文件 ###

##### 設計部 #####
* 內部切版進度：（網址連結）
（此為範例網站，請首次切整體Layout的前端工程師，更換正確連結）
以上進度請開放權限給「老大、莉莉安、Evonne、設計主管、PM主管、該專案PM」

##### PM提供 #####
* 詳細需要知道進度請PM提供，（網址連結）
（此為範例網站，請專案PM提供正確連結）

##### 其他 #####
1. 線上編輯ReadMe.md檔案顯示：https://jbt.github.io/markdown-editor/
2. 線上編輯ReadMe.md檔案顯示：https://dillinger.io/
