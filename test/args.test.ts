import Args from "../src/args.ts"
import { assertEquals } from "https://deno.land/std@0.111.0/testing/asserts.ts"

const current = Deno.cwd()

Deno.test("OptionA OptionL が存在する", async t => {
    await t.step("まとまったオプションで渡される場合", async t => {
        await t.step("対応したオプションのみ渡される場合", () => {
            const args = Args.parse(["-la"], current)
            assertEquals(args.hasOptionA, true)
            assertEquals(args.hasOptionL, true)
        })

        await t.step("対応していないオプションも渡される場合", () => {
            const args = Args.parse(["-ahogel"], current)
            assertEquals(args.hasOptionA, true)
            assertEquals(args.hasOptionL, true)
        })
    })

    await t.step("分割されたオプションで渡される場合", () => {
        const args = Args.parse(["-a", "-l"], current)
        assertEquals(args.hasOptionA, true)
        assertEquals(args.hasOptionL, true)
    })
})

Deno.test("OptionA OptionL が存在しない", async t => {
    await t.step("対応していないオプションが存在する場合", () => {
        const args = Args.parse(["-hoge"], current)
        assertEquals(args.hasOptionA, false)
        assertEquals(args.hasOptionL, false)
    })

    await t.step("オプションが存在しない場合", () => {
        const args = Args.parse([""], current)
        assertEquals(args.hasOptionA, false)
        assertEquals(args.hasOptionL, false)
    })
})

Deno.test("パス引数のテスト", async t => {
    await t.step("パス引数が存在する場合", async t => {
        await t.step("パス引数がオプションの前にある場合", () => {
            const args = Args.parse(["src", "-al"], current)
            assertEquals(args.path, `${current}/src`)
            assertEquals(true, args.hasOptionA)
            assertEquals(true, args.hasOptionL)
        })

        await t.step("パス引数がオプションの後ろにある場合", () => {
            const args = Args.parse(["-al", "src"], current)
            assertEquals(args.path, `${current}/src`)
            assertEquals(true, args.hasOptionA)
            assertEquals(true, args.hasOptionL)
        })
    })

    await t.step("パス引数が存在しない場合", async t => {
        await t.step("オプションが存在する場合", () => {
            const args = Args.parse(["-al"], current)
            assertEquals(args.path, `${current}`)
            assertEquals(args.hasOptionA, true)
            assertEquals(args.hasOptionL, true)
        })

        await t.step("引数が何もない場合", () => {
            const args = Args.parse([""], current)
            assertEquals(args.path, `${current}/`)
            assertEquals(args.hasOptionA, false)
            assertEquals(args.hasOptionL, false)
        })
    })
})
