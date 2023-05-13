//
//  LocationModule.swift
//  RNPermissionNativeModule
//
//  Created by GiangTD on 13/05/2023.
//

import Foundation
import CoreLocation
import React

@objc(LocationModule)
class LocationModule: NSObject {
  private let locationManager = CLLocationManager()
  private var locationPromise: RCTPromiseResolveBlock?
  
  @objc static func requiresMainQueueSetup() -> Bool {
    return true
  }

  @objc func getMyLocation(_ resolve: @escaping RCTPromiseResolveBlock, rejecter reject: @escaping RCTPromiseRejectBlock) {
    locationPromise = resolve
    locationManager.delegate = self
    locationManager.requestWhenInUseAuthorization()
    locationManager.startUpdatingLocation()
  }
}

extension LocationModule: CLLocationManagerDelegate {
  func locationManager(_ manager: CLLocationManager, didUpdateLocations locations: [CLLocation]) {
    if let location = locations.last {
      let latitude = location.coordinate.latitude
      let longitude = location.coordinate.longitude
      locationPromise?(["latitude": latitude, "longitude": longitude])
      locationManager.stopUpdatingLocation()
    }
  }
  
  func locationManager(_ manager: CLLocationManager, didFailWithError error: Error) {
    locationPromise?(RCTMakeError("Failed to get location", nil, nil))
    locationManager.stopUpdatingLocation()
  }
}

