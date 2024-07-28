import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setEndpoint(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name);
      if (userAccount) {
        return this.login({email,password});
        // call another method
    
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }
  async login({email,password}){
    try {
        await this.account.createEmailSession(email,password)
    } catch (error) {
        throw new error(error);
    }
  }
  async getCurrentUser(){
    try {
        return await this.account.get();
    } catch (error) {
        console.log("Appwrite service :: getCurrentUser::error",error)
    }
    return null;
  }
  async logout(){
    try {
         await this.account.deleteSessions();
    } catch (error) {
        console.log("Appwrite service :: logout ::error",error)
    }
  }
}
//aapne class banali sidha export karliya ab is class ko jobhi use karega usko naya object banana padega class se,tabhi to wo saree method use kar payega
// to me direct object banake export karlo ye better approch hai obj ko hi import karle or obj pe hi saree method lage lagae hai

const authService = new AuthService();

export default authService;
