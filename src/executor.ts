import Args from "./args.ts"
import DirEntry from "./dirEntry.ts"
import { Formatter, DefaultFormatter, LongFormatter } from "./formatter.ts"
import { EntriesFilter, EmptyFilter, DotfileFilter } from "./filter.ts"

export default class Executor {
    path: string
    entries: DirEntry[]
    formatter: Formatter
    filter: EntriesFilter

    constructor(args: Args) {
        this.path = args.path
        const denoEntries = Array.from(Deno.readDirSync(args.path))
        this.entries = denoEntries.map(e => new DirEntry(e, Deno.statSync(this.path + "/" + e.name)))
        this.formatter = args.hasOptionL ? new LongFormatter() : new DefaultFormatter()
        this.filter = args.hasOptionA ? new EmptyFilter() : new DotfileFilter()
    }

    public execute() {
        const filtered = this.filter.filter(this.entries)
        const output = this.formatter.format(filtered)
        console.log(output)
    }
}
