export default class DirEntry {
    denoEntry: Deno.DirEntry
    fileInfo: Deno.FileInfo

    constructor(entry: Deno.DirEntry, fileInfo: Deno.FileInfo) {
        this.denoEntry = entry
        this.fileInfo = fileInfo
    }
}
