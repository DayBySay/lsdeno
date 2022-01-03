import { assertEquals } from "https://deno.land/std@0.111.0/testing/asserts.ts"
import { EmptyFilter, DotfileFilter } from "../src/filter.ts"
import { mockedFileInfo, mockedEntries } from "./fixtures.ts"
import { MockEntry } from "./mocks.ts"
import DirEntry from "../src/dirEntry.ts"

Deno.test("何もフィルタリングされない", () => {
    const filter = new EmptyFilter()
    const result = filter.filter(mockedEntries)
    const expected = mockedEntries

    assertEquals(result, expected)
})

Deno.test("名前がドットで始まるファイルがフィルタリングされる", () => {
    const filter = new DotfileFilter()
    const result = filter.filter(mockedEntries)
    const expected = [
        new DirEntry(new MockEntry("hoge", true, false, false), mockedFileInfo),
        new DirEntry(new MockEntry("fuga", true, false, false), mockedFileInfo),
        new DirEntry(new MockEntry("nyassu", false, true, false), mockedFileInfo),
        new DirEntry(new MockEntry("mechakuchanagaitext", false, true, false), mockedFileInfo),
    ]

    assertEquals(result, expected)
})
