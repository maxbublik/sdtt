import vscode from 'vscode'

export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(
        vscode.commands.registerCommand('sdtt.invoke', () => {
            vscode.commands.executeCommand('workbench.action.tasks.terminate', 'terminateAll');
            vscode.commands.executeCommand('workbench.action.debug.stop');
        })
    );
}

export function deactivate() {}
