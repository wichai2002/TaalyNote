import bcrypt from "bcrypt"


const hash_password = async (password: string): Promise<string> => {
    const hashed = await bcrypt.hash(password, 10);
    return hashed;
}

const compare_password = async (input_password: string, stored_hashed_password: string): Promise<boolean> => {
    return  bcrypt.compare(input_password, stored_hashed_password)
}

export default {hash_password, compare_password}