import conf from "../conf/conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service{
    client = new Client();
    databases;
    bucket; // variable to aa chuke hai but ye variable ke under  account tab banna chaiye jab constructor call ho;
    constructor(){
        this.client
      .setEndpoint(conf.appwriteUrl)
      .setEndpoint(conf.appwriteProjectId);
      this.databases = new Databases(this.client);
      this.bucket = new Storage(this.client);
    }
    async createPost({title,slug,content,featuredimage,status,userid}){
      try {
        return await this.databases.createDocument(           //chat
          conf.appwriteDatabaseId,
          conf.appwriteCollectionID,
          slug,
          { title,content,featuredimage,status,userid  })
      } catch (error) {
        console.log("Appwrite service::createPost::error",error);
      }
    }
    async updatePost(slug,{title,content,featuredimage,status,}){
       try {
         return await this.databases.updateDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionID,
          slug,{
            title,
            content,
            featuredimage,
            status 
          }
         )
       } catch (error) {
        console.log("Appwrite service::updatePost::error",error);
       }
    }
    async deletePost(slug){
      try {
         await this.databases.deleteDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionID,
          slug,
    
        )
        return true
      } catch (error) {
        console.log("Appwrite service::deletePost::error",error);
       return false
      }

    }
    async getPost(slug){
      try {
        return await this.databases.getDocument(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionID,
          slug
        )
      } catch (error) {
        console.log("Appwrite service::getPost::error",error);
        return false
      }
    }
    async getPosts(queries = [Query.equal("status","active")]){  // method call thay to kai pan value aapvani jarur nahi, me apne hisab se default value appis reason mujhe wo saare post chaiye jiski under  query status type active ho
      try {
        return await this.databases.listDocuments(
          conf.appwriteDatabaseId,
          conf.appwriteCollectionID,
          queries,

        )
      } catch (error) {
        console.log("Appwrite service::getPosts::error",error);
        return false
      }
    }

    // file upload service
    //  production tricks file upload karte samay file ka name nai dena chaiye , blob dena chaiyye,actual file deni padegi
    async uploadFile(file){
    try {
      return await this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file
)
    } catch (error) {
      console.log("Appwrite service::uploadFIle::error",error);
        return false
    }
    }
    async deleteFile(fileId){
      try {
        await this.bucket.deleteFile(
          conf.appwriteBucketId,
          fileId
        ) 
        return true
      } catch (error) {
        console.log("Appwrite service::deleteFile::error",error);
        return false
      }
    }
      getFilePreview(fileId){
      return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileId
      )
    }
}

const service = new Service();
export default service;