interface SignupParams {
    username?: string,
    email?: string,
    password?: string
}

export async function signup({ username, email, password } : SignupParams){
    if (username && email && password) {
        return await fetch("/api/signup", {
            "method": "POST", 
            "body": JSON.stringify({
                "username": username,
                "email": email,
                "password": password
            }),
            "headers": {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }
    return "";
}