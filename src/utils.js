import axios from "axios";

const serverPath = 'http://localhost:4000'

const parsePath = (path, params) => path.replaceAll(/:([a-zA-Z]+)/g, (_, key) => params[key])

// export const getDataFromAPI = (path, params) => axios({
//   method: 'get',
//   url: `${serverPath}/${parsePath(path, params)}`,
//   mode: 'cors',
//   headers: {
//     'Access-Control-Allow-Origin': '*',
//     Accept: 'application/json',
//     'Content-Type': 'application/json',
//   },
// })

export const getDataFromAPI = () => {
  return {"data":{"gameId":4262539359,"mapId":11,"gameMode":"CLASSIC","gameType":"MATCHED_GAME","gameQueueConfigId":420,"participants":[{"teamId":100,"spell1Id":4,"spell2Id":11,"championId":76,"profileIconId":1439,"summonerName":"Josedeodo","bot":false,"summonerId":"WiOLvIM-JEExoafy9YUHbM66SDxbDOQxMKoKOd9IuoXF9kg","gameCustomizationObjects":[],"perks":{"perkIds":[8010,9111,9104,8014,8210,8232,5005,5008,5002],"perkStyle":8000,"perkSubStyle":8200}},{"teamId":100,"spell1Id":4,"spell2Id":14,"championId":91,"profileIconId":7,"summonerName":"Xurrr","bot":false,"summonerId":"cTolFBzXIlTRpYkmzoyN0Ti3Xvk__chQPjruHXQM4T1JzrE","gameCustomizationObjects":[],"perks":{"perkIds":[8010,9111,9105,8299,8139,8105,5008,5008,5002],"perkStyle":8000,"perkSubStyle":8100}},{"teamId":100,"spell1Id":4,"spell2Id":12,"championId":104,"profileIconId":4559,"summonerName":"Neøø","bot":false,"summonerId":"SjEW_fXhL_mpLkp5cJPj9Dokv0jwvyMyUCMsm1x6Zv9hgkU","gameCustomizationObjects":[],"perks":{"perkIds":[8021,8009,9104,8299,8345,8352,5005,5008,5002],"perkStyle":8000,"perkSubStyle":8300}},{"teamId":100,"spell1Id":14,"spell2Id":4,"championId":80,"profileIconId":7,"summonerName":"mla3","bot":false,"summonerId":"7NSVR9a6Hign3__O1Dmu1U-w_ikdOhyHau3HTkkuClRX96zPeDRZ95kEbg","gameCustomizationObjects":[],"perks":{"perkIds":[8005,9111,9104,8014,8306,8352,5008,5008,5002],"perkStyle":8000,"perkSubStyle":8300}},{"teamId":100,"spell1Id":4,"spell2Id":3,"championId":50,"profileIconId":4922,"summonerName":"TwTv Nomilol","bot":false,"summonerId":"TFD1broiQyV-WH-9XOnUiwlbdnVG_ldpvpXpFIX51GYMTpwb5ywGynBI-g","gameCustomizationObjects":[],"perks":{"perkIds":[8112,8126,8138,8106,8009,8014,5005,5008,5002],"perkStyle":8100,"perkSubStyle":8000}},{"teamId":200,"spell1Id":14,"spell2Id":4,"championId":518,"profileIconId":5089,"summonerName":"PlsBuffNeeko","bot":false,"summonerId":"RTAptVb5cmk-VeiF6sIqMFQaCn4vvjD8g9q43sD94lNm0tb3","gameCustomizationObjects":[],"perks":{"perkIds":[8112,8139,8138,8134,8345,8347,5005,5008,5002],"perkStyle":8100,"perkSubStyle":8300}},{"teamId":200,"spell1Id":1,"spell2Id":4,"championId":222,"profileIconId":4099,"summonerName":"Draven baka","bot":false,"summonerId":"Z5iYzkgyjTswicMPPJUpwFtGSW_wyBgTyspzZjPPfypav1c","gameCustomizationObjects":[],"perks":{"perkIds":[8008,8009,9103,8017,8345,8347,5005,5008,5002],"perkStyle":8000,"perkSubStyle":8300}},{"teamId":200,"spell1Id":4,"spell2Id":11,"championId":238,"profileIconId":4057,"summonerName":"Anticípation","bot":false,"summonerId":"aR0WwoWIUUkkoX6AR2omblkQbf_F2GKON8oLLR1-tbeA_uip","gameCustomizationObjects":[],"perks":{"perkIds":[8369,8304,8321,8347,8143,8106,5005,5008,5002],"perkStyle":8300,"perkSubStyle":8100}},{"teamId":200,"spell1Id":4,"spell2Id":12,"championId":114,"profileIconId":4303,"summonerName":"shxchi","bot":false,"summonerId":"DvXtfaTSr8UFoZ_5AwIOGdXwYIJjFNUqRoLpLJiuzpC1duJu5SmHQ_-5hw","gameCustomizationObjects":[],"perks":{"perkIds":[8010,8009,9105,8299,8242,8444,5005,5008,5002],"perkStyle":8000,"perkSubStyle":8400}},{"teamId":200,"spell1Id":4,"spell2Id":7,"championId":16,"profileIconId":4022,"summonerName":"Szochs","bot":false,"summonerId":"LAt6eh9qZEhnjhifU8wQp1juGzk0QqYPeMwCGB4OECWER3o","gameCustomizationObjects":[],"perks":{"perkIds":[8465,8463,8473,8453,8226,8210,5005,5003,5002],"perkStyle":8400,"perkSubStyle":8200}}],"observers":{"encryptionKey":"1av9T0hel/6HbxUpUJ1ZexpO6xfVt3LA"},"platformId":"NA1","bannedChampions":[{"championId":103,"teamId":100,"pickTurn":1},{"championId":119,"teamId":100,"pickTurn":2},{"championId":122,"teamId":100,"pickTurn":3},{"championId":266,"teamId":100,"pickTurn":4},{"championId":43,"teamId":100,"pickTurn":5},{"championId":119,"teamId":200,"pickTurn":6},{"championId":245,"teamId":200,"pickTurn":7},{"championId":112,"teamId":200,"pickTurn":8},{"championId":107,"teamId":200,"pickTurn":9},{"championId":103,"teamId":200,"pickTurn":10}],"gameStartTime":1648709039175,"gameLength":880},"status":200,"statusText":"OK","headers":{"content-length":"3896","content-type":"application/json; charset=utf-8"},"config":{"transitional":{"silentJSONParsing":true,"forcedJSONParsing":true,"clarifyTimeoutError":false},"transformRequest":[null],"transformResponse":[null],"timeout":0,"xsrfCookieName":"XSRF-TOKEN","xsrfHeaderName":"X-XSRF-TOKEN","maxContentLength":-1,"maxBodyLength":-1,"headers":{"Accept":"application/json","Access-Control-Allow-Origin":"*"},"method":"get","url":"http://localhost:4000/summonerName/Josedeodo/region/NA","mode":"cors"},"request":{}}
};