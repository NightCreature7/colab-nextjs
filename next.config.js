const withVideos = require("next-videos");
const withImages = require("next-images");
module.exports = withImages({
  fileExtensions: ["jpg", "jpeg", "png", "gif"],
  domains: ["i.postimg.cc"],
  webpack(config, options) {
    return config;
  },
});
module.exports = withVideos();
