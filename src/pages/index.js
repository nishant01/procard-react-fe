import DefaultLayout from '../components/DefaultLayout';
import DefaultNavBar from '../components/DefaultNavBar';

const Index = () => {
  return (
    <DefaultLayout title='Login'>
      <DefaultNavBar></DefaultNavBar>
      <section id='intro' className='intro-section pb-2'>
        <div className='container text-center'>
          <div data-animate='fadeInDown' className='logo'>
            <img
              src='https://d19m59y37dris4.cloudfront.net/it-worker/2-1/img/logo-big.png'
              alt='logo'
              width='130'
            />
          </div>
          <h1 data-animate='fadeInDown' className='text-shadow mb-5'>
            Hello, hola, नमस्ते !
          </h1>
          <p data-animate='slideInUp' className='h3 text-shadow text-400'>
            Create a developer profile/portfolio, share posts and get help from
            other developers.
          </p>
        </div>
      </section>
      <style jsx>{`
        section {
          background-image: url('/images/home.jpg');
          background-size: cover;
          background-repeat: no-repeat;
          background-position: center;
        }
        .intro-section {
          padding-top: 150px;
          color: #fff;
        }
        .intro-section .logo,
        .intro-section p {
          margin-bottom: 120px;
        }
        .text-shadow {
          text-shadow: 0 1px 2px rgba(0, 0, 0, 0.6);
        }
        .text-400 {
          font-weight: 400 !important;
        }
        @media (min-width: 992px) {
          .intro-section {
            min-height: 100vh;
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -webkit-box-align: center;
            -ms-flex-align: center;
            align-items: center;
          }
        }
      `}</style>
    </DefaultLayout>
  );
};

export default Index;
