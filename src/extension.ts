import * as vscode from 'vscode';
import * as moment from 'moment';

interface Contributions {
	prefix: string;
	format: string;
	list: Array<string>;
}

function getDayComment(contributions: Contributions): string {
	const prefix: string = contributions.prefix;
	const format: string = contributions.format;
	const list: Array<string> = contributions.list;

	return `\n${prefix} ${formatDay(format)} \n- ${list.join('\n\n- ')}\n`;
}

function formatDay(format: string): string {
	const date: Date = new Date();

	return moment(date).format(format);
}

export function activate(context: vscode.ExtensionContext) {

	let disposable = vscode.commands.registerCommand('extension.dayComment', () => {
		const editor = vscode.window.activeTextEditor;
		if (editor) {
			const selections = editor.selections;
			const contributions: Contributions = vscode.workspace.getConfiguration('day-comment') as any;

			const text = getDayComment(contributions);

			editor.edit((editBuilder) => {
				selections.forEach((selection) => {
					editBuilder.replace(selection, '');
					editBuilder.insert(selection.active, text);
				});
			});
		}
	});

	context.subscriptions.push(disposable);
}

export function deactivate() {}
