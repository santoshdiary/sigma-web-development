import conf from "../config/config";
import { Client, Account, ID } from "appwrite";


export class AuthService {

    client = new Client()
    account;
    constructor() { // jab object banega tabhi ye client & account initialize ho

        this.client
            .setEndpoint(conf.appwriteUrl) //url of app
            .setProject(conf.appwriteProjectId); // Your project ID
        this.account = new Account(this.client);
    }

    async createAccount({ email, password, name }) {
        try {
            const userAccount = await this.account.create(ID.unique(), email, password, name)
            if (userAccount) {
                //call another method
                return this.login({ email, password }) //loging the user  

            } else {
                return userAccount;
            }
        } catch (e) {
            throw e;
        }
    }
    async login({ email, password }) {
        try {
            return await this.account.createEmailPasswordSession(email, password)
        } catch (e) {
            throw e;
        }
    }

    async getCurrentUser() {
        try {
            return await this.account.get()

        } catch (error) {
            //throw error;
            console.log('Apwrite Service:: getCurrentUser::error', error)
        }
        return null; // return when account not found
    }

    async logOut() {
        try {
            await this.account.deleteSessions()
        } catch (e) {
            console.log('Apwrite Service:: getCurrentUser::error', error)
        }
    }
}
const authService = new AuthService();
export default authService;