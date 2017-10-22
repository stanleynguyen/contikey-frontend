# dboard-frontend

## Stuffs to have a look at before starting

- [React Redux Architecture Overview](https://medium.com/mofed/react-redux-architecture-overview-7b3e52004b6e)
- [Hooking Up Redux with React](https://egghead.io/courses/build-a-react-app-with-redux)
- [Redux Course](https://learnredux.com/)

## Notes

This architecture was mainly influenced from the 2 courses above.

### Difference between components and containers

They are both folders of React components. However, one main 
difference is that while a "container"is assumed to be allowed to read 
shared props from the redux tree (i.e. store) via the react-redux's 
[connect function](https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options)
, a "component" is assumed to be "pure" (most of
the time), meaning it would only take it props passed during usage and are not 
supposed to be "connected" to the store.

### How to pull assets (images etc.) to use inside my react code

Just import it since I already set up a "file-loader" inside [webpack config](webpack.config.prod.js)

### Why use folder for my react components/containers?

My intentions is to have a sub-folder "components" that contains all the componets 
that is useful to (i.e. is only used in) such react component/container.

## Start writing code

```bash
git clone git@github.com:stanleynguyen/dboard-frontend.git
cd dboard-frontend
yarn start # this is to start the development server
```

Always remeber to open a new branch to work on anything that's 
your responsibility and open a PR once done. Other team members will be expected 
to review the code, once done, we will merge it in :)

To build the bundle for deployment
```bash
yarn build
```
Then deploy everything that's inside ```dist/``` folder to a static site host then
you are good to go :)

## Burning question

Please contact me on [Telegram](https://web.telegram.org/#/im?p=@stanley_nguyen) or
[Whatsapp](https://api.whatsapp.com/send?phone=6581489408) or 
[Email](mailto:hung.ngn.the@gmail.com)
