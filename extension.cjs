import vscode from 'vscode';
export function activate(context) {
  context.subscriptions.push(
    vscode.commands.registerCommand('vscode-stop-debug-and-terminate-tasks', () => {
      vscode.commands.executeCommand('workbench.action.debug.stop');
      vscode.commands.executeCommand('workbench.action.tasks.terminate', 'terminateAll');
    })
  );
}
export function deactivate() {
}
