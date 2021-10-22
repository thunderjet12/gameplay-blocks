import { InnerBlocks } from "@wordpress/block-editor"

interface propTypes {

}


const HologramNewsCalouselTemplate = ( props: propTypes ) => {

    // const { className, attributes } = this.props;
    const templates = {
        cleanreddredmp: [
            // [ 'gameplayblocks/post', { className: 'tw-bg-yellow-500' } ],
            // [ 'gameplayblocks/scrollbar', { className: 'tw-bg-green-500' } ],
            // placeholder: attributes.Theme.content
            [ 'gameplayblocks/latestnews', { className: 'tw-bg-green-500'  } ],
        ],
        modernflat: [
            [ 'gameplayblocks/postslist', { className: 'tw-bg-blue-500' } ],
            [ 'core/cover', { className: 'tw-bg-red-500' } ],
            [ 'gameplayblocks/gpmaincontent', { className: 'tw-bg-orange-500' } ],
        ],
    };
    // const activeTemplate = templates[ attributes.CurrentTheme ];

    return(
        <div>
            <h2>News</h2>
            <InnerBlocks
                    templateInsertUpdatesSelection={ true } 
                    // allowedBlocks={ true } 
                    // template={ activeTemplate }
            />
                  <div>
        <header className="gp-header header">
          <nav className="gp-navbar gp-navbar--main">
            <div className="gp-container-fluid">
              <div className="gp-navbar__brand">
                <a className="gp-logo" href="#">Gameplay <span>.</span> </a>
                {/* logo */}
              </div> 
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#gp-main-navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars fa-lg" /> 
              </button>
              {/* navbar Toggler */}  
              <div className="gp-collapse gp-collapse--navbar" id="gp-main-navbar">
                <ul className="navbar-nav  me-auto tw-text-center tw-space-x-4 mb-lg-0">
                  <li className="gp-nav__item active"> <a className="gp-nav__link" href="#">Home</a></li>
                  <li className="gp-nav__item"> <a className="gp-nav__link" href="#">Streams</a></li>
                  <li className="gp-nav__item"> <a className="gp-nav__link" href="#">News</a></li>
                  <li className="gp-nav__item"> <a className="gp-nav__link" href="#">Tornuments</a></li>
                  <li className="gp-nav__item"> <a className="gp-nav__link" href="#">Matches</a></li>
                  <li className="gp-nav__item"> <a className="gp-nav__link" href="#">Fourm</a></li>
                  <li className="gp-nav__item"> <a className="gp-nav__link" href="#">Blog</a></li>
                  <li className="gp-nav__item"> <a className="gp-nav__link" href="#">Reviews</a></li>
                </ul>
                <button className="fas fa-search fa-2x gp-navbar__modal__button" data-toggle="modal" type="button" data-target="#gp-modal">
                </button>
                {/* user or guest  */}
                <div className="gp-user">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" alt="arthur" className="tw-rounded-full tw-border-4 tw-border-red-600 tw-mr-2 gp-user-image " />
                  <span className="gp-user-name underline tw-self-center tw-mr-2">arthur</span>
                  <a href="#" className="tw-text-center tw-self-center "><i className="fas fa-angle-down fa-2x " /></a>
                </div>         
              </div>  
            </div> {/* navbar container */}
          </nav>
        </header>
        {/* ================== Gp Modal ================== */}
        <div className="modal fade gp-search" id="gp-modal" tabIndex={-1}>
          <div className="modal-dialog modal-fullscreen ">  
            <div className="modal-content gp-search-modal">
              <div className="modal-header">
                <button className="fas fa-window-close" data-dismiss="modal" aria-label="Close" />
              </div>
              <div className="modal-body tw-flex tw-items-center tw-content-center">
                <form className="form-control tw-w-40vmin gm-search tw-bg-transparent" action="#">
                  <input className="input tw-w-40vmin gm-search-input tw-bg-transparent" type="search" placeholder="search ..." aria-label="Search" />
                  <button  className="btn btn-primary tw-p-2">search <i className="fas fa-search" /></button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="gp-section gp-hero gp-carousel slide" data-ride="carousel">
          <div className="gp-carousel__inner">
            <div className="gp-carousel__item active" data-interval={10000}>
              <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" className="gp-carousel__img" />
            </div>
          </div>
        </div>
        {/* gp-background-tune */}
        <div className="gp-background-tune" />
        {/* gp-container--main */}
        <div className="gp-container-fluid gp-container--main">
          <aside className="gp-left-aside">
            {/* tournaments */}
            <div className="gp-tournaments">
              <h3>tournaments</h3>
              <div className="gp-tournaments__grid">
                {/* tournaments card */}
                <div className="gp-card gp-card--tournaments">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" alt="" className="gp-card__img gp-card__img--tournaments" />
                  <div className="gp-card__body gp-card__body--tournaments gp-card__overlay">
                    <h4 className="gp-card__title gp-card__title--tournaments">Levisky Race</h4>
                    <span className="gp-card__date">starting: 22/1/2021</span>
                    <span className="gp-card__more"><a href="#" className="gp-card__more_link">more ...</a></span>
                  </div>
                </div> {/* tournaments card End */}
                {/* tournaments card */}
                <div className="gp-card gp-card--tournaments">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" alt="" className="gp-card__img gp-card__img--tournaments" />
                  <div className="gp-card__body gp-card__body--tournaments gp-card__overlay">
                    <h4 className="gp-card__title gp-card__title--tournaments">Lyria Elemenations</h4>
                    <span className="gp-card__date">starting: 22/1/2021</span>
                    <span className="gp-card__more"><a href="#" className="gp-card__more_link">more ...</a></span>
                  </div>          
                </div> {/* tournaments card End */}
                {/* tournaments card */}
                <div className="gp-card gp-card--tournaments">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" alt="" className="gp-card__img gp-card__img--tournaments" />
                  <div className="gp-card__body gp-card__body--tournaments gp-card__overlay">
                    <h4 className="gp-card__title gp-card__title--tournaments">Microtech Warfare</h4>
                    <span className="gp-card__date">starting: 22/1/2021</span>
                    <span className="gp-card__more"><a href="#" className="gp-card__more_link">more ...</a></span>
                  </div>          
                </div> {/* tournaments card End */}
                {/* tournaments card */}
                <div className="gp-card gp-card--tournaments">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" alt="" className="gp-card__img gp-card__img--tournaments" />
                  <div className="gp-card__body gp-card__body--tournaments gp-card__overlay">
                    <h4 className="gp-card__title gp-card__title--tournaments">Lastman Standing</h4>
                    <span className="gp-card__date">starting: 22/1/2021</span>
                    <span className="gp-card__more"><a href="#" className="gp-card__more_link">more ...</a></span>
                  </div>          
                </div> {/* tournaments card End */}
                {/* tournaments card */}
                <div className="gp-card gp-card--tournaments">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" alt="" className="gp-card__img gp-card__img--tournaments" />
                  <div className="gp-card__body gp-card__body--tournaments gp-card__overlay">
                    <h4 className="gp-card__title gp-card__title--tournaments">Levisky Race</h4>
                    <span className="gp-card__date">starting: 22/1/2021</span>
                    <span className="gp-card__more"> <a href="#" className="gp-card__more_link">more ...</a> </span>
                  </div>
                </div> {/* tournaments card End*/}
              </div> {/* tournaments grid End*/}
              {/* gp-tournaments__view-more*/}
              <div className="gp-tournaments__view-more">
              </div>
            </div>
            <div className="gp-organization">
            </div>
          </aside>
          <div className="gp-wrapper">
            <main className="gp-main-content">
              <h2 className="gp-main-content__title">News</h2>
              {/* gp-main-content__grid */}
              <div className="gp-main-content__grid">
                <div className="gp-card gp-card--main-content--type1">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg"className="gp-card__img gp-card__img--fluid gp-card__img--main-content" />
                  <div className="gp-card__overlay">
                  </div>
                </div>
                <div className="gp-card gp-card--main-content--type2">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" className="gp-card__img gp-card__img--fluid gp-card__img--main-content" />
                  <div className="gp-card__overlay">
                  </div>
                </div>
                <div className="gp-card gp-card--main-content--type2">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" className="gp-card__img gp-card__img--fluid gp-card__img--main-content" />
                  <div className="gp-card__overlay">
                  </div>
                </div>
                <div className="gp-card gp-card--main-content--type1">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" className="gp-card__img gp-card__img--fluid gp-card__img--main-content" />
                  <div className="gp-card__overlay">
                  </div>
                </div>
                <div className="gp-card gp-card--main-content--type3">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" className="gp-card__img gp-card__img--fluid gp-card__img--main-content" />
                  <div className="gp-card__overlay">
                  </div>
                </div>
                <div className="gp-card gp-card--main-content--type4">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" className="gp-card__img gp-card__img--fluid gp-card__img--main-content" />
                  <div className="gp-card__overlay">
                  </div>
                </div>
                <div className="gp-card gp-card--main-content--type5">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" className="gp-card__img gp-card__img--fluid gp-card__img--main-content" />
                  <div className="gp-card__overlay">
                  </div>
                </div>
                <div className="gp-card gp-card--main-content--type5">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" className="gp-card__img gp-card__img--fluid gp-card__img--main-content" />
                  <div className="gp-card__overlay">
                  </div>
                </div>
                <div className="gp-card gp-card--main-content--type5">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" className="gp-card__img gp-card__img--fluid gp-card__img--main-content" />
                  <div className="gp-card__overlay">
                  </div>
                </div>
                <div className="gp-card gp-card--main-content--type5">
                  <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" className="gp-card__img gp-card__img--fluid gp-card__img--main-content" />
                  <div className="gp-card__overlay">
                    <span>Carrack Covert Mission</span>
                  </div>
                </div>
              </div> {/* gp-main-content__grid  End */}
              <div className="gp-main-content__scroller">
                <h4 className="gp-main-content__scroller__guidance">scroll throw</h4>
              </div>
            </main>
            <div className="gp-sponsers">
              <div className="gp-sponsers__grid">
                <div className="gp-sponsers__sponser">
                  {/* <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg"="images/1920px-Merchantman_at_Mya.jpg" alt="" src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg"set=""> */}
                  <span>Cyber</span>
                </div>
              </div>
            </div>
          </div>
          <aside className="gp-ads">
            <div className="gp-card gp-card--ads">
              <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" alt="" className="gp-card__img gp-card__img--fluid gp-card__img--ads" />
              <div className="gp-card__body gp-card__body--ads gp-card__overlay">
              </div>
            </div>
          </aside>
          <aside className="gp-events" id="events-accordion">
            <h3 className="gp-events__title">Events</h3>
            <div className="gp-accordion gp-accordion--events accordion">
              <div className="gp-accordion__item gp-accordion__item--events gp-cover-container">
                <img src="http://gameplay-core.test/wp-content/uploads/2021/01/23232323-Min.jpg" alt="" className="gp-cover gp-accordion__img" />
                <h2 className="accordion-header" id="headingOne">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                    Levisky Race
                  </button>
                </h2>
                <div id="collapseOne" className="gp-accordion-collapse gp-accordion-collapse--events collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                  <div className="gp-accordion-body">
                    <strong>Fuel is burrning for levisky race this monday</strong>  just about any HTML can go within the <code>.accordion-body</code>, though.
                  </div>
                </div>
              </div>
            </div>
          </aside>
        </div>  {/* <!-- gp-container--main end */}
        {/* footer & panels */}
        <footer className="gp-footer tw-z-10 tw-h-20vh">
          <nav className="navbar  fixed-bottom ">
            <div className="container-fluid tw-w-full ">
              <ul className="navbar-nav tw-flex-row">
                <li className="nav-item">
                  <a className="nav-link">All</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link">All</a>
                </li>
              </ul>
            </div>
          </nav>
        </footer> {/* footer & panels End */}
      </div>
        </div>
    )
}

export default HologramNewsCalouselTemplate
