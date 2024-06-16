
interface IUsers {
    username: string;
    password: string;
    email: string;
    first_name: string;
    last_name: string;
    date_of_birth: Date;
    position: string;
    profile: string | null;
}

export default IUsers