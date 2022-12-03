// Read text file in react
// https://stackoverflow.com/questions/73127369/how-to-load-a-locally-stored-text-file-in-react-component

// import { useState, useEffect } from "react";

// const get_text_file = async (filepath) => {
//   // prefix public dir files with `process.env.PUBLIC_URL`
//   // see https://create-react-app.dev/docs/using-the-public-folder/
//   const res = await fetch(`${process.env.PUBLIC_URL}/${filepath}`);

//   // check for errors
//   if (!res.ok) {
//     throw res;
//   }

//   return res.text();
// };

export function TextFile(fileName) {
  // const [text, setText] = useState(""); // init with an empty string

  // // //  This is for direct text output into the html
  // // useEffect(() => {
  // //   get_text_file(`${fileName}.txt`).then(setText).catch(console.error);
  // // }, [fileName]);
  // // return (
  // //   <>
  // //     <p>{text}</p>
  // //   </>
  // // );

  // return get_text_file(`${fileName}`).then(setText).catch(console.error);

  return fileName

}