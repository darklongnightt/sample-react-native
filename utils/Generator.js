export const randomId = () => {
    let id = "";
    for (let i = 0; i < 16; i++) {
      const randomCode = Math.random() * 76 + 47;
      id += String.fromCharCode(randomCode);
    }
    return id;
}