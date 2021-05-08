self.addEventListener('message', function (e) {
  var data = e.data; // postMessage 的参数
  switch (data.cmd) {
    case 'start':
      self.postMessage(`WORKER STARTED: [${typeof data.msg}] ${data.msg}`);
      break;
    case 'stop':
      self.postMessage('WORKER STOPPED: ' + data.msg);
      self.close(); // Terminates the worker.
      break;
    default:
      self.postMessage(data);
  };
}, false);

console.log('worker-start');