import { checkEmail, saveUser } from "@/actions/auth";

export async function POST(request) {
    const requestData = await request.json();
    if (requestData.email?.length > 0 && requestData.username?.length > 0 && requestData.password?.length > 0) {
        try {
            const checkEmailExist = await checkEmail(requestData.email);
            if (checkEmailExist) {
                return Response.json({
                    success: false,
                    message: "Email existed. Please choose another email."
                })
            }
            const saveUserResult = await saveUser(requestData.email, requestData.username, requestData.password);
            if (saveUserResult) {
                return Response.json({
                    success: true
                })
            }
        }
        catch (error) {
            console.log(error);
        }
    }
    else {
        return Response.json({
            success: false,
            message: "Please fill out all the credential fields."
        })
    }
}

