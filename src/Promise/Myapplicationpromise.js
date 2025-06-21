 export const myapplicationPromise = (email)=>{
   return fetch(
      `http://localhost:3000/myapplication?email=${email}`,
      {
        credentials: "include",
      }
    ).then((res) => res.json());
 } 