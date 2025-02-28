import React from "react";

// eslint-disable-next-line react/prop-types
function StartScreen({ dispatch }) {
  return (
    <div className="section-container">
      <section className="bg-orange-100 max-lg:min-h-65/100 relative justify-center">
        <div>
          <img
            src="/390effdb687eee7d1b470b801567a8e1.svg"
            alt="Shape icon"
            className="absolute top-12 left-8"
          />
          <img
            src="/412afa1e0ebce8641c26c191dea71d37.svg"
            alt="Shape icon"
            className="absolute top-8 left-13"
          />
        </div>
        <h1>شغل برنامه‌نویسی مناسب شخصیت شما چیست ؟</h1>

        <div>
          <img
            src="/c2a6da8976c650fc7168f45e6ce534d0.svg"
            alt="Shape icon"
            className="absolute bottom-7 right-13"
          />
          <img
            src="/453de910420da751ccafc6a7585ac8b6.svg"
            alt="Shape icon"
            className="absolute bottom-12 right-8"
          />
        </div>
      </section>

      <section className="bg-blue-950 max-lg:min-h-35/100 justify-center">
        <p>
          با توجه به علاقه و توانایی‌های خود شغل و حوزه مناسب برنامه‌نویسی خود
          را پیدا کنید
        </p>
        <button className="btn" onClick={() => dispatch({ type: "start" })}>
          شروع
        </button>
      </section>
    </div>
  );
}

export default StartScreen;
