var args = process.argv.slice(2);

if(args.length < 3) {
  console.log('Usage: node cjmimagedata.js [DEVELOPER_TOKEN] [PARENT_DIRECTORY] [TAG_1] [TAG_2] ...')
  return;
}

var devToken = args[0];
var parentFolderID = args[1];
var tags = [];
for(i = 2; i < args.length; i++) {
  tags.push(args[i]);
}

var BoxSDK = require('box-node-sdk');
var sdk = new BoxSDK({
  clientID: 'akl3bdlvthvmh7okyhtbyvu2dc0bqr3p',
  clientSecret: 'jvC8L2kYwdqRYlJvacGTpyuSq5M5sRFh'
});

var client = sdk.getBasicClient(devToken);

client.users.get(client.CURRENT_USER_ID, null, function(err, currentUser){
  if(err)
    throw err;
  console.log('Hello, ' + currentUser.name + '! Starting to tag images...');
});

client.folders.getItems(parentFolderID, {limit: 1000}, function(err, folderInfo){
  getFolder(err, folderInfo);
});

function getFolder (err, folderInfo) {
  var i;
  if(err)
    throw err;

  var childFolders = folderInfo;

  console.log(childFolders['total_count'] + ' to tag.');

  for(i = 0; i < childFolders['total_count']; i++) {
    var file = childFolders['entries'][i];

    if(!file){
      return;
    }

    if(file['type'] == 'file') {
      console.log('Tagging image ' + i);
      client.files.update(file['id'], {tags:tags}, function(err, fileInfo) {
        if(err)
          throw err;
      });

    } else if(file['type'] == 'folder'){
      //console.log('Folder found: ' + i);
      client.folders.get(file['id'], {fields:'item_collection'}, function(err, subFolderInfo){
        if(err)
          throw err;
        getFolder(err, subFolderInfo);
    });
    }
  }

}

