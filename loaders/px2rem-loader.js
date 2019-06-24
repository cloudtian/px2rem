const loaderUtils = require('loader-utils');

module.exports = function generateCode(source) {
    let code = source.slice(0, -1);

    // 获取用户给当前loader传入的options
    const options = loaderUtils.getOptions(this) || {};

    const {baseSize: hfs = 14} = options; // html font-size

    return code.replace(/(\d+)px/g, (k) => {
        return `${(parseFloat(k)/hfs).toFixed(3)}rem`;
    });
}


// 返回其他结果

// // 通过 this.callback 告诉 Webpack 返回的结果
// this.callback(null, source, sourceMaps);
// // 当你使用 this.callback 返回内容时，该 Loader 必须返回 undefined，
// // 以让 Webpack 知道该 Loader 返回的结果在 this.callback 中，而不是 return 中 
// return;
     

// this.callback(
//     // 当无法转换原内容时，给 Webpack 返回一个 Error
//     err: Error | null,
//     // 原内容转换后的内容
//     content: string | Buffer,
//     // 用于把转换后的内容得出原内容的 Source Map，方便调试
//     sourceMap?: SourceMap,
//     // 如果本次转换为原内容生成了 AST 语法树，可以把这个 AST 返回，
//     // 以方便之后需要 AST 的 Loader 复用该 AST，以避免重复生成 AST，提升性能
//     abstractSyntaxTree?: AST
// );
      

// 同步与异步
// module.exports = function(source) {
//     // 告诉 Webpack 本次转换是异步的，Loader 会在 callback 中回调结果
//     var callback = this.async();
//     someAsyncOperation(source, function(err, result, sourceMaps, ast) {
//         // 通过 callback 返回异步执行后的结果
//         callback(err, result, sourceMaps, ast);
//     });
// };

// 处理二进制数据
// module.exports = function(source) {
//     // 在 exports.raw === true 时，Webpack 传给 Loader 的 source 是 Buffer 类型的
//     source instanceof Buffer === true;
//     // Loader 返回的类型也可以是 Buffer 类型的
//     // 在 exports.raw !== true 时，Loader 也可以返回 Buffer 类型的结果
//     return source;
// };
// // 通过 exports.raw 属性告诉 Webpack 该 Loader 是否需要二进制数据 
// module.exports.raw = true;


// 缓存加速 webpack默认会缓存所有loader的处理结果，
// 需要被处理的文件或者其依赖的文件没有发生变化时，不会重新调用对应的loader去执行转换操作的
// module.exports = function(source) {
//     // 关闭该 Loader 的缓存功能
//     this.cacheable(false);
//     return source;
//   };

// 其他API
// this.context：当前处理文件的所在目录，假如当前 Loader 处理的文件是 /src/main.js，则 this.context 就等于 /src。
// this.resource：当前处理文件的完整请求路径，包括 querystring，例如 /src/main.js?name=1。
// this.resourcePath：当前处理文件的路径，例如 /src/main.js。
// this.resourceQuery：当前处理文件的 querystring。
// this.target：等于 Webpack 配置中的 Target。
// this.loadModule：但 Loader 在处理一个文件时，如果依赖其它文件的处理结果才能得出当前文件的结果时，
// 就可以通过 this.loadModule(request: string, callback: function(err, source, sourceMap, module)) 去获得 request 对应文件的处理结果。
// this.resolve：像 require 语句一样获得指定文件的完整路径，使用方法为 resolve(context: string, request: string, callback: function(err, result: string))。
// this.addDependency：给当前处理文件添加其依赖的文件，以便再其依赖的文件发生变化时，会重新调用 Loader 处理该文件。使用方法为 addDependency(file: string)。
// this.addContextDependency：和 addDependency 类似，但 addContextDependency 是把整个目录加入到当前正在处理文件的依赖中。使用方法为 addContextDependency(directory: string)。
// this.clearDependencies：清除当前正在处理文件的所有依赖，使用方法为 clearDependencies()。
// this.emitFile：输出一个文件，使用方法为 emitFile(name: string, content: Buffer|string, sourceMap: {...})。

// 加载本地loader
// module.exports = {
//     resolveLoader:{
//         // 去哪些目录下寻找 Loader，有先后顺序之分
//         modules: ['node_modules','./loaders/'],
//     }
// }