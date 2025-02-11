import bcryptjs from "bcryptjs";

export const hashPass=async(pass)=>{
    try {
        const hashedPass = await bcryptjs.hash(pass, 10);
        return hashedPass;
    } catch (error) {
        console.log(error)
    }
}

export const comparePassword=async(pass,hashedPass)=>{
    try {
        return bcryptjs.compare(pass,hashedPass);
    } catch (error) {
        console.log(error)
    }
}