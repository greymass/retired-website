import React, { Component } from "react"

import { injectIntl } from "gatsby-plugin-intl"
import { Container } from "semantic-ui-react"
import differenceStyles from "./difference.module.css"
import Banners from "../anchor/getStarted/banners"

class VersionDifference extends Component {
  constructor(props) {
    super(props)
    this.features = [
      {
        name: "download_feature_1",
        pc: true,
        mobile: true,
      },
      {
        name: "download_feature_2",
        pc: true,
        mobile: true,
      },
      {
        name: "download_feature_3",
        pc: true,
        mobile: true,
      },
      {
        name: "download_feature_4",
        pc: true,
        mobile: true,
      },
      {
        name: "download_feature_5",
        pc: true,
        mobile: true,
        markPC: 1,
      },
      {
        name: "download_feature_6",
        pc: true,
        mobile: true,
        markMob: 2,
      },
      {
        name: "download_feature_7",
        pc: false,
        mobile: true,
      },
      {
        name: "download_feature_8",
        pc: true,
        mobile: false,
      },
      {
        name: "download_feature_9",
        pc: true,
        mobile: false,
      },
      {
        name: "download_feature_10",
        pc: true,
        mobile: false,
      },
    ]
  }
  render() {
    const { intl, location, data } = this.props

    return (
      <div className={differenceStyles.containerFluid}>
        <Container className={differenceStyles.container}>
          <div className={differenceStyles.difference}>
            <div className={differenceStyles.header}>
              <h1>{intl.formatMessage({ id: "difference_header" })}</h1>
              <span>{intl.formatMessage({ id: "difference_subheading" })}</span>
              <button>{intl.formatMessage({ id: "go_to_github" })}</button>
            </div>
            <div className={differenceStyles.featuring}>
              <table>
                <thead>
                  <tr>
                    <th className={differenceStyles.names}>
                      {intl.formatMessage({ id: "feature" })}
                    </th>
                    <th>{intl.formatMessage({ id: "shared_desktop" })}</th>
                    <th>{intl.formatMessage({ id: "shared_mobile" })}</th>
                  </tr>
                </thead>
                <tbody>
                  {this.features.map(feature => (
                    <tr key={feature.name}>
                      <td>{intl.formatMessage({ id: feature.name })}</td>
                      <td className={differenceStyles.feature}>
                        <div
                          className={
                            feature.pc
                              ? differenceStyles.featureExists
                              : differenceStyles.featureNotExists
                          }
                        >
                          {feature.markPC ? (
                            <span>{feature.markPC}</span>
                          ) : null}
                        </div>
                      </td>
                      <td className={differenceStyles.feature}>
                        <div
                          className={
                            feature.mobile
                              ? differenceStyles.featureExists
                              : differenceStyles.featureNotExists
                          }
                        >
                          {feature.markMob ? (
                            <span>{feature.markMob}</span>
                          ) : null}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className={differenceStyles.underTable}>
                <div className={differenceStyles.row}>
                  <span className={differenceStyles.num}>1</span>
                  <span>{intl.formatMessage({ id: "additional_1" })}</span>
                </div>
                <div className={differenceStyles.row}>
                  <span className={differenceStyles.num}>2</span>
                  <span>{intl.formatMessage({ id: "additional_2" })}</span>
                </div>
              </div>
            </div>
          </div>
          <Banners />
        </Container>
      </div>
    )
  }
}
export default injectIntl(VersionDifference)
