//
//  PermissionModule.m
//  RNPermissionNativeModule
//
//  Created by GiangTD on 13/05/2023.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(PermissionModule, NSObject)
//EXPORT TO REACT NATIVE - NATIVE_MODULE
RCT_EXTERN_METHOD(checkCameraPermission:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
RCT_EXTERN_METHOD(checkMicrophonePermission:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)

@end
