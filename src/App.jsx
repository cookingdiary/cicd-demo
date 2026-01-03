// src/App.jsx
import React from "react";

function App() {
  // 注意：Webpack 需要配合 DefinePlugin 才能读取 process.env
  // 为了演示简单，我们先确认 CI 能拿到它
  const apiKey = process.env.MY_API_KEY || "未拿到密钥";

  return (
    <div>
      <h1>CI/CD 秘密实验</h1>
      <p>当前的 API Key 是: {apiKey}</p>
    </div>
  );
}

export default App;
