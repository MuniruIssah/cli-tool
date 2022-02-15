import figlet from "figlet";
import gradient from "gradient-string";

export function flawlessVictory(playerName) {
  console.clear();
  const msg = `Congrats , ${playerName} ! \n FLAWLESS VICTORY`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

export function victory(playerName) {
  console.clear();
  const msg = `Congrats , ${playerName} ! \n VICTORY IS YOURS`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

export function meh(playerName) {
  console.clear();
  const msg = `Congrats , ${playerName} ! \n Your Play was Mehhhhh`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

export function babality(playerName) {
  console.clear();
  const msg = `YOU LOSE , ${playerName} ! \n BABALITY`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}

export function fatality(playerName) {
  console.clear();
  const msg = `YOU LOSE , ${playerName} ! \n FATALITY`;

  figlet(msg, (err, data) => {
    console.log(gradient.pastel.multiline(data));
  });
}
