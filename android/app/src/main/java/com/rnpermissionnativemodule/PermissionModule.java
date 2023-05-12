package com.rnpermissionnativemodule;

import android.content.pm.PackageManager;
import androidx.core.content.ContextCompat;

import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Promise;
import android.content.Context;

import androidx.core.app.NotificationManagerCompat;
public class PermissionModule extends ReactContextBaseJavaModule {
    private static final String MODULE_NAME = "PermissionModule";
    private final ReactApplicationContext reactContext;

    public PermissionModule(ReactApplicationContext reactContext) {
        super(reactContext);
        this.reactContext = reactContext;
    }

    @Override
    public String getName() {
        return MODULE_NAME;
    }

    @ReactMethod
    public void checkCameraPermission(Promise promise) {
        String permission = android.Manifest.permission.CAMERA;
        int result = ContextCompat.checkSelfPermission(reactContext, permission);
        boolean hasPermission = result == PackageManager.PERMISSION_GRANTED;
        promise.resolve(hasPermission);
    }

    @ReactMethod
    public void checkNotificationPermissions(Promise promise) {
        Context context = reactContext.getApplicationContext();
        NotificationManagerCompat notificationManager = NotificationManagerCompat.from(context);
        boolean areNotificationsEnabled = notificationManager.areNotificationsEnabled();
        promise.resolve(areNotificationsEnabled);
    }
}
