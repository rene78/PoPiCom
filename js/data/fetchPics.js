//fetches pictures from API. Returns json list of pic details (name, usage count)
import PubSub from './pubsub.js';

export default new class FetchPics { //"new", because we want to export an instance of the class

  constructor() {
    this.pubsub = PubSub;
    // this.fetchData = this.fetchData.bind(this);
  }

  fetchData(userName) {
    console.log("You entered this text: " + userName);
    const examplePicArr = [
      {
        "title": "File:Flughafen Zürich Besucherterrasse Dock E im Jahr 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Wartebereich Terminal E - Flughafen Zürich.jpg",
        "count": 0
      },
      {
        "title": "File:Koon Kee Wan Tan Mee in Kuala Lumpur.jpg",
        "count": 1
      },
      {
        "title": "File:KL Eco City in February 2020-01.jpg",
        "count": 0
      },
      {
        "title": "File:The Vogue Suites One, KL Eco City in February 2020.jpg",
        "count": 1
      },
      {
        "title": "File:KL Eco City in February 2020.jpg",
        "count": 1
      },
      {
        "title": "File:KL Botanical Garden Overview Map in 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Segambut Komuter station in March 2020.jpg",
        "count": 2
      },
      {
        "title": "File:Damansara City Mall, Kuala Lumpur during MCO in March 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Planetarium Negara in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:National Museum (Malaysia) in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:PNB 118 in 05 2020.jpg",
        "count": 0
      },
      {
        "title": "File:KLIA during CMCO due to Coronavirus pandemic in June 2020 02.jpg",
        "count": 0
      },
      {
        "title": "File:KLIA during CMCO due to Coronavirus pandemic in June 2020 03.jpg",
        "count": 0
      },
      {
        "title": "File:KLIA transit during CMCO due to Coronavirus pandemic in June 2020.jpg",
        "count": 0
      },
      {
        "title": "File:KLIA during CMCO due to Coronavirus pandemic in June 2020 04.jpg",
        "count": 0
      },
      {
        "title": "File:Lamp Bear in June 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Skyscrapers of Kuala Lumpur, Malaysia (42721121372).jpg",
        "count": 0
      },
      {
        "title": "File:Tropicana The Residence and W Hotel in Kuala Lumpur.jpeg",
        "count": 1
      },
      {
        "title": "File:Ravensburg banner old town.jpg",
        "count": 0
      },
      {
        "title": "File:San Rafael (AR) banner typical street.jpg",
        "count": 0
      },
      {
        "title": "File:Mendoza banner vineyards.jpg",
        "count": 3
      },
      {
        "title": "File:Mendoza City banner typical view of the city.jpg",
        "count": 1
      },
      {
        "title": "File:Meersburg banner panorama.jpg",
        "count": 1
      },
      {
        "title": "File:Southeastern myanmar banner monks.jpg",
        "count": 0
      },
      {
        "title": "File:Le Corbusier track around Cap Martin.jpg",
        "count": 1
      },
      {
        "title": "File:Champions Promenade.jpg",
        "count": 5
      },
      {
        "title": "File:Hotel Hermitage Monaco.jpg",
        "count": 6
      },
      {
        "title": "File:Adventure Cove Waterpark in Sentosa, Singapore.jpg",
        "count": 2
      },
      {
        "title": "File:Eze viewed from Grand Corniche 01.jpg",
        "count": 4
      },
      {
        "title": "File:Saddan Cave, Hpa-An, Myanmar.jpg",
        "count": 0
      },
      {
        "title": "File:Mount Zwegabin.jpg",
        "count": 0
      },
      {
        "title": "File:Hpa-An Lodge.jpg",
        "count": 1
      },
      {
        "title": "File:Lumbini Garden, Hpa-An, Myanmar.jpg",
        "count": 0
      },
      {
        "title": "File:Thanbyuzayat War Cemetery.JPG",
        "count": 0
      },
      {
        "title": "File:Thanbyuzayat War Cemetery 2100x300.jpg",
        "count": 0
      },
      {
        "title": "File:Starlight Guesthouse, Ye, Myanmar 2.jpg",
        "count": 0
      },
      {
        "title": "File:Starlight Guesthouse, Ye, Myanmar 1.jpg",
        "count": 0
      },
      {
        "title": "File:Beach north of Teyzit beach, Dawei Peninsula 1.jpg",
        "count": 1
      },
      {
        "title": "File:Mount Zwegabin - view to the west.jpg",
        "count": 0
      },
      {
        "title": "File:Between Hpa-An and Saddan Cave.jpg",
        "count": 1
      },
      {
        "title": "File:View to Hai Sin Cave.jpg",
        "count": 0
      },
      {
        "title": "File:Win Sein Taw Ya - Reclining Buddha.jpg",
        "count": 0
      },
      {
        "title": "File:Thanbyuzayat World War II Cemetery.jpg",
        "count": 0
      },
      {
        "title": "File:Beach north of Teyzit beach, Dawei Peninsula 2.jpg",
        "count": 1
      },
      {
        "title": "File:Beach north of Teyzit beach, Dawei Peninsula 3.jpg",
        "count": 0
      },
      {
        "title": "File:Dawei Banner for Wikivoyage.jpg",
        "count": 3
      },
      {
        "title": "File:Ye Banner for Wikivoyage.jpg",
        "count": 0
      },
      {
        "title": "File:Bago Wikivoyage Banner 1.jpg",
        "count": 2
      },
      {
        "title": "File:Bago Wikivoyage Banner 2.jpg",
        "count": 1
      },
      {
        "title": "File:Sunset at lake Constance.jpg",
        "count": 0
      },
      {
        "title": "File:Hpa-An Bat Cave.jpg",
        "count": 0
      },
      {
        "title": "File:Hpa-An - Extensive day trip by scooter.png",
        "count": 1
      },
      {
        "title": "File:Kuala Lumpur Methodist-1-2-Brickfields-Girl-Primary-School-03 2100x300.jpg",
        "count": 3
      },
      {
        "title": "File:South West Bicycle Corridor.jpg",
        "count": 0
      },
      {
        "title": "File:KL Skyline for Wikivoyage Banner.jpg",
        "count": 4
      },
      {
        "title": "File:Chinese Village Pulau Ketam 2100x300.jpg",
        "count": 2
      },
      {
        "title": "File:Waiblingen Wikivoyage Banner.jpg",
        "count": 0
      },
      {
        "title": "File:Küssnacht01 (Wikivoyage Banner).jpg",
        "count": 3
      },
      {
        "title": "File:SteinAmRheinPano (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Romanshorn - Lake Constance (Wikivoyage Banner).jpg",
        "count": 0
      },
      {
        "title": "File:St.Gallen - Panorama - 001 (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Berlin - Schloss-Charlottenburg (Wikivoyage Banner).jpg",
        "count": 2
      },
      {
        "title": "File:Museu de Arte Contemporânea (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Bonde Sta Tereza01 (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:River Monumental Panoramic (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Berliner Olympiastadion night (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Schloss-Charlottenburg Schlosspark (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Monaco City 001 (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Panorama Monaco (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Monaco from Place du Palais.jpg",
        "count": 1
      },
      {
        "title": "File:Monaco from Place du Palais (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Lang Tengah Island - D'Coconut Lagoon Island Resort 02.jpg",
        "count": 1
      },
      {
        "title": "File:Lang Tengah Island - D'Coconut Lagoon Island Resort 04.jpg",
        "count": 0
      },
      {
        "title": "File:Lang Tengah Island - D'Coconut Lagoon Island Resort 05.jpg",
        "count": 0
      },
      {
        "title": "File:Lang Tengah Island - D'Coconut Lagoon Island Resort 01.jpg",
        "count": 0
      },
      {
        "title": "File:Lang Tengah Island - D'Coconut Lagoon Island Resort 03.jpg",
        "count": 0
      },
      {
        "title": "File:Lang Tengah Island - Beach.jpg",
        "count": 0
      },
      {
        "title": "File:Lang Tengah Island - Beach (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Lang Tengah Island - Beach with palm.jpg",
        "count": 1
      },
      {
        "title": "File:Brugg Bruggerberg (cropped).JPG",
        "count": 2
      },
      {
        "title": "File:Rheinfelden AG Altstadt (Wikivoyage Banner).jpg",
        "count": 0
      },
      {
        "title": "File:Laufenburg (Baden) - Panoramaansicht (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Laufenburg.jpg",
        "count": 1
      },
      {
        "title": "File:Niederweningen, Canton Zürich.jpg",
        "count": 0
      },
      {
        "title": "File:Laufenburg (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:194 - Buenos Aires - Casa Rosada - Janvier 2010 (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Kampung Baru at Night.jpg",
        "count": 1
      },
      {
        "title": "File:Kampung Baru at Night (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Taman Botani Perdana Kuala Lumpur 1.jpg",
        "count": 0
      },
      {
        "title": "File:Tugu Negara Kuala Lumpur 2.jpg",
        "count": 0
      },
      {
        "title": "File:Tugu Negara Kuala Lumpur 1.jpg",
        "count": 0
      },
      {
        "title": "File:Little India, Penang 1.jpg",
        "count": 0
      },
      {
        "title": "File:Tugu Negara Kuala Lumpur 3.jpg",
        "count": 0
      },
      {
        "title": "File:Little India, Penang 2.jpg",
        "count": 0
      },
      {
        "title": "File:Taman Botani Perdana Kuala Lumpur 2.jpg",
        "count": 1
      },
      {
        "title": "File:Taman Botani Perdana Kuala Lumpur 2 (cropped).jpg",
        "count": 4
      },
      {
        "title": "File:Little India, Brickfields, Kuala Lumpur.jpg",
        "count": 3
      },
      {
        "title": "File:Thean Hou Temple in 2009.jpg",
        "count": 2
      },
      {
        "title": "File:National Stadium Bukit Jalil 2014 AFF Suzuki Cup final (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:National Aquatic Center, Bukit Jalil 1.jpg",
        "count": 1
      },
      {
        "title": "File:National Aquatic Center, Bukit Jalil 2.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 02.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 01.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 03.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 04.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 05.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 06.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 07.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 08.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 11.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 09.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 10.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 12.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 13.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 14.jpg",
        "count": 0
      },
      {
        "title": "File:Thaipusam, Batu Caves 03 (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Sunrise in Batu Caves during Thaipusam festival 2013.jpg",
        "count": 0
      },
      {
        "title": "File:Sunrise in Batu Caves during Thaipusam festival 2013 (cropped).jpg",
        "count": 3
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796202605).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835186278).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40745989023).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40745992103).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835190058).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835203338).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835207798).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796234985).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796241005).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659400552).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712504801).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712508581).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835229888).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40746033893).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659424732).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659420252).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712531151).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659435322).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659436872).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712543661).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835261588).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (32769121537).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (32769125487).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835272318).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712562251).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Do 335 display (33835283388).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835279188).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835286958).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835290238).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712580121).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40746094203).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712586041).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (32769153977).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40746095433).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835313188).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796338295).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796342155).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40746109673).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796340395).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40746112883).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659506662).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40746115793).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659508462).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796357955).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796360325).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796361975).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659510652).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835351808).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835353408).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835356128).jpg",
        "count": 0
      },
      {
        "title": "File:Sky Bar, Traders Hotel, Kuala Lumpur 02.jpg",
        "count": 0
      },
      {
        "title": "File:Sky Bar, Traders Hotel, Kuala Lumpur 01.jpg",
        "count": 0
      },
      {
        "title": "File:Sky Bar, Traders Hotel, Kuala Lumpur 03.jpg",
        "count": 0
      },
      {
        "title": "File:Sky Bar, Traders Hotel, Kuala Lumpur 04.jpg",
        "count": 0
      },
      {
        "title": "File:Sky Bar, Traders Hotel, Kuala Lumpur 05.jpg",
        "count": 0
      },
      {
        "title": "File:Sky Bar, Traders Hotel, Kuala Lumpur 06.jpg",
        "count": 0
      },
      {
        "title": "File:Sky Bar, Traders Hotel, Kuala Lumpur 07.jpg",
        "count": 0
      },
      {
        "title": "File:Luna Bar, Kuala Lumpur.jpg",
        "count": 0
      },
      {
        "title": "File:Kuala Lumpur Skyline at dusk 1.jpg",
        "count": 0
      },
      {
        "title": "File:Kuala Lumpur Malaysia-Istana Negara-Jalan-Duta-01 (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Jalan Alor - Kuala Lumpur.jpg",
        "count": 3
      },
      {
        "title": "File:Petaling Street, Kuala Lumpur 01.jpg",
        "count": 0
      },
      {
        "title": "File:Kasturi Walk, Kuala Lumpur.jpg",
        "count": 1
      },
      {
        "title": "File:Chan See Shu Yuen Temple, Kuala Lumpur.jpg",
        "count": 3
      },
      {
        "title": "File:2013 Monaco Grand Prix - Sunday.jpg",
        "count": 10
      },
      {
        "title": "File:Dragon's Back, Hong Kong 01.jpg",
        "count": 1
      },
      {
        "title": "File:Dragon's Back, Hong Kong 02.jpg",
        "count": 0
      },
      {
        "title": "File:Dragon's Back, Hong Kong 03.jpg",
        "count": 0
      },
      {
        "title": "File:Atrium Hotel Blume, Baden, Aargau.jpg",
        "count": 2
      },
      {
        "title": "File:View from railway bridge Wettingen–Baden.jpg",
        "count": 0
      },
      {
        "title": "File:Xiangcheng, Suzhou, Jiangsu, China - panoramio (2) (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Panorama inside Colosseum 2 (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Foro Traiano panorama (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Fontana di Trevi - Rome, Italy - November 6, 2010 (6212401026) (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Hotel Blume, Baden.jpg",
        "count": 1
      },
      {
        "title": "File:Hotel Limmathof, Baden.jpg",
        "count": 1
      },
      {
        "title": "File:Müllerbräu Biergarten Baden.jpg",
        "count": 0
      },
      {
        "title": "File:Campnou 1 (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Nanshan, Shenzhen, Panorama, facing South towards DaNanShan Mountain - panoramio (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Panorama Engelberg (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Masjid Wilayah, Kuala Lumpur.jpg",
        "count": 0
      },
      {
        "title": "File:Munich Panorama.jpg",
        "count": 0
      },
      {
        "title": "File:Munich Panorama (cropped for Wikivoyage).jpg",
        "count": 0
      },
      {
        "title": "File:Dubai Creek from Bur Dubai (5374118618) (cropped).jpg",
        "count": 4
      },
      {
        "title": "File:N Seoul Tower Panorama Night (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:1 singapore city skyline dusk panorama 2011 (cropped for Wikivoyage).jpg",
        "count": 2
      },
      {
        "title": "File:1 Singaporeskyline9g (cropped for Wikivoyage).jpg",
        "count": 1
      },
      {
        "title": "File:Singapore skyline from Skyline Promenade.jpg",
        "count": 0
      },
      {
        "title": "File:Singapore skyline from Skyline Promenade (cropped for Wikivoyage).jpg",
        "count": 0
      },
      {
        "title": "File:SkyPark Infinity Pool, Singapore.jpg",
        "count": 0
      },
      {
        "title": "File:SkyPark Infinity Pool, Singapore (cropped for Wikivoyage).jpg",
        "count": 0
      },
      {
        "title": "File:Singapore - Esplanade Bridge.jpg",
        "count": 0
      },
      {
        "title": "File:Singapore - Esplanade Bridge (cropped for Wikivoyage).jpg",
        "count": 0
      },
      {
        "title": "File:Changi Boardwalk, Singapore.jpg",
        "count": 2
      },
      {
        "title": "File:Carcosa Seri Negara.jpg",
        "count": 7
      },
      {
        "title": "File:Milano Wikivoyage banner2.jpg",
        "count": 0
      },
      {
        "title": "File:Kuala Lumpur Malaysia St. Regis Hotel during construction.jpg",
        "count": 1
      },
      {
        "title": "File:Pantai di Pulau Pangkor (cropped for Wikivoyage).JPG",
        "count": 0
      },
      {
        "title": "File:Abu Dhabi International Airport - Air Traffic Control Tower.jpg",
        "count": 3
      },
      {
        "title": "File:Cerro Campanario with cable car.jpg",
        "count": 1
      },
      {
        "title": "File:As-Syakirin Mosque, KLCC in 2013(9170144503).jpg",
        "count": 0
      },
      {
        "title": "File:KLCC District Cooling (Kuala Lumpur) in 2013.jpeg",
        "count": 0
      },
      {
        "title": "File:Jalan Tuanku Abdul Rahman, Chow Kit, Kuala Lumpur.jpeg",
        "count": 0
      },
      {
        "title": "File:Chow Kit Market during Movement Control Order due to Coronavirus pandemic.jpg",
        "count": 0
      },
      {
        "title": "File:KLCC District Cooling in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Kuala Lumpur Courts Complex in April 2020 01.jpg",
        "count": 0
      },
      {
        "title": "File:Oxley Towers, Kuala Lumpur in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Tuanku Abdul Rahman, Kuala Lumpur during Extended Movement Control order due to Coronavirus pandemic 01.jpg",
        "count": 0
      },
      {
        "title": "File:Skyscrapers in Kuala Lumpur in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Tuanku Abdul Rahman, Kuala Lumpur during Extended Movement Control order due to Coronavirus pandemic 02.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Tuanku Abdul Rahman, Kuala Lumpur during Extended Movement Control order due to Coronavirus pandemic 03.jpg",
        "count": 0
      },
      {
        "title": "File:Naza Tower, Kuala Lumpur in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Kwai Chai Hong, Kuala Lumpur in May 2020 01.jpg",
        "count": 0
      },
      {
        "title": "File:Chinatown, Kuala Lumpur in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Sultan Abdul Samad Building in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Kwai Chai Hong, Kuala Lumpur in May 2020 02.jpg",
        "count": 0
      },
      {
        "title": "File:Kwai Chai Hong, Kuala Lumpur in May 2020 03.jpg",
        "count": 0
      },
      {
        "title": "File:Kwai Chai Hong, Kuala Lumpur in May 2020 04.jpg",
        "count": 0
      },
      {
        "title": "File:Kwai Chai Hong, Kuala Lumpur in May 2020 05.jpg",
        "count": 0
      },
      {
        "title": "File:Kwai Chai Hong, Kuala Lumpur in May 2020 06.jpg",
        "count": 0
      },
      {
        "title": "File:Construction halted for PNB 118 during MCO in May 2020 01.jpg",
        "count": 0
      },
      {
        "title": "File:Construction halted for PNB 118 during MCO in May 2020 02.jpg",
        "count": 0
      },
      {
        "title": "File:Construction halted for PNB 118 during MCO in May 2020 03.jpg",
        "count": 0
      },
      {
        "title": "File:Construction halted for PNB 118 during MCO in May 2020 04.jpg",
        "count": 0
      },
      {
        "title": "File:Bukit Bintang City Centre (BBCC) in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Exchange 106, Kuala Lumpur in May 2020 02.jpg",
        "count": 0
      },
      {
        "title": "File:Menara Prudential, TRX in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Alor Street Art in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Toilets during Covid-19 pandemic in Kuala Lumpur.jpg",
        "count": 0
      },
      {
        "title": "File:Plaza Arkadia, Kuala Lumpur in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Sunset over Kuala Lumpur in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Kuala Lumpur Bird Park in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Mousedeer Garden, Kuala Lumpur in May 2020 01.jpg",
        "count": 0
      },
      {
        "title": "File:Mousedeer Garden, Kuala Lumpur in May 2020 02.jpg",
        "count": 0
      },
      {
        "title": "File:Sunken Garde, Perdana Botanical Gardens in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Mousedeer Garden, Kuala Lumpur in May 2020 03.jpg",
        "count": 0
      },
      {
        "title": "File:Covid-19 contact tracing form at Publika Kuala Lumpur.png",
        "count": 0
      },
      {
        "title": "File:Exchange 106, Kuala Lumpur in May 2020 01.jpg",
        "count": 0
      },
      {
        "title": "File:Tung Shin Hospital during Covid-19 in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Masjid Jamek in May 2020 01.jpg",
        "count": 0
      },
      {
        "title": "File:Kwai Chai Hong in May 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Perdana Botanical Garden in May 2020 01.jpg",
        "count": 0
      },
      {
        "title": "File:Masjid Jamek in May 2020 02.jpg",
        "count": 0
      },
      {
        "title": "File:Lake Gardens, Kuala Lumpur 03 (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Perdana Botanical Garden in May 2020 01 (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Ferrari 812 GTS in Kuala Lumpur, Malaysia.jpg",
        "count": 0
      },
      {
        "title": "File:Buenos Aires - Monserrat - Avenida 9 de Julio.jpg",
        "count": 50
      },
      {
        "title": "File:YapAhLoyTemple002.jpg",
        "count": 0
      },
      {
        "title": "File:Friedrichshafen - Blick aus Bibliothek auf Hafen 2019 01.jpg",
        "count": 0
      },
      {
        "title": "File:Friedrichshafen - Blick aus Bibliothek auf Hafen 2019 02.jpg",
        "count": 0
      },
      {
        "title": "File:Hotel Llao Llao, Bariloche.jpg",
        "count": 7
      },
      {
        "title": "File:Tanjung Rhu Beach.jpg",
        "count": 1
      },
      {
        "title": "File:Langkawi Go Kart.jpg",
        "count": 1
      },
      {
        "title": "File:Dresden-Altstadt von der Marienbruecke-II (cropped).jpg",
        "count": 3
      },
      {
        "title": "File:Scuol 09 (cropped for Wikivoyage).jpg",
        "count": 3
      },
      {
        "title": "File:10 Corso Como, Milan.jpg",
        "count": 4
      },
      {
        "title": "File:Lukullum Friedrichshafen.jpeg",
        "count": 1
      },
      {
        "title": "File:Light Show at Marina Bay Sands (25135398942).jpg",
        "count": 1
      },
      {
        "title": "File:Official Venue, Bangsar Shopping Centre -BSCBFW17 (34420162616).jpg",
        "count": 1
      },
      {
        "title": "File:Sunset in the Old Town - Bucharest, Romania - Travel photography (35031271856).jpg",
        "count": 4
      },
      {
        "title": "File:Cambodian landmine museum (7288073000).jpg",
        "count": 4
      },
      {
        "title": "File:Panorama morro da conceição (cropped for Wikivoyage).jpg",
        "count": 1
      },
      {
        "title": "File:Vista de Boa Viagem, Recife, PE - panoramio (cropped for Wikivoyage).jpg",
        "count": 1
      },
      {
        "title": "File:Calçadão e ciclovia da Praia de Boa Viagem - Recife, Pernambuco, Brasil (cropped for WV).jpg",
        "count": 1
      },
      {
        "title": "File:The Stadthuys of Malacca (29727587020).jpg",
        "count": 0
      },
      {
        "title": "File:The Stadthuys of Malacca (Wikivoyage Banner).jpg",
        "count": 2
      },
      {
        "title": "File:Christ Church Front View (Wikivoyage banner).jpg",
        "count": 1
      },
      {
        "title": "File:Panorama of the Historical City of Malacca, Malaysia (WV Banner).jpeg",
        "count": 1
      },
      {
        "title": "File:Malacca Malaysia Colourful-bicycles-02 (WV Banner).jpg",
        "count": 1
      },
      {
        "title": "File:Meersburg Altstadt.jpg",
        "count": 1
      },
      {
        "title": "File:Fähre Meersburg-Konstanz 2014-05 img11 (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:G-MAX Reverse Bungy in Singapore.jpg",
        "count": 1
      },
      {
        "title": "File:Lumbini garden cable car, Hpa-An, Myanmar - Mapillary (bd86C1XCgdog9aNy9TPWAg).jpg",
        "count": 0
      },
      {
        "title": "File:Hilton Kuala Lumpur - Pool.jpg",
        "count": 0
      },
      {
        "title": "File:The Exchange 106 in November 2017.jpg",
        "count": 4
      },
      {
        "title": "File:Tun Razak Exchange MRT station Kuala Lumpur.jpg",
        "count": 0
      },
      {
        "title": "File:Bukit Jalil swimming pool at night.jpg",
        "count": 0
      },
      {
        "title": "File:Platinum Sentral 1.jpg",
        "count": 0
      },
      {
        "title": "File:Platinum Sentral 2.jpg",
        "count": 0
      },
      {
        "title": "File:Granola wafle.jpg",
        "count": 0
      },
      {
        "title": "File:KL Sentral seen from Aloft top floor 1.jpg",
        "count": 0
      },
      {
        "title": "File:KL Sentral seen from Aloft top floor 2.jpg",
        "count": 1
      },
      {
        "title": "File:KL Sentral seen from Aloft top floor 3.jpg",
        "count": 0
      },
      {
        "title": "File:Alexis Bistro",
        "count": 0
      },
      {
        "title": "File:La marina de Puerto Banús, cerca de Marbella - Provincia de Málaga, España. - panoramio (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Fristaden Christiania graffiti (17181492918).jpg",
        "count": 0
      },
      {
        "title": "File:Fristaden Christiania graffiti (17181492918) (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Manu Chao La Ventura - 2013, Budapest Park (4).JPG",
        "count": 0
      },
      {
        "title": "File:BAPS Akshardham New Delhi (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Camping under the stars in Hatta (cropped).jpg",
        "count": 3
      },
      {
        "title": "File:Kandahar-Helmand Bridge in January 2011 (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Dhaka - street new market (WV Banner).jpg",
        "count": 3
      },
      {
        "title": "File:Kuala Besut Jetty Terengganu Malaysia - panoramio (4) (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Memorial monument at Padang Merdeka (Padang Kelupang - Padang Bank), Kota Bharu, Kelantan - panoramio (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Imperial Palace East Garden.jpg",
        "count": 4
      },
      {
        "title": "File:Yuzhong, Chongqing, China (20256770832).jpg",
        "count": 0
      },
      {
        "title": "File:Saturday in Ginza.jpg",
        "count": 0
      },
      {
        "title": "File:Lörrach Bahnhof (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:20130915-Beijing-Yonghegong Lama Temple-Yongfuge 2 (cropped).JPG",
        "count": 2
      },
      {
        "title": "File:Luli Island, Honda Bay, Palawan, Philippines.jpg",
        "count": 0
      },
      {
        "title": "File:Jeti Nelayan, Teluk Pelanduk, Port Dickson, Malaysia (Wikivoyage banner).jpg",
        "count": 3
      },
      {
        "title": "File:Blue Lagoon, Port Dickson, Malaysia.jpeg",
        "count": 1
      },
      {
        "title": "File:Ilha Grande Brazil RJ (cropped).jpg",
        "count": 6
      },
      {
        "title": "File:Cmglee Penang airport and second bridge (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Singapore Zoo entrance-15Feb2010 (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Ara ararauna -Jurong Bird Park -sign-8a (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:KLIA C-Pier (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:KLIA Cover (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Kuala Perlis (cropped).jpg",
        "count": 5
      },
      {
        "title": "File:South beach Tower from Nicoll highway (32726568692).jpg",
        "count": 0
      },
      {
        "title": "File:Tourist Information Friedrichshafen.jpg",
        "count": 0
      },
      {
        "title": "File:Tourist Information Prague.jpg",
        "count": 0
      },
      {
        "title": "File:Wild Wild Wet Theme Park, Singapore.jpg",
        "count": 0
      },
      {
        "title": "File:NeufBrisach-002 (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Malargüe, Wikivoyage banner.jpg",
        "count": 0
      },
      {
        "title": "File:Malaysia - 012 - KL - Yummy street food stalls are the way to eat in KL (3510528054) (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Baden (CH) banner Old town.jpg",
        "count": 2
      },
      {
        "title": "File:Flughafen Zürich - Night - 01 (cropped).jpg",
        "count": 3
      },
      {
        "title": "File:New-Airport-Istanbul (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Bergstrasse zw hp und bensheim 04 2009 wp wv ds (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Follet House Hotel Historic Structure Ypsilanti Michigan (cropped).JPG",
        "count": 3
      },
      {
        "title": "File:Dharma Realm Guan Yin Sagely Monastery Canteen, Kuala Lumpur.jpg",
        "count": 1
      },
      {
        "title": "File:View from Vipod Residences, Kuala Lumpur 1.jpg",
        "count": 0
      },
      {
        "title": "File:View from Vipod Residences, Kuala Lumpur 2.jpg",
        "count": 0
      },
      {
        "title": "File:View from Vipod Residences, Kuala Lumpur 3.jpg",
        "count": 0
      },
      {
        "title": "File:View from Vipod Residences, Kuala Lumpur 4.jpg",
        "count": 0
      },
      {
        "title": "File:View from Vipod Residences, Kuala Lumpur 6.jpg",
        "count": 0
      },
      {
        "title": "File:View from Vipod Residences, Kuala Lumpur 5.jpg",
        "count": 0
      },
      {
        "title": "File:View from Vipod Residences, Kuala Lumpur 7.jpg",
        "count": 0
      },
      {
        "title": "File:View from Vipod Residences, Kuala Lumpur 8.jpg",
        "count": 0
      },
      {
        "title": "File:View from Vipod Residences, Kuala Lumpur 10.jpg",
        "count": 0
      },
      {
        "title": "File:View from Vipod Residences, Kuala Lumpur 9.jpg",
        "count": 0
      },
      {
        "title": "File:View from Vipod Residences, Kuala Lumpur 11.jpg",
        "count": 0
      },
      {
        "title": "File:PNB 118, Kuala Lumpur.jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835354888).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835359588).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835363628).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659534092).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659537812).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659541282).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659544482).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796392085).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796386745).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796394735).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796399595).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796401185).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796397135).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796402605).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796404415).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712660801).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835402778).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835405238).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712665371).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712667201).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712669371).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (32769247957).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712671631).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (32769249617).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796418665).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796420305).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796424825).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796422545).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796427285).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712699771).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712702511).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712704081).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (32769293047).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712706811).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (32769294657).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (32769296457).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40746217013).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796460605).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796462495).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40746222793).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796464175).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712728501).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835475058).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712729951).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712731371).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (32769309507).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796473595).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659643192).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835481678).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659644422).jpg",
        "count": 0
      },
      {
        "title": "File:Bad Reichenhall Fussgaengerzone.jpg",
        "count": 1
      },
      {
        "title": "File:Panorama Milan (Wikivoyage).jpg",
        "count": 1
      },
      {
        "title": "File:Galleria Vittorio Emanuele Ii In Milan Italy (180289449) (cropped).jpeg",
        "count": 1
      },
      {
        "title": "File:Galleria Vittorio Emanuele Ii In Milan Italy (180289449) (cropped1).jpeg",
        "count": 2
      },
      {
        "title": "File:Sandakan Sabah ViewFromHarbourMall (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Lankayan Island - Wikivoyage Banner.jpeg",
        "count": 3
      },
      {
        "title": "File:Selingan Island Borneo.jpg",
        "count": 0
      },
      {
        "title": "File:Selingan Island Borneo Overview.jpg",
        "count": 0
      },
      {
        "title": "File:Selingan Island Borneo (Wikivoyage Banner).jpg",
        "count": 0
      },
      {
        "title": "File:Pom Pom Island - Wikivoyage Banner.jpg",
        "count": 0
      },
      {
        "title": "File:Starfish in lagoon on Pom Pom Island, Celebes resort, Sabah (cropped).JPG",
        "count": 0
      },
      {
        "title": "File:Pulau Kapalai - Borneo.jpg",
        "count": 0
      },
      {
        "title": "File:Mabul Island - Borneo.jpg",
        "count": 4
      },
      {
        "title": "File:Mabul Island - Borneo (8478736842).jpg",
        "count": 0
      },
      {
        "title": "File:Mabul Island - Borneo (8478737066).jpg",
        "count": 0
      },
      {
        "title": "File:Mataking Island.jpg",
        "count": 3
      },
      {
        "title": "File:Mataking Island (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Kapalai 1.jpg",
        "count": 0
      },
      {
        "title": "File:Kapalai 3.jpg",
        "count": 1
      },
      {
        "title": "File:Kapalai 2.jpg",
        "count": 0
      },
      {
        "title": "File:Kapalai 3 (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Caranx sexfasciatus (cropped).JPG",
        "count": 1
      },
      {
        "title": "File:Mabul Island - Borneo (8478736842) (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Swallow Reef3 (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Caves of Mulu (32172276551).jpg",
        "count": 1
      },
      {
        "title": "File:Sandakan Sabah Sepilok-Orangutan-Rehabilitation-Centre-00 (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Bagan Pasir @ Kuala Selangor (5975221780) (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Us-ca-sanfran-frombay.jpg",
        "count": 0
      },
      {
        "title": "File:Dubrovnik as seen from Srđ - September 2017 (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Dubrovnik D81 4076 (37941725314).jpg",
        "count": 0
      },
      {
        "title": "File:Dubrovnik D81 4076 (37941725314) (cropped).jpg",
        "count": 11
      },
      {
        "title": "File:Andreas M. Antonopoulos at Bitcoin Meetup Switzerland 2019-06-23 1.jpg",
        "count": 0
      },
      {
        "title": "File:Andreas M. Antonopoulos at Bitcoin Meetup Switzerland 2019-06-23 2.jpg",
        "count": 0
      },
      {
        "title": "File:Lumbini Garden, Hpa-An.jpeg",
        "count": 0
      },
      {
        "title": "File:Lumbini Garden, Hpa-An (cropped).jpeg",
        "count": 1
      },
      {
        "title": "File:Yacht Club de Monaco (48730185438).jpg",
        "count": 0
      },
      {
        "title": "File:Lamborghini Aventador SVJ (48271230426).jpg",
        "count": 0
      },
      {
        "title": "File:International departure podium of ZBAD (20190823145642) (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Ironman-germany-2010-sandra-wallenhorst-079.jpg",
        "count": 5
      },
      {
        "title": "File:Löwenbrunnen Baden 1.jpg",
        "count": 0
      },
      {
        "title": "File:Capanna Tamaro 1.jpg",
        "count": 3
      },
      {
        "title": "File:Strandbad Friedrichshafen 01.jpg",
        "count": 0
      },
      {
        "title": "File:Strandbad Friedrichshafen 02.jpg",
        "count": 0
      },
      {
        "title": "File:Tawau - The City (48869140708).jpg",
        "count": 0
      },
      {
        "title": "File:Tawau - The City (48869140708) (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Downtown Kuala Lumpur at Night (49125936143).jpg",
        "count": 6
      },
      {
        "title": "File:Downtown Kuala Lumpur at Night (49125936143) (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Dornier Do-31 E1 (47659347462).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Do-31 E1 (47712460731).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796206845).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796487515).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796491655).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796496235).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40746244883).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712747441).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712751881).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (40746471023).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47659668232).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835726998).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (33835728638).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796739415).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796741615).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712981801).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796746575).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712984791).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (47712986541).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796749685).jpg",
        "count": 0
      },
      {
        "title": "File:Dornier Museum Friedrichshafen (46796751515).jpg",
        "count": 0
      },
      {
        "title": "File:Kuala Lumpur (46414916055).jpg",
        "count": 0
      },
      {
        "title": "File:Bitcoin's Lightning Network Visualization.png",
        "count": 1
      },
      {
        "title": "File:PNB118 from Menara KL.jpg",
        "count": 2
      },
      {
        "title": "File:The Twins SE Asia 2019 (49171985716).jpg",
        "count": 0
      },
      {
        "title": "File:The Twins SE Asia 2019 (49171985716) (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:OSM tool Latest-Changes.png",
        "count": 0
      },
      {
        "title": "File:İstanbul Yeni Havalimanı airport Dec 2019 (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Goldin Finance 117 under construction (20180210142905) (cropped).jpg",
        "count": 5
      },
      {
        "title": "File:The Tower at Dubai Creek Harbour1 (cropped).jpg",
        "count": 4
      },
      {
        "title": "File:PNB118 in January 2020.jpg",
        "count": 3
      },
      {
        "title": "File:PNB118 2020-02-01.jpg",
        "count": 0
      },
      {
        "title": "File:Lakeville Residences - Towers A and B.jpg",
        "count": 1
      },
      {
        "title": "File:Muzium Orang Asli, Gombak, Malaysia 01.jpg",
        "count": 0
      },
      {
        "title": "File:Muzium Orang Asli, Gombak, Malaysia 02.jpg",
        "count": 4
      },
      {
        "title": "File:The Tallest Block (29839279175).jpg",
        "count": 11
      },
      {
        "title": "File:Lakeville Residence, Kuala Lumpur, Malaysia.jpg",
        "count": 0
      },
      {
        "title": "File:MRT SSP - Kampung Batu station.jpg",
        "count": 0
      },
      {
        "title": "File:Muzium Etnologi Dunia Melayu.jpg",
        "count": 3
      },
      {
        "title": "File:Muzium Seni Kraf Orang Asli.jpg",
        "count": 1
      },
      {
        "title": "File:Batu Caves, Kuala Lumpur (49507991118).jpg",
        "count": 0
      },
      {
        "title": "File:Batu Caves, Kuala Lumpur (49508742752).jpg",
        "count": 0
      },
      {
        "title": "File:Batu Caves, Kuala Lumpur (49508535756).jpg",
        "count": 0
      },
      {
        "title": "File:Saloma Link Bridge 01.jpg",
        "count": 2
      },
      {
        "title": "File:Saloma Link Bridge 02.jpg",
        "count": 0
      },
      {
        "title": "File:Saloma Link Bridge 03.jpg",
        "count": 0
      },
      {
        "title": "File:Saloma Link Bridge 04.jpg",
        "count": 1
      },
      {
        "title": "File:Lake Gardens, Kuala Lumpur 01.jpg",
        "count": 0
      },
      {
        "title": "File:Lake Gardens, Kuala Lumpur 02.jpg",
        "count": 0
      },
      {
        "title": "File:Lake Gardens, Kuala Lumpur 03.jpg",
        "count": 2
      },
      {
        "title": "File:Saloma link and KL cityscape (49525938062).jpg",
        "count": 3
      },
      {
        "title": "File:Saloma link at night.jpg",
        "count": 7
      },
      {
        "title": "File:Saloma Link - 2020-02-21.jpg",
        "count": 0
      },
      {
        "title": "File:Long lines at B.I.G. supermarket in Publika Kuala Lumpur during Corona virus lockdown 01.jpg",
        "count": 0
      },
      {
        "title": "File:B.I.G. supermarket in Publika Kuala Lumpur during Corona virus lockdown 01.jpg",
        "count": 0
      },
      {
        "title": "File:Petronas Philharmonic Hall in February 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Publika shopping center Kuala Lumpur during lock down in March 2020.jpg",
        "count": 1
      },
      {
        "title": "File:B.I.G. supermarket in Publika Kuala Lumpur during Corona virus lockdown 02.jpg",
        "count": 0
      },
      {
        "title": "File:All masks sold out in Taman Wahyu, Kuala Lumpur - still.jpg",
        "count": 0
      },
      {
        "title": "File:Ferrari Roma in Basel.png",
        "count": 14
      },
      {
        "title": "File:Uferpromenade Friedrichshafen während COVID-19 Pandemie.jpg",
        "count": 0
      },
      {
        "title": "File:Information in Tesco market in Kuala Lumpur during Corona pandemic.jpg",
        "count": 0
      },
      {
        "title": "File:No business for mamak stall in Taman Wahyu, Kuala Lumpur during lockdown due to Corona virus 02.jpg",
        "count": 0
      },
      {
        "title": "File:No business for mamak stall in Taman Wahyu, Kuala Lumpur during lockdown due to Corona virus 01.jpg",
        "count": 0
      },
      {
        "title": "File:Line up in front of BIG, Publika shopping center Kuala Lumpur during lock down in March 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Temperature of workers added to Grab food delivery during Corona virus pandemic in Kuala Lumpur, Malaysia.jpg",
        "count": 0
      },
      {
        "title": "File:Mercato Supermarket in Pavilion Kuala Lumpur Pavilion during Corona virus lockdown 01.jpg",
        "count": 0
      },
      {
        "title": "File:Mercato Supermarket in Pavilion Kuala Lumpur Pavilion during Corona virus lockdown 02.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 8.jpg",
        "count": 0
      },
      {
        "title": "File:Saloma Link Bridge at dusk.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Ampang, Kuala Lumpur during Corona virus lockdown 01.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Raja Chulan, Kuala Lumpur during Corona virus lockdown 01.jpg",
        "count": 0
      },
      {
        "title": "File:Taman Duta, Kuala Lumpur in 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 9.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Raja Chulan, Kuala Lumpur during Corona virus lockdown 02.jpg",
        "count": 0
      },
      {
        "title": "File:Line up in front of BIG, Publika shopping center Kuala Lumpur during lock down in April 2020 01.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Sultan Salahuddin, Kuala Lumpur during lock down in April 2020.jpg",
        "count": 0
      },
      {
        "title": "File:River of Life, Kuala Lumpur during lock down in April 2020.jpg",
        "count": 1
      },
      {
        "title": "File:Tesco market in Taman Wahyu, Kuala Lumpur during Corona pandemic in April 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Line up in front of BIG, Publika shopping center Kuala Lumpur during lock down in April 2020 02.jpg",
        "count": 0
      },
      {
        "title": "File:Kiara 163 shopping center Kuala Lumpur during lock down in April 2020.jpg",
        "count": 1
      },
      {
        "title": "File:Line up in front of Jaya Grocer, Kiara 163 shopping center Kuala Lumpur during lock down in April 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Malaysia International Trade and Exhibition Centre in April 2020 01.jpg",
        "count": 2
      },
      {
        "title": "File:Malaysia International Trade and Exhibition Centre in April 2020 02.jpg",
        "count": 0
      },
      {
        "title": "File:Malaysia International Trade and Exhibition Centre in April 2020 03.jpg",
        "count": 0
      },
      {
        "title": "File:Malaysia International Trade and Exhibition Centre in April 2020 04.jpg",
        "count": 0
      },
      {
        "title": "File:MATRADE Exhibition and Convention Centre and Arte Mont Kiara in April 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Malaysia International Trade and Exhibition Centre in April 2020 05.jpg",
        "count": 0
      },
      {
        "title": "File:MATRADE Exhibition and Convention Centre and Menara MITI in April 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Ilham Tower, Kuala Lumpur in April 2020.jpg",
        "count": 3
      },
      {
        "title": "File:Kuala Lumpur City Centrer during MCO in April 2020 01.jpg",
        "count": 0
      },
      {
        "title": "File:Menara Felda, Kuala Lumpur in April 2020.jpg",
        "count": 0
      },
      {
        "title": "File:Kuala Lumpur City Centrer during MCO in April 2020 02.jpg",
        "count": 0
      },
      {
        "title": "File:Mercato Supermarket in Pavilion Kuala Lumpur Pavilion during Corona virus lockdown 03.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 10.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 11.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 12.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 13.jpg",
        "count": 0
      },
      {
        "title": "File:KLCC District Cooling, Kuala Lumpur in April 2020.jpg",
        "count": 0
      },
      {
        "title": "File:AS-SYAKIRIN MOSQUE,KLCC (9086267358).jpg",
        "count": 0
      },
      {
        "title": "File:As-Syakirin Mosque, KLCC in 2013 (9317952182).jpg",
        "count": 0
      },
      {
        "title": "File:As-Syakirin Mosque, KLCC in 2013 (9086365280).jpg",
        "count": 0
      },
      {
        "title": "File:As-Syakirin Mosque, KLCC in 2013 (11870401654).jpg",
        "count": 0
      },
      {
        "title": "File:Elite Pavillion, Kuala Lumpur.jpg",
        "count": 2
      },
      {
        "title": "File:Four Seasons Place as seen from Vipod Residences.jpg",
        "count": 2
      },
      {
        "title": "File:Sentral Residences and Saint Regis as seen from Aloft, Kuala Lumpur, Malaysia.jpeg",
        "count": 0
      },
      {
        "title": "File:Bukit Kiara Mountainbiking.png",
        "count": 1
      },
      {
        "title": "File:Fairmont Kuala Lumpur Towers - Construction site in January 2019.jpg",
        "count": 5
      },
      {
        "title": "File:Felda Tower - Kuala Lumpur.jpg",
        "count": 5
      },
      {
        "title": "File:Cityscape Frankfurt 2010 panorama for Wikivoyage.jpg",
        "count": 1
      },
      {
        "title": "File:Frankfurt am Main (26087822357).jpg",
        "count": 0
      },
      {
        "title": "File:Frankfurt am Main - Wikivoyage banner.jpg",
        "count": 1
      },
      {
        "title": "File:Frankfurt Skyline (27338891469).jpg",
        "count": 0
      },
      {
        "title": "File:Frankfurt Skyline for Wikivoyage.jpg",
        "count": 1
      },
      {
        "title": "File:Q Sentral seen from Aloft top floor.jpg",
        "count": 2
      },
      {
        "title": "File:Villa La Vigie - Monaco.jpg",
        "count": 0
      },
      {
        "title": "File:Saddan Cave.jpg",
        "count": 1
      },
      {
        "title": "File:Saddan Cave North Exit.jpeg",
        "count": 0
      },
      {
        "title": "File:Lumbini Garden Hpa An.jpg",
        "count": 1
      },
      {
        "title": "File:Hpa An - Kyauk Ka Lat Pagoda (24043102209).jpg",
        "count": 1
      },
      {
        "title": "File:Bagan Myanmar 24912385475).jpg",
        "count": 0
      },
      {
        "title": "File:Bagan Myanmar 24284239864.jpg",
        "count": 0
      },
      {
        "title": "File:Bagan Myanmar 24288460803.jpg",
        "count": 0
      },
      {
        "title": "File:Bagan Myanmar 24288504713.jpg",
        "count": 0
      },
      {
        "title": "File:Bagan Myanmar 24912385475 (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Whitfield Crane Strasbourg 2016.png",
        "count": 0
      },
      {
        "title": "File:20170802 Wacken Wacken Open Air Ugly Kid Joe 0026 (cropped).jpg",
        "count": 7
      },
      {
        "title": "File:Baden - Kurpark.jpg",
        "count": 0
      },
      {
        "title": "File:Baden Geissberg-Chänzeli.jpg",
        "count": 1
      },
      {
        "title": "File:Changi Airport - Terminal 4 1.jpg",
        "count": 0
      },
      {
        "title": "File:Changi Airport - Terminal 4 2.jpg",
        "count": 2
      },
      {
        "title": "File:Changi Airport - Terminal 4 3.jpg",
        "count": 0
      },
      {
        "title": "File:Istanbul Airport ISL Entrance ground fllor (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Changi Airport - Terminal 4 - Departure 2.jpg",
        "count": 0
      },
      {
        "title": "File:Changi Airport - Terminal 4 - Departure.jpg",
        "count": 0
      },
      {
        "title": "File:Changi Airport - Terminal 4 - Departure 1.jpg",
        "count": 1
      },
      {
        "title": "File:Changi Airport - Terminal 4 - Departure 3.jpg",
        "count": 0
      },
      {
        "title": "File:Changi Airport - Terminal 4 - Departure 4.jpg",
        "count": 2
      },
      {
        "title": "File:Friedrichshafen - Geschäfte im Bereich der Markthalle.jpg",
        "count": 0
      },
      {
        "title": "File:Friedrichshafen - K42.jpg",
        "count": 0
      },
      {
        "title": "File:Friedrichshafen - Markthalle.jpg",
        "count": 0
      },
      {
        "title": "File:ViaSpluga01 (cropped).JPG",
        "count": 0
      },
      {
        "title": "File:Nose-hill-view (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Calgary Updates.png",
        "count": 1
      },
      {
        "title": "File:Mainstreet-Heritage park (cropped).jpg",
        "count": 2
      },
      {
        "title": "File:Le Portier location - Monaco.png",
        "count": 3
      },
      {
        "title": "File:The Santiago Bernabeu Stadium - U-g-g-B-o-y (cropped).jpg",
        "count": 0
      },
      {
        "title": "File:Sobrino de Botín Restaurant.jpg",
        "count": 0
      },
      {
        "title": "File:Monumento a Alfonso XII de España from the back.jpg",
        "count": 0
      },
      {
        "title": "File:Palacio de Cristal, Madrid 2019 1.jpg",
        "count": 0
      },
      {
        "title": "File:Palacio de Cristal, Madrid 2019 2.jpg",
        "count": 0
      },
      {
        "title": "File:Le Portier construction 05 2019.jpg",
        "count": 3
      },
      {
        "title": "File:Internetdagarna 2017 (38513379582) (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Saloma Link - 2020-02-21 1.jpg",
        "count": 0
      },
      {
        "title": "File:Saloma Link - 2020-02-21 2.jpg",
        "count": 0
      },
      {
        "title": "File:Saloma Link - 2020-02-21 3.jpg",
        "count": 0
      },
      {
        "title": "File:Saloma Link - 2020-02-21 5.jpg",
        "count": 2
      },
      {
        "title": "File:Saloma Link - 2020-02-21 4.jpg",
        "count": 0
      },
      {
        "title": "File:Saloma Link - 2020-02-21 6.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Ampang Muslim Cemetery.jpg",
        "count": 3
      },
      {
        "title": "File:PNB 118 in 02 2020 1.jpg",
        "count": 10
      },
      {
        "title": "File:PNB 118 in 02 2020 2.jpg",
        "count": 1
      },
      {
        "title": "File:Sunrise Reflection at Tasik Titiwangsa, Malaysia (16596945335).jpg",
        "count": 0
      },
      {
        "title": "File:Sunrise Reflection at Tasik Titiwangsa, Malaysia (16596945335) (cropped).jpg",
        "count": 1
      },
      {
        "title": "File:Kuala Lumpur from titiwangsa lake (27318030261).jpg",
        "count": 0
      },
      {
        "title": "File:All masks sold out in Taman Wahyu, Kuala Lumpur.jpg",
        "count": 3
      },
      {
        "title": "File:Saloma walk-up (49570216867).jpg",
        "count": 1
      },
      {
        "title": "File:Saloma at Sunset (49570270217).jpg",
        "count": 3
      },
      {
        "title": "File:Saloma Bridge (49574882332).jpg",
        "count": 0
      },
      {
        "title": "File:Masjid Jamek (49508821547).jpg",
        "count": 0
      },
      {
        "title": "File:Masjid Jamek (49472814021).jpg",
        "count": 0
      },
      {
        "title": "File:Casino de Monte-Carlo (49582351802).jpg",
        "count": 1
      },
      {
        "title": "File:Monte-Carlo - Casino Bar (49582110096).jpg",
        "count": 0
      },
      {
        "title": "File:Monaco Fontvieille (48928513252).jpg",
        "count": 3
      },
      {
        "title": "File:Monaco - Fontvieille (48930251626).jpg",
        "count": 0
      },
      {
        "title": "File:Prince's Palace of Monaco (48929402623).jpg",
        "count": 0
      },
      {
        "title": "File:Monte Carlo Casino, Monaco - interior- (2) (32774947955).jpg",
        "count": 1
      },
      {
        "title": "File:2011-Monaco-MonteCarlo-0029 (36800254041).jpg",
        "count": 0
      },
      {
        "title": "File:Saloma Link at night - 2020-02.jpg",
        "count": 0
      },
      {
        "title": "File:Only delivery or take-away in Malaysian eateries.jpg",
        "count": 1
      },
      {
        "title": "File:MRT2 construction during Corona virus lockdown 2.jpg",
        "count": 0
      },
      {
        "title": "File:Kampung Batu MRT station under construction.jpg",
        "count": 0
      },
      {
        "title": "File:MRT2 construction during Corona virus lockdown 1.jpg",
        "count": 0
      },
      {
        "title": "File:Saloma link closed during lockdown.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Ampang during Corona virus lockdown.jpg",
        "count": 0
      },
      {
        "title": "File:KLCC during Corona virus lockdown 1.jpg",
        "count": 0
      },
      {
        "title": "File:KLCC during Corona virus lockdown 2.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 1.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 2.jpg",
        "count": 4
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 3.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 4.jpg",
        "count": 0
      },
      {
        "title": "File:Mercato Supermarket in Pavilion Kuala Lumpur Pavilion during Corona virus lockdown.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 5.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 6.jpg",
        "count": 0
      },
      {
        "title": "File:Pavilion Kuala Lumpur during Corona virus lockdown 7.jpg",
        "count": 0
      },
      {
        "title": "File:Bukit Bintang in Kuala Lumpur during Corona virus lockdown.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Bukit Bintang in Kuala Lumpur during Corona virus lockdown 1.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Bukit Bintang in Kuala Lumpur during Corona virus lockdown 2.jpg",
        "count": 0
      },
      {
        "title": "File:Changkat Bukit Bintang in Kuala Lumpur during Corona virus lockdown.jpg",
        "count": 0
      },
      {
        "title": "File:Jalan Alor in Kuala Lumpur during Corona virus lockdown.jpg",
        "count": 0
      },
      {
        "title": "File:Petaling Street in Kuala Lumpur during Corona virus lockdown.jpg",
        "count": 0
      },
      {
        "title": "File:Kasturi Walk in Kuala Lumpur during Corona virus lockdown.jpg",
        "count": 0
      },
      {
        "title": "File:Long lines at B.I.G. supermarket in Publika Kuala Lumpur during Corona virus lockdown 02.jpg",
        "count": 0
      }
    ];
    this.pubsub.publish('PicsDownload', examplePicArr, userName);
  }
}