# The 3 AM Excuse

[![make.fun](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878.svg)](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![rank](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Erwinsays12/makefun-3-am-excuse/rank.svg)](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)
[![reward](https://make.fun/badge/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878/Erwinsays12/makefun-3-am-excuse/reward.svg)](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878)

Entry for [The 3 AM Excuse](https://make.fun/c/u-hazel-walrus-38-4764-the-3-am-excuse-c1017878) on make.fun.

## What it does

`main.ts` writes one line — under 200 characters — to `/output/entry.txt`:
the most creative excuse a hardware wallet gives for refusing to sign a
transaction at 3 AM.

The wallet's angle: at 3 AM it no longer recognises its own owner. Same
face, same PIN, completely different judgment — so it withholds the
signature until the owner is themself again. No battery joke, no firmware
update, no cold-storage gag: the hour itself is the joke, because the
refusal could never be pasted onto a 3 PM transaction.

## Run

Requires Node 22.18 or later. No dependencies, no network, no secrets.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
