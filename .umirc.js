import {resolve} from "path";

// ref: https://umijs.org/config/
export default {
  treeShaking: true,
  theme: "./src/theme/theme.js",
  base: '/gh-api-blog/',
  publicPath: '/gh-api-blog/',
  alias: {
    utils: resolve(__dirname,"./src/utils"),
    assets: resolve(__dirname,"./src/assets"),
    components: resolve(__dirname,"./src/components"),
    containers: resolve(__dirname,"./src/containers")
  },
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-gh-pages'],
    ['umi-plugin-react', {
      antd: true,
      dva: true,
      dynamicImport: false,
      title: 'gh-api-blog',
      dll: false,
      routes: {
        exclude: [
          /models\//,
          /services\//,
          /model\.(t|j)sx?$/,
          /service\.(t|j)sx?$/,
          /components\//,
        ],
      },
    }],
  ],
}
