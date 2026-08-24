import figlet from "figlet";

async function doStuff() {
  const text = await figlet.text("Independence");
  console.log(text);
}

doStuff();