import { ExpoConfig, ConfigContext } from "@expo/config";

const CLERK_PUBLISHABLE_KEY =
  "pk_test_YnJhdmUtbXVsZS02LmNsZXJrLmFjY291bnRzLmRldiQ";

const defineConfig = (_ctx: ConfigContext): ExpoConfig => ({
  name: "t3-clerk-demo",
  slug: "t3-clerk-demo",
  version: "0.0.1",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/icon.png",
    resizeMode: "contain",
    backgroundColor: "#2e026d",
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.naturallyinviting.t3clerkdemo",
  },
  android: {
    adaptiveIcon: {
      foregroundImage: "./assets/icon.png",
      backgroundColor: "#2e026d",
    },
    package: "com.naturallyinviting.t3clerkdemo",
  },
  extra: {
    CLERK_PUBLISHABLE_KEY,
    eas: {
      projectId: "35e9477d-2650-4014-b738-acc6a591160b",
    },
  },
  owner: "williambrandin",
  plugins: ["./expo-plugins/with-modify-gradle.js"],
});

export default defineConfig;
