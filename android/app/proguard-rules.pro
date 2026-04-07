# ── Capacitor / WebView bridge ───────────────────────────────────────────────
# Keep all Capacitor plugin classes and their JS-callable methods
-keep class com.getcapacitor.** { *; }
-keep @com.getcapacitor.annotation.CapacitorPlugin class * { *; }
-keepclassmembers class * {
    @com.getcapacitor.annotation.PluginMethod public *;
}

# Keep the app's main Activity
-keep class com.naijarights.app.** { *; }

# WebView JavaScript interface — prevents R8 stripping bridge methods
-keepattributes JavascriptInterface
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# ── Stack trace readability ───────────────────────────────────────────────────
-keepattributes SourceFile,LineNumberTable
-renamesourcefileattribute SourceFile

# ── AndroidX / support libraries ─────────────────────────────────────────────
-keep class androidx.** { *; }
-dontwarn androidx.**
