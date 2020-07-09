import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html lang='en' className='no-js'>
        <Head>
          <meta charSet='UTF-8' />

          <meta httpEquiv='X-UA-Compatible' content='IE=edge' />

          <meta
            name='viewport'
            content='width=device-width, initial-scale=1, maximum-scale=1'
          />
          <meta
            name='description'
            content='PRO Card - Material Resume / CV / vCard Template'
          />
          <meta
            name='keywords'
            content='vcard, resposnive, retina, resume, jquery, css3, bootstrap, Material CV, portfolio'
          />
          <meta name='author' content='lmtheme' />
          <link rel='shortcut icon' href='favicon.ico' />

          <link
            href='https://fonts.googleapis.com/css?family=Raleway'
            rel='stylesheet'
          />

          <script src='/js/jquery-2.1.3.min.js'></script>
          <script src='/js/modernizr.custom.js'></script>
          {/* <script src='https://www.google.com/recaptcha/api.js'></script> */}
        </Head>

        <body className='material-template'>
          <div className='preloader'>
            <div className='preloader-animation'>
              <div className='preloader-spinner'></div>
            </div>
          </div>

          <div id='page' className='page'>
            <Main />
            <NextScript />
          </div>

          <footer>
            <div className='copyrights'>© 2017 All rights reserved.</div>
          </footer>

          {/* <a id='lm_demo_panel_switcher' className='lm-demo-panel-switcher right'>
            <i className='fa fa-gear'></i>
          </a>
          <div
            id='lm_demo_panel'
            className='lm-demo-panel right panel-color-red active'
          >
            <div className='demo-panel-title'>Main Color</div>
            <div id='main_color' className='demo-panel-options'>
              <a data-id='deep-purple'>
                <div className='preview color-1'>&nbsp;</div>
              </a>
              <a data-id='red'>
                <div className='preview color-2'>&nbsp;</div>
              </a>
              <a data-id='blue'>
                <div className='preview color-3'>&nbsp;</div>
              </a>
              <a data-id='deep-orange'>
                <div className='preview color-4'>&nbsp;</div>
              </a>
              <a data-id='green' className='current-main-color'>
                <div className='preview color-5'>&nbsp;</div>
              </a>
              <a data-id='light-blue'>
                <div className='preview color-6'>&nbsp;</div>
              </a>
              <a data-id='pink'>
                <div className='preview color-7'>&nbsp;</div>
              </a>
              <a data-id='purple'>
                <div className='preview color-8'>&nbsp;</div>
              </a>
              <a data-id='orange'>
                <div className='preview color-9'>&nbsp;</div>
              </a>
              <a data-id='amber'>
                <div className='preview color-10'>&nbsp;</div>
              </a>
              <a data-id='lime'>
                <div className='preview color-11'>&nbsp;</div>
              </a>
              <a data-id='teal'>
                <div className='preview color-12'>&nbsp;</div>
              </a>
            </div>
            <div className='demo-button-block'>
              <a
                className='btn btn-primary btn-demo'
                target='_blank'
                href='https://themeforest.net/item/pro-card-material-cv-resume-vcard-template/20111046'
              >
                Buy Now
              </a>
            </div>
            <div className='demo-button-block btn-demo'>
              <a
                className='btn btn-secondary btn-demo'
                target='_blank'
                href='https://themeforest.net/item/aveo-vcard-wordpress-theme/20756501'
              >
                WordPress Version
              </a>
            </div>
          </div> */}
          <script
            data-cfasync='false'
            type='text/javascript'
            src='js/email-decode.min.js'
          ></script>
          <script type='text/javascript' src='js/bootstrap.min.js'></script>
          <script type='text/javascript' src='/js/pages-switcher.js'></script>
          <script
            type='text/javascript'
            src='/js/imagesloaded.pkgd.min.js'
          ></script>
          <script type='text/javascript' src='/js/validator.js'></script>
          <script
            type='text/javascript'
            src='/js/jquery.shuffle.min.js'
          ></script>
          <script type='text/javascript' src='/js/masonry.pkgd.min.js'></script>
          <script type='text/javascript' src='/js/owl.carousel.min.js'></script>
          <script
            type='text/javascript'
            src='/js/jquery.magnific-popup.min.js'
          ></script>
          <script type='text/javascript' src='/js/jquery.hoverdir.js'></script>
          {/* <script
            type='text/javascript'
            src='https://maps.googleapis.com/maps/api/js?key=AIzaSyCrDf32aQTCVENBhFJbMBKOUTiUAABtC2o'
          ></script> */}
          <script
            type='text/javascript'
            src='https://maps.googleapis.com/maps/api/js'
          ></script>
          <script type='text/javascript' src='/js/jquery.googlemap.js'></script>
          <script type='text/javascript' src='/js/main.js'></script>
          <script
            type='text/javascript'
            src='/preview/lmpixels-demo-panel.js'
          ></script>
        </body>
      </Html>
    );
  }
}
