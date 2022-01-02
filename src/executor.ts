import Args from "./args.ts"
import { Formatter, DefaultFormatter } from "./formatter.ts"
import { EntriesFilter, EmptyFilter, DotfileFilter } from "./filter.ts"

export default class Executor {
    path: string
    entries: Deno.DirEntry[]
    formatter: Formatter
    filter: EntriesFilter

    constructor(args: Args) {
        this.path = args.path
        this.entries = Array.from(Deno.readDirSync(args.path))
        this.formatter = new DefaultFormatter()
        this.filter = args.hasOptionA ? new EmptyFilter() : new DotfileFilter()
    }

    public execute() {
        const filtered = this.filter.filter(this.entries)
        const output = this.formatter.format(filtered)
        console.log(output)
    }
}
