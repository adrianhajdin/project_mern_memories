4.2.2 / 2020-07-27
==================

  * Fix empty files on Node.js 14.x
  * Fix form emitting aborted error after close
  * Replace `fd-slicer` module with internal transform stream
  * deps: http-errors@~1.8.0
    - Fix error creating objects in some environments
    - deps: inherits@2.0.4
    - deps: setprototypeof@1.2.0
  * deps: safe-buffer@5.2.1

4.2.1 / 2018-08-12
==================

  * Use `uid-safe` module to for temp file names
  * deps: fd-slicer@1.1.0
  * deps: http-errors@~1.7.0

4.2.0 / 2018-07-30
==================

  * Use `http-errors` for raised errors
  * Use `random-bytes` module for polyfill
  * perf: remove parameter reassignment

4.1.4 / 2018-05-11
==================

  * Fix file extension filtering stopping on certain whitespace characters
  * Use `safe-buffer` for improved API safety
  * perf: enable strict mode

4.1.3 / 2017-01-22
==================

  * Use `os.tmpdir()` instead of `os.tmpDir()`
  * deps: fd-slicer@1.0.1

4.1.2 / 2015-05-09
==================

  * Do not emit error on part prior to emitting part
  * Fix filename with quotes truncating from certain clients

4.1.1 / 2015-01-18
==================

  * Do not clobber existing temporary files

4.1.0 / 2014-12-04
==================

  * Add `statusCode` field to HTTP-related errors
  * deps: fd-slicer@1.0.0

4.0.0 / 2014-10-14
==================

  * `part` events for fields no longer fire if `autoFields` is on
  * `part` events for files no longer fire if `autoFiles` is on
  * `field`, `file`, and `part` events are guaranteed to emit in the
    correct order - the order that the user places the parts in the
    request. Each `part` `end` event is guaranteed to emit before the
    next `part` event is emitted.
  * Drop Node.js 0.8.x support
  * Improve random temp file names
    - Now using 18 bytes of randomness instead of 8.
  * More robust `maxFilesSize` implementation
    - Before it was possible for race conditions to cause more than
    `maxFilesSize` bytes to get written to disk. That is now fixed.
  * Now `part` objects emit `error` events
    - This makes streaming work better since the part stream will emit
      an error when it is no longer streaming.
  * Remove support for generating the hash digest of a part
    - If you want this, do it in your own code.
  * Remove undocumented `ws` property from `file` objects
  * Require the close boundary
    - This makes multiparty more RFC-compliant and makes some invalid
      requests which used to work, now emit an error instead.

3.3.2 / 2014-08-07
==================

  * Do not invoke callback after close
  * Share callback ending logic between error and close

3.3.1 / 2014-07-22
==================

  * Remove problematic test fixtures

3.3.0 / 2014-07-03
==================

  * Always emit close after all parts ended

3.2.10 / 2014-07-03
===================

  * Fix callback hang in node.js 0.8 on errors
  * Remove execute bit from files

3.2.9 / 2014-06-16
==================

  * Fix attaching error listeners directly after form.parse
  * Fix to not synchronously invoke callback to form.parse on error

3.2.8 / 2014-06-01
==================

  * Fix developer accidentally corrupting data
  * Fix handling epilogue in a separate chunk
  * Fix initial check errors to use supplied callback

3.2.7 / 2014-05-26
==================

  * Fix errors hanging responses in callback-style

3.2.6 / 2014-05-13
==================

  * Fix `maxFields` to error on field after max

3.2.5 / 2014-05-11
==================

  * Support boundary containing equal sign

3.2.4 / 2014-03-26
==================

  * Keep `part.byteCount` undefined in chunked encoding
  * Fix temp files not always cleaned up

3.2.3 / 2014-02-20
==================

  * Improve parsing boundary attribute from `Content-Type`

3.2.2 / 2014-01-29
==================

  * Fix error on empty payloads

3.2.1 / 2014-01-27
==================

  * Fix `maxFilesSize` overcalculation bug

3.2.0 / 2014-01-17
==================

  * Add `maxFilesSize` for `autoFiles`

3.1.2 / 2014-01-13
==================

  * Fix incorrectly using `autoFields` value for `autoFiles`

3.1.1 / 2013-12-13
==================

  * Fix not emitting `close` after all part `end` events

3.1.0 / 2013-11-10
==================

  * Support UTF-8 filename in `Content-Disposition`

3.0.0 / 2013-10-25
==================

  * `form.parse` callback API changed in a compatibility-breaking manner

2.2.0 / 2013-10-15
==================

  * Add callback API to support multiple files with same field name
  * Fix assertion crash when max field count is exceeded
  * Fix assertion crash when client aborts an invalid request
  * Fix assertion crash when `EMFILE` occurrs
  * Switch from assertions to only `error` events
  * Unpipe the request when an error occurs to save resources
  * Update readable-stream to ~1.1.9

2.1.9 / 2013-10-06
==================

  * relax `Content-Type` detection regex

2.1.8 / 2013-08-26
==================

  * Replace deprecated `Buffer.write()`

2.1.7 / 2013-05-23
==================

  * Add repository field to package.json

2.1.6 / 2013-04-30
==================

  * Expose `hash` as an option to `Form`

2.1.5 / 2013-04-10
==================

  * Fix possible `close` event before all temp files are done

2.1.4 / 2013-04-09
==================

  * Fix crash for invalid requests

2.1.3 / 2013-04-09
==================

  * Add `file.size`

2.1.2 / 2013-04-08
==================

  * Add proper backpressure support

2.1.1 / 2013-04-05
==================

  * Add `part.byteCount` and `part.byteOffset`
  * Fix uploads larger than 2KB

2.1.0 / 2013-04-04
==================

 * Complete rewrite. See README for changes and new API.

2.0.0 / 2013-04-02
==================

  * Fork and rewrite from `formidable`
