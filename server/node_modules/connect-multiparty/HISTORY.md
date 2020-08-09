2.2.0 / 2018-09-14
==================

  * Fix masking `multiparty` errors as 400
  * deps: multiparty@~4.2.1
    - Use http-errors for raised errors
    - Use uid-safe module to for temp file names
    - Update to fd-slicer 1.1.0
    - perf: remove parameter reassignment

2.1.1 / 2018-06-22
==================

  * deps: multiparty@~4.1.4
    - Enable strict mode
    - Fix file extension filtering stopping on certain whitespace characters
    - Use safe-buffer for improved API safety
  * deps: qs@~6.5.2
  * deps: type-is@~1.6.16
    - deps: mime-types@~2.1.18

2.1.0 / 2017-10-19
==================

  * deps: multiparty@~4.1.3
    - Use `os.tmpdir()` instead of `os.tmpDir()`
    - deps: fd-slicer@~1.0.1
  * deps: qs@~6.5.1
    - Fix array parsing from skipping empty values
    - Fix compacting of nested sparse arrays
    - Fix parsing & compacting very deep objects
  * deps: type-is@~1.6.15
    - Fix type error when given invalid type to match against
    - deps: mime-types@~2.1.15
  * perf: enable strict mode

2.0.0 / 2015-07-13
==================

  * Requires Node.js >= 0.10.0
  * deps: multiparty@~4.1.2
  * deps: on-finished@~2.3.0
  * deps: qs@~4.0.0
  * deps: type-is@~1.6.4

1.2.5 / 2014-10-14
==================

  * Update qs to 2.2.4
  * Update type-is to 1.5.2

1.2.4 / 2014-08-29
==================

  * Update qs to 2.2.2

1.2.3 / 2014-08-28
==================

  * Update qs to 2.2.1

1.2.2 / 2014-08-27
==================

  * Update qs to 2.2.0

1.2.1 / 2014-08-07
==================

  * Update multiparty to 3.3.2
  * Update qs to 1.2.0

1.2.0 / 2014-08-06
==================

  * Update multiparty to 3.3.1
  * Update qs to 1.1.0

1.1.0 / 2014-07-03
==================

  * Update multiparty to 3.3.0
  * Use type-is to check Content-Type

1.0.6 / 2014-07-03
==================

  * Fix callback hang in node.js 0.8 on errors

1.0.5 / 2014-06-01
==================

  * Update multiparty to 3.2.8

1.0.4 / 2014-05-26
==================

  * Fix error causing response to hang
  * Update multiparty to 3.2.6

1.0.3 / 2014-01-20
==================

  * Update multiparty to 3.2

1.0.2 / 2014-01-17
==================

  * Update multiparty to 3.1

1.0.1 / 2013-10-25
==================

  * Update multiparty to 3.0

1.0.0 / 2013-10-25
==================

  * revive
