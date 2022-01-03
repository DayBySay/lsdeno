import { assertEquals } from "https://deno.land/std@0.111.0/testing/asserts.ts"
import { DefaultFormatter, LongFormatter } from "../src/formatter.ts"
import { mockedEntries } from "./fixtures.ts"

Deno.test("文字列がソートされかつ文字列長が一番長い文字列にあわせてパディングされた状態になる", () => {
    const formatter = new DefaultFormatter()
    const result = formatter.format(mockedEntries)
    const expected =
        ".hoge               \u001b[1;96m.nyassu\u001b[0m             fuga                hoge                \u001b[1;96mmechakuchanagaitext\u001b[0m \u001b[1;96mnyassu\u001b[0m             "
    assertEquals(result, expected)
})

Deno.test("文字列がソートされかつls -lっぽいフォーマットになる", () => {
    const formatter = new LongFormatter()
    const result = formatter.format(mockedEntries)
    const expected =
        "0  0  0  0  0  2  1  00:00  .hoge\n" +
        "0  0  0  0  0  2  1  00:00  \u001b[1;96m.nyassu\u001b[0m\n" +
        "0  0  0  0  0  2  1  00:00  fuga\n" +
        "0  0  0  0  0  2  1  00:00  hoge\n" +
        "0  0  0  0  0  2  1  00:00  \u001b[1;96mmechakuchanagaitext\u001b[0m\n" +
        "0  0  0  0  0  2  1  00:00  \u001b[1;96mnyassu\u001b[0m"
    assertEquals(result, expected)
})
