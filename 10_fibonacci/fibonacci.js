const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }
    return num == 1 || num == 2 ? 1 : fibonacci(num - 1) + fibonacci(num - 2);
};

// Do not edit below this line
module.exports = fibonacci;
