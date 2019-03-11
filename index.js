const {
  HOSTNAME,
  USERNAME,
  PASSWORD,
  SECTION
} = process.env

const {
  composeP,
  compose,
  bind,
  map,
  has,
  filter,
  path,
  prop,
  bind
} = require('ramda')
const PlexAPI = require("plex-api");
const client = new PlexAPI({
  hostname: HOSTNAME,
  username: USERNAME,
  password: PASSWORD
});

const unplayed = compose(
  filter,
  has
)('viewCount')

const justKeys = compose(
  map,
  prop
)('key')

const extractEpisodes = path(['MediaContainer', 'Metadata'])
const removeEpisode = bind(client.deleteQuery, client)
const removeEpisodes = map(removeEpisode)
const queryPlex = bind(client.query, client)

const deleteUnwatched = composeP(
  removeEpisodes,
  justKeys,
  unplayed,
  extractEpisodes,
  queryPlex
)

/* ********************** */

deleteUnwatched(`/library/sections/${SECTION}/search?type=4`)