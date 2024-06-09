

export default interface ILogin {
    username: string,
    password: string
}


export default interface IRegister {
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    position: string;
    profile: string | null;
}