# cordova-plugin-string-replace

# What is this?

This plugin provides a method to replace text in files before a build starts.

# How to use

1. Create a folder called config at your project root.
2. Create a file in the config folder called pluginUpdateFile.json
3. Within the file create content as below

```
{
 "filePathFromRoot":
 {
  "RegEx to match text":"Replacement text",
	"More RegEx to match text":"Replacement text"
 }
}
```

Example

```
{
 "platforms/android/project.properties":
 {
  "com.google.firebase:firebase-core:.*":"com.google.firebase:firebase-core:10.2.6",
  "com.google.firebase:firebase-messaging:.*":"com.google.firebase:firebase-messaging:10.2.6"
 }
}
```
