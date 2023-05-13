# Set up android:
- Step 1: Create class Java with name "PermissionModule"
- Step 2: Typing code android/app/src/main/java/com/rnpermissionnativemodule/PermissionModule.java
- Step 3: Crate class Java with name "PermissionPackage" để khai báo package android/app/src/main/java/com/rnpermissionnativemodule/PermissionPackage.java
- Step 4: Import package to android/app/src/main/java/com/rnpermissionnativemodule/MainApplication.java ->  packages.add(new PermissionPackage());


# Set up IOS:
- Step 1: open project in xcode
- Step 2: in folder project add file swift with name "ModuleName" -> file abc.swift
- Step 3: press "next" -> require select "Create Bridging Header" with purpose expose objective c to swift
- Step 4: coding in swift file "ModuleName"
- Step 5: in folder project add file Objective-c File -> abc.m (export module using in react native )
- Step 6: import and using with react native code.
--> Note after coding native module require delete note and re-running project
