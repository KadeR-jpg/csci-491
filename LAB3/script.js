function isStrongPassword(password) {
    if (password.length < 8) {
        console.log("false - Too short")
        return false
    } else if (password.includes("password")) {
        console.log("false - Contains \"password\" ")
        return false
    } else if (password == password.toLowerCase()) {
        console.log("false - No uppercase characters")
        return false
    } else {
        return true
    }
}