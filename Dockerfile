# 1. 声明基础环境：我们需要一个带有 Node.js 的 Linux 系统
FROM node:20-alpine

# 2. 创建工作目录：就像在虚拟机里执行 mkdir /app
WORKDIR /app

# 3. 把 package.json 复制进去，先装依赖
COPY package*.json ./
RUN npm install

# 4. 把剩下的源码全拷进去
COPY . .

# 5. 执行打包（这就是你在 CI 里跑过的命令）
RUN npm run build

# 6. 我们需要一个轻量级的服务器来运行打包后的网页
RUN npm install -g serve
EXPOSE 3000

# 7. 容器启动时执行的命令
CMD ["serve", "-s", "dist", "-l", "3000"]