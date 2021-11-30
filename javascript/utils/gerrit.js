class Gerrit {
  branches() {
    return fetch('https://review.typo3.org/projects/Packages%2FTYPO3.CMS/branches/')
      .then(response => response.text())
      .then(data => this.makeValid(data))
      .then(json => {
        const refs = []
        json.forEach(item => {
          const pattern = /refs\/heads\/([0-9]*\.[0-9]*)/g // eslint-disable-line no-useless-escape
          const matches = pattern.exec(item.ref)
          if (matches && matches[1] !== '') {
            refs.push({name: matches[1], value: matches[1]})
          }
        })

        refs.sort((a, b) => b.value - a.value)
        refs.unshift({name: 'master', value: 'master'})

        return refs
      })
  }

  revision(patchId, currentRevision) {
    return fetch(`https://review.typo3.org/changes/${patchId}/?o=ALL_REVISIONS`)
      .then(response => response.text())
      .then(data => this.makeValid(data))
      .then(json => {
        const revisions = []

        Object.keys(json.revisions).forEach(item => {
          const number = json.revisions[item]._number
          if (parseInt(currentRevision) === parseInt(number)) {
            json.revisions[item].selected = true
          }
          revisions[number] = json.revisions[item]
        })

        return revisions.reverse() || {}
      })
  }

  username() {
    return fetch('https://review.typo3.org/accounts/self/?pp=0')
      .then(response => {
        if (response.status === 403) {
          return '{}'
        }
        return response.text()
      })
      .then(data => this.makeValid(data))
  }

  makeValid(json) {
    return JSON.parse(json.replace(')]}\'', ''))
  }

  parse(url) {
    const pattern = /Packages\/TYPO3\.CMS\/\+\/([0-9]+)(|$)(\/|$)([0-9]*|$)(\.\.|$)([0-9]*|$)/g
    const matches = pattern.exec(url)

    if (!matches) {
      return null
    }

    return {
      id: matches[1] || null,
      revision: matches[6] || matches[4] || null
    }
  }
}

export {Gerrit}
