'use strict'
let { useEffect } = require('react')

function useInterval(cb, interval = 1000) {
  useEffect(() => {
    let id = setInterval(() => {
      cb()
    }, interval)

    return () => {
      clearInterval(id)
    }
  }, [cb, interval])
}

module.exports = useInterval
