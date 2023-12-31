package com.jvpg.jvpgclub;

import android.app.Application;
import android.content.Context;

import com.jvpg.jvpgclub.newarchitecture.MainApplicationReactNativeHost;
import com.reactnativerestart.RestartPackage;
import com.facebook.react.PackageList;
import com.facebook.react.ReactApplication;
import com.swmansion.gesturehandler.RNGestureHandlerPackage;
import com.reactlibrary.createthumbnail.CreateThumbnailPackage;
import com.reactnativecommunity.webview.RNCWebViewPackage;
import io.xogus.reactnative.versioncheck.RNVersionCheckPackage;
import com.facebook.react.ReactInstanceManager;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.config.ReactFeatureFlags;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import com.heanoria.library.reactnative.locationenabler.RNAndroidLocationEnablerPackage;
import com.razorpay.rn.RazorpayPackage;
import com.brentvatne.react.ReactVideoPackage;
import io.invertase.firebase.messaging.ReactNativeFirebaseMessagingPackage;
import java.lang.reflect.InvocationTargetException;
import java.util.List;

public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost =
      new ReactNativeHost(this) {
        @Override
        public boolean getUseDeveloperSupport() {
          return BuildConfig.DEBUG;
        }

        @Override
        protected List<ReactPackage> getPackages() {
          @SuppressWarnings("UnnecessaryLocalVariable")
          List<ReactPackage> packages = new PackageList(this).getPackages();
            new RazorpayPackage();
            new RNAndroidLocationEnablerPackage();
            new MainReactPackage();
            new RNGestureHandlerPackage();
            new CreateThumbnailPackage();
            new RNCWebViewPackage();
            new RNVersionCheckPackage();
            new ReactVideoPackage();
            new ReactNativeFirebaseMessagingPackage();
            new RestartPackage();
          // Packages that cannot be autolinked yet can be added manually here, for example:
          // packages.add(new MyReactNativePackage());
          return packages;
        }

        @Override
        protected String getJSMainModuleName() {
          return "index";
        }
      };

  private final ReactNativeHost mNewArchitectureNativeHost =
      new MainApplicationReactNativeHost(this);

  @Override
  public ReactNativeHost getReactNativeHost() {
    if (BuildConfig.IS_NEW_ARCHITECTURE_ENABLED) {
      return mNewArchitectureNativeHost;
    } else {
      return mReactNativeHost;
    }
  }

  @Override
  public void onCreate() {
    super.onCreate();
    // If you opted-in for the New Architecture, we enable the TurboModule system
    ReactFeatureFlags.useTurboModules = BuildConfig.IS_NEW_ARCHITECTURE_ENABLED;
    SoLoader.init(this, /* native exopackage */ false);
    initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
  }

  /**
   * Loads Flipper in React Native templates. Call this in the onCreate method with something like
   * initializeFlipper(this, getReactNativeHost().getReactInstanceManager());
   *
   * @param context
   * @param reactInstanceManager
   */
  private static void initializeFlipper(
      Context context, ReactInstanceManager reactInstanceManager) {
    if (BuildConfig.DEBUG) {
      try {
        /*
         We use reflection here to pick up the class that initializes Flipper,
        since Flipper library is not available in release mode
        */
        Class<?> aClass = Class.forName("com.otters.ReactNativeFlipper");
        aClass
            .getMethod("initializeFlipper", Context.class, ReactInstanceManager.class)
            .invoke(null, context, reactInstanceManager);
      } catch (ClassNotFoundException e) {
        e.printStackTrace();
      } catch (NoSuchMethodException e) {
        e.printStackTrace();
      } catch (IllegalAccessException e) {
        e.printStackTrace();
      } catch (InvocationTargetException e) {
        e.printStackTrace();
      }
    }
  }
}
