# OpenCode Desktop Notifications Plugin

A plugin for OpenCode that integrates desktop notifications into your workflow.

## Features

- Notifies you when code generation completes
- Notifies you when OpenCode requests permissions
- Cross-platform support (macOS, Linux, Windows)

## Installation

1. Install the plugin:
   ```bash
   npm install @opencode-ai/plugin
   ```

2. Copy the `notification.js` file to your OpenCode plugins directory:
   - Linux/macOS: `~/.config/opencode/plugins/notification.js`
   - Windows: `%APPDATA%\opencode\plugins\notification.js`

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

### Windows
- No additional dependencies required
- Uses PowerShell for notifications

## Configuration

The plugin works out of the box with default settings. Notifications are sent for:
- `session.idle` events
- `permission.ask` events

## License

MIT
