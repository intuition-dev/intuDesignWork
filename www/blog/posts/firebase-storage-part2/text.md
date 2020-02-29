# Recap

In [Part 1 of How To Setup And Use Firebase Storage](https://blog.metabake.net/posts/firebase-storage-part1/) we reviewed the following topics:

- **Set up** an *Storage Bucket*
-  **Configure** Firebase in our App
-  **Create Service** with uploading functionality.

If you followed succesfully the steps outlined in Part 1 of this tutorial, you should have by now a fully functional Storage with a Service connected to it and an `upload()` method to handle user file uploads.

# Now, in this Part 2 we will see a draft implementation for how to:

- **Integrate** our storage service in a ViewModel architecture
- Call the **upload functionality**
- **Retrieve the URL** of an uploaded file **and store it** into Firebase DataBase as part of a collection item.

## Integrate our storage service in a ViewModel architecture.

If you remember the example we were following in part 1: I wanted to allow users to upload thumbnails for easy after retrieval. So our first task now would be to implement only the UI without functionality.

An sketch of the `HTML` implementation for taking images as input is provided as a snippet below. Notice also how I'm using a `label` to actually handle user interaction with uploaded input, this is due to the well known issue of inconsistent styling of blob input fields across browsers. With some CSS we hide the `input` field and style `label`, which will be more consistent and overall nicer.

  ```
.container-upload
    section.header
        div.h-button
            h3 User Thumbnail
                span#preview-placeholder No files currently selected for upload
            label.btn(for="thumbnail_upload") Upload
    .input-row
        input(type="file" id="thumbnail_upload" name="thumbnail_upload" accept="image/*")
        #preview
  ```

Furthermore, the `div` with id `#preview` will conveniently show a preview image of the thumbnail to the user.

Now, lets tie this together with some functions for storing the image blob and showing the preview of the file uploaded:

```javascript
    $('#thumb_upload').change(function(){
        //for storing the image blob
        let thumbnailFile = $(this).prop('files')[0] 
        // for previewing the thumbnail uploaded
        let thumbnailURL = window.URL.createObjectURL(logoFile)
        
        //if user has uploaded a file before, remove its preview:
        if($('#thumbnail_preview')){
            $('#thumbnail_preview').remove()
            //add a new preview
            $('#preview-placeholder').text(thumbnailFile.name)
            $('#preview').prepend($('<img>',{
                id:'thumbnail_preview',
                src:thumbnailURL, 
                style:"width: 100%; height: auto; border: none;"}
                ))
        } else {
            //if no image was uploaded previously, simply show it:
            $('#preview').prepend($('<img>',{id:'thumbnail_preview',src:logoURL, style:"width: 100%; height: auto; border: none;"}))
        }
```

## Implementation draft for calling upload functionality, retrieving file URL and store it:


Consider perhaps that in our example the user is also interacting with other text inputs, like writing a short bio for example:

```
// functionality for handling some text input
...
let short_bio = 'My name is Jane and I like coffee'
```

And we want also to store both this user bio and her uploaded thumbnail URL in the same object for a firebase collection. Say `user_generated_data` for instance.

I would need then to first call the upload functionality we defined in our service previously, and then - after upload is completed succesfully - we want to call our firebase CRUD functionality for adding a new object to `user_generated_data` collection. 

This sounds like asynchronous right ? Lets make use of promises to handle this. A draft of implementation would be something as below.

We will be following a ViewModel approach with a databind class that will connect UI in one end to a ViewModel talking to the Service in other end.

So, Lets sketch step by step a possible way for how to do it:

### For DataBind:

```
class DataBind() {
    this.dataViewModel = new dataViewModel()
    
    uploadThumbnail(file){
        return this.dataViewModel.upload(file)
    }
    
    saveUserGeneratedData(file, bio){
        return this.dataViewModel.save(file, bio)
    }
}
```

### For DataViewModel:

```
class storageService {
    constructor() {
        // We instantiate the storage service we defined in Part 1
        this.storageService = new StorageService()
        /** 
        * We instantiate also an hipotetical typical CRUD service. We will not go
        * into implementation details for it as it's out of the scope of this tutorial
        * but you can check an in-depth example at FireBase Documentation
        **/
        this.userDataService = new UserDataService()
    }
    
    upload(file){
        return this.storageService.upload(file)
    }
    
    save(file_url, bio){
        return this.userDataService.save({
            thumbnail_url: file_url,
            bio: bio
        })
    }
}
```

### UI Side script:

```
script.
//instantiate from DataBind Class
let dataBind = new DataBind()

//first upload file:
    dataBind.uploadThumbnail(thumbnailFile).then( function(snapshot){
        /**
        * snapshot is returned upon succesful uploading to Firebase Storage
        * we use the method provided by firebase getDonwloadURL() to retrieve the file url
        * and then we pass it as argument to the method handling saving data objects to
        * firestore collection
        */
        snapshot.ref.getDownloadURL.then(function(download_url){
            dataBind.saveUserGeneratedData(donwload_url, short_bio)
        }).catch(function(error){
            console.log('Something went wrong, please check log: ', error)
        })
        }).catch(function(error){
            console.log('Something went wrong, please check log: ', error)
        })
```

And that's it. With this implementation your user should be able to upload and preview thumbnails together with some other info. And it will be all conveniently stored as an object for a collection in FireStore.

If you wish to know more. Please don't hesitate to dive into Firebase Storage documentation for clarification and coverage on more advanced topics:
[FireBase Storage Documentation](https://firebase.google.com/docs/storage)