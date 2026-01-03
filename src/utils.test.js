import { expect, test } from 'vitest';
import { add } from './utils';

test('加法函数应该计算正确', () => {
    expect(add(1, 2)).toBe(3);
});