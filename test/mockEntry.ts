export default class MockEntry implements Deno.DirEntry {
    name: string
    isFile: boolean
    isDirectory: boolean
    isSymlink: boolean

    constructor(name: string, isFile: boolean, isDirectory: boolean, isSymlink: boolean) {
        this.name = name
        this.isFile = isFile
        this.isDirectory = isDirectory
        this.isSymlink = isSymlink
    }
}
