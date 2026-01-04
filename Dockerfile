# --- 第一阶段：构建 (在云端完成) ---
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
# 只有 package.json 变动时才会重新安装依赖，利用缓存提速
RUN npm install
COPY . .
RUN npm run build

# --- 第二阶段：运行 (这是你最后拉取到本地的部分，极小且极快) ---
FROM nginx:stable-alpine
# 从 builder 阶段拷贝打包好的静态文件到 Nginx 默认目录
COPY --from=builder /app/dist /usr/share/nginx/html
# 暴露 Nginx 默认端口
EXPOSE 80
# Nginx 镜像自带启动命令，这里可以省略 CMD