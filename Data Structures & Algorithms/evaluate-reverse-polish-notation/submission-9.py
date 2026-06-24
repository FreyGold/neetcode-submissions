class Solution:
    def evalRPN(self, tokens: List[str]) -> int:
        operations = ['+', '-', '*', '/']
        stack = []
        for  t in tokens:
            if t not in operations:
                stack.append(int(t))
                print(stack)
                continue
            a = stack.pop()
            b = stack.pop()
            if t == '+':
                stack.append(a+b)
            if t == '-':
                stack.append(b-a)
            if t == '*':
                stack.append(a*b)
            if t == '/':
                stack.append(int((b) / a))
        return stack[-1]