import { assertEquals } from "https://deno.land/std@0.111.0/testing/asserts.ts"
import { EmptyFilter, DotfileFilter } from "../src/filter.ts"
import MockEntry from "./mockEntry.ts"

const entries = [
    new MockEntry(".hoge", true, true, true),
    new MockEntry("hoge", true, true, true),
    new MockEntry("fuga", true, true, true),
    new MockEntry("nyassu", true, true, true),
    new MockEntry(".nyassu", true, true, true),
]

Deno.test("何もフィルタリングされない", () => {
    const filter = new EmptyFilter()
    const result = filter.filter(entries)
    const expected = entries

    assertEquals(result, expected)
})

Deno.test("名前がドットで始まるファイルがフィルタリングされる", () => {
    const filter = new DotfileFilter()
    const result = filter.filter(entries)
    const expected = [new MockEntry("hoge", true, true, true), new MockEntry("fuga", true, true, true), new MockEntry("nyassu", true, true, true)]

    assertEquals(result, expected)
})
