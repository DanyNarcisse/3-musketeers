'use strict';

const convert = require('..');
const Big = require('big.js');

//convert(2, 'BTC', 'BTC');
test('should default to returning a Number', () => {
  expect(typeof convert(2, 'BTC', 'BTC')).toBe("number");
  throw new Error('test not yet defined... write your test here');
});

//convert(2, 'BTC', 'BTC', 'Number');
test('should return a Number', () => {
  expect(typeof convert(2, 'BTC', 'BTC')).toBe("number");
  throw new Error('test not yet defined... write your test here');
});

//convert(2, 'BTC', 'BTC', 'Big');
test('should return a Big number', () => {
  expect(typeof convert(2, 'BTC', 'BTC', 'Big')).toBe(typeof new Big(12));
  throw new Error('test not yet defined... write your test here');
});

//convert(2100, 'mBTC', 'BTC', 'String');
test('should return a String', () => {
  expect(typeof convert(2100, 'mBTC', 'BTC', 'String')).toBe(typeof "string");
  throw new Error('test not yet defined... write your test here');
});

//convert(123456789012345, 'Satoshi', 'BTC', 'Number');
test('should convert an integer', () => {
  expect(typeof convert(123456789012345, 'Satoshi', 'BTC', 'Number')).toBe('number');
  throw new Error('test not yet defined... write your test here');
});

//convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
test('should convert a number', () => {
  expect(typeof convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).toBe('number');
  throw new Error('test not yet defined... write your test here');
});

//convert('2', 'BTC', 'BTC', 'Number');
test('should convert a string', () => {
  expect(typeof convert('2', 'BTC', 'BTC', 'Number')).toBe('number');
  throw new Error('test not yet defined... write your test here');
});

//convert(new Big(2), 'BTC', 'BTC', 'Number');
test('should convert a Big number', () => {
  expect(typeof convert(new Big(2), 'BTC', 'BTC', 'Number')).toBe('number');
  throw new Error('test not yet defined... write your test here');
});

//convert(NaN, 'BTC', 'BTC', 'Number');
//convert(NaN, 'BTC', 'mBTC', 'Number');
test('should convert a NaN to a Number', () => {
  expect(typeof convert(NaN, 'BTC', 'BTC', 'Number')).toBe('number');
  expect(typeof convert(NaN, 'BTC', 'mBTC', 'Number')).toBe('number');
  throw new Error('test not yet defined... write your test here');
});

//convert(NaN, 'BTC', 'BTC', 'String');
//convert(NaN, 'BTC', 'mBTC', 'String');
test('should convert a NaN to a String', () => {
  expect(typeof convert(NaN, 'BTC', 'BTC', 'String')).toBe(typeof "i am a string");
  expect(typeof convert(NaN, 'BTC', 'mBTC', 'String')).toBe(typeof "i am a string");
  throw new Error('test not yet defined... write your test here');
});

//convert(NaN, 'BTC', 'BTC', 'Big');
test('should not convert a NaN to a Big', () => {
  //expect(expect(typeof convert(NaN, 'BTC', 'BTC', 'Big')).not.toBe(typeof new Big(2))).toThrow();
  //Not working properly
  throw new Error('Not working properly, test not yet defined... write your test here');
});

//convert(4.6, 'Satoshi', 'BTC', 'Number');
//convert(0.000000046, 'BTC', 'Satoshi', 'Number');
test('should handle rounding errors', () => {
  expect(() => {convert(4.6, 'Satoshi', 'BTC', 'Number')}).toThrow();
  expect(() => {convert(0.000000046, 'BTC', 'Satoshi', 'Number')}).toThrow();
  throw new Error('test not yet defined... write your test here');
});

//convert(new Big(2), 'x', 'BTC', 'Number');
//convert(new Big(2), 'BTC', 'x', 'Number');
//convert(NaN, 'x', 'BTC', 'Number');
//convert(NaN, 'BTC', 'x', 'Number');
test('should throw when untest is undefined', () => {
  expect(() => {convert(new Big(2), 'x', 'BTC', 'Number')}).toThrow();
  expect(() => {convert(new Big(2), 'BTC', 'x', 'Number')}).toThrow();
  expect(() => {convert(NaN, 'x', 'BTC', 'Number')}).toThrow();
  expect(() => {convert(NaN, 'BTC', 'x', 'Number')}).toThrow();
  throw new Error('test not yet defined... write your test here');
});

//convert(2, 'BTC', 'mBTC', 'x');
//convert(NaN, 'BTC', 'mBTC', 'x');
test('should throw when representaion is undefined', () => {
  expect(() => {convert(2, 'BTC', 'mBTC', 'x')}).toThrow();
  expect(() => {convert(NaN, 'BTC', 'mBTC', 'x')}).toThrow();
  throw new Error('test not yet defined... write your test here');
});

//convert(4.6, 'Satoshi', 'sat');
//convert(4.6, 'μBTC', 'btest');
test('should allow untest aliases', () => {
  throw new Error('test not yet defined... write your test here');
});
