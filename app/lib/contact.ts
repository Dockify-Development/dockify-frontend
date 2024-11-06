interface MessageParams {
    subject?: string;
    body?: string;
    email?: string;
}

export async function contact({ subject, body, email }: MessageParams){
    if (subject && body && email) {
        if (!subject || !body || !email) {
        throw new Error("Missing required fields");
        }
        let message = {
            subject: "",
            body: "",
            email: ""
        }
        return await fetch("/api/contact", {
            "method": "POST", 
            "body": JSON.stringify(message),
            "headers": {
                "Content-Type": "application/json"
            }
        }).then(res => res.json());
    }
    return new Error();
}
