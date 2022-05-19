const moduleRegistry = {};

//
// The wrapper looks something like this
//

moduleRegistry["<module_id>"] = function (exports, require, module, __filename, __dirname) {
    //
    // Module code actually lives in here
    //
};

//
// The require function looks something like this
//
function require(moduleId) {
    if (moduleId in require.cache) {
        return require.cache[moduleId];
    }

    const module = {
        id: moduleId,
        filename: "./the/file/to/be/required", // and other stuff...
        exports: {},
    };
    const exports = module.exports;
    const __filename = module.filename;
    const __dirname = fs.dirname(__filename);

    const factory = moduleRegistry[moduleId];

    require.cache[moduleId] = factory(exports, require, module, __filename, __dirname);
    return require.cache[moduleId];
}
require.cache = {};
