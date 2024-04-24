const eventsDatabase = {
  events: [
    { name: "Nontraditional PhD Careers Panel", onCampus: true , time: new Date('2024-05-01T18:00:00Z'), free: true, weekend: true, category: "Speaker Panel", link: "https://yaleconnect.yale.edu/GSASYBiolDiversityInclusionComm/rsvp_boot?id=2265636" },
    { name: "Morning Roast featuring the Holy Ghost by Andover Newton Seminary", onCampus: true , time: new Date('2024-05-01T08:30:00Z') , free: true, weekend: true, category: "Cultural", link: "https://yaleconnect.yale.edu/YDSAndoverNewton/rsvp_boot?id=2267044" },
    { name: "Mother's Day Bag Packing", onCampus: true, time: new Date('2024-05-06T11:00:00Z') , free: true, weekend: false, category: "Community Service", link: "https://yaleconnect.yale.edu/AGYLNG/rsvp_boot?id=2271270"},
    { name: "Gardening Afternoon", onCampus: true, time: new Date('2024-04-28T16:00:00Z') , free: true, weekend: true, category: "Outdoor Community", link: "https://yaleconnect.yale.edu/GHWHKids/rsvp_boot?id=2270560"},
    { name: "Basketball vs Brown University", onCampus: true , time: new Date('2024-04-27T11:30:00Z'), free: false, weekend: true, category: "Sports Game", link: "https://docs.google.com/forms/d/e/1FAIpQLScqPNuSGDXLx9Q7xUybvVPx0RvzwQiHSD1seDGL7uPxC0w5lw/viewform" },
    { name: "EveryBody Dances with Rennie Harris Puremovement American Street Dance Theater", onCampus: true , time: new Date('2024-04-28T11:00:00Z') , free: true, weekend: true, category: "Workshop", link: "https://yaleconnect.yale.edu/SchwarzmanCenter/rsvp_boot?id=2270886"},
    { name: "Trip to a New York City Football Club Tailgate & Game at Yankees Stadium!", onCampus: true , time: new Date('2024-04-27T11:30:00Z'), free: false, weekend: true, category: "Sports", link: "https://www.eventbrite.com/e/trip-to-a-new-york-city-football-club-tailgate-game-at-yankees-stadium-tickets-876025454717?aff=oddtdtcreator"},
    { name: "Yale Symphony Orchestra Concert 5", onCampus: true , time: new Date('2024-04-28T21:00:00Z') , free: true, weekend: true, category: "Performance", link: "https://yso.yalecollege.yale.edu/upcoming-concerts"},

    
    { name: "South Asian Studies Council Chai", onCampus: true, time: new Date('2024-04-25T04:30:00Z') , free: true, weekend: false, category: "Cultural", link: "https://southasia.macmillan.yale.edu/event/south-asian-studies-council-chai"},
    { name: "AI in Medicine Monthly Seminar - Dr. Hua Xu", onCampus: true , time: new Date('2024-04-25T01:00:00Z') , free: true, weekend: false, category: "Speaker Event", link: "https://yaleconnect.yale.edu/AIM/rsvp_boot?id=2270961"},
    { name: "Disability Peer Mentor Programming Book Club", onCampus: true, time: new Date('2024-04-26T15:00:00Z') , free: true, weekend: false, category: "Community", link: "https://yaleconnect.yale.edu/DPMP/rsvp_boot?id=2268949"},
    { name: "Rangeela Showcase 2024", onCampus: true , time: new Date('2024-04-26T20:00:00Z') , free: true, weekend: false, category: "Cultural Performance", link: "https://yaleconnect.yale.edu/YCRangeela/rsvp_boot?id=2270082"},
    { name: "i am very young and i am learning how to live", onCampus: true , time: new Date('2024-04-26T18:00:00Z') , free: true, weekend: false, category: "Student Performance", link: "https://yaleconnect.yale.edu/YCUP/rsvp_boot?id=2263915"},
    { name: "Bridging GAPS Diversity in STEM Symposium", onCampus: true , time: new Date('2024-04-26T09:30:00Z') , free: true, weekend: false, category: "Conference", link: "https://yaleconnect.yale.edu/gaps/rsvp_boot?id=2268919"},


    { name: "Water LC: South East Asian Water Festival", onCampus: false , time: new Date('2024-04-28T15:00:00Z') , free: true, weekend: true, category: "Cultural", link: "https://yaleconnect.yale.edu/WLC/rsvp_boot?id=2270872" },
    { name: "Divinity Farm Work Day", onCampus: false, time: new Date('2024-04-27T10:00:00Z') , free: true, weekend: true, category: "Community", link: "https://yaleconnect.yale.edu/YDSDivFarm/rsvp_boot?id=2271033"},
    { name: "The Outsiders", onCampus: false , time: new Date('2024-04-27T18:00:00Z') , free: false, weekend: true, category: "Performance", link: "https://www.broadway.com/shows/the-outsiders/"},
    { name: "Crises of Verse Symposium", onCampus: false , time: new Date('2024-04-27T12:30:00Z') , free: true, weekend: true, category: "Speaker Event", link: "https://events.brown.edu/event/283102-crises-of-verse-symposium"},

  
    { name: "Massaro Farm Volunteer Day", onCampus: false , time: new Date('2024-04-25T12:00:00Z') , free: true, weekend: false, category: "Outdoor Community", link: "https://yaleconnect.yale.edu/SWAY/rsvp_boot?id=2270427"},
    { name: "Cena a las Seis ft. Giuliana Duron", onCampus: false , time: new Date('2024-04-25T18:00:00Z') , free: true, weekend: false, category: "Cultural", link: "https://yaleconnect.yale.edu/LaCasa/rsvp_boot?id=2241900" },
    { name: "Volunteer with Sunrise Cafe - Service Series", onCampus: false, time: new Date('2024-04-30T06:00:00Z') , free: true, weekend: false, category: "Community Service", link: "https://yaleconnect.yale.edu/DwightHall/rsvp_boot?id=2263505"},
    { name: "The Great Gatsby", onCampus: false , time: new Date('2024-04-25T22:00:00Z') , free: false, weekend: false, category: "Performance", link: "https://broadway.com/shows/the-great-gatsby/"},
    { name: "Unmasking the Racism in Anti-Racism Education with Rev. Dr. Jia Starr Brown", onCampus: false , time: new Date('2024-05-01T16:00:00Z') , free: true, weekend: false, category: "Speaker Event", link: "https://yaleconnect.yale.edu/ydscontedu/rsvp_boot?id=2268536"},
  ]
};
