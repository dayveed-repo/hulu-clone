import React, { useState } from 'react'
import './VideoCard.css'
import { Avatar } from '@material-ui/core';

function VideoCard({ movie }) {
  
    return (
        <div className="VideoCard">
            <img src={ movie.backdrop_path != null ? `https://image.tmdb.org/t/p/original${movie.backdrop_path}` : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRIYGBgYGhgYGhgYGBgYGBgZGhgaGhgYGBgcIS4lHCErIRgYJzgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjQkJCsxNDQ0MTY0NDE0NDQ3NDE0NDQxNDQ0NDQ0ND00MTQ0NDQ0MTQxNDQ0NDQ0NTQ0NDQxNP/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAADAAIEBQYBBwj/xABHEAACAQIDBAUHCQYEBgMAAAABAgADEQQSIQUxQVEGImFxgQcTMpGhscEUQmJykqKywtEjNFJTc/AkgoPhM2OTw9LxFjV0/8QAGgEAAgMBAQAAAAAAAAAAAAAAAgMBBAUABv/EADERAAICAQMCBAMHBQEAAAAAAAABAhEDBCExEkEiUWFxEzKBBTRyobHR4RQkQmLBM//aAAwDAQACEQMRAD8AzwErdrn0R3/CWqiU21j1gOw+/wD2mbD5j2maXhZBEeU0nEGskVlsI8qEdFkWs2pk6mOqTKxjczkKzuopDw0kILHwkeityBJQ1bxkiYqyQiaXlVWxjhiEqOovuVmUd9gZdYs5KZPZ/wCpmo3CuWUvtGXTUV7kj5dV/nVPtt+sXy6r/Oqfbb9YCPSmTLBlWE+XVf51T7b/AKzoxtX+dU+236w9LDDjJKLaEoguZXnGVv5tT7b/AKzny6r/ADqn/Uf9ZZGCqUVPCdRCmQ/l1X+dU/6j/rOfLqv86p9t/wBYquGtugCINBqVkyhjHLAPUdgTuZ2YdhsTLN0sLygBmlw/Xpg9kr51VM1fs+XUnD6lc63v3SOWkv51vCRKq2JEUXZ7D6DayU62kGmbEGWVUaAyGOwO0xmTSMMl0kusiuNZw0s9kHRh2j3f7SxIlVsg9Zh3fGW7CIntIt4peFA7RRRSA7DqNJQbTPX8PiZoOEzeON3Ph7pOLkRlewzDi7CScbpGYBbtH4/faN7iAFTSmTKq8s9pGyKOcq1jI8FXUy8aj5Il4Qak8hJOz0zPAJon1jLbYdKwLnhBkxmGPBA6RVbFUHef7/vdKSScdiM9Rm7dO6CRZbxxqKRgazL8TK327DqdOS6aRqLDqI9IptjlEdOCdnAWKcM7OGEcMZZEq05NaBcQWEmVzLaXvR6pcMh7x4yqqpHbOr5KitwvY9xiMseqLRe0eb4eZN8cP6k7HJleRsWut+YvLjbtHc43GVVUXQHkbSpF2rN3NGrREvLZdUBlQZa7Pa6EcoUgdLLxOPoScHqJErizGS9n77QWOWzQO5ZH7Kbr+Hxl84me2eeuPGaJhpE5OR+J+EjxR0UAZYd/RmXxJuzd81Fb0JlKh6x7z74eHuIyMn7KTUmCxOrgSXstbITIqauTyjVywYq2kQNrN1gOQkKmIbGvdye23qncGl2HIa+qN4RnTfVlb9SRWGqqOAHrMtdo1PM4YKPSfT9ZD2VQ85VvwBvI3SLF56pUHqp1R38YMY9UkvLcbny/BwOXd7Iq1EkIsGiyQgmgjzMmEQQojFjxJFjhOzk7COFFFFOOGmMYR5jWgkoA4kWoslsIBxIYaZo8I/n8NzZND4Sooi+ZeY9ohejmKyVcjei+njwhNo0fN1ey95nyj0ycfqemwZfjYFLutmVLiTtkN1ivMSNjEsx9frncA9nHq9cLlC8b6cq9y1wZs5EftVNQYw6VO+SNqr1QYp8l+Sp0QMIbOvfNQPRmVonrL3iaqn6MVm7DMbARTsUAYExRskyhM1G0TZD3TLqIeHhiZ8l3hhlpXlfSawduV5YYo5aQHZKnEtlo24sY2O4Dl0py8kVJMmURZSeeg+MiKJaUaOZkQcN/vMZJlHFFtk+g/wAnw7OfSfRe8zLjU3Mt+kWKDOKa+jTFu9uMqkEdhhS6nyzP+0c/Xk6I8Lb6hEEOsEsKstIy2FWPEGseJwI+KcE7CBOxTkU444YwxxjTBCQNoJxCtBtOYSAEkG43g3HeJpMawr0Eqj0ho3eN8zjiWnR3FAM1JvRcadjStnja6l2NX7Nz9E3CXD2+pHxAuqty0PwkJTY35ayzq0ipZD4eErGERFl/NFp2Xldr5H52k/GLmpXlXQbNRH0TaW1HrUiOyLlsXr6kpeaKRTqO8TV4Y9SZMzVYE3Twis3CDhyMijrRRdjQe1zZD3TO4dbso7ZfbbPUPhKnZiXqL643FtETLkmbXbQL3Sn2u2qryF/XLTHNmqgcpRYt8zse32DSNghGeVQrzYsKutzuGvqlnhqvm0asfSPVXvMg0aZsAN7G3hG7VxALBFPVQW72+cfhGRj1SoqTy/BxN9+F7kAm5ueMIgg1hUlxGDIKsIsGsIsNC2EEeIMR4nAMcJ2NEUIgdFGxTiUImcM7GmCShjQbR7RjTgkBaDDEEEGxBuO+FaBeAxkXRfYuoHRK679zDkw3yrxKWOm46jxhdlVxdqbHqvu7H+afHdFXTSx3qbGU5R6ZUb0Mnxsal37+4fZLXzLzFx/fqlvslrqV75nsC+Vwe2x8dJe7ObLUK84uaLeCV40vJ0VtVbMR2maTZRug7pRbQSztLrYx6g7orLwPjyHij7RRA4r9vt1R3iQtjjrM3ISVt87u/wCEiYJsqOeekfBeATL5gNarbO3gO8yoRbmTMW/VA5m5+EBQWPWyKmZ3JLyDNVyKWG+2VO/i3gPeJVwuIq5jpuGg/XxgZaxxpGJqs3xJbcLgcsKkEsKkYiowqx6wawiwwGPEeIwRwnAjp2IRQgRTk7FBJQ0xpjjGmcShpjGnTGmcGgTQbQjQbQGEht5Z+czgNxPVb6w4+Oh9cqjD4arlOu46H4Hw/WKyRtF3SZvhyp8PkewsZc0KvWRuYF++VddZIwj9Uj+E3ErPdGzhdSa8yw2wvXB5iWGwj1PXK7HtmRG8JO2Aeqe+JyfKW4fMWcUV4pWHFPt86rIBayAc5M24esvcfhKus9h7JbgvChE3TZGrNdj6oPE1Moyjed/dyj7gDMeHtPASEzEm54yzjjbtmNqs3Smly/0ORRRSwZY5YVYJYVBJQDCLCLGLHrCAYQRwEaI8SQGdEdOCdhEDYjHRsElHDGGPMaZxKBNGNCNBtOYaBNGNHvBtAYaGGKKKQETMPUzLlO8bu0R9BrHv0kFHINxvEmXBAYbj7DxEr5I07NXS5upJPlfoWZe6W5GWOwD6X98JT0nuO+Wmwm1bw+Mq5F4WbEHbVFveKDvFK9FiiB0kwb03GdTa2jD0T3Hw3b5Q1Dc2npmwduJWXK6q43MpFwfrKd3j4XlN5QqeDp0R5nDpTd3Aupa+UdZtCbAbhoPnQ9PkbahJU+P5MnNqJKLbR59iKmY2G4bu3mYKKKayVKkYU5OcnJiiinZIJ1YVINYRZKAYVYRYNYRYQDYRY4CNEeJIDZ0COiE7OIOTk7OGccNMYYQxhnBIE0Y0I0G0gJAXg2hGg2gsYhk5OxWkBHIfD1LGx3H2HgYK0VpDVqmHCbhJSRZU9DYzQdGsE9Rmyr1bAFzoo8efZLnoBRwdTD3rYZKlRGZSzFr2vmW4vY6EDdwlht/byUlyoFQWsqgWAH0VG/3domTnyO3CKt8fybmHUS6U0h3/AMcX+f8Ad/3imO/+R1Ob+pYpX+DqPNDf6jJ5kTBaPcEqeYNj6xB7fV3OZ3Zio6t+W8gf3wnaTWceEl7RGitL6dTTOnijPFJMykUJXp5WI5H2cIOX07POyVOmdE6JwRwkgscsesYI9ZIthVhFg1hFhAsKseINYQTrBHCdnBOzrIoU4Z2cnWdQ0xjR5EYwnWSgTQbQjQbTgkCaDaEaDMFhobaOVYgIekkgMalK8eaEuNn4LOwFt5lnW2IQ+Urx17t5kN0rCSbdELYNGolyrspYDNbiOA8Ln1mBxi3e5JJ4km5PiZoMPQsrGUOI9MyhfVNs34RjHGkiNFFFCJOX647pYYvVJXVD1h3SbVbqQZcodB+FootoL1lb+Ie0afpIkssat6YPJreuVolzG7iYGqj05H67jhHCNEcIwrMcI5Y0RyyRbCrHrBrCLJBYVY8Qax4MiyKCCTMJsyvVVmp0KjonpMiOyrpc3IG+2s2OzPJjWq06bviUps6BihpszqDawbrDWx15HTXfPTejmzmw1EYcWy07KrAAM/FnYAm2ZiT4mKlmV0txscTe72PBcBsbEV0Z6NB3RPSZBcDS9h/EbW0FzqOcggXn0hhqCUAKVKhlRmdmKZQqs12LEE3Nzy5jhMntHyd4WrWZ1qVKZezFFy5BfRioK6XPC+hJ7pCzK9yXgaWx475uManPQtvdCBQVHpVGqoWKuStih+aTbgd3fbnM5idllb6RimpK0xbi4umjMukA4lriaFpW1FhWdRGaMMe8YZwaEsl4a19ZEELTe0gI3fRetQV1LqTqONpu9v4vDHNkTUDf3zxrDYvLxmhG0iyZifSPuForK6iPwR6pItMS4yG0ylQ3Zpc1cR1JRK12bulOPLNuqSQyKNvFDOGYg9Yd0lF+oZExXpDuhVbqmQwk6sj1Rei3Yw94lYBLhVvSqDuPtlelKWcPD9zH1nzp+gECOtDmlButo4psaBOibHo95PsTiAHqfsENj1hd2HYmmXTi2vYZvdneTrAIBmpNWYcXd7HwUqvsnWD0niohFnvJ6G4Ai3yFPAWPrDXlTtLybYOoD5kvQfhZmdCe1HNyPqsJFkOLPIFmr8n+xK2IxdF0pZqVKorVHYfs1y9bLfi26wF9SCdIHEdC8TSxNLD1AFWrUVFrC7JqfAhrfNNrndprPZujOxjg6RoK96SjqE2zszM7u7EAD5wUDkgi5z6dvMKEL38i580oYvYZiLXud3rtG1bkEAkHgeMcwAAB7bWsLk6nxgqCBVChibXJLWubm/DSVZ+myLKB1MRlCixdjlDEZRw1a1/YIQ1FUqCRc3C3Gp3XAPqjWqKpBKk5jbQXt2nsjqlQAqGKg3OUEAkkDUrfsgJvdtrt9Aq9BV6SZGz5AjasTZR2ljpru1mc270ZBBelYgC+Um57cvOaNq485kyMbrmLWGQDcAbnUm24TmHw+VMudmOZmzMdes5bKOQF7AcgJYjNLZC3G1ueD7bw+UkTMYgTR7drLndVbMoZgG/iAJAPiJmsQ8sorEZ4wy4bo7ihS+UNh6iUeNRke1t98oF7W+cQF4Xl70BfZJq5cZTqs97qz9ahbTVqaarqfnFlsLkic2GkY/CYR6jKqgXZgoLMqJc7gXYhR4mehP5IMYKOcVaLVd/mQWAtwtUOhbssB9KV3lDpbJz3wdao1S/WSn18OBxCux6u/wCbmXS1hM5S6S4tKPyeniqqUv4FdvUG3gfRWwPKduwiJicPUoVGp1UKOhKsjbwbdm/fe8sadS1JO0k+0yhlu5tTpj6N4nNwvct6NXNv0LN63UEgUGuW7p16nVEHhDq3dK6RrPlBIpyKEcDxu9e6OQ6TmO3r3QdNpAEnTZYYGndKg+iZI2bssvew3C87sVQQ99AUP9ibzoMuGuczEkqeVt0fh7mXq92jAYnZxXhN70A6GIirisQl3brUkYXFNeFRhxc71HAWO86HxOCw9bEoiKSt7tfiAd3ibDxmj6VbZGDwz1gt2UKqLwLsQq37NbnsEdZUotjbgNP73zF+UbpNUwqJTonLUq5jnsDkRbA2B4ksLdx7J5dW6WY5nz/K6ga97KbKOwJ6Nu+a2pTq7YwiV1UHE4Znpugsoqo4VsyXNg2g0OnpdkggqtjdKMUlRXbEswuLqTmDDlY7vCe3YPFJWppUUdV1Bsbacx4G88U2T0Yxbvk+SumtizoURe0sVS4H0Wvyl/0o25UwwXBYaoUSgio7rYO7ZQzWa91AzC40Ot721EHG26Q40UXoZ0Lo9QLYvYKwsUJFjn11sdxUGLanS6lhymenUOcEjLlNstr3uRzE8owm367siVarOquHGc5iGXkx13E6ewaCa3pmnUpNyZ1+0Afyynlk1OuxqaXDDJ0dS5tP6cGz2HtClWQ1lNazk3FSxsVJGigkL4dkh1+leEVnU1mXKzK37JyLqSDqO0Ss6DVL4e38LuPYrfmmN2+tq9cfTqH1sT8YmSi1TX6lrT6SGTPODbpccHsZQIjOavVALE5SbAC5Nr8hK7D7Uw1WolqgaoQVUmkwa1iSAxGg0Mm7U/dav9J/wmY/ovR/xFPszH7jfrByKOOUYpbOu7KuHGp45zk3a4qjV7U2vSwyhqjNZjlFlJ1tfh3SNhtr066rURqgVWb5qgPpqGDX07rGUHlJNhRXtdvUAPjGbEbJgc54LVf2uR7AI10m0kMWmj/Txy27br0Kel0fw+06zeZK4fr53uxeo6m9xTo3Cqt9c1zY8DKHpV0RxOzHStTxFIqGBR7rTqqeF0cm9voXvrcCUO1M4r08iuHbKKTAMCz5iv7NuJzG3YZfdKuhj4ai2LxmOz1GIVUCs7O51y+ddtANSTlOg3S7jvpVsz9VGMcsoxVJOidS8ruKSjkanSq1d3nirKlrfOpi2c79RkHYZ57tDaNSqzMxUZ2LFURKaXJvfKoAv2m57ZuvJn0LpY4PXxCN5lTkQZyud9CxzKAcqjTtLdhlT0pw1P5WaWCoUqFCmwpirUsc7A2eqXq3YgG4GW+i3G+M2Eb9zI0qTOcqqzN/Cilj6hC4fZ9V3WmiMXc5VQ2Uk9zWtx9U9g2r0vwmGwJwuBrl6oQIKmR1Av6dUsVALbyLaXI4Ced9F9oJgXeqKIquVyqWbIEB9M2AbMToOFhfnOs60V22Oj9bCqrVsiljYIHzMbDU6C1hpfXiID5VnVQBbKoXfv8A03Sw6QY98XV85U0sAqqt8qjfpfiTvMrfMKNQIuatFjTzcZpLuSHfSPwXzu4SMWkrA/O8JXNhO2PinIpBI3H/ADe4x2yKHnK1NODOoP1b3b2Axu0fm+MsehNRFxlPObXuq9rsMoHiCfG0nsKyyps9SrKlBEUIgXUZdEUKASQoA334dsj4ethus3yYJlOVyoXQFlUG9hoQ6t3X5SfiGqFhkCsLa3Ot73ta44C3iZxaJyOXoJewFgAcwuALtY3AA48hIjsZsrb3HbJoULtVooysFVuvfc6ll0v337RB9JglZHpVlD08ykgEgjKQbkqwItck9gMm0MNlQ5aYps4ANje+UsQpPcxF/wDaUKtVFY5+pTuQu7VgNNd68TrxX19KUuzIUV3Rg+kHRCotVfklKpVp1BcBFZ1p7uqalyCDvBYjQ8d89O8n2wGwWHKVLedqPncA3CaAKtxvsBqRxJ4azM9McZiqK06uHqsiqWVwtsuZsoRipBBFwR2TVdDtttjcNncBaiMUewIUkAEMBwBB3cCCOEs45XFMTONSZqAo1AYEjeOV55f5QejGI8++IoU2qI4UsqAsyOq2vkGrKbDcD6TX3ieh4WhkZmy2LbzffPOPKF06xFOu2Gw1TzeS3nHABdnZQ2VSQcoAI1GpN+WpAmd2V0axbZ6zUGp06aO7NUVkJAU9VFYBieN7W0OvCbXpF18Gj/Spt9pCPzTKdFumuKeqMNXqNWp170uvYupcFQyva51IuDealjn2ZfkifccA/hMqZ14kzR0UqS9JL8yX5P2/ZVB/zL+tFH5ZmulAtia/1ifWoPxl75Pqn/GXl5tvXnHwEpOlwtiq/evtpIfjFNbGrpttZNen7Hq+0/3Wr/TP4ZQdFKX7YHkrfAfGX+0v3Wp9T4CVnRRP2l/on3iK1D/uMa9jMxOtPk9yk8pR69MclY+s2/LB4lsmzl7aSDxfKPzRnlIf9sfo01/MfjHdLWyYVE5lF+ypP5Y1u5v3Lkf/ABwx83ZiafSmugSnRwyOaTnI7o9Uq+qkoosFJud3PtlPtrb+IxZRsRUD5L5BkQKua1yABxsNeyV9PaFRbharoGYtZXK3Y8rcYelsrENqMPUA35mVkX7TAL7ZoRVKjAyzcpyfm2DfEuVCGo5QbkLNkFzc2W9hqeUYskjA2F3r0E/1VqH1UM5jvNYdbZq7v/TpafaqOp+7DFURbxjGTflGHXdQd+2pW0+zTRT96NbaVh1KNBLcfNhz66xcyCUiEgLHKoLN/CoufUNZ16TAsjKVYA3DAhgQL2IOo3SemPxdYEI9dxuK0s+XxSnp7JHGHdKiLURkJK3VxY5WNjmB1Gl98h8DIPpkmV95NwG5vCQSLEjiND2GT9n+i3hKrRuY3bOxRRQRgzaXze4yrrb/AAlptAEsABewErcSttOPHs5RuLkp6zhmz6J7Cx1UK4xNShR0IOdusu8ZUJsARxPO9jPQk2giKKdN/OOo9NzvI10sLFiocgkW0FtCBIPRTFpicGgUBbKEZQBZXS1uru0srAciL75Kp2RsqU89Qk3NgMtyM9hfq2Othr6GpFrBKVt2U0qWxP2XUqAE12sHK9Vt6ubag36oJscvC4tpqS4/D5uGotft5MPd/wCtarbe0cNhlWriXBcKQqaFmI0OVRzFrgWW51O6M6NdKqWLUsFykHKyEjMo4d17XBHLjYyVDqIc+kzXSupWqsMNTwtQqrq2c03IZgrKMulstnYEnf2CxMpMY+zMKEXKK9ZmdibMEChVtc2V2Gg1PE+ll13TU9Lg3HP9eUyPTnYdSuiVKS5np5gU4lWtqo4sCN3Inuj4xUVSESk5O2ZzC9NsZTcOcSXsdUqCmUccVuvWU8it5zptsGrXcY/DU2qUcSiVCFGZ6bFVBVkXW2m8X1vu0vSUNg4mq4RaFS5NiXRkQdrMwsB/es9k2NR+T0adEG4poqX5kDU+JufGSCeWdCOieJq4mnUak9OlTdXZ3VkvlNwqgi7E2tpoBebzC0v8NiqQ+Y+JQeBZh7xNcmI4E6nt/u0zmzHV62MRSCDUB01HXQBvap9URnWyLmllV+lP8yn8n7/tKg5op9TH/wApB6bLbE1O1UP3APhCdA2IxJB403B7wyH4GLp2P8S3bTQ/iHwiWtjax7ax+sT0vabf4R/qj2kSF0Q1ZuxR7T/tDbae2Cc9ie1lEjdCWv508gg/F+kVmjepx+xmwX9rkf8At+xm+mvXxhTm1NPWF/8AKRvKTiMtNR2VG8QAo/FDbVPnNo2/56/cIP5JQeVfEWsvJFHizkn2JCxq5P1Zcm6jj9IN/kZDYe1KtEstJGdnA6qmpwvrlQgtvO+TcY+MdXz0lpK9s2dKdAHX+KsQd9tx4CU2y8TUSoDRUs7AqFCl8wIuRkHpbr27JaYs411yVqlOmrb0d8PQFgb60wQ28D5vATQPP0RDgVW2fFUV7EL1T66aMn3pwfJlvd6z8sqJTH2mdz92MOEpLfPi004U0q1D62VF+9LI7EVVLGnWcgE2Z6FEtYA2WmvnGYm40EmyKIPyyiB1cKCedWq7+ynkHsibbDqboKVPtSlSDeDspf70MyMuowFNBuviGf8A7zqpP+WTsNjVpofO4gU3YZlXDBKakG4DF6FK5NwRbNw38JwSRXlcZiFuRiaqHifOunrPVEhYnCtT6rBAdeqtSm5FrekEY5d+424wtatSc3qVa9ZhuLBV9Tu7m3+WR61RCAEplbbyz5yezRVA9U4kBWP7RjzJb7XWHvk7Zp0bwkNULE2BJCgmwOijq3PIej65L2dcEgi1x7ojJyauk2SH2nYTLFFFwa/pN4e6UdTee8++cij8RQ13Y9N8k/8Awqv1/wAizb4X06vePwxRRM/mZVjwjxzyhfvr/VT8IhfJz+8P/SP46cUUsw4QrJyz2nZPH6pjzFFCAGtH0PSHjOxSASuxPpr3H3iZryb76/1h+OpFFFZuCzp/8vb/AKhnQ798P1anvEXT795/0k99SdiiH8pu4/va/Cb7pB+4t3UvxpI/QXdV/wAn5oooE/vMPYz4fc5/i/YzA/8Asv8AWq+55l/Kz6f2PwtOxScXP1LOo+VfgPPqvo+A+EJQ/wCGPrt+FYopeMHsdE9Gxf7of6fwiinHHl2H3ywxfo0v6f8A3qsUUkkjQxiikHGu8mH75U//AC4j3LKOh6S9x90UUVl7GnoeGGiiiiS+f//Z"} alt="moviecover" />
            <div className="VideoCardInfo">
                <h2>{movie.title || movie.original_title || movie.original_name } ({`${movie && movie.release_date}`})</h2>
                <Avatar>{movie.vote_average}</Avatar>
            </div>
        </div>
    )
}

export default VideoCard
