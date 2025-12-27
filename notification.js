export const NotificationPlugin = async ({ project, client, $, directory, worktree }) => {
  const sendNotification = async (title, message) => {
    const platform = process.platform

    if (platform === "darwin") {
      await $`osascript -e 'display notification ${message} with title ${title}'`
    } else if (platform === "linux") {
      await $`/usr/bin/notify-send ${title} ${message}`
    } else if (platform === "win32") {
      await $`powershell -Command "Add-Type -AssemblyName System.Windows.Forms; [System.Windows.Forms.MessageBox]::Show('${message}', '${title}')"`
    }
  }

  return {
    event: async ({ event }) => {
      if (event.type === "session.idle") {
        await sendNotification("OpenCode", "Generation completed")
      }
    },
    "permission.ask": async (input, output) => {
      const message = `Permission request: ${input.type}`
      await sendNotification("OpenCode", message)
    },
  }
}
