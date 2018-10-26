# `@rehooks/...`

> React hook for ...

> **Note:** This is using the new [React Hooks API Proposal](https://reactjs.org/docs/hooks-intro.html)
> which is subject to change until React 16.7 final.
>
> You'll need to install `react`, `react-dom`, etc at `^16.7.0-alpha.0`

## Install

```sh
yarn add @rehooks/useInterval
```

## Usage

```js
import useInterval from '@rehooks/...'

function MyComponent() {
  useInterval(() => {
    calledEvery2Seconds()
  }, 2000)

  return <div />
}
```