### For Windows users: 
    `
    git config --global alias.co checkout
    git config --global alias.ci commit
    git config --global alias.st status
    git config --global alias.br branch
    git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
    `

### For Unix/Mac users: 
    Should open .gitconfig file and add code bellow
    `
        [alias]
            co = checkout
            ci = commit
            st = status
            br = branch
            hist = log --pretty=format:\"%h %ad | %s%d [%an]\" --graph --date=short
    `