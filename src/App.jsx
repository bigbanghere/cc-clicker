import { useEffect, useState } from "react";
import Layout from "./layout/Layout";
import pageTypes from "./constants/pageTypes";
import CountrySelect from "./pages/CountrySelect";
import storageKeys from "./storageKeys/storageKeys";
import Earn from "./pages/Earn";
import NavBar from "./components/NavBar";
import Refs from "./pages/Refs";
import WebApp from '@twa-dev/sdk';
import device from "current-device";
import OnlyMobilePage from "./pages/OnlyMobilePage";
import video_mp4 from './assets/earn.mp4'
import Loading from "./components/Loading";
import sleep from "./functions/sleep";
import Boost from "./pages/Boost";
import Statistic from "./pages/Statistic";
import Task from "./pages/Task";

if (localStorage.getItem(storageKeys.maxEnergy) == null) { localStorage.setItem(storageKeys.maxEnergy, 0) }
if (localStorage.getItem(storageKeys.energy) == null) { localStorage.setItem(storageKeys.energy, 0) }
if (localStorage.getItem(storageKeys.coins) == null) { localStorage.setItem(storageKeys.coins, 0) }

function App() {
  const [page, setPage] = useState(pageTypes.loading)

  useEffect(() => {
    const video = document.querySelector("#l__video");
    video.addEventListener("loadeddata", (_) => {
      sleep(2000).then(() => {
        if (localStorage.getItem(storageKeys.country) == null) {
          setPage(pageTypes.country_select)
        }
        else {
          setPage(pageTypes.earn)
        }
      })
    });
    WebApp.expand()
  }, [])
  return (
    <Layout>
      <video id='l__video' src={video_mp4} muted="muted" style={{ display: 'none' }} />

      {device.desktop() && (
        <OnlyMobilePage />
      )}
      {!device.desktop() && (
        <>
          {page === pageTypes.loading && (<Loading />)}
          {page === pageTypes.country_select && (<CountrySelect setPage={setPage} />)}
          {page === pageTypes.earn && (
            <>
              <Earn setPage={setPage} videoEarn={video_mp4} />
              <div className="earn_animated_text">{'>>> Swipe! >>>'}</div>
            </>
          )}
          {page === pageTypes.ref && (<Refs setPage={setPage} />)}
          {page === pageTypes.boost && (<Boost setPage={setPage} />)}
          {page === pageTypes.stats && (<Statistic setPage={setPage} />)}
          {page === pageTypes.task && (<Task setPage={setPage} />)}
          {page !== pageTypes.country_select && page !== pageTypes.loading && (<NavBar setPage={setPage} page={page} />)}
        </>
      )}
    </Layout>
  );
}

export default App;
