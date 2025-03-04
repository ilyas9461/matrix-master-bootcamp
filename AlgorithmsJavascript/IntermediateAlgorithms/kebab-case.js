/**
    camelCase	        userAge, getUserData()	Variables, functions, object properties
    PascalCase	        UserProfile, AppHeader	Classes, React components, constructors
    snake_case	        "user_name": "john_doe"	JSON properties, some API responses
    kebab-case	        /user-profile, file-name.js	File & directory names, URLs
    UPPER_SNAKE_CASE	MAX_USERS, API_URL	Constants
 */

    function kebapCase(str){
        str=str.toLowerCase()
        return str.split(' ').join('-')
    }

    console.log(kebapCase('Sum All Odd Fibonacci'));
    