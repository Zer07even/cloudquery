module.exports = {
  rateLimit: {
    windowMs: 1000, // 1 second
    max: 10, // limit each IP to 10 requests per windowMs
  },
};

