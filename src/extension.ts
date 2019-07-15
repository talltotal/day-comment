import * as vscode from 'vscode'
import * as moment from 'moment'

enum Mode {
	today = 'today',
	week = 'week',
	nextWeek = 'nextWeek',
	weekWithDay = 'weekWithDay',
	nextWeekWithDay = 'nextWeekWithDay',
}

type Action = 'action'

interface Contributions {
	prefix: string
	weekPrefix: string
	firstDay: number
	rangeSeparator: string
	mode: Mode
	format: string
	list: Array<string>
	weekList: Array<string>
}

type CommandFun = (contributions: Contributions) => string

const actionMap: Map<Mode | Action, CommandFun> = new Map()
	.set(Mode.today, getDayComment)
	.set(Mode.week, getWeekComment(0, false))
	.set(Mode.nextWeek, getWeekComment(1, false))
	.set(Mode.weekWithDay, getWeekComment(0, true))
	.set(Mode.nextWeekWithDay, getWeekComment(1, true))

const commands: Map<Mode | Action, CommandFun> = new Map(actionMap)
	.set('action', action)

function action(contributions: Contributions): string {
	const mode: Mode = contributions.mode
	const act = actionMap.get(mode)
	return act ? act(contributions) : ''
}

function getDayComment(contributions: Contributions): string {
	const { prefix, format, list } = contributions

	return `\n${prefix} ${formatDay(format)} \n- ${list.join('\n- ')}\n`
}

function getWeekComment(weekNum: number, showAllDays: boolean): CommandFun {
	return (contributions: Contributions) => {
		const {
			prefix,
			weekPrefix,
			rangeSeparator,
			list,
			weekList,
			firstDay,
		} = contributions
		const firstD: number = firstDay % 7

		const weekStartDay = moment().add('week', weekNum).set('weekday', firstD)
		const dayStart: string = weekStartDay.format('YYYY/MM/DD')
		const dayEnd: string = moment(weekStartDay).add('d', 6).format('YYYY/MM/DD')
	
		return `\n${weekPrefix} ${dayStart}${rangeSeparator}${dayEnd} \n- ${weekList.join('\n- ')}\n`
			+ (showAllDays ? Array.from(Array(7)).map((_, index) => {
				return `\n${prefix} ${moment(weekStartDay).add('d', index).format('YYYY/MM/DD ddd')}\n- ${list.join('\n- ')}`
			}).join('\n') + '\n' : '')
	}
}

function formatDay(format: string): string {
	const date: Date = new Date()

	return moment(date).format(format)
}

export function activate(context: vscode.ExtensionContext) {
	for (let key of commands.keys()) {
		const fun = commands.get(key)

		if (!fun) {
			continue
		}

		const command = vscode.commands.registerCommand(`DayComment.${key}`, () => {
			const editor = vscode.window.activeTextEditor
			if (editor) {
				const contributions: Contributions = vscode.workspace.getConfiguration('day-comment') as any
				const selections = editor.selections

				const text = fun(contributions)

				editor.edit((editBuilder) => {
					selections.forEach((selection) => {
						editBuilder.replace(selection, '')
						editBuilder.insert(selection.active, text)
					})
				})
			}
		})

		context.subscriptions.push(command)
	}
}

export function deactivate() {}
