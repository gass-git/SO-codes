/** 
 * QUESTION
 * 
 * I have an array of objects in the format below and would like to 
 * transform it into a new array of objects using a property as a key. 
 * The key should be unique. See shape of the object below.
 * */

const mockedList = [
  {
    email: 'aaa@example.com',
    id: '5052',
    name: 'Java'
  },
  {
    email: 'bbb@example.com',
    id: '5053',
    name: 'Python'
  },
  {
    email: 'aaa@example.com',
    id: '5054',
    name: 'C#'
  },
  {
    email: 'bbb@example.com',
    id: '5055',
    name: 'Javascript'
  }
]

// SOLUTION

let newList = {}

mockedList.forEach((item) => {
  // push item into array if email exists in newList obj
  if (newList[item.email]) newList[item.email].languages.push(item)

  // add email to newList if it does not exists
  else newList[item.email] = {
    email: item.email,
    languages: [item]
  }
})

const newListKeys = Object.keys(newList)

const newMockedList = newListKeys.map((key) => {
  return newList[key]
})

console.log(newMockedList)