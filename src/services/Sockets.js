const socketIOClient = require("socket.io-client")
let socket = socketIOClient(process.env.REACT_APP_SOCKET_IO);

export default socket
