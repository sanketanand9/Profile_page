import './App.css';
import info from './info';
import Background from './images/aiiq4-qxbh0.jpg';
import bglogo from './images/SpringSpree_logo.png';
function App() {
 
  const renderinfo = (info, num) => {
    return info.map((data, index) => {
      const { event,performer,amount } = data;
      return (
        <div className="ticket">
          <h1>CARD</h1>
      </div>
      );
    });
  };




  return (
    <main className="profile-page">
    <section className="relative block h-500-px">
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: `url("${Background}")`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        height: '50vh',
    
        }
      }
      >
       
      </div>
    </section>
    
    <section className="relative py-16" style={{
      backgroundImage: `url(${bglogo})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      width: '100%',
    height: '100%',
    }
      }>
        
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col min-w-0 break-words bg-yellow-200 w-full mb-6 shadow-xl rounded-lg -mt-64 bg-opacity-90">
          <div className="px-6">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                <div className="relative">
                  <img
                    alt="..."
                    src="https://www.pngmart.com/files/21/Admin-Profile-Vector-PNG-Clipart.png"
                    className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                <div className="py-6 px-3 mt-32 sm:mt-0">
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4 lg:order-1">
                
              </div>
            </div>
            <div className="text-center md:mt-12">
              <h3 className="text-4xl font-semibold leading-normal mb-2 text-blueGray-700 mb-5">
                Firstname Lastname
              </h3>
              <div className="email text-sm leading-normal mt-0 mb-2 text-stone-900 font-bold">
                {/* <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" /> */}
                <svg class="icon mt-0.1 w-8 h-8 text-gray-900 dark:text-stone-900" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path><path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path></svg>

                abc@nitw.ac.in
              </div>
          
            </div>
            <div className="mt-0 py-5 border-t border-black">
            <h3 className="mt-0 mb-7 text-3xl font-medium leading-tight text-primary">
  <div className="event-txt">Events Tickets</div>
</h3>

          
              <div className="container flex flex-row flex-wrap justify-center w-full px-4">
             
                  {renderinfo(info,3)}
           
              </div>
            
          </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  );
}

export default App;
