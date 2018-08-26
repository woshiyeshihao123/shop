# 首商网前端  
## 项目介绍  
本项目是首商网的前端部分  
> ## 注意事项 
> 由于服务器配置问题，目前Git Clone所用的SSH的地址有问题，请用**114.115.209.116**代替域名**gitcloud.tsoftware.cn**    
> 等服务器配置正确会后，会删除此提醒
## 项目操作
### 依赖文件安装
#### 安装npm的淘宝源
`npm install -g cnpm --registry=https://registry.npm.taobao.org`
#### 用淘宝源安装依赖
`cnpm i -g fis3`  
在项目目录中运行  
`cnpm i`
### 运行项目
`npm run dev`
### 打包项目
`npm run build`
## 项目说明
src为项目根目录  
通用的静态文件包括css、img、js放置于assets中  
各自的代码在pages中新建文件夹，放置其中，例如demo
widgets中存放公共的部分，例如header、footer这些，引用的示例可以看demo中的代码
