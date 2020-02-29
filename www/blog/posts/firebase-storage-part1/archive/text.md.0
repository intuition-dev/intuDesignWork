If you've been using Firebase as your database service you are probably accostumed to how easy it is to pass regular data to it. 

However, at some point you might also find yourself needing to store and retrieve easily user generated content, like avatar images, thumbnails, logos, etc.

For this, it's very handy a lesser known part of Firebase features called **Cloud Storage**. 

So, in this **1st part** let's see how to:
- **Set up** an *Storage Bucket*
-  **Configure** Firebase in our App
-  **Create Service** with uploading functionality.

# Storage Bucket Setup

## Activate the Storage Bucket in a Firebase Project

First, enter your project Firebase Console and head to the Development menu. There you will find the  **Storage** section : 

![Image of Storage Section](develop-storage.png)

Then, click on **Get Started** and you will be prompted with a message warning you about default **Security Rules** for the storage bucket. Review them, go ahead and click **Got it**. In few seconds a new storage bucket will be created and you should see something like this: 

![Image of Storage bucket](storage-menu.png)

Now, copy the link that starts with `gs://`; in the example: `gs://my-app-4231b.appspot.com/`. This is the path to your Storage Bucket and we are going to use it into a *JSON* for configuring the Firebase service in our app.
 
 You can also create a folder inside the bucket for easier organizing of files. For instance, I'm gonna create one called 'thumbnails' to store thumbnail images uploaded by users.
 
 ## Firebase Configuration
Add this line to your JSON configuration file, where the gs:// link is the one you copied in the previous step.
`"storageBucket": gs://your-app-1111a.appspot.com/`

The configuration should look something like this afterwards:

```{
    "apiKey": "...",
    "authDomain": "...",
    "projectId": "...",
    "storageBucket": "gs://your-app-1111a.appspot.com/"
}
```

# How to store a file

## Initialize the storage in your app

  ```javascript
// pass the JSON config and initialize the app
  window.firebase.initializeApp(config);
...
// Initialize the database
window.db = firebase.firestore()
//Initialize the storage
window.storage = firebase.storage()
  ```
  
## Create the service

Make a storageService class in the following manner:

```javascript
class storageService{
	storageRef: any
	constructor(){
	this.storageRef = storage.ref()
	}

    //Upload function to put an img file into Firebase Storage bucket
    upload(fileblob){
        return this.storageRef.child('thumbnails/' + fileblob.name).put(fileblob).then(
            function(snapshot){
                return snapshot
                })
    }
}
```

Now, with the service created above. You can easily call the uploading function in any part of the App needed. By adding this service to a ViewModel class. 

### To be continued in Part 2:
[How to setup and use Firebase Storage. Part 2/2](https://blog.metabake.net/posts/firebase-storage-part2/)
#### We will see how to:
- Integrate our storage service in a ViewModel Class
- Call the upload functionality
- Retrieve the URL of an uploaded file and store it into Firebase DataBase as part of a collection item.