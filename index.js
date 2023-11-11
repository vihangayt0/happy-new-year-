let HAPPY_NEW_YEAR_HEAD = document.getElementsByClassName('header-hny')
var i = 0,
  num = 0
setInterval(() => {
  i == 0
    ? ((HAPPY_NEW_YEAR_HEAD[0].style.marginTop = '-20px'),
      (HAPPY_NEW_YEAR_HEAD[0].style.color = 'red'),
      (HAPPY_NEW_YEAR_HEAD[0].style.transform = 'rotate(-5deg)'),
      (i = 1))
    : ((HAPPY_NEW_YEAR_HEAD[0].style.marginTop = '20px'),
      (HAPPY_NEW_YEAR_HEAD[0].style.color = 'white'),
      (HAPPY_NEW_YEAR_HEAD[0].style.transform = 'rotate(5deg)'),
      (i = 0))
}, 1000)
var i = 0,
  num = 0
setInterval(() => {
  i == 0
    ? ((HAPPY_NEW_YEAR_HEAD[1].style.marginTop = '-20px'),
      (HAPPY_NEW_YEAR_HEAD[1].style.color = 'rgb(0, 255, 10)'),
      (HAPPY_NEW_YEAR_HEAD[1].style.transform = 'rotate(-4deg)'),
      (i = 1))
    : ((HAPPY_NEW_YEAR_HEAD[1].style.marginTop = '20px'),
      (HAPPY_NEW_YEAR_HEAD[1].style.color = 'yellow'),
      (HAPPY_NEW_YEAR_HEAD[1].style.transform = 'rotate(4deg)'),
      (i = 0))
}, 970)
var i = 0,
  num = 0
setInterval(() => {
  i == 0
    ? ((HAPPY_NEW_YEAR_HEAD[2].style.marginTop = '-20px'),
      (HAPPY_NEW_YEAR_HEAD[2].style.color = 'blue'),
      (HAPPY_NEW_YEAR_HEAD[2].style.transform = 'rotate(4deg)'),
      (i = 1))
    : ((HAPPY_NEW_YEAR_HEAD[2].style.marginTop = '20px'),
      (HAPPY_NEW_YEAR_HEAD[2].style.color = 'aqua'),
      (HAPPY_NEW_YEAR_HEAD[2].style.transform = 'rotate(-4deg)'),
      (i = 0))
}, 950)
var header = document.getElementsByClassName('header')[0],
  sticky = header.offsetTop
window.onscroll = function () {
  window.pageYOffset > sticky
    ? header.classList.add('sticky')
    : header.classList.remove('sticky')
}
let NAME = location.search.substring(1)
var bgimages = [
  'https://www.happybirthdaysmeme.com/wp-content/uploads/2020/12/new-year-gifs-2023-5.gif',
]
let greet = document.getElementsByClassName('greet')[0],
  greet_body = document.getElementsByClassName('greet-body')[0],
  greet_create = document.getElementsByClassName('greet-body')[1],
  greet_name = document.getElementById('name'),
  create_button = document.getElementById('create-button'),
  colors = [
    'red',
    'yellow',
    'rgb(0, 255, 0)',
    'blue',
    'rgb(179, 0, 179)',
    'aqua',
    'white',
  ]
var count = 0
setInterval(() => {
  greet.style.boxShadow = '00 2px 15px ' + colors[count]
  create_button.style.boxShadow = '00 2px 15px ' + colors[count]
  greet_name.style.textShadow = '00 2px 15px ' + colors[count + 1]
  greet_body.style.boxShadow = '00 2px 15px ' + colors[count + 1]
  greet_create.style.boxShadow = '00 2px 15px ' + colors[count - 1]
  count == 5 ? (count = 0) : (count = count + 1)
}, 2000)
let site_url = location.href,
  search_url = location.search.substring(1),
  USER_NAME = document.getElementById('name'),
  PARAGRAPH = document.getElementById('paragraph'),
  my_name = search_url.replace('+', ' ').replace('i=1', '')
!search_url && (my_name = 'Vihanga Ashinshana')
USER_NAME.innerHTML = my_name
PARAGRAPH.innerHTML =
  '2023 has gone by without realizing it, right ?<br>I hope that the mistakes of last year have been avoided and the New Year 2024 is a very happy and peaceful new year for everyone.<br> From: ' +
  my_name +
  '.'
let user_url = ''
document.getElementById('greeting').style.display = 'block'
document.getElementById('creating').style.display = 'none'
const create_greeting = (_0x3042f2) => {
    _0x3042f2 === 'vihanga' &&
      ((document.getElementById('greeting').style.display = 'none'),
      (document.getElementById('creating').style.display = 'block'))
    _0x3042f2 === 'ashinshana' &&
      ((document.getElementById('greeting').style.display = 'block'),
      (document.getElementById('creating').style.display = 'none'))
    if (_0x3042f2 === 'vihangayt') {
    var _0x550a20 = document.getElementById('user-name')
    _0x550a20 = _0x550a20.value.replace(' ', '+')
    var _0x4d3382 = site_url.replace(search_url, _0x550a20)
    document.getElementById('whatsapp-share').href =
      'whatsapp://send?text=\uD83E\uDD73HAPPY%20NEW%20YEAR%202023%0A\uD83E\uDD20\uD83C\uDF88%20*From%20' +
      _0x550a20 +
      '*%0A%0A\uD83D\uDC47View my greeting\uD83D\uDC47%0A' +
      _0x4d3382 +
      '%0A%0A\xA9 ᴠɪʜᴀɴɢᴀʏᴛ'
  }
}

let song = new Audio('./media/Bagaikan Langit remix.mp3')
window.onclick = () => {
  song.play()
}
