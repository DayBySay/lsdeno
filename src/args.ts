import { parse } from "https://deno.land/std@0.113.0/flags/mod.ts"

export default class Args {
    path: string
    hasOptionA: boolean
    hasOptionL: boolean

    constructor(path: string, hasOptionA: boolean, hasOptionL: boolean) {
        this.path = path
        this.hasOptionA = hasOptionA
        this.hasOptionL = hasOptionL
    }

    public static parse(args: string[], currentPath: string): Args {
        const parsedArgs = parse(args)
        const pathsInArgs = args.filter(arg => !arg.startsWith("-"))
        const fst = pathsInArgs[0] // 今回は複数パスには対応させない
        const challenge = fst === undefined ? currentPath : `${currentPath}/${fst}`
        const existsFileOrDir = Deno.statSync(challenge)
        const path = existsFileOrDir ? challenge : currentPath
        const hasOptionA = parsedArgs["a"] !== undefined
        const hasOptionL = parsedArgs["l"] !== undefined
        return new Args(path, hasOptionA, hasOptionL)
    }
}
