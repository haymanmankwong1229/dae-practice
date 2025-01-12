//製作簡單的密碼強度檢查
function checkPasswordStrength(password) {
    const lengthCriteria = password.length >= 8;
    const upperCaseCriteria = /[A-Z]/.test(password);
    const lowerCaseCriteria = /[a-z]/.test(password);
    const numberCriteria = /\d/.test(password);
    const specialCharCriteria = /[!@#$%^&*\(\),.?":\{\}|<>]/.test(password);

    const criteriaMet = [lengthCriteria, upperCaseCriteria, lowerCaseCriteria, numberCriteria, specialCharCriteria].filter(Boolean).length;

    if (criteriaMet < 2) {
        return 'Weak';
    } else if (criteriaMet < 4) {
        return 'Moderate';
    } else {
        return 'Strong';
    }
}

// 使用範例
console.log(checkPasswordStrength("Password123!")); // Strong

// 製作電子郵件驗證器
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// 使用範例
console.log(isValidEmail("test@example.com")); // true
console.log(isValidEmail("invalid-email")); // false

// 中英文字串統計工具
function stringStatistics(input) {
    const totalCharacters = input.length;
    const words = input.trim().split(/\s+/).filter(word => word.length > 0);
    const totalWords = words.length;
    const chineseCharacters = input.match(/[\u4e00-\u9fa5]/g) || [];
    const totalChineseCharacters = chineseCharacters.length;

    return {
        totalCharacters,
        totalWords,
        totalChineseCharacters
    };
}

// 使用範例
const stats = stringStatistics("Hello 你好!");
console.log(stats); // { totalCharacters: 10, totalWords: 3, totalChineseCharacters: 2 }