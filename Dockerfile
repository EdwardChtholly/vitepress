# 使用一个 Node.js 环境来构建
FROM node:18-alpine AS builder

# 安装需要的软件包，包括 Git
RUN apk add --no-cache git

# 设置工作目录
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package*.json ./

# 安装依赖
RUN npm install

# 复制项目文件
COPY . .

# 构建项目
RUN npm run docs:build

# 使用一个 Nginx 镜像部署应用
FROM nginx:alpine

# 复制构建输出到 Nginx 的 html 目录
COPY --from=builder /app/docs/.vitepress/dist /usr/share/nginx/html

# 暴露端口
EXPOSE 80

# 启动 Nginx
CMD ["nginx", "-g", "daemon off;"]
