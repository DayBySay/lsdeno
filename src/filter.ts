export interface EntriesFilter {
    filter(entries: Deno.DirEntry[]): Deno.DirEntry[]
}

export class EmptyFilter implements EntriesFilter {
    filter(entries: Deno.DirEntry[]): Deno.DirEntry[] {
        return entries
    }
}

export class DotfileFilter implements EntriesFilter {
    filter(entries: Deno.DirEntry[]): Deno.DirEntry[] {
        return entries.filter(e => !e.name.startsWith("."))
    }
}
