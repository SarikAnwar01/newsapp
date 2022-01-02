import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    articles = [
        {
            "source": { "id": "news24", "name": "News24" },
            "author": "Compiled by Craig Taylor",
            "title": "Boucher confirms Verreynne has inside track to become Proteas' new Test gloveman",
            "description": "Following the retirement of Quinton de Kock from Test cricket, Proteas' coach, Mark Boucher confirmed that Kyler Verreynne will most likely be handed the gloves against India at the Wanderers on Monday.",
            "url": "https://www.news24.com/sport/cricket/proteas/boucher-confirms-verreynne-has-inside-track-to-become-proteas-new-test-gloveman-20220102",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3736/02846ff4bf0345119eb8ca699478b319.jpg",
            "publishedAt": "2022-01-02T14:09:07+00:00",
            "content": "Following the retirement of Quinton de Kock from Test cricket, Proteas' coach, Mark Boucher confirmed that Kyler Verreynne will most likely be handed the gloves against India at the Wanderers on Mond… [+793 chars]"
        },
        {
            "source": { "id": "news24", "name": "News24" },
            "author": "Compiled by Craig Taylor",
            "title": "Boucher admits De Kock's retirement came as a shock",
            "description": "While Mark Boucher fully respects Quinton de Kock's decision to retire from Test cricket, he says it still came as a shock.",
            "url": "https://www.news24.com/sport/Cricket/Proteas/boucher-admits-de-kocks-retirement-came-as-a-shock-20220102",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/11550/bc342e7e23bc4b5faaddddbbe00671b8.jpg",
            "publishedAt": "2022-01-02T10:59:21+00:00",
            "content": "Quinton de Kock dropped a bombshell on Friday with the news that he would retire from Test cricket.\r\nWhile the Proteas' brain trust knew that De Kock wouldn't be available for the second and third Te… [+832 chars]"
        },
        {
            "source": { "id": "independent", "name": "Independent" },
            "author": "Ed Cumming",
            "title": "Greg James: ‘I’ve never enjoyed celebrity interviews – they have a weird power dynamic’",
            "description": "The Radio 1 presenter’s new Sky documentary series explores the strange case of Robert Allen Stanford, the mysterious Texan-born Antiguan billionaire who wanted to reinvigorate West Indian cricket. He talks to Ed Cumming about true crime, cricket and how he a…",
            "url": "http://www.independent.co.uk/arts-entertainment/tv/features/greg-james-interview-radio-1-b1984914.html",
            "urlToImage": "https://static.independent.co.uk/2021/12/31/12/greg%20james%20blue.jpg?width=1200&auto=webp&quality=75",
            "publishedAt": "2022-01-02T08:06:34Z",
            "content": "In February last year, with the pandemic raging and the country back in lockdown, Greg James did something he hadnt done before: he thought about quitting the BBC Radio 1 Breakfast Show.\r\nI had a con… [+11196 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        console.log("hello i am constructor from news component");
        this.state = {
            articles: this.articles,
            loading: false


        }
    }
    render() {
        return (
            <div className="container my-3">
                <h2>News App - Hot Topics</h2>
                <div className="row">
                    <div className="col-md-4">
                        <Newsitem title="myTitle" description="mydesc" imageurl="https://cdn.24.co.za/files/Cms/General/d/3736/02846ff4bf0345119eb8ca699478b319.jpg" newsurl="TODO" />
                    </div>
                    <div className="col-md-4">
                        <Newsitem title="myTitle" description="mydesc" />
                    </div>
                    <div className="col-md-4">
                        <Newsitem title="myTitle" description="mydesc" />
                    </div>
                </div>

            </div>
        )
    }
}


export default News
