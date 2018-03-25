/*
*  Copyright(c) 2017-2018 David Kviloria <datokviloria@gmail.com>
*  SutJS@Neo
*/

const fs = require('fs');
const watch = require('node-watch');
const crypto = require('crypto');
const promisify = require('util').promisify;
const join = require('path').join;
const Storage = require('./storage.sut');
const sut = require('../../sut');

const HISTORY_DIR = '.sut';
const DATABASE_FILE = 'sut-db.json';

const SALT = 'generate-sut-hash';

const $build = {
  count: (fs.existsSync(join(HISTORY_DIR, DATABASE_FILE))) ? read_sut_db().build : Storage.BUILD,
  prev: ''
};

function create_sut_db(build, cb) {
  const database = {
    "build": build,
    "date": Date.now()
  };
  fs.writeFile(join(HISTORY_DIR, DATABASE_FILE), JSON.stringify(database, null, 2), (err) => {
    if (err) cb(false);

    if (!fs.existsSync(`${HISTORY_DIR}/${DATABASE_FILE}`))
      console.log(`> Building Database ...`);
    else
      console.log(`> Update Database: ${HISTORY_DIR}/${DATABASE_FILE}`);

    cb(true);
  });
}

function read_sut_db() {
  let data = fs.readFileSync(join(HISTORY_DIR, DATABASE_FILE), 'utf8');
  return {
    build: JSON.parse(data).build
  }
}

function create_build_history(e, name) {

  $build.count++;

  if (fs.existsSync(HISTORY_DIR)) {
    create_sut_db($build.count, (status) => (status &&
                  write(e, name, read_sut_db().build)))
  } else {

    const folder = fs.mkdirSync(HISTORY_DIR);

    if (folder)
      create_sut_db($build.count, (status) => (status &&
                    write(e, name, read_sut_db().build)))
  }

}

function write(e, name, build) {

  const hash = crypto.createHmac('sha256', SALT)
                      .update(`${name}-${e}-${$build.count}`)
                      .digest('hex');

  sut.store.all.BUILD = build;

  /*
  * Skip Genesis Package
  */
  if ( build === null ) return;

  if (build == 2) {
    sut.store.all.PREV_BUILD = `${HISTORY_DIR}/${name}-${e}-${build}.json`
  }

  if (build > 2) {
    /*
    * if build history was cleard, inital build count from current build
    */
    if (fs.existsSync(`${HISTORY_DIR}/${name}-${e}-${build-2}.json`))
      sut.store.all.PREV_BUILD = `${HISTORY_DIR}/${name}-${e}-${build-2}.json`;
    else
      sut.store.all.PREV_BUILD = `${HISTORY_DIR}/${name}-${e}-${build}.json`
  }

  /*
  * Skip odd build's to update test
  */
  if ( build % 2 === 0 ) {
    fs.writeFile(`${HISTORY_DIR}/${name}-${e}-${build}.json`, JSON.stringify(sut.store.all, null, 2),
        (err) => {
          if (err) SUTHandler(`Failed to save build ${build} for ${name}-${e}-${build}.json`, 0);
          console.log(`> Build History (${e}-${build}) -> ${hash}`);
        }
    );
  }

}

exports.createHistory = options => {
  if (options.build) {
    watch('./', { filter: /\.js$/ },
      (e, name) => create_build_history(e, name));
  }
}
