// @flow

export const getActivitiesQuery = () =>
	`{
  viewer {
    records(first: 10) {
      edges {
        node {
          episode {
            id
            annictId
            number
            numberText
            sortNumber
            title
            recordsCount
            recordCommentsCount
            work {
              id
              annictId
              title
              media
              image {
                twitterAvatarUrl
              }
              reviewsCount
              seasonName
              seasonYear
            }
            records(first: 10, orderBy: {field: CREATED_AT, direction: DESC}, hasComment: true) {
              edges {
                node {
                  id
                  annictId
                  user {
                    id
                    annictId
                    username
                    name
                    avatarUrl
                  }
                  comment
                  likesCount
                  createdAt
                  ratingState
                }
              }
            }
          }
        }
      }
    }
  }
}
`
