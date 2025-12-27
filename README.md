# OpenCode Desktop Notifications Plugin

A plugin for OpenCode that integrates desktop notifications into your workflow.

## Features

- Notifies you when code generation completes
- Notifies you when OpenCode requests permissions
- Optional sound notifications (configurable)
- Cross-platform support (macOS, Linux)

## Installation

1. Clone or download this repository

2. Install dependencies:
    ```bash
    npm install
    ```

3. Build the plugin:
    ```bash
    npm run build
    ```

4. Deploy to OpenCode plugins directory:
    ```bash
    npm run deploy
    ```

   This automatically:
   - Builds the plugin
   - Installs to the correct plugins directory for your platform
   - Overwrites any existing version

   Alternatively, use specific commands:
   ```bash
   npm run deploy:build    # Build only
   npm run deploy:install  # Install only (requires dist/ to exist)
   ```

## Usage

Once installed, the plugin will automatically send desktop notifications for:
- **Generation completed**: When an OpenCode session goes idle (generation finished)
- **Permission requests**: When OpenCode asks for permission to perform actions

## Platform-Specific Requirements

### macOS
- No additional dependencies required
- Uses built-in `osascript` for notifications

### Linux
- Requires `notify-send` (part of libnotify)
- Install on Ubuntu/Debian: `sudo apt-get install libnotify-bin`
- Install on Fedora: `sudo dnf install libnotify`

## Configuration

The plugin works out of the box with default settings. Notifications are sent for:
- `session.idle` events
- `permission.ask` events

### Plugin Configuration

Edit `notification.jsonc` in your OpenCode plugins directory:
- Linux/macOS: `~/.config/opencode/plugin/notification.jsonc`
- Windows: `%APPDATA%\opencode\plugin\notification.jsonc`

```jsonc
{
  // Enable/disable the entire plugin
  "enabled": true,
  
  // Sound notification settings
  "playSound": {
    // Enable/disable sound notifications
    "enabled": true,
    // Sound file to play: ding1.mp3, ding2.mp3, ..., ding6.mp3
    "file": "ding1.mp3"
  }
}
```

#### Auto-pick sound per project

Instead of manually configuring a sound file, you can use `fileSeed` to automatically assign a consistent sound to each project based on its path:

```jsonc
{
  "enabled": true,
  "playSound": {
    "enabled": true,
    "fileSeed": 0
  }
}
```

The plugin hashes `projectPath + seed` to pick from available sounds in the `sounds/` directory. Each project gets its own consistent sound without manual configuration. Change the seed value to get a different sound assignment.

#### Custom sounds

Add your own sound files to the `sounds/` directory (supports `.mp3`, `.wav`, `.ogg`, `.m4a`, `.aac`, `.flac`). They'll automatically be included in the rotation when using `fileSeed`.

To disable only sound notifications:
```jsonc
{
  "enabled": true,
  "playSound": {
    "enabled": false
  }
}
```

To disable the entire plugin:
```jsonc
{
  "enabled": false
}
```

### Platform-Specific Audio Requirements

#### macOS
- No additional dependencies required
- Uses built-in `afplay` for audio playback

#### Linux
- Requires one of: `paplay` (PulseAudio), `aplay` (ALSA), `mpv`, or `ffplay`
- Most distributions have PulseAudio pre-installed

## License

MIT
