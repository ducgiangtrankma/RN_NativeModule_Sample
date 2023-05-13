//
//  PermissionModule.swift
//  RNPermissionNativeModule
//
//  Created by GiangTD on 13/05/2023.
//

import Foundation
import AVFoundation
import React

@objc(PermissionModule)
class PermissionModule: NSObject {
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc func checkCameraPermission(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    let status = AVCaptureDevice.authorizationStatus(for: .video)
    let hasPermission = status == .authorized
    resolve(hasPermission)
  }
  
  @objc func checkMicrophonePermission(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    let status = AVCaptureDevice.authorizationStatus(for: .audio)
    let hasPermission = status == .authorized
    resolve(hasPermission)
  }
  
}

