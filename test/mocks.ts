export class MockEntry implements Deno.DirEntry {
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

export class MockFileInfo implements Deno.FileInfo {
    isFile: boolean
    isDirectory: boolean
    isSymlink: boolean
    size: number
    mtime: Date | null
    atime: Date | null
    birthtime: Date | null
    dev: number | null
    ino: number | null
    mode: number | null
    nlink: number | null
    uid: number | null
    gid: number | null
    rdev: number | null
    blksize: number | null
    blocks: number | null

    constructor(
        isFile: boolean,
        isDirectory: boolean,
        isSymlink: boolean,
        size: number,
        mtime: Date,
        atime: Date,
        birthtime: Date,
        dev: number,
        ino: number,
        mode: number,
        nlink: number,
        uid: number,
        gid: number,
        rdev: number,
        blksize: number,
        blocks: number
    ) {
        this.isFile = isFile
        this.isDirectory = isDirectory
        this.isSymlink = isSymlink
        this.size = size
        this.mtime = mtime
        this.atime = atime
        this.birthtime = birthtime
        this.dev = dev
        this.ino = ino
        this.mode = mode
        this.nlink = nlink
        this.uid = uid
        this.gid = gid
        this.rdev = rdev
        this.blksize = blksize
        this.blocks = blocks
    }
}
