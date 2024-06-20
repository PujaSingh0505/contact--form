const App = () => {
  return (
    <div className="box-border bg-custom-radial min-h-screen flex items-center justify-center overflow-hidden ">
      <div className="flex flex-col  my-5 gap-12 w-full max-w-5xl">
        <div className="w-96  md:w-48 sm:w-32">
          <img src="/assests/logo.png" className="max-w-full h-auto"></img>
        </div>
        <div className="flex flex-col md:flex-row justify-center align-center gap-8">
          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="flex flex-col gap-2 text-center md:text-left">
              <h1 className="font-family-poppins font-semibold text-[#18A8DF] text-2xl md:text-4xl">
                Get In Touch With Us!
              </h1>
              <h3 className="font-family-poppins font-normal text-[#FFFFFF] text-lg md:text-xl">
                Let us know more about you!
              </h3>
            </div>

            <form className="flex flex-col gap-3">
              <div className="flex flex-col gap-2 ">
                <div className="flex flex-col md:flex-row mx-4 gap-2">
                  <p className="flex-1 flex  bg-[#4C5C8C] rounded-xl font-family-poppins font-light text-[#FFFFFF] text-sm p-2">
                    First Name
                  </p>
                  <p className="flex-1  bg-[#4C5C8C] rounded-xl font-family-poppins font-light text-[#FFFFFF] text-sm p-2">
                    Second Name
                  </p>
                </div>
                <div className="flex flex-col md:flex-row mx-4 gap-2">
                  <p className="flex-1 flex  bg-[#4C5C8C] rounded-xl font-family-poppins font-light text-[#FFFFFF] text-sm p-2">
                    Email
                  </p>
                  <p className="flex-1 flex  bg-[#4C5C8C] rounded-xl font-family-poppins font-light text-[#FFFFFF] text-sm p-2">
                    Phone no
                  </p>
                </div>
                <p className="w-full h-20 flex justify-left bg-[#4C5C8C] rounded-xl font-family-poppins font-light text-[#FFFFFF] text-sm p-2 md:flex-row mr-10 mx-4">
                  Message
                </p>
              </div>
              <div className="flex justify-left mx-4">
              <button className="w-1/2 flex justify-left md:w-1/2  self-center justify-center rounded-xl bg-[#18A8DF] font-family-poppins font-medium text-[#FFFFFF] text-xl p-2">
                SUBMIT
              </button>
              </div>
            </form>
          </div>

          <div className="flex flex-col gap-4 w-full md:w-1/2">
            <div className="text-center md:text-left">
              <h1 className="font-family-poppins font-semibold text-[#18A8DF] text-2xl md:text-4xl">
                Contact <br />
                Information
              </h1>
            </div>

            <div className="flex flex-col gap-2 text-center md:text-left">
              <p className="font-family-poppins font-light text-[#FFFFFF] text-sm">
                Building Name: Gera Imperium Alpha,<br /> Block Sector: Vitthal Nagar,
                Kharadi, Pune, 411014
              </p>
              <p className="font-family-poppins font-light text-[#FFFFFF] text-sm">
                Call us: +91 70045 35083
              </p>

              <p className="font-family-poppins font-light text-[#FFFFFF] text-sm">
                Mail us: hello@cloudprism.in
              </p>

              <p className="font-family-poppins font-light text-[#FFFFFF] text-sm">
                Website: www.cloudprism.in
              </p>
            </div>

            <h1 className="font-family-poppins font-semibold text-[#18A8DF] text-2xl md:text-4xl text-center md:text-left">
              Follow Us
            </h1>
            <div>
              <h3 className="font-family-poppins font-medium text-[#FFFFFF] text-sm tracking-wide text-center md:text-left">
                Linkedin Instagram Quora
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
