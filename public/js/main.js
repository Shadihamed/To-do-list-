const deleteText = document.querySelectorAll('.fa-trash')
const check = document.querySelectorAll('.fa-check')

Array.forEach((element) => {
  element.addEventListener('click',completed)
});

array.forEach((element) => {
  element.addEventListener('click',deleted)
});

// async function completed() {
//   const cList = this.parentNode.childNodes[1].innerText
//   try{
//     const response = await fetch('addCompleted',{
//       method : 'put' ,
//       headers : {'Content-Type':'application/json'},
//       body : JSON.stringify({
//         "cLists" : cList
//       })
//     })
//     const data =await.res.json()
//     console.log(data);
//     location.reload()
//
//   }catch(err){
//     console.log(err);
//   }
// }

async function deleted() {
const dList = this.parentNode.childNodes[1].innerText
try{
  const response = await fetch('deleteItems',{
    method : 'delete' ,
    headers : {'Content-Type':'application/json'},
    body : JSON.stringify({
      "dLists" : dList
    })
  })
  const data =await.res.json()
  console.log(data);
  location.reload()

}catch(err){
  console.log(err);
}
}
