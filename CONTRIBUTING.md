# PrintAPI guide
!!! Remember to **always** making changes on your personal [forked](https://github.com/Print-Spot/PrintAPI/fork) repository.

!!! And also from **other** branch than main (you need to create new branch on your fork fe. development)

Every operation need to be executed in node 18

You can do this by using [nvm(node version manager)](https://github.com/nvm-sh/nvm)
```bash
$ nvm use 18
! Now using node v18.20.2 (npm v10.5.0)
```
(works only in this terminal flow)

## Getting started
You **mustn't** be working on repo version of strapi

### Create strapi project
```bash
$ npx create-strapi-app@latest [name] 
? Choose your installation type (Use arrow keys)
❯ Quickstart (recommended) 
  Custom (manual settings) 
```
select `quickstart` setup option

### Import newest backup
```bash
$ npm run strapi import -- -f [newest_version].tar.gz.enc
? Please enter an encryption key [input is hidden]
```
then provide encryption key should be provided by moderator or placed in pass.txt (same key you should use to export)

### Start project
```bash 
$ npm run start
# or in development (preferred for making changes):
$ npm run develop
```

## Export and Push commit

### Export your changes
you should export and commit every important (even small) change
```bash
$ npm run strapi export -- -f [version explained below \/].tar.gz.enc
? Please enter an encryption key [input is hidden]
```
provide same encryption key again

and paste in backups/

### Version your export 
Create version of your change by schema below and paste it in VERSIONS.md:
```
* * *
 - [only versions to deploy].[if big change ++].[if small change ++].tar.gz.enc - description (not too big)
```
Make sure that if you increment value every number after it need to be reset to zero

0.0.23 => 0.1.0  

### Create commit
name commit after previous said version and description

### Push commit
just push commit.

### Create pull request to main repo
and wait for approvement and marge
