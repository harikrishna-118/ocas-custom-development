import { useState } from "react";
import IntroLoader from "./components/IntroLoader";

function App() {
  const [showIntro, setShowIntro] = useState(() => {
    const alreadyPlayed = sessionStorage.getItem("ocasIntroPlayed");

    if (alreadyPlayed) {
      return false;
    }

    sessionStorage.setItem("ocasIntroPlayed", "true");
    return true;
  });

  return (
    <>
      {showIntro && (
        <IntroLoader onComplete={() => setShowIntro(false)} />
      )}

      {/* Keep your existing website content here */}
    </>
  );
}

export default App;