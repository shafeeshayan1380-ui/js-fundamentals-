Closure Explanation

A closure happens when an inner function remembers and can access variables from its outer function, even after the outer function has finished executing.

In my createCounter() example, the inner increment()
function has access to the count variable.
Every time we call the returned function, count increases
by one and keeps its previous value.
Each call to createCounter() creates a new independent
counter with its own count variable.