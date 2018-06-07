# hicasting







# GIT

## Create git in a folder

```
git init
```

## Link an existing GIT repo

```
git remote add origin git@github.com:mpitenko/hicasting.git
```

## Save changes

```
  // check status of the files in the directory
  git status

  git add -u
  git add .
  
  git commit -m "Init repo"

  // send the commit to the repo with the name 'origin' to the branch 'master'
  git push origin master
```

## See list of commits

```
git log
```

## Get changes from remote repo

```
git pull origin master
```