import "../styles/globals.scss";
import "../styles/footer.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { Provider, useDispatch } from "react-redux";
import store from "../app/store";

function MyApp({ Component, pageProps }) {
  const layout = Component.getLayout || ((page) => page);
  const nestedLayout = Component.nestedLayout || ((page) => page);
  return (
    <>
      <Provider store={store}>
        <Head>
          <title>Devicecure | Doorstep Repair</title>
        </Head>
        
        {nestedLayout(layout(<Component {...pageProps} />))}
      </Provider>
    </>
  );
}

export default MyApp;
