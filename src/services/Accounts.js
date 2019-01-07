let accounts = [
  {
    name: 'Jon',
  },
  {
    name: 'Crystal',
  },
]

module.exports = {
  authorizeUser: (username) => {
    return new Promise((resolve, reject) => {
      accounts.forEach((data,index) => {
        if (data.name === username) {
          resolve()
        }
      })
      reject()
    })
  },

  accountData: () => {
    return new Promise((resolve, reject) => {
      let accountArr = []
      accounts.forEach((data,index) => {
        accountArr.push(data.name)
      })

      resolve(accountArr)
    })
  }
}
