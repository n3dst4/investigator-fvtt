# @lumphammer/shared-fvtt-bits

Common parts to be used across Foundry VTT modules and systems


## Installation

This package is not published on npm. You could I *guess* install it as a git or github dependency, but the chief intent is that you will incorporate it into your project as [git subtree](https://www.atlassian.com/git/tutorials/git-subtree).

First we add a remote that points to the shared code.

```sh
git remote add -f shared-fvtt-bits git@github.com:n3dst4/shared-fvtt-bits.git
```

Then we add the shared code to our project.

```sh
git subtree add --prefix subtrees/shared-fvtt-bits shared-fvtt-bits main
```

To break that command down:

* `git subtree add` asks the subtree command to incorporate the shared code into your project.
* `--prefix subtrees/shared-fvtt-bits` is the folder it will be cloned into. We add the "subtrees" folder to make it abundantly clear that it is a subtree (otherwise it would just look like a normal folder.)
* `shared-fvtt-bits` is the name of the remote we set up.
* `main` is the name of the branch in the shared repo that we want to bring in.

Now we need to tell pnpm "install" it into our project. We could just refer to it by path, e.g. `import {foo} from '../../subtrees/shared-fvtt-bits/foo'`, but that causes chaos with dependency management.

```sh
pnpm add file:subtrees/shared-fvtt-bits
```

Using the `file:` protocol means that pnpm will work out the dependencies for you.

## pnpm dependency

I use [pnpm](https://pnpm.io/) for dependency management. I like it because it's fast, uses PnP, and it makes me feel slightly hipster for not using npm or yarn. Plus yarn has just always been irritatingly smug.

(As a side note, I'm also super excited about [bun](https://bun.sh/) for dependency management and a bunch of other things, but as of right now (2024-03)it's not ready for primetime.)

Technically, pnpm is just one package manager. You could use another package manager for your own project, and still use this package, but you'll need to work out dependency management for yourself in that case.

My intent is to use pnpm for dependency management everywhere. There is a checked-in pnpm-lock.yaml file, for example.

A key feature is how pnpm handles `file:` dependencies -  see https://pnpm.io/cli/link#whats-the-difference-between-pnpm-link-and-using-the-file-protocol.

npm handles `file:` dependencies similarly-ish. npm will symlink the dependency and install its sub-dependencies in the main project. From a quick test just now, it installed `archiver`, `chalk`, and `fs-extra` in the main project, and it ALSO installed `chalk` in the `subtrees/shared-fvtt-bits/node_modules` folder because it had a different version requirement to something else that was installed in the main project. So I guess `npm` would be usable for our purposes. `npm i` took 3m from a cold cache, 8s from warm.

yarn just copies the dependency into `node_modules` without packaging, but their docs promise that will change in future (https://yarnpkg.com/protocol/file). The fact that it *copies* the dependency into `node_modules` means that changes to the source are not reflected in your project until you run `yarn` again. This is a deal-breaker for our purposes. Yarn took 3m from a cold cache, 4s from warm.

pnpm hard-links the dependency into `node_modules`, which is great because you can make changes to the source and they are instantly reflected in your project, like with npm.

TL;DR: npm and pnpm will both work, I am using and therefore testing pnpm and I'm checking in pnpm-lock.yaml. Yarn handles file: dependencies differently and will be annoying if you want to make subtree contributions from your main project, which is the whole point of using subtree.


## Adding dependencies

