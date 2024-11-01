interface SignupParams {
    username?: string;
    email?: string;
    password?: string;
  }
  
  interface SignupResponse {
    message: string;
    // Add any other fields that your API returns
  }
  
  export async function signup({ username, email, password }: SignupParams): Promise<SignupResponse> {
    if (!username || !email || !password) {
      throw new Error("Missing required fields");
    }
  
    const response = await fetch("/api/signup", {
      method: "POST",
      body: JSON.stringify({
        username,
        email,
        password,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  
    if (!response.ok) {
      const errorData = await response.json().catch(() => null);
      const errorMessage = errorData?.message || response.statusText || "An error occurred";
      throw new Error(`Signup failed: ${errorMessage}`);
    }
  
    const data: SignupResponse = await response.json();
    return data;
  }