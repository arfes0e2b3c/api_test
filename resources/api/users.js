exports.handler = async () => {
  return {
    statusCode: 200,
    body: {
      message: "User details by user_id",
      user: {
        user_id: "TaroYamada",
        nickname: "たろー",
        comment: "僕は元気です",
      },
    },
  };
};
