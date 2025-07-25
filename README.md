# 📱 React Native Expo App

This is a React Native project using **Expo**. It’s configured for development using **Android Studio**, **Java 17**, and **Node.js 20 LTS**. Follow the instructions below to set up and run the project.

---

## 🛠️ Prerequisites

Ensure the following tools and versions are installed on your system:

| Tool              | Version               |
| ----------------- | --------------------- |
| Node.js           | `>= 20.x`             |
| npm               | `>= 8.x`              |
| Java              | `17`                  |
| Android Studio    | Electric Eel or newer |
| Android Emulator  | API Level `35.0`      |
| Expo CLI (global) | `^6.x`                |

---

## 🧑‍💻 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/rakasiwisurya/kloudius.git
cd kloudius
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Install Expo CLI (if not already installed globally / optional)

```bash
npm install -g expo-cli
```

---

## ▶️ How to Run the App

### Start the Metro Bundler

```bash
npm run start
```

This command starts the Expo server and opens the Expo Developer Tools in your browser.

### Run on Android Emulator

Make sure your Android Emulator is running before executing the command below.

1. Open Android Studio.
2. Go to **Device Manager**.
3. Start a virtual device with **API Level 35.0**.
4. Then run:

```bash
npm run android
```

### Run on iOS Simulator (only on macOS)

```bash
npm run ios
```

> ⚠️ This requires macOS and Xcode installed.

---

## 📦 Useful Commands

| Command           | Description                      |
| ----------------- | -------------------------------- |
| `npm run start`   | Starts the Metro bundler         |
| `npm run android` | Runs the app on Android emulator |
| `npm run ios`     | Runs the app on iOS simulator    |

---

## 📂 Folder Structure

```
your-project/
├── assets/              # Images, fonts (this project no font setup), etc.
├── src/
│   ├── components/      # Reusable components
│   ├── hooks/           # Global business logic
│   ├── redux/           # Redux setup and logic
│   ├── router/          # Router setup logic
│   ├── screens/         # App screens
│   ├── types/           # Global data types JSX Component or Function
│   ├── utils/           # Global reusable function
│   └── ...
├── App.tsx              # Entry point
├── package.json         # Project config and dependencies
└── README.md            # You're reading this
```

---

## 🤖 Emulator Tips

- **To start emulator via terminal:**

```bash
emulator -list-avds
emulator -avd <your-avd-name>
```

- **To accept Android SDK licenses:**

```bash
sdkmanager --licenses
```

---

## 🧪 Troubleshooting

### Metro bundler is stuck or crashes?

Try clearing the cache and reinstalling:

```bash
rm -rf node_modules
npm cache clean --force
npm install
```

### Emulator doesn’t start?

- Ensure Android Studio is installed with SDK tools.
- Check that you’ve created an emulator with API level 35.
- Run from Device Manager or with command line.

---

## 📄 License (No License)

This project is not licensed under the [MIT License](./LICENSE).

---

## 🙋‍♂️ Questions?

Feel free to contact me at [rakasiwi.surya@gmail.com](mailto:rakasiwi.surya@gmail.com).
