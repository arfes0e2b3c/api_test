exports.handler = async () => {
  return {
    statusCode: 401,
    body: {
      message: "Authentication Failed",
    },
  };
};
