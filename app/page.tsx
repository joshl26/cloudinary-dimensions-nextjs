import Script from "next/script";

export default function Home() {
  return (
    <>
      <div>
        <div className="header">
          <h1 className="site-header">Luxe & Co.</h1>
        </div>
        <div className="content">
          <a href="/" className="back-button">
            ← Back
          </a>
          <div className="page-layout">
            <p id="title-mobile" className="p-title">
              Product Name Goes Here
            </p>
            <div className="assets-container">
              <div className="asset-img">
                <div
                  className="product-image preview-image"
                  data-d8s-preset="shoes"
                  data-d8s-name="sample-side-180"
                  data-d8s-url-params="f_auto,w_1000"
                ></div>
              </div>
              <div className="asset-img">
                <div
                  className="product-image preview-image"
                  data-d8s-preset="shoes"
                  data-d8s-name="sample-stand-front"
                  data-d8s-url-params="f_auto,w_1000"
                ></div>
              </div>
              <div className="asset-img">
                <div
                  className="product-image preview-image"
                  data-d8s-preset="shoes"
                  data-d8s-name="sample-side-90"
                  data-d8s-url-params="f_auto,w_1000"
                ></div>
              </div>
              <div className="asset-img">
                <div
                  className="product-image preview-image"
                  data-d8s-preset="shoes"
                  data-d8s-name="sample-bottom"
                  data-d8s-url-params="f_auto,w_1000"
                ></div>
              </div>
              <div className="asset-img">
                <div
                  className="product-image preview-image"
                  data-d8s-preset="shoes"
                  data-d8s-name="sample-top-45"
                  data-d8s-url-params="f_auto,w_1000"
                ></div>
              </div>
              <div className="asset-img">
                <div
                  className="product-image preview-image"
                  data-d8s-preset="shoes"
                  data-d8s-name="sample-top-320"
                  data-d8s-url-params="f_auto,w_1000"
                ></div>
              </div>
              <div id="three-d-container">
                <div
                  id="three-d-preview"
                  className="product-image preview-image"
                  data-d8s-preset="shoes"
                  data-d8s-name="sample-side-90"
                  data-d8s-url-params="w_1002,h_600,c_pad"
                ></div>
                <div
                  id="three-d-viewer"
                  className="d8s-container"
                  data-d8s-type="3d"
                ></div>
              </div>
            </div>
            <div className="product-details">
              <p id="title-desktop" className="p-title">
                Product Name Goes Here
              </p>
              <p className="p-price">$250.000</p>
              <p className="p-description">
                Introducing our Serenity Walk sneakers, designed for those who
                value both style and comfort.
              </p>
              <p className="p-size">Size</p>
              <div className="size-chart">
                <div className="size-cell">36</div>
                <div className="size-cell">36 2/3</div>
                <div className="size-cell">37 1/3</div>
                <div className="size-cell">38</div>
                <div className="size-cell">38 2/3</div>
                <div className="size-cell">39 1/3</div>
                <div className="size-cell">40</div>
                <button className="add-button">Add to Bag</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
