module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: "empty"
      };
    }
    return config;
  },
  env: {
    SPACE_ID: process.env.MCKIM_SPACE_ID,
    ACCESS_TOKEN: process.env.MCKIM_ACCESS_TOKEN
  }
};
