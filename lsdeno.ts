import Args from "./src/args.ts"
import Executor from "./src/executor.ts"

const args = Args.parse(Deno.args, Deno.cwd())
const command = new Executor(args)
command.execute()
