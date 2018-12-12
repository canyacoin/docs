/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  getSocials() {
    let socials = []

    for (let i = 0; i < this.props.config.socials.length; i++) {
      let social = this.props.config.socials[i];
      socials.push(<a key={`social-${i}`} target="_blank" href={`${social.url}`}>{social.name}</a>);
    }
    return socials
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={this.docUrl('overview.html', this.props.language)}>
              Overview
            </a>
            {/* <a href={this.docUrl('doc2.html', this.props.language)}>
              Guides (or other categories)
            </a>
            <a href={this.docUrl('doc3.html', this.props.language)}>
              API Reference (or other categories)
            </a> */}
          </div>
          <div>
            <h5>Community</h5>
            {this.getSocials()}
          </div>
          <div>
            <h5>More</h5>
            <a href={`${this.props.config.blogUrl}`}>Blog</a>
            <a href="https://github.com/canyaio">GitHub</a>
            <a className="github-button" href="https://github.com/canyaio/Resources" 
            data-icon="octicon-star" data-size="large" aria-label="Star canyaio/Resources on GitHub">
              Star
            </a>
          </div>
        </section>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;