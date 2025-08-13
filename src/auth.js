// Authentication module
console.log('Debug: auth module loaded'); // отладочный код

function checkCredentials(username, password) {  // исправил опечатку в названии
    return username && password;
}

function login(username, password) {
    if (checkCredentials(username, password)) {
        return { success: true, token: 'abc123' };
    }
    return { success: false };
}

module.exports = { login };
