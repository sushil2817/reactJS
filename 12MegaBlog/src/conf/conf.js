const confi = {
     appwriteUrl : String(import.meta.env.VITE_APPWRITE_URL),

     appwriteProjectId : String(import.meta.env.VITE_PROJECT_ID),

     appwriteDatabaseId : String(import.meta.env.VITE_APPWRITE_DATABASE_ID),

     appwriteBuckedId : String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default confi;