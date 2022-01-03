import { MockEntry, MockFileInfo } from "./mocks.ts"
import DirEntry from "../src/dirEntry.ts"

export const mockedDenoEntries = [
    new MockEntry(".hoge", true, false, false),
    new MockEntry("hoge", true, false, false),
    new MockEntry("fuga", true, false, false),
    new MockEntry("nyassu", false, true, false),
    new MockEntry(".nyassu", false, true, false),
    new MockEntry("mechakuchanagaitext", false, true, false),
]
export const mockedFileInfo = new MockFileInfo(true, true, true, 0, new Date(98, 1), new Date(98, 1), new Date(98, 1), 0, 0, 0, 0, 0, 0, 0, 0, 0)

export const mockedEntries = mockedDenoEntries.map(e => new DirEntry(e, mockedFileInfo))
