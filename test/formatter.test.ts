import { assertEquals } from "https://deno.land/std@0.111.0/testing/asserts.ts"
import { DefaultFormatter } from "../src/formatter.ts"
import MockEntry from "./mockEntry.ts"

const entries = [
    new MockEntry("mechakuchanagaitext", true, true, true),
    new MockEntry("hoge", true, true, true),
    new MockEntry("fuga", true, true, true),
    new MockEntry("nyassu", true, true, true),
]

Deno.test("文字列がソートされかつ文字列長が一番長い文字列にあわせてパディングされた状態でタブ区切りになる", () => {
    const formatter = new DefaultFormatter()
    const result = formatter.format(entries)
    const expected = "fuga                hoge                mechakuchanagaitext nyassu             "
    assertEquals(result, expected)
})
