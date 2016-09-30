function Db() {
  let storage = []

  const add = ({name, text}) => storage.push({name, text, id:1 })

  const remove = id => storage = storage.filter(ele => ele.id !== id)

  const update = (id, {name, text}) => {
    storage.forEach((ele, i) => {
      if(ele.id === id) {
      	storage[i] = {name, text, id: ele.id}
        console.log(ele)
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
db.update(1,{name: "asda", text: "nathaasdsn should mow"})
db.see()


module.exports = db
