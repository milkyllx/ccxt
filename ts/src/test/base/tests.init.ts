
// AUTO_TRANSPILE_ENABLED

import testDecimalToPrecision from './test.decimalToPrecision.js';
import testNumberToString from './test.numberToString.js';
import testPrecise from './test.precise.js';
import testDatetime from './test.datetime.js';
import testCryptography from './test.cryptography.js';
import testExtend from './test.extend.js';
import testDeepExtend from './test.deepExtend.js';
import testLanguageSpecific from './language_specific/test.languageSpecific.js';
import testSafeMethods from './test.safeMethods.js';
// import testJson from './test.json.js';
import testSortBy from './test.sortBy.js';
import testSum from './test.sum.js';
import testOmit from './test.omit.js';
import testGroupBy from './test.groupBy.js';
import testFilterBy from './test.filterBy.js';
import testAfterConstructor from './test.afterConstructor.js';
import testHandleMethods from './test.handleMethods.js';
import testRemoveRepeatedElementsFromArray from './test.removeRepeatedElementsFromArray.js';
import testParsePrecision from './test.parsePrecision.js';

function baseTestsInit () {
    testLanguageSpecific ();
    testAfterConstructor ();
    testExtend ();
    testDeepExtend ();
    testCryptography ();
    testDatetime ();
    testDecimalToPrecision ();
    testNumberToString ();
    testPrecise ();
    testSafeMethods ();
    // testJson ();
    testSortBy ();
    testSum ();
    testOmit ();
    testGroupBy ();
    testFilterBy ();
    testHandleMethods ();
    testRemoveRepeatedElementsFromArray ();
    testParsePrecision ();
}

export default baseTestsInit;
