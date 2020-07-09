import '../../public/css/bootstrap.min.css';
import '../../public/css/fontawesome-all.css';
import '../../public/css/normalize.css';
import '../../public/css/animate.css';
import '../../public/css/transition-animations.css';
import '../../public/css/owl.carousel.css';
import '../../public/css/magnific-popup.css';
import '../../public/css/main-green.css';
import '../../public/preview/lmpixels-demo-panel.css';
import '../../public/css/style.css';
import AuthContextProvider from '../contexts/AuthContext';
import App from 'next/app';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    const pageProps = Component.getInitialProps
      ? await Component.getInitialProps(ctx)
      : {};
    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    );
  }
}
