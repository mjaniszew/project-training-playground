Basic project playground
=========================================

Here you can find basic project sources and example issues which can be used
for testing skills and quick backbone-based project introduction.

In the github "Issues" tab you can find example issues that should be resolved
by new developer to get properly introduced to Backbone/Mustache/Less/Git/Grunt
libraries and tools.

Whole environment is configured by using Grunt.js and next sections contains all setup
instructions and some other usefull tips.

Links below contains all the necessary informations about technologies
used in this sample project, and reading them is recommended before starting introduction.

Backbone documentation:
http://backbonejs.org/

Mustache.js documentation:
https://github.com/janl/mustache.js

Less documentation:
http://lesscss.org/

Grunt.js docs:
http://gruntjs.com/configuring-tasks

Short git tutorial:
http://git-scm.com/docs/gittutorial


Environment setup and working with code
---------------------------------------

First of all you have to install ```node.js``` with ```npm```. Usually it can be done
very easily eg. by running ```apt-get install node``` command or similar,
depending on what OS you working on. After that:

First step:

```shell
git clone --recursive git@github.com:mjaniszew/git-react-introduction.git
cd git-react-introduction
```
> Clones repository to the local folder


An then performs all further steps in the project root.


#### Install all required depenencies:

```shell
npm install
```
> Installs all nodejs packages required by grunt to work properly.


```shell
npm run bower_install
```
> Installs all javascript libraries using bower (installed previously with npm install).


#### Start development server:

```shell
npm run dev
```
> This starts virtual server with detecting changes, automatic files compiling, and live reloading.


#### Working with code: daily routines and good habits

When starting to work on specific issue, developer should create separate branch from master, and give that
branch name containing issue nunmber and short description of the issue eg.

```shell
git checkout -b issue123-implement-search-box
```

While developing features, developer should rebase with the master branch at least once at the beggining
of the day. It can be done by running these commands:

```shell
git fetch --all
```
> To check whether new changes were made to the master.

Then checkout to master if there are new changes.

```shell
git pull --rebase
```
> To pull recent changes from remote branch

Checkout to the feature branch again and rebase:

```shell
git rebase master
```
> To rebase feature branch with master

```shell
git add some_files
git rebase --continue
```
> To solve conflicts and proceed with rebase

Before pushing any changes to the remote repository or at least before making Pull Request:

```shell
npm run test
```
> This command runs jshint to check javascript code quality.

When the feature is done and all changes are pushed to the feature remote branch, developer
can make a Pull Request for Code Review and later to merge to the master branch.

Pull Request should always contain these informations:
- issue number and link to the issue on issues tracker(Jira, Pivotal, Redmine etc.) if used
- short description of about what this PR is,
- list of additional acctions anyone needs to perform after merge, if they necessary of course. In most cases it won't be needed
