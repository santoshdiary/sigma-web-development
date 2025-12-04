const coding = ["js", "ruby", "java", "python", "cpp"];

let values = coding.forEach((item) => {
  // console.log(item);
  return item;
});
//  console.log(values); // foreach method doesn't return anything (undefined)

let nums = [1, 23, 44, 56, 4, 6, 34, 54];
const nums2 = nums.filter((item) => {
  return item > 10;
});
//  console.log(nums2);

let newNums = [];
nums.forEach((value) => {
  if (value > 10) {
    newNums.push(value);
  }
});
console.log(newNums);

//--------------------------------FILTER METHOD EXAMPLE--------------------------


const booksLibrary = [
  { title: "Book One", genre: "Fiction", publish: 1981, edition: 2004 },
  { title: "Book Two", genre: "Non-Fiction", publish: 1992, edition: 2008 },
  { title: "Book Three", genre: "History", publish: 1999, edition: 2007 },
  { title: "Book Four", genre: "Non-Fiction", publish: 1989, edition: 2010 },
  { title: "Book Five", genre: "Science", publish: 2009, edition: 2014 },
  { title: "Book Six", genre: "Fiction", publish: 1987, edition: 2010 },
  { title: "Book Seven", genre: "History", publish: 1986, edition: 1996 },
  { title: "Book Eight", genre: "Science", publish: 2011, edition: 2016 },
  { title: "Book Nine", genre: "Non-Fiction", publish: 1981, edition: 1989 },
]; // array of objects 

console.log("List of book that you filtered are----");

let userNeedBook = booksLibrary.filter((bk)=>{
    return bk.genre==='History' && bk.edition>=1995 
})
console.log(userNeedBook);

