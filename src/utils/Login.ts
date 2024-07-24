import { prisma } from "@/lib/prisma";
import { LoginRequest } from "@/types/Login";

enum responseError {
    NOT_FOUND = 'Not Found!'
}

const getUser = async (userRequest: LoginRequest, response: responseError) => {
    const user = await prisma.user.findFirst({
        where: {
            email : userRequest.email 
        } 
    })

    if(! user) {
        return 
    }
    return user;
    
}
export default getUser;