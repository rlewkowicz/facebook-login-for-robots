/*
 * Copyright (c) 2018, Hugo Freire <hugo@exec.sh>.
 *
 * This source code is licensed under the license found in the
 * LICENSE.md file in the root directory of this source tree.
 */

const _ = require('lodash')
const Promise = require('bluebird')

const td = require('testdouble')
td.config({ promiseConstructor: Promise, ignoreWarnings: true })
require('testdouble-jest')(td, jest)

afterEach(() => td.reset())

global._ = _
global.Promise = Promise
global.td = td
