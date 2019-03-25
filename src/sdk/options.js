export default {

  debug: false,

  // 链接配置
  connect: {
    reconnectCount: 10, // 最多重连10次
    delay: 5000, // 重新连接间隔
    host: '', // 主机名
    // port: 80, // 端口
    path: '' // 路径
  },

  maType: 6, // 平台类型web端：6

  // 20 秒ping一次
  pingInterval: 20
};
