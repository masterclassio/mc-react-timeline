# @masterclassio/react-timeline
```bash
📦 package: @masterclassio/react-timeline
```
> 👾 github: [https://github.com/masterclassio/mc-react-timeline](https://github.com/masterclassio/mc-react-timeline)

### Description
MasterClass package for timeline tracks

---
## Configure
> @see [https://andreybleme.com/2020-05-31/hosting-private-npm-packages-for-free/](https://andreybleme.com/2020-05-31/hosting-private-npm-packages-for-free/)

#### Check
This should already be done.
- [x] 0. Update the package.json
- [x] 1. Github Personal Acess Token 
- [x] 2. create a `.npmrc` 
- [ ] 3. create a Github repo
- [ ] [Optional] 4. Add secret to github


##### 0. Update the package.json
```json
"publishConfig": {
    "registry":"https://npm.pkg.github.com/"
},
"repository": {
    "type": "git",
    "url": "https://github.com/masterclassio/mc-react-timeline.git"
}
```



##### 1. Github Personal Acess Token 
> @see [https://github.com/settings/tokens](https://github.com/settings/tokens)
Create a token `NPM_PERSONAL_ACCESS_TOKEN`

with the following permissions: 
```
read:packages 
write:packages
delete:packages
```

and export it to the console or `~/.bash_profile`
```bash
# ~/.bash_profile
NPM_PERSONAL_ACCESS_TOKEN=xxxx # <--- update this
```



##### 2. create a `.npmrc` 
```bash
# 👉 NPM_PERSONAL_ACCESS_TOKEN: @see .bash_profile

# ~~~
# 👉 @namespace: *
#
registry=https://registry.npmjs.org/

# ~~~
# 👉 @namespace: @masterclassio/react-timeline
#
@masterclassio:registry=https://npm.pkg.github.com/
//npm.pkg.github.com/:_authToken=${NPM_PERSONAL_ACCESS_TOKEN}

```



#### 3. Create a Github repo
Create a new repo in the `masterclassio` organisation
 [https://github.com/organizations/masterclassio/repositories/new](https://github.com/organizations/masterclassio/repositories/new)

* `name`: `mc-react-timeline`
* `description`: `MasterClass package to ... `

#### [Optional] 4. Add secret to github
This is only neccesary for Github Actions
Visit the `settings/secrets/actions/new` page for your repo

[https://github.com/masterclassio/mc-react-timeline/settings/secrets/actions/new](https://github.com/masterclassio/mc-react-timeline/settings/secrets/actions/new)

Enter in the:
* `Name`: `NPM_PERSONAL_ACCESS_TOKEN`
* `Secret`: `...copy/paste the token here` 

---

## Publish
```bash
npm publish
```

You can check the status by visiting 
[https://github.com/masterclassio/mc-react-timeline/packages](https://github.com/masterclassio/mc-react-timeline/packages)

![https://raw.githubusercontent.com/andreybleme/andreybleme.github.io/master/assets/img/list_github_packages.png](https://raw.githubusercontent.com/andreybleme/andreybleme.github.io/master/assets/img/list_github_packages.png)

### Errors Publishing
1. Try login
```
npm login --scope=@masterclassio --auth-type=legacy --registry=https://npm.pkg.github.com
```

The password is the `NPM_PERSONAL_ACCESS_TOKEN` not your Github password

*`username`: `mightyhorst`
*`password`: `gph_XXXXXXXX`

2. Replace the registry NPM_PERSONAL_ACCESS_TOKEN
In the `.npmrc` change the 
> //npm.pkg.github.com/:_authToken=${NPM_PERSONAL_ACCESS_TOKEN}

and paste the NPM_PERSONAL_ACCESS_TOKEN
> //npm.pkg.github.com/:_authToken=gph_XXXXXXXX

3. Use Personal Access Token in the publich command
```
NPM_PERSONAL_ACCESS_TOKEN=ghp_XXXXX npm publish
```


---

## Installation as dependency
Install with `npm`
```
npm i --save @masterclassio/react-timeline
```

or `yarn`
```
yarn add @masterclassio/react-timeline
```
## Usage 
// todo 

## Todo
- [ ] 
