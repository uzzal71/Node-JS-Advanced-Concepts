const cleanupHandler = () => {
    console.log('Cleanup code');
  };
  
  readStream.on('close', cleanupHandler);
  