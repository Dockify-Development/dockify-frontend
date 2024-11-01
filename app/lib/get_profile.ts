interface TokenParams {
    token: String
}

export default async function getProfile({ token } : TokenParams){
    return await fetch("/api/get_profile", {
        "method": "GET", 
        "headers": {
            "Authorization": "Bearer " + token
        }
    }).then(res => res.json());
}