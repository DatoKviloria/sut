/*
*  Copyright(c) 2016-2017 David Kviloria <datokviloria@gmail.com>
*  SutJS
*/

'use strict';

/*
* modules
*/
// const assert = require('./core/assert.sut');
const SUTHandler = require('./core/modules/handler.sut');
const setPrototypeOf = require('setprototypeof');
const fs = require('fs');
const watch = require('node-watch');
const crypto = require('crypto');

/*
* Load SutJs helpers
*/
const {
  use,
  pipe,
  stats,
  include,
  template,
  connect,
  Storage
} = require('./core/helpers/');

const $build = {
  count: (fs.existsSync('.sut-history/sut-db.json')) ? read_sut_db().build : Storage.BUILD,
  prev: ''
};

function write(e, name, build) {

  const secret = 'generate-sut-hash';

  const hash = crypto.createHmac('sha256', secret)
                      .update(`${name}-${e}-${build.count}`)
                      .digest('hex');

  sut.store.all.BUILD = build;

  if (build == 1) {
    sut.store.all.PREV_BUILD = `.sut-history/${name}-${e}-${build}.json`
  }

  if (build > 1) {
    sut.store.all.PREV_BUILD = `.sut-history/${name}-${e}-${build-1}.json`
  }

  // if (build > 1) {
  //   let data = fs.readFileSync(sut.store.all.PREV_BUILD, 'utf8');
  //   const parsed = JSON.parse(data);
  //
  //   parsed['BUILD'] = build;
  //
  //   $build.prev = JSON.stringify(parsed, null, 2);
  //
  //   console.log('COMPARE:', $build.prev !== JSON.stringify(sut.store.all, null, 2));
  // }

  // if ($build.prev !== JSON.stringify(sut.store.all, null, 2)) {

    fs.writeFile(`.sut-history/${name}-${e}-${build}.json`, JSON.stringify(sut.store.all, null, 2), (err) => {
      if (err) SUTHandler(`Failed to save build ${build} for ${name}-${e}-${build}.json`, 0);
      console.log(`> Build History (${e}-${build}) -> ${hash}`);
    });

  // } else {
  //   console.log('Current build', $build.count);
  //   $build.count--;
  //   console.log('Reset build to', $build.count);
  //   // return;
  // }

}

function create_sut_db(build, cb) {
  const database = {
    "build": build,
    "date": Date.now()
  };
  fs.writeFile('.sut-history/sut-db.json', JSON.stringify(database, null, 2), (err) => {
    if (err) cb(false);
    console.log(`> Building Database ...`);
    cb(true);
  });
}

function read_sut_db() {
  let data = fs.readFileSync('.sut-history/sut-db.json', 'utf8');
  return {
    build: JSON.parse(data).build
  }
}

const create_build_history = (e, name) => {
  /*
  * Increment Build Count
  */
  $build.count++;

  if (fs.existsSync('.sut-history')) {
    create_sut_db($build.count, (status) => {
      if (status) {
        write(e, name, read_sut_db().build);
      }
    });

  } else {

    let folder = fs.mkdirSync('.sut-history');

    if (folder) {
      create_sut_db($build.count, (status) => {
        if (status) {
          write(e, name, read_sut_db().build);
        }
      });
    }
  }

};

/*
* in future: target file will be *.sut.js not *.js
*/
watch('./', { filter: /\.js$/ }, (e, name) => {

  if (false) {
    create_build_history(e, name);
  }

});

/*
* sut global function takes two argument
* ability: takes infinite functions, based on pipeline strategy
*/
const sut = (...funcs) => {

  for(let func of funcs){
    if (func !== undefined) {
      this.cb = func(this.cb);
    } else {
      // THROW warning message
      SUTHandler('Undefined Argument in (MAIN) SUT Pipeline', 0);
    }
  }

  if ( typeof this.cb === 'function' )
    return console.log('\n'), this.cb;
};

/*
 * Helper uploader for sut object
 * !!! for system/core, not client
*/
sut.__proto__.upload = (...helper) =>{

  if(typeof helper === 'object')

    for (let help of helper)
      setPrototypeOf(sut, help) || Object.create({});

  else
    SUTHandler('helper must be object based function', 0);
};


/*
 * Def functions is for log test to sconsole
*/
let def = (title, cb) => {
  if ( typeof cb === 'function' )
    console.log(`\nFrom: ${title}\n--------------------------------------------------------------`), cb(title);
  else
    SUTHandler('In function def(callback) Need to pass callback function but not found, Did you forogt?', 0);
};


/*
* marge all defaultHelpers as one object
*/
let defaultHelpers = {
  use,
  pipe,
  include,
  template,
  stats,
  connect,
  Storage
};

/*
* Upload defaultHelpers object to sut
*/
sut.upload(
  defaultHelpers
);

/*
* Export All Usable stuff
*/
module.exports = {
  def,
  sut,
  // assert
};
