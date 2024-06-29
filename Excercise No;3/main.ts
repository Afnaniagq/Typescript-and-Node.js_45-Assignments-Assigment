let personName:string = "Imran zindani";
console.log(`"In LowerCase"${personName.toLowerCase()}`);

console.log(`"In UpperCase"${personName.toUpperCase()}`);

console.log(`"In TittleCase"${personName.replace(/\b\w/g,(char) => char.toUpperCase())}`);