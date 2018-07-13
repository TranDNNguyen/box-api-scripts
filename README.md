Updated July 2018
Tran Nguyen

npm init to create the package.json package. This parses the json file that the RESTful API receives.

fill out the necessary information.
for example in my ~/WebstormProjects/Scratch directory:
configuration for the package.json is like:

"This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help json` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (scratch)
version: (1.0.0)
description:
entry point: (cjmimagedatabase.js)
test command: ./cjmimagedatabase.js
git repository:
keywords:
author: Tran Nguyen
license: (ISC)
About to write to /home/tran/WebstormProjects/Scratch/package.json:

{
  "name": "scratch",
  "version": "1.0.0",
  "description": "",
  "main": "cjmimagedatabase.js",
  "scripts": {
    "test": "./cjmimagedatabase.js"
  },
  "author": "Tran Nguyen",
  "license": "ISC"
}


Is this ok? (yes) y

then download box-node-sdk
npm install --save box-node-sdk"

then run the command
node cjmimagedatabase.js [DEVELOPER TOKEN] [PARENT_DIRECTORY] [TAG_1] [TAG_2] ...

To get a developer token, you have to use Standard OAuth 2.0 authorization and have a
Box Developers portal (this is can be found on the secondary menu on the left column
on Box.com titled "Dev Console"). Click on "Dev Console" and create an app if there is
not already an app. Then click on "Configuration" and and "Generate Developer Token".
The developer token is only valid for an hour for security purposes but you can get
as many developer tokens as you'd need.

To get the parent directory, go on Box and go to the desired directory you'd like
to tag. For example:
https://ucdavis.app.box.com/folder/11145902245
Enter in the digits after /folder/ as the PARENT_DIRECTORY field.

If your keyword is two or more words long such as "3rd eyelid", enclose the keyword
in quotes.

