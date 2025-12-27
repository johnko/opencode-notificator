# AGENTS.md

This file contains instructions for AI agents working on this project.

## Project Structure

- `notification.js` - Main plugin implementation
- `package.json` - Node.js package configuration
- `README.md` - User documentation

## Development Guidelines

- This is a simple OpenCode plugin that uses the `@opencode-ai/plugin` package
- The plugin exports `NotificationPlugin` which is the entry point
- It uses the `$` function to execute shell commands for platform-specific notifications

## Testing

To test the plugin:
1. Ensure OpenCode is installed
2. Copy `notification.js` to your OpenCode plugins directory
3. Trigger a generation or permission request in OpenCode
4. Verify desktop notifications appear

## Code Style

- Use ES modules (export syntax)
- Keep the plugin simple and focused
- Support all three major platforms: macOS, Linux, and Windows
