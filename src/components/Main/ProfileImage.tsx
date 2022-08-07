import React, { FunctionComponent } from 'react'
// import styled from '@emotion/styled'
import { StaticImage } from 'gatsby-plugin-image'
import { css } from '@emotion/react'

// 자신이 원하는 프로필 이미지 링크로 설정해주세요.
const PROFILE_IMAGE_LINK = `../../images/profileImg.jpeg`

const ProfileImageWrapper = css`
  width: 120px;
  height: 120px;
  margin-bottom: 30px;
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 80px;
    height: 80px;
  }
`

// >> 트러블 슈팅!
// image 경로가 불러와지지 않는 문제가 발생했다.
// 'gatsby-plugin-image'의 StaticImage 컴포넌트를 만들고,
// src/images 폴더 안에 넣은 이미지 경로를 넣었더니 제대로 이미지 파일이 불러와졌다.
// styled 컴포넌트로 감쌌던 것을 css-in-js 방식으로 처리했더니 스타일도 처리되었다.
// Static images 섹션 : https://www.gatsbyjs.com/docs/how-to/images-and-media/using-gatsby-plugin-image/

const ProfileImage: FunctionComponent = function () {
  return (
    <StaticImage
      css={ProfileImageWrapper} // 빨간줄이 뜨는데 이 부분은 고쳐봐야 겠다.
      src={PROFILE_IMAGE_LINK}
      alt="Profile Image"
    />
  )
}

export default ProfileImage
