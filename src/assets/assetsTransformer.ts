import path from 'path';

module.exports = {
  process(src: never, filename: string, config: never, options: never) {
    return 'module.exports = ' + JSON.stringify(path.basename(filename)) + ';';
  },
};
