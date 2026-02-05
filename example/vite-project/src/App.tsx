import {
  MelliColorIcon,
  MelliIcon,
  PasargadColorIcon,
  PasargadIcon,
  SamanIcon,
  SamanColorIcon,
  ZarrinpalIcon,
  ZarrinpalColorIcon
} from "@houtan-rocky/iranian-banks-react-icons";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <h1>🇮🇷 Iranian Banks React Icons</h1>
        <p>Example usage of @houtan-rocky/iranian-banks-react-icons</p>
      </div>
      
      <div className="icon-grid">
        <div className="icon-item">
          <h3>Melli Bank</h3>
          <MelliColorIcon width={64} height={64} />
          <MelliIcon width={64} height={64} fill="#333" />
        </div>
        
        <div className="icon-item">
          <h3>Pasargad Bank</h3>
          <PasargadColorIcon width={64} height={64} />
          <PasargadIcon width={64} height={64} fill="#333" />
        </div>
        
        <div className="icon-item">
          <h3>Saman Bank</h3>
          <SamanColorIcon width={64} height={64} />
          <SamanIcon width={64} height={64} fill="#333" />
        </div>
        
        <div className="icon-item">
          <h3>Zarrinpal</h3>
          <ZarrinpalColorIcon width={64} height={64} />
          <ZarrinpalIcon width={64} height={64} fill="#333" />
        </div>
      </div>
      
      <div className="info">
        <p>
          Each bank has two variants: <strong>ColorIcon</strong> (full-color) and <strong>Icon</strong> (monochrome).
        </p>
        <p>
          Visit the <a href="https://github.com/houtan-rocky/iranian-banks-react-icons" target="_blank" rel="noopener noreferrer">GitHub repository</a> for more information.
        </p>
      </div>
    </>
  );
}

export default App;
