const cookies = [{ name: 'Chocolate Cookies' }, { name: 'Macaron Cookies' }];
const newCookie = { name: 'Biscotti Cookies' };

// Progression 1: create a function to get all the cookies
function createCookie(cookies, newCookie, getCookies) {
  setTimeout(() => {
    cookies.push(newCookie);
    getCookies(cookies);
  }, 2000);
}
// Progression 2: using setTimeout()

//Progression 3: Create a function to creat cookies
function getCookies(cookies) {
  console.log(cookies);
}
// Progression 5: calling function
createCookie(cookies, newCookie, getCookies);
