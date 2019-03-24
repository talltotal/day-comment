import * as vscode from 'vscode'
import * as moment from 'moment'

interface Contributions {
	prefix: string
	format: string
	list: Array<string>
}

function getDayComment(contributions: Contributions): string {
	const prefix: string = contributions.prefix
	const format: string = contributions.format
	const list: Array<string> = contributions.list

	return `\n${prefix} ${formatDay(format)} \n- ${list.join('\n\n- ')}\n`
}

function getWeekComment(): string {
	const dayStart: string = moment().set('weekday', 1).format('YYYY/MM/DD')
	const dayEnd: string = moment().set('weekday', 7).format('YYYY/MM/DD')

	return `\n##### ${dayStart} - ${dayEnd}`
}

function formatDay(format: string): string {
	const date: Date = new Date()

	return moment(date).format(format)
}

export function activate(context: vscode.ExtensionContext) {

	let disposableDay = vscode.commands.registerCommand('extension.dayComment', () => {
		const editor = vscode.window.activeTextEditor
		if (editor) {
			const selections = editor.selections
			const contributions: Contributions = vscode.workspace.getConfiguration('day-comment') as any

			const text = getDayComment(contributions)

			editor.edit((editBuilder) => {
				selections.forEach((selection) => {
					editBuilder.replace(selection, '')
					editBuilder.insert(selection.active, text)
				})
			})
		}
	})

	let disposableWeek = vscode.commands.registerCommand('extension.weekComment', () => {
		const editor = vscode.window.activeTextEditor
		if (editor) {
			const selections = editor.selections

			const text = getWeekComment()

			editor.edit((editBuilder) => {
				selections.forEach((selection) => {
					editBuilder.replace(selection, '')
					editBuilder.insert(selection.active, text)
				})
			})
		}
	})

	context.subscriptions.push(disposableDay)
	context.subscriptions.push(disposableWeek)
}

export function deactivate() {}
