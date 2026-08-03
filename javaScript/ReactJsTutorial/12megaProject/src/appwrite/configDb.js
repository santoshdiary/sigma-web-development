import conf from "../config/config";
import { Client, Databases, ID, Storage, Query, Permission, Role } from "appwrite";

export class DbService {

        client=new Client();
        databases;
        bucket;                             //storage location for image & all
       
        constructor(){
            this.client
            .setEndpoint(conf.appwriteUrl) //url of app
            .setProject(conf.appwriteProjectId); // Your project ID

            this.databases=new Databases(this.client)
            this.bucket=new Storage(this.client)
        }

        async createPost({title, slug, content, featuredImage, status, userId}){ //slug-> document-id
            try {
                return await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appCollectionId,
                    slug,
                    {
                        title,
                        content,
                        featuredImage,
                        status,
                        userId
                    }
                )
            } catch (error) {
                 console.log('Apwrite Service:: getCurrentUser::error', error)
            }
        }

        async updatePost(slug, {title, content, featuredImage, status, userId}){
            try {
              return  await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appCollectionId,
                slug,
                
                { // updated-content
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
                )
            } catch (error) {
                console.log('Apwrite Service:: getCurrentUser::error', error)
            }
        }

        
        async deletePost(slug){ // document id =slug
            try {
              await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appCollectionId,
                slug )

            return true // for successful deletion

            } catch (error) {
                console.log('Apwrite Service:: getCurrentUser::error', error)
                return false;
            }
        }
        
        async getPost(slug){
            try {
                return await this.databases.getDocument(
                    conf.appwriteDatabaseId,
                    conf.appCollectionId,
                    slug
                )
            } catch (error) {
                 console.log('Apwrite Service:: getCurrentUser::error', error)
            }
        }

         async getPosts(queries=[Query.equal('status','active')]){ // getting all posts that are active in state
            try {
                return await this.databases.listDocuments(
                    conf.appwriteDatabaseId,
                    conf.appCollectionId,
                    queries
                )
            } catch (error) {
                 console.log('Apwrite Service:: getCurrentUser::error', error)
                 return false;
            }
        }
        
        // file upload services

        async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
            console.log("Appwrite serive :: uploadFile :: error", error);
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
                console.log(e)
                return false;
            }
        }

        getFilePreview(fileId){
            return this.bucket.getFileView(
                conf.appwriteBucketId,
                fileId,
            )
        }

}

const dbservice=new DbService() //object making
export default dbservice;