import DirEntry from "./dirEntry.ts"

export interface EntriesFilter {
    filter(entries: DirEntry[]): DirEntry[]
}

export class EmptyFilter implements EntriesFilter {
    filter(entries: DirEntry[]): DirEntry[] {
        return entries
    }
}

export class DotfileFilter implements EntriesFilter {
    filter(entries: DirEntry[]): DirEntry[] {
        return entries.filter(e => !e.denoEntry.name.startsWith("."))
    }
}
