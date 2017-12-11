import './styles.css'

import { whenWebComponentsReady } from './@skatejs/web-components'

whenWebComponentsReady().then(() => {
  // tslint:disable-next-line:whitespace
  return import(/* webpackChunkName: "app" */ './app')
    .then(({ App }) => {
      const mountPoint = document.getElementById('app')
      // here you can boot your App via your lib/framework specific code
      render(App, mountPoint)
    })
    .catch(console.error)
})

const render = (what: typeof HTMLElement & { is: string }, where: HTMLElement | null) => {
  if (where) {
    where.innerHTML = `<${what.is}></${what.is}>`
  }
}
