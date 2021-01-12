import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <div className="p-2 h-screen">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
