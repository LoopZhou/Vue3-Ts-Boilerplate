import { BinaryOperation } from './type';

function executeBinaryOperation(op: BinaryOperation): number {
  switch (op.operator) {
    case '+':
      return op.left + op.right;
    case '-':
      return op.left - op.right;
    case '*':
      return op.left * op.right;
    case '/':
      return op.left / op.right;
    case '%':
      return op.left % op.right;
    default:
      throw new Error('Unknown operator');
  }
}

onmessage = function (ev) {
  const result = executeBinaryOperation(ev.data);
  postMessage(result);
};
