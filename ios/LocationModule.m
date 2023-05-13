//
//  LocationModule.m
//  RNPermissionNativeModule
//
//  Created by GiangTD on 13/05/2023.
//

#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(LocationModule, NSObject)
//EXPORT TO REACT NATIVE - NATIVE_MODULE
RCT_EXTERN_METHOD(getMyLocation:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject)
@end

