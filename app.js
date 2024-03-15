// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `Kalvian-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `Kalvian-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.

var Kalvian1="XXXX";
console.log(`The driver's name is`,Kalvian1)
var Kalvian2="YYYY";
console.log(`The navigator's name is `,Kalvian2)

// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
if(Kalvian1.length>Kalvian2.length)
{
  console.log("The driver has the longest name, it has XX characters.")
}
else if(Kalvian2.length>Kalvian1.length)
{
  console.log("It seems that the navigator has the longest name,it has XX characters.")
}
else{
  console.log("Wow, you both have equally long names, XX characters!.")
}

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the name, and also print the vowel letters along with the vowel index. or
// - print no vowels
// - for example. In String Kalvian - a and i are vowels. Print Kalvian a i a 1 4 5. 

var a="kalvian" 
for(let i=0;i<a.length;i++)
{
  if(a[i]=='a'||a[i]=='e'||a[i]=='i'||a[i]=='o'|| a[i]=='u')
  {
    console.log(a[i],i);
  }
  else
  {
    console.log("no vowels")
  }
}


// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
var ucount=0,lcount=0;
for(let i=0;i<a.length;i++)
{
  if(a[i]=='A' && a[i]=='Z')
  {
    ucount++;
  }
  else{
    lcount++;
  }
}
console.log(ucount);
console.log(lcount);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "Kalvian"
var n="Kalvian"
for(let i=0;i<n.length;i++)
{
  var string=''
  string+=string+n[i].toUpperCase()+" "
  console.log(string)
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. Example "naivlaK"

for(let i=n.length-1;i>=0;i--)
{
  console.log(n[i]);
}

// 3.3 Merge both the characters such that driver is followed by Navigator like "DriverName NavigatorName"
// - Now bring the NavigatorName to the start and send DriverName to the back like "NavigatorName DriverName"

console.log(Kalvian1+Kalvian2)
console.log(Kalvian2+Kalvian1)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?
if(Kalvian1<Kalvian2)
{
  console.log("The driver's name goes first")
}
else if(Kalvian1==Kalvian2)
{
  console.log("What ?! You both have same name");
}
else{
  console.log("Yo, the navigators name goes first definitely")
}


// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
var para=`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nec ultrices dui sapien eget mi. Adipiscing at in tellus integer feugiat scelerisque. Nunc sed blandit libero volutpat. Sem et tortor consequat id porta nibh venenatis cras sed. Ipsum a arcu cursus vitae congue mauris rhoncus aenean vel. Nisl rhoncus mattis rhoncus urna neque viverra justo. Posuere morbi leo urna molestie at elementum eu. Curabitur vitae nunc sed velit dignissim sodales ut eu sem. Velit dignissim sodales ut eu. Volutpat sed cras ornare arcu dui vivamus arcu felis. Nunc id cursus metus aliquam eleifend. Ac odio tempor orci dapibus ultrices in iaculis. Purus sit amet luctus venenatis lectus magna fringilla urna porttitor. Proin fermentum leo vel orci porta

Arcu dictum varius duis at consectetur. Aliquam etiam erat velit scelerisque in dictum non consectetur. Egestas quis ipsum suspendisse ultrices. Enim neque volutpat ac tincidunt. Consequat ac felis donec et odio. Netus et malesuada fames ac turpis egestas maecenas pharetra convallis. Non tellus orci ac auctor augue mauris augue neque. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Ac feugiat sed lectus vestibulum mattis ullamcorper velit sed ullamcorper. Semper risus in hendrerit gravida rutrum. Quisque sagittis purus sit amet volutpat consequat mauris nunc congue. Non tellus orci ac auctor. Nibh ipsum consequat nisl vel. Quis auctor elit sed vulputate.

Ut porttitor leo a diam sollicitudin tempor id eu. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Lectus sit amet est placerat in. Feugiat sed lectus vestibulum mattis. Ut consequat semper viverra nam libero justo laoreet. Leo in vitae turpis massa sed elementum. Consectetur adipiscing elit duis tristique. Vitae aliquet nec ullamcorper sit. Sit amet porttitor eget dolor morbi non arcu. Tortor vitae purus faucibus ornare. Viverra ipsum nunc aliquet bibendum enim facilisis gravida. Tincidunt dui ut ornare lectus sit amet est. Risus pretium quam vulputate dignissim suspendisse in. Ut consequat semper viverra nam libero justo. Mi quis hendrerit dolor magna eget est lorem. Sit amet mattis vulputate enim nulla aliquet porttitor lacus. Purus viverra accumsan in nisl nisi scelerisque. Neque laoreet suspendisse interdum consectetur libero id faucibus`
var para=para.split(" ")
var count=0;
var str="et";
console.log(para.length);
for(let i=0;i<para.length;i++)
{
  if(para[i]==str)
  {
    count=count+1;
  }
}
console.log(count);
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 
var pal="mam";
var rev="";
for(let i=pal.length-1;i>=0;i--)
{
    rev=rev+pal[i];
}
if(pal==rev)
console.log("palindrome");
else
console.log("not a palindrome");