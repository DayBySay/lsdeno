import DirEntry from "./dirEntry.ts"
import { format as dateformat } from "https://deno.land/std@0.77.0/datetime/mod.ts"

function decorateDir(string: string): string {
    return `\u001b[1;96m${string}\u001b[0m`
}

export interface Formatter {
    format(entries: DirEntry[]): string
}

export class DefaultFormatter implements Formatter {
    public format(entries: DirEntry[]): string {
        const stringLength = Math.max(...entries.map(e => e.denoEntry.name.length))
        const sorted = entries.sort((a, b) => (a.denoEntry.name > b.denoEntry.name ? 1 : -1))
        const decorated = sorted.map(e => {
            const name = e.denoEntry.name
            if (name.length >= stringLength) {
                return e.denoEntry.isDirectory ? decorateDir(name) : name
            }
            const sabun = stringLength - name.length
            const coloered = e.denoEntry.isDirectory ? decorateDir(name) : name
            const padded = coloered.concat("", "".padEnd(sabun, " "))
            return padded
        })
        return decorated.reduce((acc, val) => `${acc} ${val}`)
    }
}

// ファイルモード、リンク数、所有者名、グループ名、ファイルのバイト数、月日、ファイルの最終更新時刻、時間、分、パス名
export class LongFormatter implements Formatter {
    public format(entries: DirEntry[]): string {
        const sorted = entries
            .sort((a, b) => (a.denoEntry.name > b.denoEntry.name ? 1 : -1))
            .map(e => {
                const mode = (e.fileInfo.mode! & parseInt("7777", 8)).toString(8)
                const links = 0 // 大変そう
                const uid = e.fileInfo.uid // 大変そう
                const gid = e.fileInfo.gid // 大変そう
                const fileSize = e.fileInfo.size.toString().padStart(2, " ") // 適当に埋める
                const mtime = e.fileInfo.mtime!
                const month = dateformat(mtime, "M")
                const day = dateformat(mtime, "d")
                const time = dateformat(mtime, "HH:mm")
                const name = e.denoEntry.isDirectory ? decorateDir(e.denoEntry.name) : e.denoEntry.name
                return `${mode}  ${links}  ${uid}  ${gid}  ${fileSize}  ${month}  ${day}  ${time}  ${name}`
            })
        const output = sorted.reduce((acc, val) => `${acc}\n${val}`)
        return output
    }
}
