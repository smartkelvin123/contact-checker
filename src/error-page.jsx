import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>{<i>{error.statusText || error.message}</i>}</p>
    </div>
  );
}

// import { useRouteError } from "react-router-dom";

// export default function ErrorPage() {
//   const error = useRouteError();
//   const { statusText, message } = error.response;

//   console.error(error);

//   return (
//     <div id="error-page">
//       <h1>Oops!</h1>
//       <p>Sorry, an unexpected error has occurred.</p>
//       <p>
//         <i>{statusText || message}</i>
//       </p>
//     </div>
//   );
// }
