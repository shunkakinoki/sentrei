import moment from "moment";

import { CountdownClock } from "@sentrei/www-mosh-lol/components/CountdownClock";
import { Footer } from "@sentrei/www-mosh-lol/components/Footer";

const Page = () => {
  return (
    <body className="flex flex-col justify-center items-center min-h-screen bg-gradient-to-tl from-cyan-600 via-rose-700 to-indigo-800">
      <div className="mt-36">
        <CountdownClock
          date={moment(process.env.NEXT_PUBLIC_MOSH_START)}
          onComplete={() => {}}
        />
        <Footer />
      </div>
    </body>
  );
};

export default Page;
