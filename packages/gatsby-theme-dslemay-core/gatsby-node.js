const fs = require('fs');
const path = require('path');

const mkdirp = require('mkdirp');

/* Check that the folders used by source-filesystem plugin exist.
 * If they do not, they will be created.
 */

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState();

  const dirs = [
    path.join(program.directory, 'src/data'),
    path.join(program.directory, 'src/images'),
  ];

  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`);
      mkdirp.sync(dir);
    }
  });
};
