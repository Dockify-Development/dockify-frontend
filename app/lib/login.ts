interface LoginParams {
    identifier?: string
    password?: string
}

export async function login({ identifier, password } : LoginParams){
    if (identifier && password) {
        let body = {
            password: password,
            email: "",
            username: ""
        }
        if (identifier.includes("@")) {
            body.email = identifier;
        } else {
            body.username = identifier;
        }
        return await fetch("/api/login", {
            "method": "POST", 
            "body": JSON.stringify(body),
            "headers": {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }
    return "";
}