function Db() {
  const storage = []

  const add = ({name, text}) => storage.push({name, text, id: Math.random()})

  const remove = id => storage = storage.filter(ele => ele.id !== id)

  const update = (id, {name, text}) => {
    storage.forEach(ele => {
      if(ele.id === id) {
        ele = {name, text}
      }
    })
  }

  const see = () => storage

  const publicAPI = {
    add,
    remove,
    update,
    see
  }


  return publicAPI
}

let db = Db()
db.add({name: "mow", text: "nathan should mow"})
db.see()


module.exports = db
