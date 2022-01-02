export interface Formatter {
    format(entries: Deno.DirEntry[]): string
}

export class DefaultFormatter implements Formatter {
    public format(entries: Deno.DirEntry[]): string {
        const stringLength = Math.max(...entries.map(e => e.name.length))
        const padded = entries.map(e => {
            if (e.name.length >= stringLength) {
                return e.name
            }

            return e.name.padEnd(stringLength, " ")
        })
        const sorted = padded.sort()
        return sorted.reduce((acc, val) => `${acc}\t${val}`)
    }
}
