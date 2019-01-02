import React, { Component } from "react";
import ReactDOM from "react-dom";
import "babel-polyfill";
import axios from "axios";

import utilities from "../../helpers/helpers";

import PageLoad from "../../components/PageLoad";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import BlogIntro from "../../components/BlogIntro";
import Posts from "../../components/Posts";
import Footer from "../../components/Footer";

class Blog extends Component {
  constructor() {
    super();

    this.switchTheLang = this.switchTheLang.bind(this);
    this.getEnglishMenuItems = this.getEnglishMenuItems.bind(this);
    this.getFrenchMenuItems = this.getFrenchMenuItems.bind(this);
    this.getBlogPosts = this.getBlogPosts.bind(this);
    this.loadMore = this.loadMore.bind(this);
    this.getNewsletterCats = this.getNewsletterCats.bind(this);
    this.getSiteSettings = this.getSiteSettings.bind(this);

    this.state = {
      browserLang: "",
      userLocation: "",
      pageApiUrl: "",
      pageID: "",
      pageData: {},
      blogPosts: {},
      newsletters: {},
      loadMoreBtn: false,
      postsLoading: false,
      siteOptions: {},
      siteSettings: {},
      siteMainEnglishMenu: {},
      siteMainFrenchMenu: {}
    };
  }

  componentDidMount() {
    const pageID = document.querySelector(".swb-blog-page").dataset.pageid;
    let sessionStart = sessionStorage.getItem("npWebLang");
    const apiBaseURL = utilities.setPageAPIURL();

    this.setState(
      prevState => {
        return {
          ...prevState,
          browserLang: sessionStart,
          pageApiUrl: apiBaseURL,
          pageID: pageID
        };
      },
      () => {
        this.getSiteSettings();
        this.getPageData();
        this.getBlogPosts();
        this.getNewsletterCats();
        this.getEnglishMenuItems();
        this.getFrenchMenuItems();
        this.getOptionsData();
      }
    );
  }

  getSiteSettings() {
    axios.get(`${this.state.pageApiUrl}/wp-json/`).then(res => {
      this.setState(prevState => {
        return {
          ...prevState,
          siteSettings: res.data
        };
      });
    });
  }

  // Get the users language setting. //
  switchTheLang() {
    this.setState(prevState => {
      const newLang = prevState.browserLang === "en" ? "fr" : "en";
      sessionStorage.setItem("npWebLang", newLang);
      return {
        browserLang: newLang
      };
    });
  }

  // Get this page data. //
  getPageData() {
    axios
      .get(`${this.state.pageApiUrl}/wp-json/wp/v2/pages/${this.state.pageID}`)
      .then(result => {
        this.setState(prevState => {
          return {
            ...prevState,
            pageData: result.data
          };
        });
      });
  }

  getNewsletterCats() {
    axios
      .get(`${this.state.pageApiUrl}/wp-json/wp/v2/posts/?_embed&categories=10`)
      .then(result => {
        if (result.data.length > 0) {
          const onlyFive = result.data.slice(0, 5);
          this.setState(prevState => {
            return {
              ...prevState,
              newsletters: onlyFive
            };
          });
        } else {
          console.log("there is no posts in the database!");
        }
      });
  }

  getBlogPosts() {
    axios
      .get(
        `${
          this.state.pageApiUrl
        }/wp-json/wp/v2/posts/?_embed&categories_exclude=10`
      )
      .then(result => {
        if (result.data.length > 0) {
          let delayCounter = 0;
          const firstFive = result.data.slice(0, 5);
          firstFive.forEach(post => {
            if (delayCounter < 5) {
              post.delay = delayCounter;
              delayCounter++;
            } else {
              delayCounter = 0;
              post.delay = delayCounter;
            }
          });
          this.setState(prevState => {
            return {
              ...prevState,
              blogPosts: firstFive,
              loadMoreBtn: result.data.length > 5
            };
          });
        } else {
          console.log("there is no posts in the database!");
        }
      });
  }

  loadMore() {
    this.setState(
      prevState => {
        return {
          ...prevState,
          loadMoreBtn: false,
          postsLoading: true
        };
      },
      () => {
        axios
          .get(
            `${
              this.state.pageApiUrl
            }/wp-json/wp/v2/posts/?_embed&categories_exclude=10&offset=${
              this.state.blogPosts.length
            }`
          )
          .then(result => {
            if (result.data.length > 0) {
              let delayCounter = 0;
              const firstFive = result.data.slice(0, 5);
              firstFive.forEach(post => {
                if (delayCounter < 5) {
                  post.delay = delayCounter;
                  delayCounter++;
                } else {
                  delayCounter = 0;
                  post.delay = delayCounter;
                }
              });
              this.setState(prevState => {
                return {
                  ...prevState,
                  blogPosts: [...prevState.blogPosts, ...firstFive],
                  loadMoreBtn: result.data.length > 5,
                  postsLoading: false
                };
              });
            } else {
              this.setState(prevState => {
                return {
                  ...prevState,
                  loadMoreBtn: false,
                  postsLoading: false
                };
              });
            }
          });
      }
    );
  }

  // Get the english menu items. //
  getEnglishMenuItems() {
    axios
      .get(`${this.state.pageApiUrl}/wp-json/wp-api-menus/v2/menus/2`)
      .then(res => {
        this.setState(prevState => {
          return {
            ...prevState,
            siteMainEnglishMenu: res.data
          };
        });
      });
  }

  getFrenchMenuItems() {
    axios
      .get(`${this.state.pageApiUrl}/wp-json/wp-api-menus/v2/menus/3`)
      .then(res => {
        this.setState(prevState => {
          return {
            ...prevState,
            siteMainFrenchMenu: res.data
          };
        });
      });
  }

  // Get the options data. //
  getOptionsData() {
    axios
      .get(`${this.state.pageApiUrl}/wp-json/acf/v3/options/options`)
      .then(res => {
        this.setState(prevState => {
          return {
            ...prevState,
            siteOptions: res.data.acf
          };
        });
      });
  }

  render() {
    const renderComponent =
      Object.keys(this.state.pageData).length > 0 &&
      Object.keys(this.state.blogPosts).length > 0 &&
      Object.keys(this.state.siteOptions).length > 0 &&
      Object.keys(this.state.siteMainEnglishMenu).length > 0 &&
      Object.keys(this.state.siteSettings).length > 0 &&
      Object.keys(this.state.siteMainFrenchMenu).length > 0;
    let acf;
    if (renderComponent) {
      acf = this.state.pageData.acf;
    }
    return (
      <div className="np-page-root">
        {renderComponent ? (
          <div>
            <Header
              browserLang={this.state.browserLang}
              switchTheLang={this.switchTheLang}
              pageData={this.state.pageData}
              siteMainEnglishMenu={this.state.siteMainEnglishMenu}
              siteMainFrenchMenu={this.state.siteMainFrenchMenu}
              siteOptions={this.state.siteOptions}
              siteSettings={this.state.siteSettings}
            />
            <Hero acf={acf} />
            <BlogIntro acf={acf} browserLang={this.state.browserLang} />
            <Posts
              postsData={this.state.blogPosts}
              newsletters={
                this.state.newsletters.length > 0
                  ? this.state.newsletters
                  : false
              }
              browserLang={this.state.browserLang}
              siteOptions={this.state.siteOptions}
              loadMoreBtn={this.state.loadMoreBtn}
              postsLoading={this.state.postsLoading}
              loadMore={this.loadMore}
            />
            <Footer
              browserLang={this.state.browserLang}
              pageData={this.state.pageData}
              siteMainEnglishMenu={this.state.siteMainEnglishMenu}
              siteMainFrenchMenu={this.state.siteMainFrenchMenu}
              siteOptions={this.state.siteOptions}
              siteSettings={this.state.siteSettings}
            />
          </div>
        ) : (
          <PageLoad />
        )}
      </div>
    );
  }
}

ReactDOM.render(<Blog />, document.getElementById("root"));
